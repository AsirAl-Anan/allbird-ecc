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
<>


</>
       
  )
}