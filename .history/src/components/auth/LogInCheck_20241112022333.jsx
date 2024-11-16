import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogInCheck = ({ children }) => {
  const { ifNotLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (ifNotLoggedIn()) {
    navigate('/logIn'); // Redirect to the login page
    toast.error('You must login first')
    return null;
  }

  return children;
};

export default LogInCheck;