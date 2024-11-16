import { createContext, useState, useEffect } from 'react';
import app from '../../Firebase/firebase';
import { Loader } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, sendEmailVerification, signInWithPopup, signOut,reauthenticateWithPopup, GithubAuthProvider, updateEmail, reauthenticateWithCredential, EmailAuthProvider, signInWithCredential } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {

  
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [currentPassword, setCurrentPassword] = useState('')
 console.log(EmailAuthProvider)
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
    return reauthenticateWithPopup(user, googleProvider);
  }

  //credential
  const authCredential = EmailAuthProvider.credential(user.email, currentPassword)
  const userCredential =  signInWithCredential(auth, authCredential)
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
  
    reauthWithGoogle,
    authCredential.
    user
   
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
