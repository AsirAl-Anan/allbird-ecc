import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
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

  const ProfileDropdown = () => (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      <NavLink
        to="/profile"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Settings
      </NavLink>
      <NavLink
        to="/logout"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </NavLink>
    </div>
  );

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
                className={`text-sm font-medium hover:opacity-70 ${link.className || ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="text-2xl font-bold font-pacifico">Logo</div>

          <div className="flex items-center space-x-8">
            {secondaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-sm font-medium hover:opacity-70"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center"
                >
                  <img
                    alt="Profile"
                    src="https://www.gravatar.com/avatar/?d=mp"
                    className="rounded-full w-10 cursor-pointer hover:opacity-70"
                  />
                </button>
                {isProfileDropdownOpen && <ProfileDropdown />}
              </div>
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-70" />
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
          <div className="text-xl font-bold font-pacifico">Logo</div>
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center"
              >
                <img
                  alt="Profile"
                  src="https://www.gravatar.com/avatar/?d=mp"
                  className="rounded-full w-10 cursor-pointer hover:opacity-70"
                />
              </button>
              {isProfileDropdownOpen && <ProfileDropdown />}
            </div>
            <ShoppingCart className="w-6 h-6" />
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
    </>
  );
};

export default Navbar;