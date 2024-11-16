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
       {
        allProducts.map((product) => {
          
        }
       }
      <ProductCard image="/product-image.jpg"
  title="Product Name"
  price={99.99}
  sizes={['S', 'M', 'L', 'XL']} />
      <Footer />
    </div>
  )



}





  function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex flex-col w-full max-w-sm bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover"
        />
        {product.label && (
          <span className="absolute left-0 top-4 bg-white px-2 py-1 text-xs font-bold uppercase">
            {product.label}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-1 text-gray-900">${product.price}</p>
        <div className="mt-2 flex space-x-2">
          {product.colors.map((color, index) => (
            <img
              key={index}
              src={color}
              alt={`Color variant ${index + 1}`}
              className="w-10 h-10 object-cover border border-gray-200"
            />
          ))}
        </div>
      </div>
      {isHovered && (
        <div className="mt-4 space-y-2">
          <button className="w-full bg-black text-white py-2 px-4 text-sm font-bold uppercase">
            Add to Cart
          </button>
          <button className="w-full bg-white text-black border border-black py-2 px-4 text-sm font-bold uppercase">
            View Product
          </button>
        </div>
      )}
    </div>
  )
}


export default Products