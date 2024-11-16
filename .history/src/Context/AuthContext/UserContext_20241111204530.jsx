import React from 'react'
import { createContext } from 'react'

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
