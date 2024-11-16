import React from 'react'
import { createContext ,useState , useEffect} from 'react'
import { initializeApp} from "firebase/app";
import app from '../../Firebase/firebase';
export const AuthContext = createContext(null)

import { getAuth , createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";

const UserContext = ({children}) => {
  //user state
  const [user, setUser] = useState({} )


 
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


 //context functions
  const  createUserWithEmail =  (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
 }
 
 console.log(createUserWithEmail)

 //user observer
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

 const value = {
 createUserWithEmail,
 setUser,
 user
 }
  return (
    <AuthContext.Provider value={value}>
    <div>
      {children}
      </div>
    </AuthContext.Provider>
    
  )
}

export default UserContext
