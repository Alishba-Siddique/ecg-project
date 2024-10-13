// import React, { useEffect } from 'react';
// import ecgWhiteLogo from '../assets/images/text-base';
// import footerBg from '../assets/images/footerBg.webp';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   useEffect(() => {
//     // Title Section Animation
//     gsap.fromTo(
//       '#contact',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         zIndex: 20,
//         scrollTrigger: {
//           trigger: '#contact',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="relative">
//       {/* Footer */}
//       <footer
//         className="relative py-8 px-6 mx-0 sm:mx-0 md:mx-0 lg:mx-0 mediumLaptop:mx-0 xl:mx-0 2xl:mx-0 largestLaptop:mx-0
//        text-white h-full drop-shadow-xl"
//       >
//         <div id="contact" className="flex flex-row justify-center">
//           {/* Contact Form */}
//           <div
//             className="absolute h-fit w-fit  mx-4 bg-white justify-center text-center
//                           -mt-44 sm:-mt-44 md:-mt-56 lg:-mt-44 mediumLaptop:-mt-44 xl:-mt-44 2xl:-mt-44 largestLaptop:-mt-80
//                           rounded-2xl
//                           p-8 sm:p-8 md:p-12 lg:p-12 mediumLaptop:p-12 xl:p-12 2xl:p-12 largestLaptop:p-32
//                           ml-10 sm:ml-10 md:ml-10 lg:mx-10 mediumLaptop:ml-10 xl:ml-10 2xl:ml-10 largestLaptop:ml-10 "
//           >
//             <p
//               className="text-black text-base sm:text-base md:text-2xl lg:text-4xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-7xl
//                           mb-4 font-nudista font-light "
//             >
//               Request a call from{' '}
//               <span className="font-nudista font-bold">our team </span>
//             </p>

//             <form className="flex flex-col justify-center items-center gap-4 mt-6 text-xs md:text-base lg:text-lg">
//               <div
//                 className="flex flex-col md:flex-col lg:flex-row  mediumLaptop:flex-row xl:flex-row 2xl:flex-row largestLaptop:flex-row
//               gap-4 w-full md:w-full justify-center font-sora"
//               >
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Contact"
//                   className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email ID"
//                   className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
//                 />
//               </div>

//               <div className="mt-2">
//                 <button className="bg-secondary text-white px-10 py-2 font-sora rounded-lg hover:bg-accent  transition w-full md:w-auto">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Background Image Container */}
//         <div
//           className="w-full h-full absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${footerBg})` }}
//         >
//           {/* Gradient Overlay with mix-blend-mode */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-800 bg-blend-color-overlay"></div>
//         </div>
//         {/* Footer Content */}
//         <div
//           className="relative flex flex-col md:flex-row lg:flex-row mediumLaptop:flex-row xl:flex-row 2xl:flex-row largestLaptop:flex-row
//          max-w-8xl mx-auto
//          mt-64 sm:mt-64 md:mt-64 lg:mt-44 mediumLaptop:mt-44 xl:mt-44 2xl:mt-44 largestLaptop:mt-56

//           items-center md:items-center lg:items-start
//           justify-center md:justify-center lg:justify-end"
//         >
//           {/* Logo */}
//           <div
//             className="mb-4 md:mb-0
//            lg:mb-0 px-24 lg:px-24"
//           >
//             <a href="/">
//               <img
//                 src={ecgWhiteLogo}
//                 alt="ECG-Logo"
//                 className="h-36 sm:h-auto md:h-auto lg:h-auto mediumLaptop:h-auto xl:h-auto 2xl:h-auto largestLaptop:h-auto
//                  w-auto sm:w-auto md:w-[23rem] lg:w-[23rem] mediumLaptop:w-[23rem] xl:w-[23rem] 2xl:w-[23rem] largestLaptop:w-[28rem] "
//               />
//             </a>
//           </div>

//           {/* Navigation and Social Media Links */}
//           <div
//             className="flex flex-row sm:flex-row  w-full
//            justify-center sm:justify-center md:justify-center lg:justify-normal mediumLaptop:justify-normal xl:justify-normal 2xl:justify-normal largestLaptop:justify-normal
//              md:grid  md:grid-cols-2 lg:grid-cols-2 mediumLaptop:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 largestLaptop:grid-cols-2
//               gap-10 sm:gap-10 md:gap-20 lg:gap-20 mediumLaptop:gap-20 xl:gap-20 2xl:gap-20 largestLaptop:gap-20
//               ml-auto sm:ml-auto md:ml-auto lg:ml-auto mediumLaptop:ml-auto xl:ml-auto 2xl:ml-auto largestLaptop:ml-auto
//                px-10 sm:px-10 md:px-10 lg:px-32 mediumLaptop:px-32 xl:px-32 2xl:px-32 largestLaptop:px-80
//                text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl "
//           >
//             {/* Navigation Links */}
//             <div
//               className="flex flex-col
//             space-y-2 sm:space-y-2 md:space-y-4 lg:space-y-4 mediumLaptop:space-y-4 xl:space-y-4 2xl:space-y-4 largestLaptop:space-y-4
//              font-sora "
//             >
//               <h4 className="font-semibold mb-2 ">Navigation</h4>
//               <a href="#history" className="hover:underline">
//                 Our History
//               </a>
//               <a href="#contact" className="hover:underline">
//                 Contact Us
//               </a>
//               <a href="#about" className="hover:underline">
//                 About Us
//               </a>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex flex-col space-y-4 font-sora">
//               <h4 className="font-semibold mb-2">Follow Us</h4>
//               <a href="https://twitter.com" className="hover:text-gray-300">
//                 Facebook
//               </a>
//               <a href="https://facebook.com" className="hover:text-gray-300">
//                 Instagram
//               </a>
//               <a href="https://instagram.com" className="hover:text-gray-300">
//                 Twitter
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React, { useEffect } from 'react';
import ecgWhiteLogo from '../assets/images/ecg-white-logo.webp';
import footerBg from '../assets/images/footerBg.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiInstagram } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // useEffect(() => {
  //   // Title Section Animation
  //   gsap.fromTo(
  //     '#contact',
  //     { y: -100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       zIndex: 20,
  //       scrollTrigger: {
  //         trigger: '#contact',
  //         start: 'top 80%',
  //         end: 'bottom 60%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     '#footer-section',
  //     { y: -100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       zIndex: 20,
  //       scrollTrigger: {
  //         trigger: '#footer-section',
  //         start: 'top 60%',
  //         end: 'bottom 60%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className=" relative mt-44 sm:mt-44 md:mt-96 lg:mt-96 mediumLaptop:mt-96 xl:mt-72 2xl:mt-96 largestLaptop:mt-96">
      {/* Contact Form Section */}
      <section
        id="contact"
        className="relative z-20 flex flex-row justify-center drop-shadow-md"
      >
        {/* Contact Form */}
        <div
          className="absolute h-fit w-fit  mx-4 bg-white justify-center text-center 
                          -mt-44 sm:-mt-44 md:-mt-56 lg:-mt-44 mediumLaptop:-mt-44 xl:-mt-44 2xl:-mt-44 largestLaptop:-mt-80
                          rounded-2xl 
                          p-8 sm:p-8 md:p-12 lg:p-12 mediumLaptop:p-12 xl:p-12 2xl:p-12 largestLaptop:p-24
                          ml-10 sm:ml-10 md:ml-10 lg:mx-10 mediumLaptop:ml-10 xl:ml-10 2xl:ml-10 largestLaptop:ml-10 "
        >
          <p
            className="text-black text-base sm:text-base md:text-2xl lg:text-4xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-7xl
                          mb-4 font-nudista font-light "
          >
            Request a call from{' '}
            <span className="font-nudista font-bold">our team </span>
          </p>

          <form className="flex flex-col justify-center items-center gap-4 mt-6 text-xs md:text-base lg:text-lg">
            <div
              className="flex flex-col md:flex-col lg:flex-row  mediumLaptop:flex-row xl:flex-row 2xl:flex-row largestLaptop:flex-row
              gap-4 w-full md:w-full justify-center font-sora
              text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl"
            >
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300
                 p-3 sm:p-3 md:p-3 lg:p-3 mediumLaptop:p-3 xl:p-3 2xl:p-3 largestLaptop:p-6
                rounded w-full md:w-full md:flex-1"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-3 rounded w-full md:w-full md:flex-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded w-full md:w-full md:flex-1"
              />
            </div>
            <button
              className=" text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem]  lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
             bg-secondary border-none text-white hover:bg-black font-sora 
                   px-4 sm:px-4 md:px-4 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
                   py-3 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-4 largestLaptop:py-4
                   rounded-lg
                   ml-0 sm:ml-0 md:ml-3 lg:ml-3 medimLaptop:ml-3 xl:ml-8 2xl:ml-8 largestLaptop:ml-5
                   mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-8 2xl:mt-8 largestLaptop:mt-2 "
            >
              Submit{' '}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}

      <footer className="relative py-8 px-6 text-white h-full drop-shadow-xl">
        {/* Background Image Container */}
        <div
          className="w-full h-full absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          {/* Gradient Overlay with mix-blend-mode */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-800 bg-blend-color-overlay"></div>
        </div>

        <div
          className="relative flex flex-col md:flex-row lg:flex-row justify-between
    max-w-8xl mx-auto mt-64 sm:mt-44 md:mt-44 lg:mt-44 xl:mt-44"
        >
          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0 px-10 lg:px-0">
            <a href="/">
              <img
                src={ecgWhiteLogo}
                alt="ECG-Logo"
                className="h-24 lg:h-32 w-auto"
              />
            </a>
          </div>

          {/* Navigation and Social Media Links */}
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-between 
      items-center lg:items-start gap-10 px-10 lg:px-32 w-full lg:w-auto"
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 font-sora text-base">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#history" className="hover:underline">
                Our History
              </a>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="mb-2 font-sora text-base">Socials</div>
              <div className="flex space-x-4 mt-8 lg:mt-3 text-xl">
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  <CiLinkedin />
                </a>
                <a href="https://facebook.com" className="hover:text-gray-300">
                  <CiFacebook />
                </a>
                <a href="https://instagram.com" className="hover:text-gray-300">
                  <CiInstagram />
                </a>
                <a href="https://twitter.com" className="hover:text-gray-300">
                  <CiTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
