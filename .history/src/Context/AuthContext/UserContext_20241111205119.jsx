import React from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import {app } from '../../Firebase/firebase'
const UserContext = ({children}) => {
  //user state
  const [user, setUser] = React.useState(null)

 const AuthContext = createContext(null)
 
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


 //context functions
 const createUserWithEmail =  (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
 }


 const value = {
 createUserWithEmail,

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
