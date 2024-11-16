import React from 'react'
import { Star, StarHalf } from 'lucide-react'

export default function ProductRating({ rating }) {
  const renderStarRating = () => {
    const fullStars = Math.floor(rating.rate)
    const hasHalfStar = rating.rate % 1 >= 0.5

    return (
      <div className="flex items-center gap-0.5" aria-label={`${rating.rate} out of 5 stars`}>
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          } else if (index === fullStars && hasHalfStar) {
            return <StarHalf key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          }
          return <Star key={index} className="h-5 w-5 text-gray-200" />
        })}
        <span className="ml-2 text-sm text-gray-600">({rating.rate})</span>
        {rating.count && (
          <span className="ml-1 inline-block rounded-full bg-black px-2 text-center text-sm text-white">
            {rating.count}
          </span>
        )}
      </div>
    )
  }

  return renderStarRating()
}