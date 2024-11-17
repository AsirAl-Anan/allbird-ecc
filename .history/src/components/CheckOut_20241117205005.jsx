import React, { useEffect, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useContext } from 'react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import visa from '../icons/visa-svgrepo-com.svg'
import amex from '../icons/amex-svgrepo-com.svg'
import mastercard from '../icons/mastercard-svgrepo-com.svg'
import discover from '../icons/discover-svgrepo-com.svg'
import discover from '../icons/discover-svgrepo-com.svg'
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
                PayPal
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