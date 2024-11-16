
import Main from "./pages/Main"
import Home from "./components/Home"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import RegistrationForm from "./components/auth/RegistrationForm"
import LoginForm from "./components/auth/LoginForm"
import Products from "./components/Products"
import Profile from "./components/Profile"
import LogInCheck from "./components/auth/LogInCheck"
import Updatepassword from "./components/Updatepassword"
import { allProducts as productsLoader } from "./components/Products"
import ViewProduct from "./components/ViewProduct"
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
      path: '/register',
      element: <RegistrationForm/>
      }
      ,
      {
      path: '/logIn',
      element: <LoginForm />
      },
      {
        path: '/products',
        element:  <LogInCheck ><Products/></LogInCheck> ,
        loader: productsLoader

      },
      {
        path: '/profile',

        element:
        <LogInCheck ><Profile /></LogInCheck> 
        
      }
      ,{
        path: '/updatepassword',
        element: <Updatepassword/>
      },
      {
        path: '/producs/',
        element: <ViewProduct />,
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
