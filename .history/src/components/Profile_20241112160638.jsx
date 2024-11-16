import React, { useState, useContext, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { NavLink } from 'react-router-dom';
import { SquarePen, PenOff } from 'lucide-react';
import { getAuth, verifyBeforeUpdateEmail } from 'firebase/auth';

const Profile = () => {
  const emailRef = useRef();
  const { user, reauthWithGoogle,userCredential,authCredential ,updateEmail, currentPassword, setCurrentPassword} = useContext(AuthContext);
  console.log(userCredential,authCredential,updateEmail,currentPassword, setCurrentPassword)
  const auth = getAuth();

  const [name, setName] = useState(user?.displayName || 'No user name found');
  const [email, setEmail] = useState(user?.email || 'No email found');
  const [isEditing, setIsEditing] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return;
    else if (user.providerData[0].providerId === 'google.com'){
      try {
        // First re-authenticate
        if (user?.providerData[0]?.providerId === 'google.com') {
          await reauthWithGoogle();
        }
  
        // Send verification email to the new address
        await verifyBeforeUpdateEmail(auth.currentUser, email);
        
        setVerificationSent(true);
        setIsEditing(false);
        alert('A verification email has been sent to ' + email + '. Please check your inbox and click the verification link to complete the email update.');
  
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
    } else {
      try {
        // Update the user's email
        authCredential()
        await userCredential()
        await updateEmail(user, email);
       
      } catch (e){
        console.error('Error updating profile:', e);
      }
    }
    if(user.providerData[0].providerId === 'google.com'){
      return (
        <>
         <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">Update account information</p>

          {verificationSent && (
            <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded">
              A verification email has been sent to your new email address. 
              Please check your inbox and click the verification link to complete the update.
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
            disabled={!isEditing}
            className={`btn block text-center w-full py-2 ${
              !isEditing ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
            } text-white rounded my-2`}
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
        </>
      )
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
              A verification email has been sent to your new email address. 
              Please check your inbox and click the verification link to complete the update.
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


          <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Old Password</label>
            <div className="flex items-center">
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Password"
                ref={passwordRef}
              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                <NavLink onClick={hideshowPassword}>
                  {showPass ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="flex items-center">
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                <NavLink onClick={hideshowPassword}>
                  {showPass ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-700">Email me with news and offers</label>
          </div>
   
          <button
            type="submit"
            disabled={!isEditing}
            className={`btn block text-center w-full py-2 ${
              !isEditing ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
            } text-white rounded my-2`}
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