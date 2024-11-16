
import { createContext, useState, useEffect, useRef } from 'react';

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
        useRef.current = user
      } else {
        setUser(null);
        console.log("user observer : no user");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  const userRef = useRef(user)
  // Loading (using Lottie if needed)
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
  console.log(user)
  //user ref


  console.log(userRef.current)
  return (
    <AuthContext.Provider value={value}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default UserContext;
