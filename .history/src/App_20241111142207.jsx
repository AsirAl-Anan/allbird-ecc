import Navbar from "./components/shared/Navbar"
import Main from "./pages/Main"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: 

      }
    ]
  }
 ])
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
     
    </>
  )
}

export default App
