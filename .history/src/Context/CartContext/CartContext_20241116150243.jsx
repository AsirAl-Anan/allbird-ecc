import { createContext, useState } from "react"

const AddCartContext = createContext()
const CartContext = ({children}) => {




const [cart, setCart] = useState([])

 const value ={
    cart,
    setCart
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
