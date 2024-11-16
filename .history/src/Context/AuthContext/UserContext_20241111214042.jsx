
import { createContext, useState, useEffect } from 'react';

import app from '../../Firebase/firebase';



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
   return (
    <>
    <loader />
    </>
   )
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
