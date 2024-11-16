import React from 'react'
import { createContext ,useState} from 'react'
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase';
export const AuthContext = createContext(null)

import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";

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
 console.log(user)
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
