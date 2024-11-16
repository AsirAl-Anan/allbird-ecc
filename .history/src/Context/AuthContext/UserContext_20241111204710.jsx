import React from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {app } from 
const UserContext = ({children}) => {

 const AuthContext = createContext(null)
 
 


 const value = {
 
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
