import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {

    

const [cart, setCart] = useState([])

 const value ={
    cart,
    setCart,
    addTocart
 }
 const addTocart = (product) =>{
    console.log('product: ',product)
    const exists = cart.find((item)=> item.id === product.id)
    if(exists){
        setCart(...cart{})
    }
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
