import React from "react";

import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Updatepassword = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Account</h2>
        <p className="text-gray-600 mb-6">Update account information</p>

        <form>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter Current Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Current Password"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">Enter New Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="New Password"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Update Password
          </button>
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
