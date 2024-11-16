// LoginForm.jsx
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Navigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/UserContext';
export default function LoginForm() {
  const navigate = useNavigate()
 const {createUserWithGoogle} = useContext(AuthContext)
 const handleGoogleLogin = () => {
  createUserWithGoogle().then(()=> {import React, { useState } from 'react';

  const EmailSignup = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email submitted:', email);
    };
  
    return (
      <div>
        {/* Email Signup Section */}
        <div className="max-w-3xl mx-auto text-center py-12 px-4">
          <h2 className="text-3xl font-bold mb-4">
            Want First Dibs?
          </h2>
          
          <p className="text-gray-700 mb-8">
            Join our email list and be the first to know about new limited edition products,
            material innovations, and lots of other fun updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="px-4 py-2 flex-grow max-w-md border-b border-gray-300 focus:border-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 font-medium hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>
          
          <p className="text-sm text-gray-600">
            Note: You can opt-out at any time. See our{' '}
            <a href="#" className="underline">Privacy Policy</a> and{' '}
            <a href="#" className="underline">Terms</a>.
          </p>
        </div>
  
        {/* The Allbirds Approach Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">
            The Allbirds Approach
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wear-All-Day Comfort</h3>
              <p className="text-gray-700">
                Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Sustainability In Every Step</h3>
              <p className="text-gray-700">
                From materials to transport, we're working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Materials From The Earth</h3>
              <p className="text-gray-700">
                We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They're soft, breathable, and better for the planet—win, win, win.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmailSignup;})
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

        <NavLink className="w-full block my-2 text-center py-2 bg-black text-white rounded hover:bg-gray-800">Sign In</NavLink>
        <NavLink onClick={handleGoogleLogin} className="btn block text-center w-full py-2  bg-black text-white rounded hover:bg-gray-800">Sign In with Google <FontAwesomeIcon icon={faGoogle} className='mx-2'/></NavLink>
        <div className="text-center mt-4">
          <NavLink href="#" className="text-sm text-gray-700 underline">Forgot Password?</NavLink>
        </div>
        <div className="text-center mt-4">
          <NavLink to={'/register'} className="block mt-4 text-blue-600 text-sm sm:text-base text-center">Dont Have an account? Sign up</NavLink>
        </div>
      </form>
    </div>
    <Footer />
    </>
  
  );
}