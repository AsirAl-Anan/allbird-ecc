// components/AlertBox.jsx
import React, { useState } from 'react';

const AlertBox = ({ type = "info", message = "This is an alert message!" }) => {
  const [visible, setVisible] = useState(true);

  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    error: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  if (!visible) return null;

  return (
    <div className={`flex items-center border p-4 rounded-lg ${typeStyles[type]} relative`}>
      <span className="mr-4">{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AlertBox;
