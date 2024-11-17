import { createContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bro
export const AddCartContext = createContext(null);

const CartContext = ({ children }) => {
  const navigate = useNavigate(); // Replace redirect with useNavigate
  const [cart, setCart] = useState([]);
  const [checkOutCheck, setCheckOutCheck] = useState(false);
  const [checkOutProduct, setCheckOutProduct] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate cart total whenever cart changes
  useEffect(() => {
    const cartTotalStr = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setCartTotal(parseFloat(cartTotalStr).toFixed(2));
  }, [cart]);

  const addTocart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast("Added to cart");
  };

  const increaseItem = (cartItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseItem = (cartItem) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (cartItem) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== cartItem.id));
  };

  // Improved checkout function using async/await properly
  const checkout = async () => {
    if (cart.length === 0) {
      toast("Cart is empty");
      return;
    }

    try {
      // First update checkout products
      setCheckOutProduct(cart);
      
      // Then update checkout status
      setCheckOutCheck(true);
      
      // Navigate to checkout page after state updates
     redirect("/checkout");
    } catch (error) {
      console.error("Checkout error:", error);
      toast("Error during checkout");
    }
  };

  // Reset checkout state when unmounting or when needed
  const resetCheckout = () => {
    setCheckOutCheck(false);
    setCheckOutProduct(null);
  };

  const value = {
    cart,
    setCart,
    addTocart,
    cartLength,
    increaseItem,
    decreaseItem,
    removeItem,
    cartTotal,
    checkout,
    checkOutProduct,
    checkOutCheck,
    resetCheckout, // Added reset function to value object
  };

  return (
    <AddCartContext.Provider value={value}>
      {children}
    </AddCartContext.Provider>
  );
};

export default CartContext;