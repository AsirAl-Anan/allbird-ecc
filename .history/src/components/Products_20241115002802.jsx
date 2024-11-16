import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import Navbar from './shared/Navbar'
const Products = () => {

    const { ifNotLoggedIn } = useContext(AuthContext)
   ifNotLoggedIn()
  return (
    <div>
      <Navbar />
      Products page
      <Footer />
    </div>
  )
}

export default Products
