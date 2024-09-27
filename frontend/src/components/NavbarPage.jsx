import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/ecg-white-logo.png';
import logoGreen from '../assets/images/ecg-logo.png';

const NavbarPage = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Ref for the navbar element
  const navRef = useRef();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  // Array containing navigation items with href links
  const navItems = [
    { id: 1, text: 'Our History', href: '#history' },
    { id: 2, text: 'About Us', href: '#about' },
    { id: 3, text: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="bg-transparent flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-24 md:w-40 lg:w-32 ml-3 md:ml-16" // Responsive width for different screen sizes
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex mx-20">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="md:px-2 lg:px-4 sm:ml-2 md:ml-0 text-base md:text-xs lg:text-lg cursor-pointer relative group"
            >
              <a href={item.href} className="inline-block">
                {item.text}
                <span className="absolute   left-0 bottom-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right group-hover:origin-bottom-left duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={navRef} // Reference to the mobile menu
          className={
            nav
              ? 'fixed md:hidden right-0 top-0 w-[40%] h-full  bg-[#ffffff] opacity-95 ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
          }
        >
          {/* Mobile Logo */}
          {/* <img
            src={logoGreen}
            alt="Logo"
            className="w-20 md:w-20 lg:w-48 m-4 " // Responsive logo size in mobile menu
          /> */}

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b-gray-600 font-sora text-xs first:mt-6 text-primary hover:text-secondary duration-300 hover:bg-gray-100 cursor-pointer border-gray-400"
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;
