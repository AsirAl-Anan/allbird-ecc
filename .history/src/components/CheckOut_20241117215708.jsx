import React, { useEffect, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useContext } from 'react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext/UserContext';

import Visa from '../icons/Visa';
import Amex from '../icons/Amex';
import Mastercard from '../icons/Mastercard';
import Paypal from '../icons/Paypal';

const CheckoutPage = () => {
  const navigate = useNavigate()
   
  const {cartTotal, checkOutProduct, checkOutCheck} = useContext(AddCartContext)
  const {user} = useContext(AuthContext)
  
  if(!checkOutCheck){
    return null
  }

  const [email, setEmail] = useState(user ? user?.email : 'no email');
  const [country, setCountry] = useState('United States');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Checkout</h1>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
              <button className="bg-[#5469d4] text-white py-2 sm:py-3 rounded text-sm sm:text-base">
                Shop Pay
              </button>
              <div className="bg-[#ffc439] py-2 sm:py-3 rounded h-[40px] sm:h-[48px] flex items-center justify-center">
                <Paypal className="h-5 sm:h-6" />
              </div>
            </div>
            
            <div className="relative text-center my-4">
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-gray-500 text-sm">
                OR
              </span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Account</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2 text-sm sm:text-base"
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs sm:text-sm">Email me with news and offers</span>
              </label>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-4">Delivery</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country/Region</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border rounded p-2 appearance-none text-sm sm:text-base"
                >
                  <option>United States</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Company (optional)</label>
              <input type="text" className="w-full border rounded p-2 text-sm sm:text-base" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded p-2 text-sm sm:text-base"
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
                className="w-full border rounded p-2 text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <div className="relative">
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border rounded p-2 appearance-none text-sm sm:text-base"
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
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs sm:text-sm">Text me with news and offers</span>
              </label>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-4">Shipping method</h2>
            <div className="bg-gray-100 p-3 sm:p-4 rounded mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Enter your shipping address to view available shipping methods.</p>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-4">Payment</h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>

            <div className="border rounded mb-4">
              <label className="flex items-center p-3 sm:p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                  className="mr-2"
                />
                <span className="text-sm sm:text-base">Credit card</span>
                <div className="ml-auto flex space-x-2">
                  <Visa className="h-5 sm:h-6" />
                  <Mastercard className="h-5 sm:h-6" />
                  <Amex className="h-5 sm:h-6" />
                </div>
              </label>
              {paymentMethod === 'credit-card' && (
                <div className="p-3 sm:p-4 border-t">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card number"
                    className="w-full border rounded p-2 mb-2 text-sm sm:text-base"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="Expiration date (MM / YY)"
                      className="w-full border rounded p-2 text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                      placeholder="Security code"
                      className="w-full border rounded p-2 text-sm sm:text-base"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="border rounded mb-4">
              <label className="flex items-center p-3 sm:p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                <span className="text-sm sm:text-base">PayPal</span>
                <div className="ml-auto">
                  <Paypal className="h-5 sm:h-6" />
                </div>
              </label>
            </div>

            <div className="border rounded mb-4">
              <label className="flex items-center p-3 sm:p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="afterpay"
                  checked={paymentMethod === 'afterpay'}
                  onChange={() => setPaymentMethod('afterpay')}
                  className="mr-2"
                />
                <span className="text-sm sm:text-base">Afterpay</span>
                <img src="/afterpay.png" alt="Afterpay" className="h-5 sm:h-6 ml-auto" />
              </label>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-4">Remember me</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs sm:text-sm">Save my information for a faster checkout</span>
              </label>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                placeholder="Mobile phone number"
                className="w-full border rounded p-2 text-sm sm:text-base"
              />
              <p className="text-xs sm:text-sm text-red-500 mt-1">The specified phone number does not match the expected pattern.</p>
            </div>

            <button className="w-full bg-black text-white py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">
              Pay now
            </button>

            <p className="text-xs text-center text-gray-500">
              By placing your order you agree to our Terms of Service, Privacy Policy, and Refunds Policy.
            </p>
          </div>

          {/* Right Column */}
          <div className="order-1 lg:order-2 bg-white p-4 sm:p-6 rounded-lg shadow">
            {
              checkOutProduct.map((product) => <CheckOutProducts key={product.id} product={product} />)
            }
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base">Subtotal</span>
                <span className="text-sm sm:text-base">${cartTotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm sm:text-base">Shipping</span>
                <span className="text-xs sm:text-sm text-gray-500">Free shipping charge</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-sm sm:text-base">Total</span>
                <span><span className="text-xs sm:text-sm text-gray-500">USD</span> <span className="text-sm sm:text-base">${cartTotal}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckOutProducts = ({ product }) => {
  return (
    <>
      <div>
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-4">
            <img src={product.image} alt="Product" className="w-full h-full object-cover rounded" />
            <span className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
              {product.quantity}
            </span>
          </div>