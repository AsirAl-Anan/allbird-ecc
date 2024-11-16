import { createContext, useState, useEffect } from 'react';
import app from '../../Firebase/firebase';
import { Loader } from 'lucide-react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
 
  signInWithPopup, 
  signOut,
  sendPasswordResetEmail ,
  GithubAuthProvider,
  EmailAuthProvider,
  updatePassword,
  reauthenticateWithCredential,
  
} from "firebase/auth";

import firebase from 'firebase/compat/app';

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // User observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

 
 
 
 

  const value = {
    user,
    loading,
    error,
    auth,
    // updateUserEmail,
    createUserWithEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
    createUserWithGoogle:async () =>await signInWithPopup(auth, googleProvider),
    createUserWithGitHub:async () =>await signInWithPopup(auth, gitHubProvider),
    userSignOut: () => signOut(auth),
    ifNotLoggedIn: () => !user,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      <div>
        {children}
      
      </div>
    </AuthContext.Provider>
  );
};

export default UserContext;