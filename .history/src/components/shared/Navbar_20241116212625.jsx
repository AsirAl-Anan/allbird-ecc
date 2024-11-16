import { useState, useRef, useEffect, useContext } from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartDrawer from '../cart-drawer';
import { AddCartContext } from '../../Context/CartContext/CartContext';
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {  user , userSignOut} = useContext(AuthContext);

 
const {cartLength} = useContext(AddCartContext)
  //log in function
function ifLoggedIn(){
  if(user !== null || undefined){
    return (
      <>
      <ProfileDropdownIfLoggedIn />
      </>
    ) 
    }
    else {
      return ( 
        <ProfileDropdownIfNotLoggedIn />
      )
  }
}


  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  

  //Log out function
  const handleLogOut = async () => {
    try {
      await userSignOut();
      redirect('/')
      toast('logged out')
    }
    catch (error) { 
      toast.error(error);
    }

  }
   

    
  
  // Close dropdown 
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the dropdown and not on a NavLink
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('a')
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MEN', path: '/men' },
    { name: 'WOMEN', path: '/women' },
    { name: 'JEWELERY', path: '/jewelery' },
    { name: 'ELECTRONICS', path: '/electronics' },
    { name: 'All PRODUCTS', path: '/products', className: 'text-red-600' },
  ];

  const secondaryLinks = [
    { name: 'RESALE', path: '/resale' },
    { name: 'STORES', path: '/stores' },
    
  ];

  // Profile DropDown
  const ProfileDropdownIfNotLoggedIn = () => (
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
      ref={dropdownRef}
    >
     
      <NavLink
        to="/settings"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        Settings
      </NavLink>
      <NavLink
        to="/register"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
       Sign Up/Sign In
      </NavLink>
    </div>
  );
   // Profile DropDown if loggedIn
   const ProfileDropdownIfLoggedIn = () => (
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
      ref={dropdownRef}
    >
      <NavLink
        to="/profile"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        Settings
      </NavLink>
      <NavLink
        to="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={handleLogOut}
      >
       Logout
      </NavLink>
    </div>
  )

  return (
    <>
      <div className="h-[60px] lg:h-[72px]" />

      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4 border-b shadow-sm">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:opacity-70 hover:underline font-serif  ${link.className || ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <NavLink to={'/'} className="text-2xl font-bold font-pacifico">All Bird</NavLink>

          <div className="flex items-center space-x-8">
            {secondaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-sm font-medium hover:underline hover:opacity-70"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center"
                >
                  <img
                    alt="Profile"
                    src={user?.photoURL ? user.photoURL : "https://www.gravatar.com/avatar/?d=mp"}

                    className="rounded-full w-10 cursor-pointer hover:opacity-70"
                  />
                </button>
                {isProfileDropdownOpen && ifLoggedIn()}
              </div>

              {
                ////cart icon/button
              }
            <div className="flex items-center">
            <div className="flex items-center">
  <div className="relative">
    <ShoppingCart 
      className="w-5 h-5 cursor-pointer hover:opacity-70" 
      onClick={() => setIsCartOpen(true)} 
    />
    <span className="absolute -top-1 -right-2 text-sm bg-red-500 rounded">
      {cartLength}
    </span>
  </div>
</div>
</div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-xl font-bold font-pacifico">AllBird</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center"
              >
                <img
                  alt="Profile"
                  src={user !== null && user.photoURL !== null ? user.photoURL : "https://www.gravatar.com/avatar/?d=mp"}
                  className="rounded-full w-10 cursor-pointer hover:opacity-70"
                />
              </button>
              {isProfileDropdownOpen && ifLoggedIn()}
            </div>
            <div className="flex items-center">
  <div className="relative">
    <ShoppingCart 
      className="w-5 h-5 cursor-pointer hover:opacity-70" 
      onClick={() => setIsCartOpen(true)} 
    />
    <span className="absolute -top-1 -right-2 text-sm">
      {cartLength}
    </span>
  </div>
</div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium border-b hover:bg-gray-50 ${
                    link.className || ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              {secondaryLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="px-4 py-3 text-sm font-medium border-b hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
      <CartDrawer 
  isOpen={isCartOpen} 
  onClose={() => setIsCartOpen(false)} 
/>
    </>
  );
};

export default Navbar;