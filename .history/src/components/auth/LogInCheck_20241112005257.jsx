import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import { useNavigate } from 'react-router-dom';

const LogInCheck = ({ children }) => {
  const { ifNotLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (ifNotLoggedIn()) {
    navigate('/logIn'); // Redirect to the login page
    return null;
  }

  return children;
};

export default LogInCheck;