import React, { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'

export default function Vir() {
  const [mainImage, setMainImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  const images = [
    "https://example.com/wool-runners-blue-main.jpg",
    "https://example.com/wool-runners-blue-side.jpg",
    "https://example.com/wool-runners-blue-back.jpg",
    "https://example.com/wool-runners-blue-top.jpg",
    "https://example.com/wool-runners-blue-sole.jpg",
  ]

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={images[mainImage]}
              alt="Blue Wool Runners main view"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(idx)}
                className={`aspect-square overflow-hidden rounded-lg border ${
                  mainImage === idx ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Blue Wool Runners view ${idx + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Men's Wool Runners - Nautical Blue</h1>
            <p className="text-xl mt-2">$95 - FREE SHIPPING</p>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-sm text-gray-600">(4.5)</span>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-2">Wool Runner Highlights</h3>
            <ul className="space-y-2 text-sm">
              <li>• Soft and cozy merino wool upper</li>
              <li>• Cushioned insole for all-day comfort</li>
              <li>• Machine washable for easy care</li>
            </ul>
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
                  Our Wool Runners are made with ZQ Merino wool, providing temperature regulation, moisture-wicking, and odor-reducing properties. The shoe features a comfortable foam insole and a durable rubber outsole.
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
                  Our Wool Runners are made with sustainable and renewable materials. The upper is crafted from ZQ Merino wool, and the laces are made from recycled plastic bottles. The sole is made from SweetFoam™, a sugarcane-based green EVA.
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
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src="https://example.com/wool-runners-nature.jpg"
              alt="Wool Runners in nature"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="font-semibold mb-2">Made From Nature</h3>
          <p className="text-sm text-gray-600">Our perfectly sourced ZQ Merino wool provides a cozy fit that is soft, lightweight, and naturally temperature-regulating.</p>
        </div>
        <div className="text-center">
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src="https://example.com/wool-runners-comfort.jpg"
              alt="Wool Runners comfort demonstration"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="font-semibold mb-2">All-Day Comfort</h3>
          <p className="text-sm text-gray-600">Experience the comfort of our innovative SweetFoam™ midsole, made from sugarcane, providing cushioning and support for extended wear.</p>
        </div>
        <div className="text-center">
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src="https://example.com/wool-runners-washing.jpg"
              alt="Wool Runners being washed"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="font-semibold mb-2">Machine Washable</h3>
          <p className="text-sm text-gray-600">Our Wool Runners are fully machine washable, ensuring every wear feels as fresh as the first. Simply toss them in the washing machine on a gentle cycle.</p>
        </div>
      </div>
    </div>
  )
}