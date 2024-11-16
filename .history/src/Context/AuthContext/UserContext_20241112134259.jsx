import { createContext, useState, useEffect } from 'react';
import app from '../../Firebase/firebase';
import { Loader } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, sendEmailVerification, signInWithPopup, signOut,reauthenticateWithPopup, GithubAuthProvider, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

  const auth = getAuth(app);

  // Google provider and login function
  const googleProvider = new GoogleAuthProvider();
  const createUserWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Email registration function
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // GitHub provider and login function
  const gitHubProvider = new GithubAuthProvider();
  const createUserWithGitHub = () => signInWithPopup(auth, gitHubProvider);

  // User observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // Prompt for credentials for reauthentication
  let credential;
  const promptForCredential = (email, password) => {
     credential = EmailAuthProvider.credential(email, password);
    return reauthenticateWithCredential(user, credential);
  };

  // Log-in check function
  const ifNotLoggedIn = () => {
    return user == null || user === undefined;
  };

  // Email update function
  const emailUpdate = (email) => {
    return updateEmail(user, email);
  };
  //reauth using g provider
  const reauthWithGoogle = () => {
    
  }
  // Sign out function
  const userSignOut = () => signOut(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  const value = {
    createUserWithEmail,
    setUser,
    user,
    createUserWithGoogle,
    userEmail,
    userPhoto,
    userSignOut,
    ifNotLoggedIn,
    createUserWithGitHub,
    emailUpdate,
    sendEmailVerification,
    reauthenticateWithCredential,
    promptForCredential,
    credential
  };

  return (
    <AuthContext.Provider value={value}>
      <div>{children}
        <ToastContainer />
      </div>
    </AuthContext.Provider>
  );
};

export default UserContext;
