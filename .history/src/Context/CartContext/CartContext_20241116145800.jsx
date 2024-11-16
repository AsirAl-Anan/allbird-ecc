import { createContext, useState } from "react"


const CartContext = () => {

const AddCartContext = createContext()


const [cart, setCart] = useState([])

 const value ={
    cart,
    setCart
 }

  return (
    <div>
      <AddCartContext.Provider value={value}>

      </AddCartContext.Provider>
    </div>
  )
}

export default CartContext
