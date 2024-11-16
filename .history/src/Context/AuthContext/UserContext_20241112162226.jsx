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

  // Reauthentication functions
  const reauthenticateWithPassword = async (currentPassword) => {
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  const reauthWithGoogle = async () => {
    try {
      await reauthenticateWithPopup(user, googleProvider);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  // Email update function
  const updateUserEmail = async (newEmail, currentPassword = null) => {
    try {
      // First, check if user is logged in
      if (!user) {
        throw new Error('No user is currently logged in');
      }

      // Check authentication provider
      const provider = user.providerData[0]?.providerId;

      // Reauthenticate based on provider
      let isReauthenticated = false;
      if (provider === 'google.com') {
        isReauthenticated = await reauthWithGoogle();
      } else if (provider === 'password') {
        if (!currentPassword) {
          throw new Error('Current password is required');
        }
        isReauthenticated = await reauthenticateWithPassword(currentPassword);
      }

      if (!isReauthenticated) {
        throw new Error('Reauthentication failed');
      }

      // Update email
      await updateEmail(user, newEmail);
      // Send verification email
      await sendEmailVerification(user);
      
      toast.success('Email updated! Please check your inbox for verification.');
      return true;
    } catch (error) {
      let errorMessage = 'Failed to update email';
      
      switch (error.code) {
        case 'auth/requires-recent-login':
          errorMessage = 'Please log out and log back in to change your email';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already in use by another account';
          break;
        default:
          errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      setError(errorMessage);
      return false;
    }
  };

  const value = {
    user,
    loading,
    error,
    updateUserEmail,
    createUserWithEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
    createUserWithGoogle: () => signInWithPopup(auth, googleProvider),
    createUserWithGitHub: () => signInWithPopup(auth, gitHubProvider),
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