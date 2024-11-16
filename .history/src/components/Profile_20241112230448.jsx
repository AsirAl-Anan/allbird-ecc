import React, { useState, useContext } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { Eye, EyeOff } from 'lucide-react';

const Profile = () => {
  const { user, updateUserEmail } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    name: user?.displayName || 'No user name found',
    email: user?.email || 'No email found',
    currentPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    
    // Reset form data and message when canceling edit
    if (isEditing) {
      setFormData({
        name: user?.displayName || 'No user name found',
        email: user?.email || 'No email found',
        currentPassword: '',
      });
      setMessage({ text: '', type: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) return;

    setIsUpdating(true);
    setMessage({ text: '', type: '' });

    try {
      // Validate email
      if (!formData.email) {
        throw new Error('Email is required');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Only attempt to update if email has changed
      if (formData.email !== user.email) {
        // Check if password is required and provided
        if (user.providerData[0]?.providerId === 'password' && !formData.currentPassword) {
          throw new Error('Current password is required to update email');
        }

        await updateUserEmail(
          formData.email,
          user.providerData[0]?.providerId === 'password' ? formData.currentPassword : null
        );
        
        setMessage({
          text: 'Email update initiated. Please check your inbox for verification.',
          type: 'success'
        });
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({
        text: error.message || 'Failed to update profile',
        type: 'error'
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Update account information
          </p>

          {message.text && (
            <div className={`mb-4 p-3 rounded ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.name}
                onChange={handleInputChange}
                disabled
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && user?.providerData[0]?.providerId === 'password' && (
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="currentPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPass ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={handleEditProfile}
              className="w-full text-right text-sm text-gray-500 hover:text-gray-700 flex justify-end items-center"
            >
              {isEditing ? 'Cancel Edit' : 'Edit'}
            </button>

            <button
              type="submit"
              disabled={!isEditing || isUpdating}
              className={`w-full py-2 rounded transition-colors ${
                !isEditing || isUpdating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              } text-white`}
            >
              {isUpdating ? 'Updating...' : 'Update Account'}
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            By updating your account, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;