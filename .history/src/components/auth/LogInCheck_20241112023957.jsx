import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AlertBox from './components/Alert/AlertBox';

import 'react-toastify/dist/ReactToastify.css';

const LogInCheck = ({ children }) => {
  const { ifNotLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (ifNotLoggedIn()) {
      alert('Login First')
      navigate('/logIn');
      
    }
  }, [ifNotLoggedIn, navigate]);

  if (ifNotLoggedIn()) {
    return null; // Prevents rendering children if the user is not logged in
    
  }

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default LogInCheck;
