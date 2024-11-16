import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useContext , useRef} from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import { NavLink } from 'react-router-dom'
import { SquarePen } from 'lucide-react';
const Profile = () => {
  const emailRef = useRef()
  
  const { user } = useContext(AuthContext)
  console.log(user) 
  console.log(user.displayName) 
  const [editProfile, setEditProfile] = useState(true)
  const handleEditProfile = () => {
   return setEditProfile(!editProfile)

    
  
  }
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
            value={user.displayName !== null || undefined ? user.displayName : 'No user name found'}
            disabled = {editProfile}
          />
        <div>
          
        </div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Email"
            value={user.email !== null || undefined ? user.email : 'No user name found as you are logged in using github'}
            ref={emailRef}
            disabled = {editProfile}
            
            
          />
        <NavLink onClick={handleEditProfile} > <span className='flex flex-row-reverse'><SquarePen /><h1><p> </p> Edit</h1> </span></NavLink>
        
          

          {/* <NavLink
            onClick={handleSubmit}
            className="btn block text-center w-full py-2 my-2 bg-teal-500 text-white rounded hover:bg-gray-800"
          >
            Update Information
          </NavLink>
          <span className='block text-center'>Or</span>
          
          <NavLink
            onClick={handleGoogleLogin}
            className="btn block text-center w-full py-2 my-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Sign Up with Google <FontAwesomeIcon icon={faGoogle} className="mx-2" />
          </NavLink>
          <NavLink
            onClick={handleGitHubLogin}
            className="btn block text-center w-full py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Sign Up with GitHub <FontAwesomeIcon icon={faGithub} className="mx-2" />
          </NavLink> */}
          <p className="text-xs text-gray-500 mt-4">
            By creating an account, you agree to our Terms of Use and Privacy Policy.
          </p>
          <NavLink to={'/logIn'} className="block mt-4 text-blue-600 text-sm sm:text-base text-center">
            Already have an account? Log in
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
