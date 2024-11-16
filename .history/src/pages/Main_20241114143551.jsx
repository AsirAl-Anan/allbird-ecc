import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
const Main = () => {
  return (
    <div>
      
      <Outlet></Outlet>
    </div>
  )
}

export default Main
