import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen">

<div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative z-0">
        {/* Your main content goes here */}
        <div className="container mx-auto px-4 py-8">
          <h1>Welcome to Allbirds</h1>
          {/* Add your page content here */}
        </div>
      </main>
      <Footer />
    </div>
    </div>
   
  )
}