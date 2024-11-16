import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
export default function ErrorPage() {
  const navigate = useNavigate()

  const handleGoToAllProducts = () => {
    navigate('/products')
  }

  return (
    <>
    <Navbar />
      <div className="error-page">
      <div className="error-card">
        <h1 className="error-title">
          <span className="icon">🚧</span>
          Page Under Construction
        </h1>
        <p className="error-message">
          We're sorry, but the page you're looking for is currently under construction. 
          Please check back later or visit our products page.
        </p>
        <button onClick={handleGoToAllProducts} className="error-button">
          <span className="icon">🛍️</span>
          Go to All Products
        </button>
      </div>
      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f3f4f6;
          font-family: Arial, sans-serif;
        }
        .error-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          text-align: center;
        }
        .error-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .error-message {
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        .error-button {
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .error-button:hover {
          background-color: #2563eb;
        }
        .icon {
          margin-right: 0.5rem;
          font-size: 1.25rem;
        }
      `}</style>

    </div>
    <Footer></Footer>
    </>
  
  )
}