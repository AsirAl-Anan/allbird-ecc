import { createContext, useState } from "react"


const CartContext = () => {

const AddCartContext = createContext()


const [cart, setCart] = useState([])

  return (
    <div>
      <AddCartContext></AddCartContext>
    </div>
  )
}

export default CartContext
