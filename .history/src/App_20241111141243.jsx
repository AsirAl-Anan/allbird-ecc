import Navbar from "./components/shared/Navbar"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>
  }
 ])
  return (
    <>
    <RouterProvider>
      
    </RouterProvider>
      <Navbar></Navbar>
    </>
  )
}

export default App
