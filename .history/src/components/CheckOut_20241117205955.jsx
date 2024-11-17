import React, { useEffect, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useContext } from 'react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import   visa from '../icons/visa-svgrepo-com.svg'
import    amex from '../icons/amex-svgrepo-com.svg'
import  mastercard from '../icons/mastercard-svgrepo-com.svg'
import    discover from '../icons/discover-svgrepo-com.svg'
const Paypal = () => {
   
<svg width="800px" height="800px" viewBox="0 -140 780 780" enable-background="new 0 0 780 500" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><rect width="780" height="500" fill="#FFF"/><path d="m168.38 169.85c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.214l-21.265 133.48c-0.221 1.311 0.107 2.51 0.981 3.6 0.869 1.093 1.962 1.636 3.271 1.636h24.864c4.361 0 6.758-2.068 7.198-6.216l5.888-35.985c0.215-1.744 0.982-3.162 2.291-4.254 1.308-1.09 2.944-1.804 4.907-2.13 1.963-0.324 3.814-0.487 5.562-0.487 1.743 0 3.814 0.11 6.217 0.327 2.397 0.218 3.925 0.324 4.58 0.324 18.756 0 33.478-5.285 44.167-15.866 10.684-10.577 16.032-25.244 16.032-44.004 0-12.868-4.202-22.192-12.597-27.975zm-26.99 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.597-19.629 3.597l-10.797 0.328 5.563-35.007c0.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.802 3.924 15.869z" fill="#003087"/><path d="m720.79 161.18h-24.208c-2.405 0-3.821 1.2-4.253 3.599l-21.267 136.1-0.328 0.654c0 1.096 0.437 2.127 1.311 3.109 0.868 0.979 1.963 1.471 3.271 1.471h21.595c4.138 0 6.429-2.068 6.871-6.215l21.265-133.81v-0.325c-2e-3 -3.053-1.424-4.58-4.257-4.58z" fill="#009CDE"/><path d="m428.31 213.86c0-1.088-0.438-2.126-1.306-3.106-0.875-0.981-1.857-1.474-2.945-1.474h-25.191c-2.404 0-4.366 1.096-5.89 3.271l-34.679 51.04-14.394-49.075c-1.096-3.488-3.493-5.236-7.198-5.236h-24.54c-1.093 0-2.075 0.492-2.942 1.474-0.875 0.98-1.309 2.019-1.309 3.106 0 0.44 2.127 6.871 6.379 19.303 4.252 12.434 8.833 25.848 13.741 40.244 4.908 14.394 7.468 22.031 7.688 22.898-17.886 24.43-26.826 37.518-26.826 39.26 0 2.838 1.417 4.254 4.253 4.254h25.191c2.399 0 4.361-1.088 5.89-3.271l83.427-120.4c0.433-0.433 0.651-1.193 0.651-2.289z" fill="#003087"/><path d="m662.89 209.28h-24.865c-3.056 0-4.904 3.599-5.559 10.797-5.677-8.72-16.031-13.088-31.083-13.088-15.704 0-29.065 5.89-40.077 17.668-11.016 11.779-16.521 25.631-16.521 41.551 0 12.871 3.761 23.121 11.285 30.752 7.524 7.639 17.611 11.451 30.266 11.451 6.323 0 12.757-1.311 19.3-3.926 6.544-2.617 11.665-6.105 15.379-10.469 0 0.219-0.222 1.198-0.654 2.942-0.44 1.748-0.655 3.06-0.655 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.138 0 6.541-2.068 7.193-6.216l13.415-85.389c0.215-1.309-0.111-2.507-0.981-3.599-0.876-1.087-1.964-1.634-3.273-1.634zm-42.694 64.452c-5.562 5.453-12.269 8.179-20.12 8.179-6.328 0-11.449-1.742-15.377-5.234-3.928-3.483-5.891-8.282-5.891-14.396 0-8.064 2.727-14.884 8.181-20.446 5.446-5.562 12.214-8.343 20.284-8.343 6.102 0 11.174 1.8 15.212 5.397 4.032 3.599 6.055 8.563 6.055 14.888-1e-3 7.851-2.783 14.505-8.344 19.955z" fill="#009CDE"/><path d="m291.23 209.28h-24.864c-3.058 0-4.908 3.599-5.563 10.797-5.889-8.72-16.25-13.088-31.081-13.088-15.704 0-29.065 5.89-40.078 17.668-11.016 11.779-16.521 25.631-16.521 41.551 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-0.875 2.616-1.309 4.907-1.309 6.868 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.216l13.413-85.389c0.215-1.309-0.112-2.507-0.981-3.599-0.873-1.087-1.962-1.634-3.27-1.634zm-42.695 64.614c-5.563 5.351-12.382 8.017-20.447 8.017-6.329 0-11.4-1.742-15.214-5.234-3.819-3.483-5.726-8.282-5.726-14.396 0-8.064 2.725-14.884 8.18-20.446 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.398 4.032 3.599 6.052 8.563 6.052 14.888 0 8.069-2.781 14.778-8.343 20.116z" fill="#003087"/><path d="m540.04 169.85c-8.398-5.774-19.356-8.668-32.879-8.668h-52.02c-4.364 0-6.765 2.073-7.197 6.214l-21.266 133.48c-0.221 1.312 0.106 2.511 0.981 3.601 0.865 1.092 1.962 1.635 3.271 1.635h26.826c2.617 0 4.361-1.416 5.235-4.252l5.89-37.949c0.216-1.744 0.98-3.162 2.29-4.254 1.309-1.09 2.943-1.803 4.908-2.13 1.962-0.324 3.812-0.487 5.562-0.487 1.743 0 3.814 0.11 6.214 0.327 2.399 0.218 3.931 0.324 4.58 0.324 18.76 0 33.479-5.285 44.168-15.866 10.688-10.577 16.031-25.244 16.031-44.004 2e-3 -12.867-4.199-22.191-12.594-27.974zm-33.534 53.82c-4.799 3.271-11.997 4.906-21.592 4.906l-10.47 0.328 5.562-35.007c0.432-2.397 1.849-3.597 4.252-3.597h5.887c4.798 0 8.614 0.218 11.454 0.653 2.831 0.44 5.562 1.799 8.179 4.089 2.618 2.291 3.926 5.618 3.926 9.98 0 9.16-2.402 15.375-7.198 18.648z" fill="#009CDE"/></svg>
}



const CheckoutPage = () => {
   const navigate = useNavigate()

  
   const {cartTotal,checkOutProduct,checkOutCheck , } = useContext(AddCartContext)

  if(!checkOutCheck){
    
   
    return null
  }

  const [email, setEmail] = useState('legendunknown888@gmail.com');
  const [country, setCountry] = useState('United States');
  const [firstName, setFirstName] = useState('Anan');
  const [lastName, setLastName] = useState('asir');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [giftCard, setGiftCard] = useState('');

  

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h1 className="text-2xl font-semibold mb-4"> Checkout</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="bg-[#5469d4] text-white py-3 rounded">
                Shop Pay
              </button>
              <button className="bg-[#ffc439] py-3 rounded">
              <Paypal className />
              </button>
            </div>
            <div className="relative text-center my-4">
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-gray-500">
                OR
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Account</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Email me with news and offers</span>
              </label>
            </div>
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country/Region</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border rounded p-2 appearance-none"
                >
                  <option>United States</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Company (optional)</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded p-2"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Apartment, suite, etc. (optional)</label>
              <input
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <div className="relative">
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border rounded p-2 appearance-none"
                  >
                    <option>Select state</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Text me with news and offers</span>
              </label>
            </div>
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <p className="text-sm text-gray-600">Enter your shipping address to view available shipping methods.</p>
            </div>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
            <div className="border rounded mb-4">
              <label className="flex items-center p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                  className="mr-2"
                />
                <span>Credit card</span>
                <div className="ml-auto flex space-x-2">
                  <img src="/visa.png" alt="Visa" className="h-6" />
                  <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="/amex.png" alt="Amex" className="h-6" />
                  <img src="/discover.png" alt="Discover" className="h-6" />
                </div>
              </label>
              {paymentMethod === 'credit-card' && (
                <div className="p-4 border-t">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card number"
                    className="w-full border rounded p-2 mb-2"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="Expiration date (MM / YY)"
                      className="w-full border rounded p-2"
                    />
                    <input
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                      placeholder="Security code"
                      className="w-full border rounded p-2"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="border rounded mb-4">
              <label className="flex items-center p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                <span>PayPal</span>
                <img src="/paypal.png" alt="PayPal" className="h-6 ml-auto" />
              </label>
            </div>
            <div className="border rounded mb-4">
              <label className="flex items-center p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="afterpay"
                  checked={paymentMethod === 'afterpay'}
                  onChange={() => setPaymentMethod('afterpay')}
                  className="mr-2"
                />
                <span>Afterpay</span>
                <img src="/afterpay.png" alt="Afterpay" className="h-6 ml-auto" />
              </label>
            </div>
            <h2 className="text-xl font-semibold mb-4">Remember me</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Save my information for a faster checkout</span>
              </label>
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Mobile phone number"
                className="w-full border rounded p-2"
              />
              <p className="text-sm text-red-500 mt-1">The specified phone number does not match the expected pattern.</p>
            </div>
            <button className="w-full bg-black text-white py-3 rounded mb-4">
              Pay now
            </button>
            <p className="text-xs text-center text-gray-500">
              By placing your order you agree to our Terms of Service, Privacy Policy, and Refunds Policy.
            </p>
          </div>

          {/* Right Column */}
          <div  className="bg-white p-6 rounded-lg shadow">
            {
                checkOutProduct.map((product)=>   <CheckOutProducts key={product.id} product={product} />)
            }
          <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="text-gray-500">Free shipping charge</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span><span className="text-gray-500 text-sm">USD</span> ${cartTotal}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CheckOutProducts =({product})=>{
    return(
        <>
        <div>
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <img src={product.image} alt="Product" className="w-full h-full object-cover rounded" />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {product.quantity}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  
                </div>
                <p className="font-medium">{product.price}</p>
              </div>
              <div className="flex mb-4">
                <input
                  type="text"
                //   value={giftCard}
                //   onChange={(e) => setGiftCard(e.target.value)}
                  placeholder="Gift card or discount code"
                  className="flex-grow border rounded-l p-2"
                />
                <button className="bg-gray-200 text-gray-800 px-4 rounded-r">Apply</button>
              </div>
              
            </div>

        </>
    )
}

export default CheckoutPage;