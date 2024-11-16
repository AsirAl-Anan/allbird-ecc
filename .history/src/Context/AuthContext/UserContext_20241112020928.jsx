
import { createContext, useState, useEffect } from 'react';

import app from '../../Firebase/firebase';

import { Loader } from 'lucide-react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider , signInWithPopup , signOut, GithubAuthProvider } from "firebase/auth";
import { redirect } from 'react-router-dom';

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
 
  
  //log in function
  function ifNotLoggedIn() {
    if (user == null || user === undefined) {
      window.location.href ='/'
      return true
    }
   else {
    return false
   }
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
    ifNotLoggedIn
  };
  
  

  
  return (
    <AuthContext.Provider value={value}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default UserContext;
