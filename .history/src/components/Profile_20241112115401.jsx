import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
const Profile = () => {
  return (
    <div>
      <Navbar />
      <h1>Profile Page</h1>
      <Footer />
    </div>
  )
}

export default Profile
