import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogInCheck = ({ children }) => {
  const { ifNotLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (ifNotLoggedIn()) {
   window.location.href ='/login'
  
    return null;
  }

  return children;
};

export default LogInCheck;