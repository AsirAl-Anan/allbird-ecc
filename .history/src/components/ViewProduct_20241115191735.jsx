import React, { useEffect, useState } from 'react'
import { Star, StarHalfIcon as HalfStar, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { useLoaderData } from 'react-router-dom'
import Nav
export const singleProduct = async ({params}) => {
    const response = fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await response
   
    return data
   }
  

export default function ProductPage() {
  const product = useLoaderData()
 
  const rating = useState(product.rating.rate)
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  // Example product data
  

  const renderStarRating = () => {
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    return (
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
          } else if (index === fullStars && hasHalfStar) {
            return <HalfStar key={index} className="w-5 h-5 text-yellow-400 fill-current" />
          } else {
            return <Star key={index} className="w-5 h-5 text-gray-300" />
          }
        })}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    )
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

          {renderStarRating()}

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
 


  useEffect( () => {
  

    if  (product && product.category) {
    async function fetchData() {
     await fetch(`https://fakestoreapi.com/products/category/${product.category}`)
        .then(res => res.json())
        .then(data => setRecommendedProduct(data))
        .catch((e) => console.log(e));
    }

   fetchData()
      
        
    }
  }, [product]); // added product to dependency array //going on infinite loop

 console.log("all reco products: ",recommendedproduct)
 



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
 console.log(product) //why is this undefined?
  return(
<>
<div className="space-y-2">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt="Tree Runners - Forest Green"
              className="h-full w-full  object-center object-contain"
            />
          </div>
          <h3 className="font-semibold">Tree Runners</h3>
          <p className="text-sm text-gray-600">Forest Green</p>
          <p className="font-semibold">$98</p>
         <NavLink></NavLink>
        </div>
     
</>
  )
}



