import React from 'react'
import { createContext ,useState} from 'react'
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase';
export const AuthContext = createContext(null)

import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";

const UserContext = ({children}) => {
  //user state
  const [user, setUser] = useState(null )


 
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


 //context functions
 const a createUserWithEmail =  (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
 }
 
 console.log(createUserWithEmail)

 const value = {
 createUserWithEmail,
 setUser
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
