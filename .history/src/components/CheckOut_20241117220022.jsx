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
  const navigate = useNavigate();
  const { cartTotal, checkOutProduct, checkOutCheck } = useContext(AddCartContext);
  const { user } = useContext(AuthContext);

  if (!checkOutCheck) {
    return null;
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
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Checkout</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="bg-[#5469d4] text-white py-2 sm:py-3 rounded">
                Shop Pay
              </button>
              <div className="bg-[#ffc439] py-2 sm:py-3 rounded h-[40px] sm:h-[48px] flex items-center justify-center">
                <Paypal className="h-6" />
              </div>
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
                className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Email me with news and offers</span>
              </label>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Delivery</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country/Region</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border rounded p-2 sm:p-3 appearance-none"
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
                  className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Company (optional)</label>
              <input type="text" className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
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
                className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <div className="relative">
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border rounded p-2 sm:p-3 appearance-none text-sm sm:text-base"
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
                  className="w-full border rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Text me with news and offers</span>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            {checkOutProduct.map((product) => (
              <CheckOutProducts key={product.id} product={product} />
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Shipping</span>
                <span className="text-gray-500">Free shipping charge</span>
              </div>
              <div className="flex justify-between font-medium text-sm sm:text-base">
                <span>Total</span>
                <span>
                  <span className="text-gray-500 text-xs sm:text-sm">USD</span> ${cartTotal}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
