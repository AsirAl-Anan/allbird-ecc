import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
const Products = () => {
  const allProducts = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
  }
    const { ifNotLoggedIn } = useContext(AuthContext)
   ifNotLoggedIn()
  return (
    <div>
      <Navbar />
      Products page
      <button onClick={allProducts}></button>
      <Footer />
    </div>
  )
}

export default Products