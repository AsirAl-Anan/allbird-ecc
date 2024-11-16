import React from "react";
import { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Eye, EyeOff } from 'lucide-react';

const Updatepassword = () => {


    const [showPass, setShowPass] = useState(false);
const [showNewPass, setShowNewPass] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Account</h2>
        <p className="text-gray-600 mb-6">Update account information</p>

        <form>
         
        </form>

        <p className="text-xs text-gray-500 mt-4">
          By updating your password, you agree to our <a href="#" className="text-indigo-500">Terms of Use</a> and <a href="#" className="text-indigo-500">Privacy Policy</a>.
        </p>
        <p className="text-center text-sm text-indigo-500 mt-6 cursor-pointer">Forgot Password?</p>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Updatepassword;
