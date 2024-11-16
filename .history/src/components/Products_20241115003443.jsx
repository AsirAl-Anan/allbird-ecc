import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useLoaderData } from 'react-router-dom'

export const  allProducts = async () =>{
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
}

const Products = () => {
  
    const { ifNotLoggedIn } = useContext(AuthContext)
   ifNotLoggedIn()


   const allProducts  = useLoaderData()
   console.log(allProducts)
  return (
    <div>
      <Navbar />
      Products page
      {
        allProducts.map((product) => {
      }
      <Footer />
    </div>
  )
}

export default Products
