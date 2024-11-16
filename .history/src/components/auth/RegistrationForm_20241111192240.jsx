// RegistrationForm.jsx
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { NavLink } from 'react-router-dom';
export default function RegistrationForm() {
    
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen bg-[#F1EBE7]">
      <form className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
        <p className="text-gray-600 mb-4">We never save credit card information.</p>
        
        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input type="text" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Full Name" />

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Email" />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Password" />

        <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input type="password" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Confirm Password" />

        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-700">Email me with news and offers</label>
        </div>

        <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">Register</button>
        <p className="text-xs text-gray-500 mt-4">
          By creating an account, you agree to our Terms of Use and Privacy Policy.
        </p>
        <NavLink to={'/logIn'}>Already Have an account? Login</NavLink>
      </form>
    </div>
    <Footer />
    
    </>
  );
}
