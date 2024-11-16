import React, { useContext, useState, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth/web-extension';
import { reauthenticateWithCredential } from 'firebase/auth';

const Profile = () => {
  
  const {user, auth} = useContext(AuthContext)
  console.log(user)
  const [showPass, setShowPass] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    currentPassword: '',
  });
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [message, setMessage] = useState('');

 
  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    
    // Reset form data when canceling edit
    if (isEditing) {
      setFormData({
        name: user.displayName,
        email: user.email,
        currentPassword: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    if(!auth.currentUser)
    {
      setMessage('No user signed in');
      return
    }
    try {
      const providerId = auth.currentUser.providerData[0].providerId;

      if(providerId === 'password'){
        //Reauthenticate using password for email & password users

        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser , credential);
      } else if (providerId === 'google.com') {
        // Reauthenticate using Google for Google users
        const provider = new GoogleAuthProvider();
        await reauthenticateWithCredential(auth.currentUser, provider)
      } 


      // Proceed to update the email after re-authentication
      await updateEmail(auth.currentUser, newEmail);
      setMessage('Email updated successfully');
    } catch (error){
      setMessage('Failed to update emai: ', {})
    }

    console.log('Form submitted:', newEmail, currentPassword);
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
                onChange={(e) => setNewEmail(e.target.value)}
                disabled={!isEditing}
               
              />
            </div>

            {isEditing && auth.currentUser?.providerData[0].providerId === 'password' && (
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
                    onChange={(e)=> setCurrentPassword(e.target.value)}
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
              disabled={!isEditing}
              className={`w-full py-2 rounded transition-colors ${
                !isEditing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              } text-white`}
            >
              Update Email
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