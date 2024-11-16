import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext/UserContext'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useLoaderData } from 'react-router-dom'

export const allProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
}

const Products = () => {
  const { ifNotLoggedIn } = useContext(AuthContext)
  const products = useLoaderData()

  useEffect(() => {
    ifNotLoggedIn()
  }, [ifNotLoggedIn])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center my-8">Products Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex flex-col w-full bg-white p-3 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {product.category && (
          <span className="absolute left-0 top-4 bg-black text-white px-2 py-1 text-xs font-bold uppercase">
            {product.category}
          </span>
        )}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 ease-in-out" style={{ transform: isHovered ? 'translateY(0)' : 'translateY(100%)' }}>
            <p className="text-sm text-gray-600 line-clamp-4">
              {product.description}
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg font-bold line-clamp-2">{product.title.trim()}</h3>
        <p className="mt-1 text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
        <p className="mt-1 text-gray-900 font-semibold">Rating:{product.rating.rate}</p>
      </div>
      <div className="mt-4 space-y-2">
        <button className="w-full bg-black text-white py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-800">
          Add to Cart
        </button>
        <button className="w-full bg-white text-black border border-black py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-100">
          View Product
        </button>
      </div>
    </div>
  )
}

export default Products