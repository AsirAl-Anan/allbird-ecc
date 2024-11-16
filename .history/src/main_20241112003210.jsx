import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/AuthContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <UserContext>
  
  </UserContext>
  
  </>
  
)