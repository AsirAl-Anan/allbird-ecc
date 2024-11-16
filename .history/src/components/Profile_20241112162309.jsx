import React, { useState, useContext, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { NavLink } from 'react-router-dom';
import { SquarePen, PenOff, Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Profile = () => {
  const { user, updateUserEmail } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || 'No user name found',
    email: user?.email || 'No email found',
    currentPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) return;

    setIsUpdating(true);
    try {
      // Only attempt to update if email has changed
      if (formData.email !== user.email) {
        await updateUserEmail(
          formData.email,
          user.providerData[0]?.providerId === 'password' ? formData.currentPassword : null
        );
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
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
                disabled={!isEditing}
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
                <div className="flex items-center">
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="currentPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 transform translate-y-1"
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={handleEditProfile}
              className="w-full text-right flex justify-end items-center hover:text-gray-700"
            >
              <span className="flex flex-row-reverse">
                {isEditing ? (
                  <>
                    <PenOff />
                    <span className="mx-1">Stop Editing</span>
                  </>
                ) : (
                  <>
                    <SquarePen />
                    <span className="mx-1">Edit</span>
                  </>
                )}
              </span>
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

export default Profile;<q></q>