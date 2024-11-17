import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/AuthContext/UserContext.jsx'
import CartContext from './Context/CartContext/CartContext.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <>
  <UserContext>
    <BrowserRouter>
    
    </BrowserRouter>
  <CartContext>
  <App />

  </CartContext>
  
 
  </UserContext>
  
  </>
  
)
