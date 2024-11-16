import React from 'react'
import { useContext , useEffect} from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
const Products = () => {

    useEffect(() => {
        ifNotLoggedIn(); // This will redirect if the user is not logged in
      }, [ifNotLoggedIn]); // Call it once when the component mounts
  return (
    <div>
      Products page
    </div>
  )
}

export default Products
