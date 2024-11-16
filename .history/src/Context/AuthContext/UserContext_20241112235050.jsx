import { createContext, useState, useEffect } from 'react';
import app from '../../Firebase/firebase';
import { Loader } from 'lucide-react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  sendEmailVerification,
  signInWithPopup, 
  signOut,
  reauthenticateWithPopup,
  reauthenticateWithCredential,
  EmailAuthProvider, 
  updateEmail,
  GithubAuthProvider
} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const createUserWithEmail = async (email, password) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      toast.success('Account created! Please check your email to verify.');
    } catch (error) {
      
      console.error('Error creating user:', error);
      setError(error);
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/email-already-in-use') {
        toast.error('Email already in use');
      } else if (errorCode === 'auth/invalid-email') {
        toast.error('Invalid email format');
      } else if (errorCode === 'auth/weak-password') {
        toast.error('Password should be at least 6 characters');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };


  const value = {
    user,
    loading,
    error,
    // updateUserEmail,
    createUserWithEmail,
    createUserWithGoogle:async () =>await signInWithPopup(auth, googleProvider),
    createUserWithGitHub:async () =>await signInWithPopup(auth, gitHubProvider),
    userSignOut: () => signOut(auth),
    ifNotLoggedIn: () => !user,
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
        <ToastContainer />
      </div>
    </AuthContext.Provider>
  );
};

export default UserContext;