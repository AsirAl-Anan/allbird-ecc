import React, { useState, useContext, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { NavLink } from 'react-router-dom';
import { SquarePen, PenOff } from 'lucide-react';

const Profile = () => {
  const emailRef = useRef();
  const { user, emailUpdate, sendEmailVerification } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName || 'No user name found');
  const [email, setEmail] = useState(user.email || 'No email found');
  const [editProfile, setEditProfile] = useState(true);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    emailUpdate(email).then(() => {
      alert('Email updated');
    }).catch((e)=>console.log(e));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">Update account information</p>

          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            disabled={editProfile}
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            ref={emailRef}
            disabled={editProfile}
          />

          <NavLink onClick={handleEditProfile}>
            <span className='flex flex-row-reverse'>
              {!editProfile ? (
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
          </NavLink>

          <NavLink
            onClick={handleSubmit}
            className="btn block text-center w-full py-2 bg-black text-white rounded hover:bg-gray-800 my-2"
          >
            Update account
          </NavLink>

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
