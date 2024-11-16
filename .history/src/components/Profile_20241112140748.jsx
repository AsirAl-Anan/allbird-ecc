import React, { useState, useContext, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { NavLink } from 'react-router-dom';
import { SquarePen, PenOff } from 'lucide-react';
import { getAuth, updateEmail, sendEmailVerification } from 'firebase/auth';

const Profile = () => {
  const emailRef = useRef();
  const { user, reauthWithGoogle } = useContext(AuthContext);
  const auth = getAuth();

  const [name, setName] = useState(user?.displayName || 'No user name found');
  const [email, setEmail] = useState(user?.email || 'No email found');
  const [isEditing, setIsEditing] = useState(false);  // Changed from editProfile to isEditing
  const [verificationSent, setVerificationSent] = useState(false);

  const handleEditProfile = (e) => {
    e.preventDefault(); // Prevent default navigation
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default navigation
    if (!auth.currentUser) return;

    try {
      if (user?.providerData[0]?.providerId === 'google.com') {
        // First re-authenticate with Google
        await reauthWithGoogle();
        
        // Update email first
        await updateEmail(auth.currentUser, email);
        
        // Then send verification email
        await sendEmailVerification(auth.currentUser);
        
        setVerificationSent(true);
        setIsEditing(false); // Disable editing after successful update
        alert('Email updated and verification email sent! Please check your inbox to verify your new email address.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.code === 'auth/requires-recent-login') {
        alert('For security reasons, please log out and log back in before changing your email.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Please enter a valid email address.');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('This email is already in use by another account.');
      } else {
        alert('Error updating profile: ' + error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">Update account information</p>

          {verificationSent && (
            <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded">
              Email updated! Please check your inbox to verify your new email address.
            </div>
          )}

          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            disabled={!isEditing}
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            ref={emailRef}
            disabled={!isEditing}
          />

          <button 
            type="button"
            onClick={handleEditProfile}
            className="w-full text-right flex justify-end items-center hover:text-gray-700"
          >
            <span className='flex flex-row-reverse'>
              {isEditing ? (
                <>
                  <PenOff />
                  <h1 className='mx-1'>Stop Editing</h1>
                </>
              ) : (
                <>
                  <SquarePen />
                  <h1 className='mx-1'>Edit</h1>
                </>
              )}
            </span>
          </button>

          <button
            type="submit"
            className="btn block text-center w-full py-2 bg-black text-white rounded hover:bg-gray-800 my-2"
          >
            Update account
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By updating your account, you agree to our Terms of Use and Privacy Policy.
          </p>
          <NavLink to={'/logIn'} className="block mt-4 text-blue-600 text-sm sm:text-base text-center">
            Change Password?
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;