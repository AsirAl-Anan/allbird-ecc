import React from 'react'
import { createContext } from 'react'

const UserContex = () => {

 const AuthContext = createContext(null)
 
  return (
    <AuthContext.Provider value={}>
<div>
      
      </div>
    </AuthContext.Provider>
    
  )
}

export default UserContex
