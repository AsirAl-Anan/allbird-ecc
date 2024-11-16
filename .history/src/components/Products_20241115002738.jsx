import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
const Products = () => {

    const { ifNotLoggedIn } = useContext(AuthContext)
   ifNotLoggedIn()
  return (
    <div>
      Navbar
      Products page
    </div>
  )
}

export default Products
