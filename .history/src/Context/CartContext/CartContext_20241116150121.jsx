import { createContext, useState } from "react"


const CartContext = ({children}) => {

const AddCartContext = createContext()


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
