import { Item } from "@radix-ui/react-navigation-menu"
import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {

    

const [cart, setCart] = useState([])




const addTocart = (product) =>{
    
    const exists = cart.find((item)=> item.id === product.id)
    if(exists){
       
      
        cart.map((Item)=> Item.id === product.id ? setCart([...cart, {...item, quantity : item.quantity + 1}]) : item )
    } else {
        setCart([...cart,{... product , quantity: 1}])
    }
}
console.log(cart)
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
