import React, { useState } from 'react'
import { Star, StarHalfIcon as HalfStar, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
export default function ProductPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  // Example product data
  const product = {
    name: "Men's Wool Runners",
    color: "Nautical Blue",
    price: 95,
    rating: 3.5,
    image: "https://example.com/wool-runners-blue-main.jpg"
  }

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

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
    
    
    
    </>

    
  )
}