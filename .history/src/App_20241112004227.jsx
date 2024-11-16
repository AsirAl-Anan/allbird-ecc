
import Main from "./pages/Main"
import Home from "./components/Home"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import RegistrationForm from "./components/auth/RegistrationForm"
import LoginForm from "./components/auth/LoginForm"
import Products from "./components/Products"
import Profile from "./components/Profile"
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
        element: <Products/>
      },
      {
        path: '/profile',
        element: <Progile />
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
