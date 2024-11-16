import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useLoaderData } from 'react-router-dom'

export const  allProducts = async () =>{
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  console.log(data)
}

const Products = () => {
  
    const { ifNotLoggedIn } = useContext(AuthContext)
   ifNotLoggedIn()


   const allProducts  = useLoaderData()
   console.log(all)
  return (
    <div>
      <Navbar />
      Products page
      <button onClick={allProducts}>Click</button>
      <Footer />
    </div>
  )
}

export default Products
