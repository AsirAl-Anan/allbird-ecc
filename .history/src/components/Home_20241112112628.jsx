import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Carousel from './Carousel'
import Tabs from './Tabs'
export default function Home() {
  return (
    <>
    <Navbar ></Navbar>
   <Carousel />
   <Tabs />
    <Footer></Footer>
        </>
  )
}
