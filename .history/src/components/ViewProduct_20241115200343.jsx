import React, { useEffect, useState } from 'react'
import { Star, StarHalfIcon as HalfStar, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useLoaderData } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ProductRating from './product-rating'
export const singleProduct = async ({params}) => {
 

    const response = fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await response
   
    return data
   }
  

export default function ProductPage() {
  const product = useLoaderData()
  
  const currentProductId = product.id;
  console.log(currentProductId)
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }


  

 
 

 
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg border">
          <img
            src={product.image}
            alt={`${product.name} in ${product.color}`}
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name} - {product.color}</h1>
            <p className="text-xl mt-2">${product.price} - FREE SHIPPING</p>
          </div>

          <ProductRating rating={product.rating} />

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-2">{product.title + " "} <br /> Highlights</h3>
           
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>

          <div className="space-y-4">
            <div className="border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleAccordion('details')}
              >
                <span className="font-semibold">Details</span>
                {openAccordion === 'details' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === 'details' && (
                <div className="pb-4">
                  {product.description}
                </div>
              )}
            </div>
            <div className="border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleAccordion('sustainability')}
              >
                <span className="font-semibold">Sustainability</span>
                {openAccordion === 'sustainability' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === 'sustainability' && (
                <div className="pb-4">
                  {product.title} are made with sustainable and renewable materials. The upper is crafted from ZQ Merino wool, and the laces are made from recycled plastic bottles. The sole is made from SweetFoam™, a sugarcane-based green EVA.
                </div>
              )}
            </div>
            <div className="border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleAccordion('shipping')}
              >
                <span className="font-semibold">Shipping & Returns</span>
                {openAccordion === 'shipping' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-4">
                  We offer free shipping on orders over $50. All our shoes come with a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
         
          <h3 className="font-semibold mb-2">Made From Nature</h3>
          <p className="text-sm text-gray-600">Our perfectly sourced ZQ Merino wool provides a cozy fit that is soft, lightweight, and naturally temperature-regulating.</p>
        </div>
        <div className="text-center">
         
          <h3 className="font-semibold mb-2">All-Day Comfort</h3>
          <p className="text-sm text-gray-600">Experience the comfort of our innovative SweetFoam™ midsole, made from sugarcane, providing cushioning and support for extended wear.</p>
        </div>
        <div className="text-center">
          
          <h3 className="font-semibold mb-2">Machine Washable</h3>
          <p className="text-sm text-gray-600">Our products are fully machine washable, ensuring every wear feels as fresh as the first. Simply toss them in the washing machine on a gentle cycle.</p>
        </div>
      </div>

      {/* Products You May Like Section */}
      
     <Recomendation product={product}  />
    </div>
    <Footer />
    </>
   
    
  )
}
const Recomendation = ({product }) =>{
  const [recommendedproduct, setRecommendedProduct] = useState([])
  const [recodata, setrecoData] = useState([])


  useEffect( () => {
  

    if  (product && product.category) {
    async function fetchData() {
     await fetch(`https://fakestoreapi.com/products/category/${product.category}`)
        .then(res => res.json())
        .then(data => setrecoData(data))
        .catch((e) => console.log(e));
    }

   fetchData()
      
        
    }
  }, [product]); // added product to dependency array //going on infinite loop


 recodata.filte



  return(
    <>
     <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Products You May Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {recommendedproduct.map((item) => (
          <RecommendedItems key={item.id} product={item} />
        ))}
       
      </div>
    </div>
    </>
  )
 
}

const RecommendedItems =({product}) => {
  const [isHovered, setIsHovered] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return(
<>
<div 
      className="flex flex-col w-[300px] bg-white p-3 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
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
      <div className="mt-4 flex-grow ">
        <h3 className="text-lg font-bold line-clamp-2">{product.title.trim()}</h3>
        <p className="mt-1 text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
        
        <p className="mt-1 text-gray-900 font-semibold">{<div className='inline-block' ></div> } {product.rating.rate} <span className='bg-black !text-white inline-block w-[40px] text-center rounded-full'>{product.rating.count}</span> </p>
        <ProductRating rating={product.rating} />
      </div>
      <div className="mt-4 space-y-2">
        <NavLink className="w-full block bg-black text-white py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-800">
          Add to Cart
        </NavLink>
        <NavLink onClick={()=> console.log(product.id)} to={`/products/product/${product.id}`} className="w-full block bg-white text-black border border-black py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-100">
          View Product
        </NavLink>
      </div>
    </div>
     
</>
  )
}



