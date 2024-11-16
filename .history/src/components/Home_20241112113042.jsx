import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Carousel from './Carousel'
import CategorySlider from './CategorySlider'
export default function Home() {
  return (
    <>
    <Navbar ></Navbar>
   <Carousel />
   <CategorySlider />
    <Footer></Footer>
        </>
  )
}
