import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/ecg-white-logo.webp';

const Navbar = () => {
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
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Our History', href: '/history' },
    { id: 3, text: 'About Us', href: '/about' },
    { id: 4, text: 'Contact Us', href: '/contact' },
  ];

  return (
    <div
      className="absolute top-5 sm:top-5 md:top-5 lg:top-5 mediumLaptop:top-5 xl:top-5 2xl:top-10 largestLaptop:top-10
    left-0 w-full z-10 "
    >
      <div className="bg-transparent flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-24 sm:w-24 md:w-24 lg:w-32 mediumLaptop:w-32 xl:w-32 2xl:w-40 largestLaptop:w-56
                     ml-3 sm:ml-3 md:ml-8 lg:ml-16 mediumLaptop:ml-16 xl:ml-16 2xl:ml-16 largestLaptop:ml-44" // Responsive width for different screen sizes
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex mx-20 sm:mx-20 md:mx-14 lg:mx-16 xl:mx-10 2xl:mx-36 largestLaptop:mx-44">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-2  sm:px-2 md:px-2 lg:px-4 xl:px-4 2xl:px-4 
                ml-2 sm:ml-2 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 largestLaptop:ml-0 text-base md:text-xs lg:text-sm mediumLaptop:text-lg xl:text-lg  2xl:text-lg largestLaptop:text-3xl cursor-pointer relative group"
            >
              <a href={item.href} className="inline-block">
                {item.text}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right group-hover:origin-bottom-left duration-300"></span>
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

export default Navbar;
