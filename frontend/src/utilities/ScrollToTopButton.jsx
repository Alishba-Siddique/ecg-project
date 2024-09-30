import React, { useState, useEffect } from 'react';
import { GoChevronUp } from "react-icons/go";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    console.log(window.pageYOffset); // For debugging
    setVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check visibility on mount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='z-50'>
      {visible && (
        <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center 
          hover:bg-black transition-opacity duration-500 z-50 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} 
          sm:right-8 sm:bottom-8 sm:w-12 sm:h-12 lg:right-10 lg:bottom-10 lg:w-14 lg:h-14`}
        >
          <GoChevronUp size={30} className='text-white'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
