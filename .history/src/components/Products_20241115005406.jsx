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
      <ProductCard />
      <Footer />
    </div>
  )



}



const ProductCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <img
        src="https://via.placeholder.com/400x300"
        alt="Men's Runner Protect"
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-gray-800 text-lg font-semibold">Men's Runner Protect</h3>
        <p className="text-gray-500 mt-1">$130</p>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Add to Cart
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
          View Product
        </button>
      </div>
    </div>
  );
};


export default Products
