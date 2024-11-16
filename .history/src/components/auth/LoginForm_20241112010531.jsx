// LoginForm.jsx
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function LoginForm() {
 const {createUserWithGoogle} = useContext(AuthContext)
 const handleGoogleLogin = () => {
  
 }
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen bg-[#F1EBE7] ">
      <form className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Email" />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Password" />

        <NavLink className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">Sign In</NavLink>
        <NavLink onClick={handleGoogleLogin} className="btn block text-center w-full py-2  bg-black text-white rounded hover:bg-gray-800">Sign Up with Google <FontAwesomeIcon icon={faGoogle} className='mx-2'/></NavLink>NavLink
        <div className="text-center mt-4">
          <NavLink href="#" className="text-sm text-gray-700 underline">Forgot Password?</NavLink>
        </div>
        <div className="text-center mt-4">
          <NavLink href="#" className="block mt-4 text-blue-600 text-sm sm:text-base text-center">Dont Have an account? Sign up</NavLink>
        </div>
      </form>
    </div>
    <Footer />
    </>
  
  );
}
