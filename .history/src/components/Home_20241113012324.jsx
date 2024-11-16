import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Carousel from './Carousel'
import CategorySlider from './CategorySlider'
import Subsribe from './Subscribe'
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <>
    <Navbar ></Navbar>
    <ToastContainer className={'mt-5'} />
   <Carousel />
   <div className='m-5'>
   <CategorySlider />
   </div>
   <Subsribe />
  
    <Footer></Footer>
        </>
  )
}
