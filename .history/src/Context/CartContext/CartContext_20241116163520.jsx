import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {

    const addTocart = (product) =>{
        console.log('product: ',product)
        const exists =
    }


const [cart, setCart] = useState([])

 const value ={
    cart,
    setCart,
    addTocart
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
