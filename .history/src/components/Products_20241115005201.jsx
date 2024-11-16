import React from 'react'
import { useContext , useState} from 'react'
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
      {/* {
        allProducts.map((product) => {
  
        }
      } */}
      Product
      <Footer />
    </div>
  )



}



const ProductCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm bg-white border rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="Men's Runner Protect"
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-gray-800 text-lg font-semibold">Men's Runner Protect</h3>
        <p className="text-gray-500 mt-2">$130</p>
      </div>

      {/* Hover Overlay */}
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-md">Add to Cart</button>
          <button className="bg-white text-black px-4 py-2 rounded-md">View Product</button>
        </div>
      )}
    </div>
  );
};



export default Products
