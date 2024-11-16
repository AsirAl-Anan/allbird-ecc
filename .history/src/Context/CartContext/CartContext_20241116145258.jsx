import { createContext, useState } from "react"


const CartContext = () => {

const AddCartContext = createContext()


const [cart, setCart] = useState([])

  return (
    <div>
      <AddCartContext value={va}>

      </AddCartContext>
    </div>
  )
}

export default CartContext
