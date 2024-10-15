import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/ecg-white-logo.webp';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

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

  const scrollToSection = (sectionId) => {
    navigate('/'); // Navigate to homepage

    // Scroll after the homepage is rendered
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'Our History', to: '/history' },
    { id: 3, text: 'About Us', onClick: () => scrollToSection('team-sec') }, 
    { id: 4, text: 'Contact Us', to: '/contact' },
  ];

  return (
    <div className="absolute top-5 sm:top-5 md:top-5 lg:top-5 mediumLaptop:top-5 xl:top-5 2xl:top-10 largestLaptop:top-10
    left-0 w-full z-10 ">
      <div className="bg-transparent flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-24 sm:w-24 md:w-24 lg:w-32 mediumLaptop:w-32 xl:w-32 2xl:w-40 largestLaptop:w-56
                     ml-3 sm:ml-3 md:ml-8 lg:ml-16 mediumLaptop:ml-16 xl:ml-16 2xl:ml-16 largestLaptop:ml-44"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex mx-20 sm:mx-20 md:mx-14 lg:mx-16 xl:mr-20 2xl:mx-36 largestLaptop:mx-44 font-sora">
          {navItems.map((item) => (
            <li key={item.id}
            className="px-2 sm:px-2 md:px-2 lg:px-4 xl:px-4 2xl:px-4 
                ml-2 sm:ml-2 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 largestLaptop:ml-0
                 text-base md:text-xs lg:text-sm mediumLaptop:text-sm xl:text-sm  2xl:text-sm largestLaptop:text-lg cursor-pointer relative group"
             >
              {item.onClick ? (
                <button onClick={item.onClick} className="inline-block">
                  {item.text}
                </button>
              ) : (
                <NavLink to={item.to} className="inline-block">
                  {item.text}
                </NavLink>
              )}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right group-hover:origin-bottom-left duration-300"></span>
              </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={navRef}
          className={
            nav
              ?'fixed md:hidden right-0 top-0 w-[40%] h-full  bg-[#ffffff] opacity-95 ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
          }
        >
          {navItems.map((item) => (
            <li key={item.id}  className='p-4 border-b-gray-600 font-sora text-xs first:mt-6 text-primary hover:text-secondary duration-300 hover:bg-gray-100 cursor-pointer border-gray-400'>
              {item.onClick ? (
                <button onClick={item.onClick}>{item.text}</button>
              ) : (
                <NavLink to={item.to}>{item.text}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
