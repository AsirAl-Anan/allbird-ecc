import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useContext , useRef} from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import { NavLink } from 'react-router-dom'
const Profile = () => {
  const emailRef = use
  const { user } = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      <h1>Profile Page</h1>
      <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Create an Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">We never save credit card information.</p>

          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Full Name"
            ref={nameRef}
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Email"
            ref={emailRef}
          />

          <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
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

          <NavLink
            onClick={handleSubmit}
            className="btn block text-center w-full py-2 my-2 bg-teal-500 text-white rounded hover:bg-gray-800"
          >
            Register with email
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
          </NavLink>
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
