import Navbar from "./components/shared/Navbar"
import { createBrowserRouter , } from "react-router-dom"
function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>
  }
 ])
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
