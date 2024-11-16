
import { createContext, useState, useEffect } from 'react';

import app from '../../Firebase/firebase';

import { Loader } from 'lucide-react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider ,sendEmailVerification, signInWithPopup , signOut, GithubAuthProvider , updateEmail,  reauthenticateWithCredential} from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext(null);


const UserContext = ({ children }) => {
  // user state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userPhoto, setUserPhoto] = useState('')

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);




  //google provider and google login funtion
  
const provider = new GoogleAuthProvider();

//createUserWithGoogle
const createUserWithGoogle = () =>{
  return signInWithPopup(auth, provider)
  }


//email function
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 

  //github provider and github function
  const gitHubProvider = new GithubAuthProvider();
  const createUserWithGitHub = () =>{
    return signInWithPopup(auth, gitHubProvider)
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
 
  // TODO(you): prompt the user to re-provide their sign-in credentials
const credential = promptForCredentials();

  //log in function
  function ifNotLoggedIn() {
    if (user == null || user === undefined) {
     
      return true
    }
   else {
    return false
   }
  }
  //update email
  const emailUpdate = (email) => {
    return updateEmail(user, email)
  }
  
  

//signout
const userSignOut = () =>{
 return signOut(auth)

}

console.log(user)


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
    createUserWithGoogle,
    userEmail,
    userPhoto,
    userSignOut,
    ifNotLoggedIn,
    createUserWithGitHub,
    emailUpdate,
    sendEmailVerification,
    reauthenticateWithCredential
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