import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center 
          hover:bg-accent transition-opacity duration-500 z-50 ease-in-out opacity-0 sm:right-8 sm:bottom-8 sm:w-12 sm:h-12 lg:right-10 lg:bottom-10 lg:w-14 lg:h-14 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <i className="fa-solid fa-chevron-up text-white2"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
