import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext/UserContext'
const LogInCheck = () => {

    const { ifNotLoggedIn } = useContext(AuthContext)
    if(ifNotLoggedIn()){
        return null
    }
  
}

export default LogInCheck
