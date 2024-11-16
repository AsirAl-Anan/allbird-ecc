import React from 'react'
import { createContext } from 'react'

const UserContext = () => {

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

export default UserContext
