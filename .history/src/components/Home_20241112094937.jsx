import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>
    <Navbar ></Navbar>
    <ToastContainer />
    <Footer></Footer>
        </>
  )
}
