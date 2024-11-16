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
      <ProductCard image="/product-image.jpg"
  title="Product Name"
  price={99.99}
  sizes={['S', 'M', 'L', 'XL']} />
      <Footer />
    </div>
  )



}



const ProductCard = ({ image, title, price, sizes }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">
                View Product
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-500 font-medium">${price}</p>
      </div>
      {isHovered && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1 px-3 rounded"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default Products
