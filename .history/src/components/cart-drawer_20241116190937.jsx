'use client'
import { useContext } from 'react'
import { X } from 'lucide-react'
import { AddCartContext } from '../Context/CartContext/CartContext'
export default function CartDrawer({ isOpen, onClose }) {

 const {cart} = useContext(AddCartContext)

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6" />
            </button>
            <span className="ml-2 text-lg font-semibold">Your cart</span>
          </div>
          <div className="text-sm text-blue-600">Congrats! You get free standard shipping.</div>
        </div>
  
        {/* Cart Items */}
        <div className="overflow-y-auto h-[calc(100vh-240px)] p-4">
         {
            cart.map((item) => {
                return (
                    <>
                     <SingleCartItem cartItem={item} />
                    </>
                )
            } )
         } 
       
          
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t">
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="font-medium">$470</span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800">
              PROCEED TO CHECKOUT
            </button>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <button className="bg-[#5A31F4] text-white py-2 rounded text-sm">Shop Pay</button>
              <button className="bg-[#FFB800] text-black py-2 rounded text-sm">Amazon Pay</button>
              <button className="bg-[#FFC439] text-black py-2 rounded text-sm">PayPal</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
 
}

const SingleCartItem = ({cartItem}) => {
    console.log("cart:",cartItem)
    return (
        <>
        <div className="mb-4 pb-4 border-b">
            <div className="flex gap-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium sm:text-lg md:text-xl ">{cartItem.title}</h3>
                    <p className="text-sm text-gray-600">{cartItem.description.length > 20 ? cartItem.description.slice(0,20) : cartItem.description + '...'}</p>
                   
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="mr-2">Qty:</span>
                    <select className="border rounded px-2 py-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <span className="font-medium">$100</span>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}