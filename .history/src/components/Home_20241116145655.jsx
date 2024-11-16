import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Carousel from './Carousel'
import CategorySlider from './CategorySlider'
import Subsribe from './Subscribe'
import CartContext from '../Context/CartContext/CartContext'

export default function Home() {
  return (
    <>
   
    <Navbar ></Navbar>
  
  <Carousel />
  <div className='m-5'>
 
  </div>
  <Subsribe />
 
   <Footer></Footer>
    </CartContext>
 
        </>
  )
}
