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



  const value = {
    user,
    loading,
    error,
    // updateUserEmail,
    createUserWithEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
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
      
      </div>
    </AuthContext.Provider>
  );
};

export default UserContext;