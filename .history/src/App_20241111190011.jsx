
import Main from "./pages/Main"
import Home from "./components/Home"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import RegistrationForm from "./components/auth/RegistrationForm"
function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>

      }
      ,
      {
      
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
