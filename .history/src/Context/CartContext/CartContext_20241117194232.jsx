import { Item } from "@radix-ui/react-navigation-menu"
import { createContext, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export const AddCartContext = createContext(null)


//main function
const CartContext = ({children}) => {


    
const navigate = useNavigate()
const [cart, setCart] = useState([])
const [checkOutCheck, setCheckOutCheck] = useState(false)
const [checkOutProduct, setCheckOutProduct] = useState(false)

const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

const cartTotalStr = cart.reduce((total, item) => total + item.price * item.quantity, 0) 

const cartTotal = parseFloat(cartTotalStr).toFixed(2)

const addTocart = (product) =>{
    
    const exists = cart.find((item)=> item.id === product.id)
    
    if(exists){
     
      
        setCart(cart.map(item => 
            item.id === product.id 
                ? {...item, quantity: item.quantity + 1}
                : item
              
        ))
        toast('Added to cart')
    } else {
        setCart([...cart,{... product , quantity: 1}])
        toast('Added to cart')
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


//checkout logic

const checkout = async () =>{
 if(cart.length > 0){
  setCheckOutProduct(cart)
  setCheckOutCheck(!checkOutCheck)
  Navigator
  console.log('click')
 } else {
  toast('Cart is empty')
 }
  

}
console.log("checkout:" ,checkOutCheck, checkOutProduct)
 const value ={
    cart,
    setCart,
    addTocart,
    cartLength,
    increaseItem,
    decreaseItem,
    removeItem,
    cartTotal,
    checkout
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
