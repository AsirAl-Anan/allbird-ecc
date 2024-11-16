import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase';
const loader = await import('../../../images/loader/loader.json');

import Lottie from 'react-lottie'; // install via `npm install --save react-lottie`
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {
  // user state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // context functions
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null || undefined) {
        setUser(currentUser);
      } else {
        setUser(null);
        console.log("user observer : no user");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // Loading (using Lottie if needed)
  if (loading) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loader,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return <Lottie options={defaultOptions} height={150} width={150} />;
  }

  const value = {
    createUserWithEmail,
    setUser,
    user
  };

  return (
    <AuthContext.Provider value={value}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default UserContext;
