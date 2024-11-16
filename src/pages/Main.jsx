import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
const Main = () => {
  return (
    <div>
        <ToastContainer className={'mt-5'} />
      <Outlet></Outlet>
    </div>
  )
}

export default Main
