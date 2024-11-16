import { createContext, useState } from "react"


const CartContext = () => {

const AddCartContext = createContext()


const [cart, setCart] = useState([])

  return (
    <div>
      <AddCartContext value={value}>

      </AddCartContext>
    </div>
  )
}

export default CartContext
