import { Item } from "@radix-ui/react-navigation-menu"
import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {

    

const [cart, setCart] = useState([])

const [notCommon, setNotCommon] = useState({})
 

const addTocart = (product) =>{
    
    const exists = cart.find((item)=> item.id === product.id)
    
    if(exists){
       
      //(item)=> item.id === product.id ? setCart([...cart, {...item, quantity : item.quantity + 1}]) : item 
      cart.filter(
        (item) => item.id !== product.id ? setNotCommon(...item)
      )
        cart.map(
            (item) => console.log(item, cart)
        )
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
