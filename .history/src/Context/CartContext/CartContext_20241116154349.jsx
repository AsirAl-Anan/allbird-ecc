import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {




const [cart, setCart] = useState([])

 const value ={
    cart,
    setCart
 }

const addTocart = () =>{
    console.log('clicked')
}

  return (
    <div>
      <AddCartContext.Provider value={value}>
    {children}
      </AddCartContext.Provider>
    </div>
  )
}

export default CartContext
