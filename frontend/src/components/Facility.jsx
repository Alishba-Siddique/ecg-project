// import React from 'react';
// import conneticutImg1 from '../assets/images/conneticutImg1.webp';
// import threeDBud from '../assets/images/3dBud.webp';
// import conneticutImg2 from '../assets/images/conneticutImg2.webp';
// // import conneticutImg2 from '../assets/images/conneticutImg3.webp';
// import conneticutImg3 from '../assets/images/conneticutImg3.webp';
// import windMillIcon from '../assets/images/windmill.svg';
// import overlayTextIconOrange from '../assets/images/overlayTextIconOrange.png';

// const Facility = () => {
//   return (
//     <div className="w-full h-full mt-28 mb-[12rem]">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <div className="flex justify-center items-center">
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] sm:mt-1 md:mt-1 lg:mt-1 "></div>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-black font-nudista">
//             An Industry poised for{' '}
//             <span className="font-extrabold font-nudista mb-44">
//               explosive growth
//             </span>{' '}
//           </h2>
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-0 mx-8 sm:ml-7 md:ml-16 lg:-ml-[1rem] md:gap-10 lg:gap-10">
//         <div className="relative w-[95%] md:w-[110%] lg:w-[103%] sm:h-full md:h-full lg:h-[23rem] scale-y-100 md:scale-y-110 lg:scale-y-150 mt-6 md:mt-10 lg:mt-36  md:ml-[7rem] lg:ml-[16rem]">
//           <img
//             src={conneticutImg1}
//             alt="conneticutImg1"
//             className="w-full h-full"
//           />
//           <div className="absolute top-0 left-0 w-full h-full bg-[#759157] opacity-50"></div>
//         </div>
//         <div className="mt-5  md:mt-20 lg:mt-28 md:mx-16 lg:ml-36 mx-3 ">
//           <h4 className="text-base md:text-lg lg:text-xl xl:text-3xl font-nudista font-bold">
//             Welcome to our facility
//           </h4>
//           <p className="text-xs  md:text-xs lg:text-base w-full md:w-full lg:w-4/6  font-sora mt-3 leading-3 text-gray-500 text-left">
//             Our planned 42,000 Square foot facility is located in the bustling
//             locally of East Hartford, CT.
//           </p>
//           <img
//             src={threeDBud}
//             alt="conneticutImg2"
//             className="w-[70%] md:w-full lg:w-[75%]  xl:w-[75%]
//             ml-[3rem] md:-ml-[1rem] lg:ml-[2.1rem] xl:ml-[3rem]
//             mt-8 md:mt-[1.3rem] lg:mt-[9rem] xl:mt-[9rem]
//             -mb-[2.5rem] md:-mb-[2.5rem] lg:-mb-[2rem]"
//           />
//         </div>
//       </div>

//       {/* Image and Content Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10 md:-mt-[1rem] lg:-mt-[3rem] ml-[0rem] md:ml-[9rem] lg:ml-[14rem] drop-shadow-lg">
//         <div className="relative z-50 w-[80%] md:w-[95%] lg:w-[95%] xl:w-[95%] order-2 md:order-1 lg:order-1 xl:order-1">
//           <img
//             src={conneticutImg2}
//             alt="conneticutImg2"
//             className="  w-full
//              h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
//           />
//           <div className="grid grid-rows-3 justify-items-end -mt-[17rem] md:-mt-[19.5rem] lg:-mt-[22rem] gap-4 md:gap-4 lg:gap-4  mr-3 md:mr-3  lg:mr-7 ">
//             <img
//               // src={windMillIcon}
//               src={overlayTextIconOrange}
//               alt="windMillIcon"
//               className="mt-[2rem] md:mt-[4rem] lg:-mt-[10rem] xl:-mt-[10rem] w-[2rem]  md:w-[2rem] lg:w-[4rem] xl:w-[4rem]"
//             />

//             <p
//               className="text-xs md:text-lg w-1/2 md:w-1/2
//             mt-[0rem] md:mt-[0rem] lg:mt-0 xl:mt-0
//             -mr-[1rem] md:-mr-[0.5rem] lg:-mr-9 xl:-mr-9
//              lg:w-[50%] lg:text-[1.62rem]  font-nudista font-bold"
//             >
//               Precision in Cultivation
//             </p>
//             <p
//               className="text-[0.6rem] md:text-[0.6rem] lg:text-base font-sora
//             -mt-[3.3rem]  md:-mt-[3.5rem] lg:-mt-[2rem]
//             -mr-[1rem] md:-mr-[0.5rem] lg:-mr-0 xl:-mr-0
//             w-[50%] lg:w-[45%] md:w-[50%]"
//             >
//               Our team of trained experts deliver exceptional value to both our
//               customers and the market by keeping yields and proﬁts high.
//             </p>
//             <div className="flex items-center -mt-[3rem]  md:-mt-[7rem] lg:-mt-[0rem]  ">
//               <button
//                 className="btn text-[0.6rem] md:text-xs lg:text-base bg-black text-white
//                hover:bg-secondary font-sora  mr-16 md:mr-14 lg:mr-[7.5rem] xl:mr-[7.5rem]
//                px-2 md:px-2 lg:px-16 "
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-[80%] md:w-[95%] lg:w-[90%] xl:w-[90%] mr-0 md:mr-28 lg:mr-40 order-1 md:order-2 lg:order-2 xl:order-2">
//           <img
//             src={conneticutImg3}
//             alt="conneticutImg3"
//             className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] "
//           />
//           <div className="absolute top-0 left-0 w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] bg-[#759157] opacity-50"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facility;

// import React, { useEffect, useState } from 'react';
// import conneticutImg1 from '../assets/images/conneticutImg1.webp';
// import threeDBud from '../assets/images/3dBud.webp';
// import conneticutImg2 from '../assets/images/conneticutImg2.webp';
// import conneticutImg3 from '../assets/images/conneticutImg3.webp';
// import overlayTextIconOrange from '../assets/images/overlayTextIconOrange.png';
// import '../styles/fade.css';

// const Facility = () => {
//   const [isTitleVisible, setIsTitleVisible] = useState(false);
//   const [isMainVisible, setIsMainVisible] = useState(false);
//   const [isImageRowVisible, setIsImageRowVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const titleSection = document.querySelector('#title-section');
//       const mainContentSection = document.querySelector(
//         '#main-content-section'
//       );
//       const imageContentRow = document.querySelector('#image-content-row');

//       if (titleSection.getBoundingClientRect().top < window.innerHeight) {
//         setIsTitleVisible(true);
//       }

//       if (mainContentSection.getBoundingClientRect().top < window.innerHeight) {
//         setIsMainVisible(true);
//       }

//       if (imageContentRow.getBoundingClientRect().top < window.innerHeight) {
//         setIsImageRowVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="w-full h-full mt-28 mb-[12rem]">
//       {/* Title Section */}
//       <div
//         id="title-section"
//         className={`text-center mb-8 slide-in-top ${
//           isTitleVisible ? 'active' : ''
//         }`}
//       >
//         <div className="flex justify-center items-center">
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] sm:mt-1 md:mt-1 lg:mt-1 "></div>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-black font-nudista">
//             An Industry poised for{' '}
//             <span className="font-extrabold font-nudista mb-44">
//               explosive growth
//             </span>{' '}
//           </h2>
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div
//         id="main-content-section"
//         className={`grid grid-cols-1 md:grid-cols-2 justify-items-center gap-0 mx-8 sm:ml-7 md:ml-16 lg:-ml-[1rem] md:gap-10 lg:gap-10 slide-in-left ${
//           isMainVisible ? 'active' : ''
//         }`}
//       >
//         <div className="relative w-[95%] md:w-[110%] lg:w-[103%] sm:h-full md:h-full lg:h-[23rem] scale-y-100 md:scale-y-110 lg:scale-y-150 mt-6 md:mt-10 lg:mt-36  md:ml-[7rem] lg:ml-[16rem]">
//           <img
//             src={conneticutImg1}
//             alt="conneticutImg1"
//             className="w-full h-full"
//           />
//           <div className="absolute top-0 left-0 w-full h-full bg-[#759157] opacity-50"></div>
//         </div>
//         <div className="mt-5  md:mt-20 lg:mt-28 md:mx-16 lg:ml-36 mx-3 ">
//           <h4 className="text-base md:text-lg lg:text-xl xl:text-3xl font-nudista font-bold">
//             Welcome to our facility
//           </h4>
//           <p className="text-xs  md:text-xs lg:text-base w-full md:w-full lg:w-4/6  font-sora mt-3 leading-3 text-gray-500 text-left">
//             Our planned 42,000 Square foot facility is located in the bustling
//             locally of East Hartford, CT.
//           </p>
//         </div>
//       </div>
//       <img
//         src={threeDBud}
//         alt="conneticutImg2"
//         className={`  w-[60%] md:w-[28%] lg:w-[28%]  xl:w-[28%]
//             ml-[5rem] md:ml-[28rem] lg:ml-[71rem] xl:ml-[71rem]
//             mt-8 md:-mt-[2rem] lg:mt-[9rem] xl:-mt-[10rem]
//             -mb-[2.5rem] md:mb-[1rem] lg:mb-[3rem]

//             slide-in-right ${isImageRowVisible ? 'active' : '' }`}
//       />

//       {/* Image and Content Row */}
//       <div
//         id="image-content-row"
//         className={`grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10 md:-mt-[1rem] lg:-mt-[3rem] ml-[0rem] md:ml-[9rem] lg:ml-[14rem] drop-shadow-lg slide-in-right ${
//           isImageRowVisible ? 'active' : ''
//         }`}
//       >
//         <div className="relative z-50 w-[80%] md:w-[95%] lg:w-[95%] xl:w-[95%] order-2 md:order-1 lg:order-1 xl:order-1">
//           <img
//             src={conneticutImg2}
//             alt="conneticutImg2"
//             className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
//           />
//           <div className="grid grid-rows-3 justify-items-end -mt-[17rem] md:-mt-[19.5rem] lg:-mt-[22rem] gap-4 md:gap-4 lg:gap-4  mr-3 md:mr-3  lg:mr-7 ">
//             <img
//               src={overlayTextIconOrange}
//               alt="windMillIcon"
//               className="mt-[2rem] md:mt-[4rem] lg:-mt-[10rem] xl:-mt-[10rem] w-[2rem] md:w-[2rem] lg:w-[4rem] xl:w-[4rem]"
//             />
//             <p
//               className="text-xs md:text-lg w-1/2 md:w-1/2
//             mt-[0rem] md:mt-[0rem] lg:mt-0 xl:mt-0
//             -mr-[1rem] md:-mr-[0.5rem] lg:-mr-9 xl:-mr-9
//              lg:w-[50%] lg:text-[1.62rem]  font-nudista font-bold"
//             >
//               Precision in Cultivation
//             </p>
//             <p
//               className="text-[0.6rem] md:text-[0.6rem] lg:text-base font-sora
//             -mt-[3.3rem]  md:-mt-[3.5rem] lg:-mt-[2rem]
//             -mr-[1rem] md:-mr-[0.5rem] lg:-mr-0 xl:-mr-0
//             w-[50%] lg:w-[45%] md:w-[50%]"
//             >
//               Our team of trained experts deliver exceptional value to both our
//               customers and the market by keeping yields and proﬁts high.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-[80%] md:w-[95%] lg:w-[90%] xl:w-[90%] mr-0 md:mr-28 lg:mr-40 order-1 md:order-2 lg:order-2 xl:order-2">
//           <img
//             src={conneticutImg3}
//             alt="conneticutImg3"
//             className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
//           />
//           <div className="absolute top-0 left-0 w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] bg-[#759157] opacity-50"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facility;

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import conneticutImg1 from '../assets/images/conneticutImg1.webp';
// import threeDBud from '../assets/images/3dBud.webp';
// import conneticutImg2 from '../assets/images/conneticutImg2.webp';
// import conneticutImg3 from '../assets/images/conneticutImg3.webp';
// import overlayTextIconOrange from '../assets/images/overlayTextIconOrange.png';
// import '../styles/fade.css';

// const Facility = () => {
//   const titleRef = useRef(null);
//   const mainRef = useRef(null);
//   const imageRowRef = useRef(null);
//   const budImgRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const titleSection = titleRef.current;
//       const mainContentSection = mainRef.current;
//       const imageContentRow = imageRowRef.current;
//       const budImage = budImgRef.current;

//       const animateElement = (element, animation) => {
//         if (element.getBoundingClientRect().top < window.innerHeight) {
//           animation.restart();
//         }
//       };

//       const titleAnimation = gsap.fromTo(
//         titleSection,
//         { opacity: 0, y: -100 },
//         { opacity: 1, y: 0, duration: 1, paused: true }
//       );

//       const mainAnimation = gsap.fromTo(
//         mainContentSection,
//         { opacity: 0, x: -100 },
//         { opacity: 1, x: 0, duration: 1, paused: true }
//       );

//       const imageRowAnimation = gsap.fromTo(
//         imageContentRow,
//         { opacity: 0, x: 100 },
//         { opacity: 1, x: 0, duration: 1, paused: true }
//       );

//       const budImageAnimation = gsap.fromTo(
//         budImage,
//         { opacity: 0, x: 100 },
//         { opacity: 1, x: 0, duration: 1, paused: true }
//       );

//       animateElement(titleSection, titleAnimation);
//       animateElement(mainContentSection, mainAnimation);
//       animateElement(imageContentRow, imageRowAnimation);
//       animateElement(budImage, budImageAnimation);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="w-full h-full mt-28 mb-[12rem]">
//       {/* Title Section */}
//       <div ref={titleRef} id="title-section" className="text-center mb-8">
//         <div className="flex justify-center items-center">
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] sm:mt-1 md:mt-1 lg:mt-1 "></div>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-black font-nudista">
//             An Industry poised for{' '}
//             <span className="font-extrabold font-nudista mb-44">
//               explosive growth
//             </span>{' '}
//           </h2>
//           <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div ref={mainRef} id="main-content-section" className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-0 mx-8 sm:ml-7 md:ml-16 lg:-ml-[1rem] md:gap-10 lg:gap-10">
//         <div className="relative w-[95%] md:w-[110%] lg:w-[103%] sm:h-full md:h-full lg:h-[23rem] scale-y-100 md:scale-y-110 lg:scale-y-150 mt-6 md:mt-10 lg:mt-36  md:ml-[7rem] lg:ml-[16rem]">
//           <img
//             src={conneticutImg1}
//             alt="conneticutImg1"
//             className="w-full h-full"
//           />
//           <div className="absolute top-0 left-0 w-full h-full bg-[#759157] opacity-50"></div>
//         </div>
//         <div className="mt-5  md:mt-20 lg:mt-28 md:mx-16 lg:ml-36 mx-3 ">
//           <h4 className="text-base md:text-lg lg:text-xl xl:text-3xl font-nudista font-bold">
//             Welcome to our facility
//           </h4>
//           <p className="text-xs  md:text-xs lg:text-base w-full md:w-full lg:w-4/6  font-sora mt-3 leading-3 text-gray-500 text-left">
//             Our planned 42,000 Square foot facility is located in the bustling
//             locally of East Hartford, CT.
//           </p>
//         </div>
//       </div>
//       <img
//         ref={budImgRef}
//         src={threeDBud}
//         alt="conneticutImg2"
//         className="w-[60%] md:w-[28%] lg:w-[28%]  xl:w-[28%] ml-[5rem] md:ml-[28rem] lg:ml-[71rem] xl:ml-[71rem] mt-8 md:-mt-[2rem] lg:mt-[9rem] xl:-mt-[10rem] -mb-[2.5rem] md:mb-[1rem] lg:mb-[3rem]"
//       />

//       {/* Image and Content Row */}
//       <div ref={imageRowRef} id="image-content-row" className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10 md:-mt-[1rem] lg:-mt-[3rem] ml-[0rem] md:ml-[9rem] lg:ml-[14rem] drop-shadow-lg">
//         <div className="relative z-50 w-[80%] md:w-[95%] lg:w-[95%] xl:w-[95%] order-2 md:order-1 lg:order-1 xl:order-1">
//           <img
//             src={conneticutImg2}
//             alt="conneticutImg2"
//             className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
//           />
//           <div className="grid grid-rows-3 justify-items-end -mt-[17rem] md:-mt-[19.5rem] lg:-mt-[22rem] gap-4 md:gap-4 lg:gap-4  mr-3 md:mr-3  lg:mr-7 ">
//             <img
//               src={overlayTextIconOrange}
//               alt="windMillIcon"
//               className="mt-[2rem] md:mt-[4rem] lg:-mt-[10rem] xl:-mt-[10rem] w-[2rem] md:w-[2rem] lg:w-[4rem] xl:w-[4rem]"
//             />
//             <p className="text-xs md:text-lg w-1/2 md:w-1/2 mt-[0rem] md:mt-[0rem] lg:mt-0 xl:mt-0 -mr-[1rem] md:-mr-[0.5rem] lg:-mr-9 xl:-mr-9 lg:w-[50%] lg:text-[1.62rem]  font-nudista font-bold">
//               Precision in Cultivation
//             </p>
//             <p className="text-[0.6rem] md:text-[0.6rem] lg:text-base font-sora -mt-[3.3rem]  md:-mt-[3.5rem] lg:-mt-[2rem] -mr-[1rem] md:-mr-[0.5rem] lg:-mr-0 xl:-mr-0 w-[50%] lg:w-[45%] md:w-[50%]">
//               Our team of trained experts deliver exceptional value to both our customers and the market by keeping yields and proﬁts high.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-[80%] md:w-[95%] lg:w-[90%] xl:w-[90%] mr-0 md:mr-28 lg:mr-40 order-1 md:order-2 lg:order-2 xl:order-2">
//           <img
//             src={conneticutImg3}
//             alt="conneticutImg3"
//             className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
//           />
//           <div className="absolute top-0 left-0 w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] bg-[#759157] opacity-50"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facility;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Skeleton from 'react-loading-skeleton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FacilityImg1 from '../assets/images/FacilityImg1.webp';
import FacilityImg2 from '../assets/images/FacilityImg2.webp';
import FacilityImg3 from '../assets/images/FacilityImg3.webp';
import FacilityImg4 from '../assets/images/FacilityImg4.webp';
import overlayTextIconOrange from '../assets/images/overlayTextIconOrange.svg';
import bud from '../assets/images/bud.svg';


gsap.registerPlugin(ScrollTrigger);

const Facility = () => {
  useEffect(() => {
    // Title Section Animation
    gsap.fromTo(
      '#title-section',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#title-section',
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Main Content Section Animation
    gsap.fromTo(
      '#main-content-section',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#main-content-section',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Image Row Animation
    gsap.fromTo(
      '#image-content-row',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#image-content-row',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full mt-28 mb-[12rem] ">
      {/* Title Section */}
      <div id="title-section" className="text-center mb-8 ">
        <div className="flex justify-center items-center">
          <div
            className="border-t-4 border-secondary mt-1 
            mx-4 sm:mx-6 md:mx-8 lg:mx-10 mediumLaptop:mx-10 xl:ml-[6.2rem] 2xl:mx-10 largestLaptop:mx-8
                       w-[8rem] sm:w-[8rem] md:w-[8rem] lg:w-[20rem] mediumLaptop:w-[20rem] xl:w-[10rem] 2xl:w-[20rem] largestLaptop:w-[22rem]"
          ></div>
          <h2
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl
                       mx-4 sm:mx-6 md:mx-8 lg:mx-10 mediumLaptop:mx-10 xl:mx-0 2xl:mx-10 largestLaptop:mx-8
                      text-black font-nudista font-light"
          >
            Advanced,{' '}
            <span className="font-bold font-nudista mb-44">
              pharmaceutical-grade hydroponic
            </span>{' '}
            cultivation systems
          </h2>
          <div
            className="border-t-4  border-secondary mt-1 
            mx-4 sm:mx-6 md:mx-8 lg:mx-10 mediumLaptop:mx-10 xl:mr-[6.2rem] 2xl:mx-10 largestLaptop:mx-8
                       w-[8rem] sm:w-[8rem] md:w-[8rem] lg:w-[20rem] mediumLaptop:w-[20rem] xl:w-[10rem] 2xl:w-[20rem] largestLaptop:w-[22rem]"
          ></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        id="main-content-section"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mediumLaptop:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 largestLaptop:grid-cols-2  
         justify-items-center gap-0 mx-8 sm:ml-7 md:ml-16 lg:-ml-[1rem] md:gap-10 lg:gap-10 "
      >
        <div
          className="relative w-[95%] sm:w-[95%] md:w-[110%] lg:w-[103%] mediumLaptop:w-[103%] xl:w-[103%] 2xl:w-[103%] largestLaptop:w-[104%]
                    h-full sm:h-full md:h-full lg:h-[19rem] mediumLaptop:h-[23rem] xl:h-[23rem] 2xl:h-[23rem] largestLaptop:h-[35rem]
                    scale-y-100 md:scale-y-110 lg:scale-y-150
                    mt-6 sm:mt-6 md:mt-10 lg:mt-36 mediumLaptop:mt-36 xl:mt-36 2xl:mt-36 largestLaptop:mt-48
                    ml-[0rem] sm:ml-[0rem] md:ml-[7rem] lg:ml-[16rem] mediumLaptop:ml-[16rem] xl:ml-[16rem] 2xl:ml-[16rem] largestLaptop:ml-[25.5rem]"
        >
          <img
            src={FacilityImg1}
            alt="FacilityImg1"
            className="w-full h-full rounded-lg"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full  rounded-lg bg-[#759157] opacity-50"></div> */}
        </div>
        <div
          className="grid grid-rows-2 mx-3 sm:mx-3 md:mx-16 lg:ml-36 mediumLaptop:ml-36 xl:ml-36 2xl:ml-52 largestLaptop:ml-72
                     mt-16 sm:mt-16 md:mt-20 lg:mt-28 mediumLaptop:mt-28 xl:mt-28 2xl:mt-28 largestLaptop:mt-64"
        >
          <div className="h-1/2">
            <h4
              className="text-base sm:text-base md:text-base lg:text-2xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-5xl
                       font-nudista font-bold"
            >
              Welcome to our facility
            </h4>
            <p
              className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-xl largestLaptop:text-2xl 
                       w-4/6 sm:w-4/6 md:w-full lg:w-4/6 mediumLaptop:w-4/6 xl:w-4/6 2xl:w-4/6 largestLaptop:w-4/6
                       mt-3 sm:mt-3 md:mt-3 lg:mt-5 mediumLaptop:mt-5 xl:mt-5 2xl:mt-5 largestLaptop:mt-5
                       font-sora leading-3 text-gray-500 text-left"
            >
              Our planned 70,000 square foot facility is located in East
              Hartford, CT.
            </p>
          </div>
          <div className="-mb-[7rem]  sm:-mb-[7rem] md:-mb-[5rem] lg:-mb-[23.5rem] mediumLaptop:-mb-[23.5rem] xl:-mb-[23.5rem] 2xl:-mb-[23.5rem] largestLaptop:-mb-[23.5rem] relative">
            <img
              src={FacilityImg2}
              alt="FacilityImg2 "
              className=" rounded-lg w-full sm:w-full md:w-full lg:w-full mediumLaptop:w-full xl:w-full 2xl:w-[80%] largestLaptop:w-[60%]
              h-full sm:h-full md:h-[85%] lg:h-[45%] mediumLaptop:h-[50%] xl:h-[50%] 2xl:h-[50%] largestLaptop:h-[60%]
              "
            />
            {/* <div
              className="absolute top-0 left-0 rounded-lg  bg-[#759157] opacity-50
            w-full sm:w-full md:w-full lg:w-full mediumLaptop:w-full xl:w-full 2xl:w-[80%] largestLaptop:w-[60%]
              h-full sm:h-full md:h-[85%] lg:h-[45%] mediumLaptop:h-[50%] xl:h-[50%] 2xl:h-[50%] largestLaptop:h-[60%]"
            ></div> */}
          </div>
        </div>
      </div>

      {/* Orange Box */}
      <div
        id="orange-section"
        className=" bg-secondary
                    -mb-32 sm:-mb-32 md:-mb-44 lg:-mb-44 mediumLaptop:-mb-44 xl:-mb-44 2xl:-mb-64 largestLaptop:-mb-52
                    mt-44 sm:mt-44 md:mt-28 lg:mt-44 mediumLaptop:mt-44 xl:mt-44 2xl:mt-44 largestLaptop:mt-72"
      >
        <div
          className="flex justify-center items-center  space-x-8 p-2 sm:p-2 md:p-4 lg:p-10 mediumLaptop:p-16 xl:p-10 2xl:p-16 largestLaptop:p-24
          text-white mx-20"
        >
          <img
            src={bud}
            className="w-12 sm:w-12 md:w-12 lg:w-12 mediumLaptop:w-12 xl:w-12 2xl:w-12 largestLaptop:w-24"
          />
          <p
            className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-lg xl:text-base 2xl:text-xl largestLaptop:text-4xl
                       
                       mt-3 sm:mt-3 md:mt-0 lg:mt-2 mediumLaptop:mt-2 xl:mt-2 2xl:mt-2 largestLaptop:mt-2
                       font-sora text-left drop-shadow-mdl"
          >
            East Coast Growers combines meticulous cultivation practices with
            expert curation to produce the highest quality cannabis products
            available on the market
          </p>
        </div>
      </div>

      {/* Image and Content Row */}
      <div
        id="image-content-row"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mediumLaptop:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 largestLaptop:grid-cols-2
                   mt-[9rem] sm:mt-10 md:mt-[13rem] lg:mt-[13rem] mediumLaptop:mt-[13rem] xl:mt-[15rem] 2xl:mt-[20rem] largestLaptop:mt-[20rem]
                   ml-[0rem] sm:ml-[0rem] md:ml-[6rem] lg:ml-[5.5rem] mediumLaptop:ml-[5.5rem] xl:ml-[5.5rem] 2xl:ml-[5.5rem] largestLaptop:ml-[8rem]
                    justify-items-center "
      >
        <div
          className="relative z-30 max-w-[100%]
                        w-[80%] sm:w-[80%] md:w-[95%] lg:w-[95%] mediumLaptop:w-[95%] xl:w-[95%] 2xl:w-[95%] largestLaptop:w-[90%]
                        order-2 sm:order-2 md:order-1 lg:order-1 mediumLaptop:order-1 xl:order-1 2xl:order-1 largestLaptop:order-1"
        >
          <img
            src={FacilityImg3}
            alt="FacilityImg3"
            className="
            w-full sm:h-full object-cover h-auto"
            // md:h-[90%] lg:h-[90%] mediumLaptop:h-[90%] xl:h-[90%] 2xl:h-[90%] largestLaptop:h-[90%]
          />
          <div className="absolute inset-0  flex flex-col justify-center items-end text-right p-4 space-y-4 sm:space-y-6 md:space-y-8 ml-auto
           max-w-[10rem] sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[14rem] mediumLaptop:max-w-xs xl:max-w-[15rem] 2xl:max-w-xs largestLaptop:max-w-lg">
            <img
              src={overlayTextIconOrange}
              alt="overlayTextIconOrange"
              className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 lg:w-10 lg:h-10 mediumLaptop:w-10 mediumLaptop:h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 largestLaptop:w-10 largestLaptop:h-10"
              // mt-[2rem] md:mt-[4rem] lg:-mt-[13rem] mediumLaptop:-mt-[10rem] xl:-mt-[10rem] 2xl:-mt-[10vw] largestLaptop:-mt-[30rem]
            />
            <h1
              className=" text-base sm:text-base md:text-sm lg:text-xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-5xl  
            font-bold text-right font-nudista"
            >
              Precision in
              <br /> Cultivation
            </h1>
            <p
              className=" mt-2 text-right font-sora
            text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-xs mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl"
            >
              Utilizing a hybrid model, we combine the benefits of a large-scale
              cultivation facility with the quality and control of
              micro-cultivation methods which allows better control over
              variables, leading to a higher quality of product.
            </p>
            <a
            href="https://crm.investexpress.ai/v2/preview/7qUAox9kkUgKnoK8UFrO"
            className="text-decoration-none"
            target="_blank" // Correct attribute for opening in a new tab
          >
            <button
              className="text-xs sm:text-xs md:text-sm lg:text-base mediumLaptop:text-lg xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
                        bg-black border-none text-white hover:bg-secondary font-sora 
                        px-3 md:px-2 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
                        py-3 md:py-2 lg:py-4 xl:py-4 2xl:py-4 largestLaptop:py-4
                        rounded-lg ml-[1rem] sm:ml-[1rem] md:ml-[2rem] lg:ml-[2rem] 
                        mediumLaptop:ml-[2rem] xl:ml-[2rem] 2xl:ml-[2rem] largestLaptop:ml-[2rem]
                        "
            >
              Learn More
            </button>
          </a>
          </div>
        </div>

        <div
          className="relative
                    w-[80%] sm:w-[80%] md:w-[95%] lg:w-[90%] mediumLaptop:w-[90%] xl:w-[85%] 2xl:w-[85%] largestLaptop:w-[85%]
                    mr-0 sm:mr-0 md:mr-28 lg:mr-40 mediumLaptop:mr-40 xl:mr-24 2xl:mr-40 largestLaptop:mr-64
                    order-1 sm:order-1 md:order-2 lg:order-2 mediumLaptop:order-2 xl:order-2 2xl:order-2 largestLaptop:order-2"
        >
          <img
            src={FacilityImg4}
            alt="FacilityImg4"
            className="w-full h-full rounded-lg md:h-[90%] lg:h-[90%] xl:h-[90%] 2xl:h-[90%] largestLaptop:h-[90%]"
          />
          {/* <div className="rounded-lg absolute top-0 left-0 w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] bg-[#759157] opacity-50"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Facility;
