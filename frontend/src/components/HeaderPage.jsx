import { React, useState, useEffect } from 'react';
import ecgWhiteLogo from '../assets/images/ecg-white-logo.png';
import ecgLogo from '../assets/images/ecg-logo.png';

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-transparent text-white2  transition-transform duration-300  z-30 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container ml-2 sm:ml-2 md:ml-14 lg:ml-16 xl:ml-16 flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src={ecgWhiteLogo}
              alt="ECG-Logo"
              className="h-16 sm:h-16 md:h-16 lg:h-16 w-auto"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav
          className="hidden mr-2 sm:mr-24 md:mr-24 lg:mr-24 xl:mr-24 md:flex space-x-8
          text-lg sm:text-lg md:text-sm lg:text-xl xl:text-xl font-sora"
        >
          <a href="#our-history" className="hover:text-secondary">
            Our History
          </a>
          <a href="#about-us" className="hover:text-secondary">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-secondary">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl mx-6 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white2 bg-opacity-90 p-4 flex flex-col items-center font-sora space-y-4">
          <a
            href="#our-history"
            className="text-primary hover:text-secondary text-center"
            onClick={toggleMenu}
          >
            Our History
          </a>
          <a
            href="#about-us"
            className="text-primary hover:text-secondary text-center"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="text-primary hover:text-secondary text-center"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderPage;

// import { React, useState, useEffect } from 'react';
// import ecgWhiteLogo from '../assets/images/ecg-white-logo.png';
// import ecgLogo from '../assets/images/ecg-logo.png';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollDirection, setScrollDirection] = useState('down');

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Effect to handle scroll direction
//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setScrollDirection('down');
//       } else {
//         setScrollDirection('up');
//       }
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed w-full bg-transparent text-white2 transition-transform duration-300 z-50 ${
//         scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
//       }`}
//     >
//       <div className="container ml-2 sm:ml-2 md:ml-14 lg:ml-16 xl:ml-16 flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <a href="/">
//             <img
//               src={ecgWhiteLogo}
//               alt="ECG-Logo"
//               className="h-16 sm:h-16 md:h-16 lg:h-16 w-auto"
//             />
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <nav
//           className="hidden mr-2 sm:mr-24 md:mr-24 lg:mr-24 xl:mr-24 md:flex space-x-8
//         text-lg sm:text-lg md:text-sm lg:text-xl xl:text-xl font-sora"
//         >
//           <a href="#our-history" className="hover:text-secondary">
//             Our History
//           </a>
//           <a href="#about-us" className="hover:text-secondary">
//             About Us
//           </a>
//           <a href="#contact-us" className="hover:text-secondary">
//             Contact Us
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-2xl mx-6 focus:outline-none"
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-white2 bg-opacity-90 p-4 flex flex-col items-center font-nudista font-light  space-y-4">
//           <a
//             href="#our-history"
//             className="text-primary hover:text-secondary text-center"
//             onClick={toggleMenu}
//           >
//             Our History
//           </a>
//           <a
//             href="#about-us"
//             className="text-primary hover:text-secondary text-center"
//             onClick={toggleMenu}
//           >
//             About Us
//           </a>
//           <a
//             href="#contact-us"
//             className="text-primary hover:text-secondary text-center"
//             onClick={toggleMenu}
//           >
//             Contact Us
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
