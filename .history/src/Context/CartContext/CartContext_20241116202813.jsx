import { Item } from "@radix-ui/react-navigation-menu"
import { createContext, useState } from "react"

export const AddCartContext = createContext(null)


const CartContext = ({children}) => {

    

const [cart, setCart] = useState([])

const cartLength = cart.reduce((total, item) => total + item.quantity, 0);



const addTocart = (product) =>{
    
    const exists = cart.find((item)=> item.id === product.id)
    
    if(exists){
     
      
        setCart(cart.map(item => 
            item.id === product.id 
                ? {...item, quantity: item.quantity + 1}
                : item
        ))
    } else {
        setCart([...cart,{... product , quantity: 1}])
    }
}
 
const increaseItem = (cartItem) =>{
    setCart(
        cart.map(
            (item) =>  item.id === cartItem.id ? {...cartItem, quantity: item.quantity + 1} : item
        )
    )
}
const decreaseItem = (cartItem) =>{
    

    setCart(
        cart.map(
            (item) =>  item.id === cartItem.id ? {...cartItem, quantity: item.quantity - 1} : item ,
        ).filter((item) => item.quantity >  0)
    )
}
const removeItem = (cartItem) => {
  setCart(
    cart.filter(
        (item) => item.id !== cartItem.id
    )
  )
}
 const value ={
    cart,
    setCart,
    addTocart,
    cartLength,
    increaseItem,
    decreaseItem,
    removeItem
 }

console.log(cart)
  return (
    <div>
      <AddCartContext.Provider value={value}>
    {children}
      </AddCartContext.Provider>
    </div>
  )
}

export default CartContext
