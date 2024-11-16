
import { createContext, useState, useEffect } from 'react';

import app from '../../Firebase/firebase';

import { Loader } from 'lucide-react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider , signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {
  // user state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  //google provider
  
const provider = new GoogleAuthProvider();
  // context functions
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 //createUserWithGoogle
 const createUserWithGoogle = () =>{
 return signInWithPopup(auth, provider)
 }
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
 

  

console.log("auth:  ",auth)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="" />
      </div>
    );
  }
  

  const value = {
    createUserWithEmail,
    setUser,
    user,
    createUserWithGoogle
  };
  
  

  
  return (
    <AuthContext.Provider value={value}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default UserContext;
