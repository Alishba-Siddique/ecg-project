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
          className={`fixed  bg-secondary rounded-full flex items-center justify-center 
          hover:bg-black transition-opacity duration-500 z-50 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} 
          right-4 sm:right-8 md:right-8 lg:right-10 mediumLaptop:right-10 xl:right-10 2xl:right-14 largestLaptop:right-80
          w-10 sm:w-12 md:w-12 lg:w-14 mediumLaptop:w-14 xl:w-14 2xl:w-20 largestLaptop:w-20
          h-10 sm:h-12 md:h-12 lg:h-14 mediumLaptop:h-14 xl:h-14 2xl:h-20 largestLaptop:h-20
          bottom-4 sm:bottom-8 md:bottom-8 lg:bottom-10 mediumLaptop:bottom-10 xl:bottom-10 2xl:bottom-14 largestLaptop:bottom-14`}
        >
          <GoChevronUp size={30} className='text-white'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
