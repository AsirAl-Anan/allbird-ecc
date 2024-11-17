import React, { useState, useContext } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Visa from '../icons/Visa';
import Amex from '../icons/Amex';
import Mastercard from '../icons/Mastercard';
import Paypal from '../icons/Paypal';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartTotal, checkOutProduct, checkOutCheck } = useContext(AddCartContext);

  if (!checkOutCheck) {
    return null;
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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            
            {/* Payment Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="bg-[#5469d4] text-white py-3 rounded flex items-center justify-center">
                Shop Pay
              </button>
              <button className="bg-[#ffc439] py-3 rounded flex items-center justify-center">
                <Paypal className="w-20 h-6" />
              </button>
            </div>

            {/* Divider */}
            <div className="relative text-center my-6">
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-gray-500">
                OR
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Account Section */}
              <div>
                <label className="block text-sm font-medium mb-2">Account</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded p-3"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-sm">Email me with news and offers</span>
                </label>
              </div>

              {/* Delivery Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Delivery</h2>
                <div className="space-y-4">
                  {/* Country Select */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Country/Region</label>
                    <div className="relative">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border rounded p-3 appearance-none"
                      >
                        <option>United States</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border rounded p-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border rounded p-3"
                      />
                    </div>
                  </div>

                  {/* Payment Method Section */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Payment Method</h2>
                    <div className="border rounded">
                      <label className="flex items-center p-4">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit-card"
                          checked={paymentMethod === 'credit-card'}
                          onChange={() => setPaymentMethod('credit-card')}
                          className="mr-3"
                        />
                        <span className="mr-4">Credit card</span>
                        <div className="ml-auto flex items-center space-x-2">
                          <Visa className="w-10 h-6" />
                          <Mastercard className="w-10 h-6" />
                          <Amex className="w-10 h-6" />
                        </div>
                      </label>
                      {paymentMethod === 'credit-card' && (
                        <div className="p-4 border-t space-y-3">
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Card number"
                            className="w-full border rounded p-3"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              value={expirationDate}
                              onChange={(e) => setExpirationDate(e.target.value)}
                              placeholder="MM / YY"
                              className="w-full border rounded p-3"
                            />
                            <input
                              type="text"
                              value={securityCode}
                              onChange={(e) => setSecurityCode(e.target.value)}
                              placeholder="CVV"
                              className="w-full border rounded p-3"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border rounded">
                      <label className="flex items-center p-4">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mr-3"
                        />
                        <span className="mr-4">PayPal</span>
                        <Paypal className="w-20 h-6 ml-auto" />
                      </label>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <button className="w-full bg-black text-white py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
                    Pay ${cartTotal}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-1 lg:order-2 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-6">
              {checkOutProduct.map((product) => (
                <CheckOutProducts key={product.id} product={product} />
              ))}
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>
                    <span className="text-gray-500 text-sm mr-2">USD</span>
                    ${cartTotal}
                  </span>
                </div>
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
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-16 h-16 object-cover rounded"
        />
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
          {product.quantity}
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
      </div>
      <p className="font-medium whitespace-nowrap">${product.price}</p>
    </div>
  );
};

export default CheckoutPage;