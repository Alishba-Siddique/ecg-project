import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-transparent text-green-500 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img src="public/ecg-logo-full.png" alt="ECG-Logo" className="h-24 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#our-history" className="hover:text-yellow-400">
            Our History
          </a>
          <a href="#about-us" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-yellow-400">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4">
          <a
            href="#our-history"
            className="hover:text-green-500 text-center"
            onClick={toggleMenu}
          >
            Our History
          </a>
          <a
            href="#about-us"
            className="hover:text-green-500 text-center"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="hover:text-green-500 text-center"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
