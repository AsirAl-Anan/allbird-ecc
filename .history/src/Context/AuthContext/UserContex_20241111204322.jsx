import React from 'react'
import { createContext } from 'react'

const UserContex = () => {

 const AuthContext = createContext(null)
 
 
 const value = {

 }
 
  return (
    <AuthContext.Provider value={value}>
<div>
      
      </div>
    </AuthContext.Provider>
    
  )
}

export default UserContex
