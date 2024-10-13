// import { React, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../styles/fade.css';

// gsap.registerPlugin(ScrollTrigger);

// const Adv = () => {
//   const cellRefs = useRef([]);

//   useEffect(() => {
//     // Title Section Animation
//     gsap.fromTo(
//       '#title-adv-section',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '#title-adv-section',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     // Animate each grid cell from left
//     cellRefs.current.forEach((cell, index) => {
//       gsap.fromTo(
//         cell,
//         { x: -100, opacity: 0 }, // Start from left with opacity 0
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.5, // Adjust duration for a quicker slide
//           scrollTrigger: {
//             trigger: cell,
//             start: 'top 80%',
//             end: 'bottom 60%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });
//   }, []);

//   const advantages = [
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//       id: 'adv-row-1-1'
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//       id: 'adv-row-1-2'
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//       id: 'adv-row-1-3'
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//       id: 'adv-row-1-4'
//     },
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//       id: 'adv-row-1-1'
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//       id: 'adv-row-1-2'
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//       id: 'adv-row-1-3'
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//       id: 'adv-row-1-4'
//     },
//   ];

//   return (
//     <div className="max-w-8xl mx-6 md:mx-6 lg:mx-20 xl:mx-20 mb-16 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full fade-in">
//       {/* Title Section */}
//       <div id="title-adv-section" className="text-center mb-24">
//         <div className="flex justify-center items-center">
//           <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
//           <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl mx-10 sm:mx-10 md:mx-10 lg:mx-5 xl:mx-10 text-black font-nudista font-light">
//             The{' '}
//             <span className="font-nudista font-bold mb-44">
//               East Coast Growers
//             </span>{' '}
//             Advantage
//           </h2>
//           <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Advantages Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full md:w-full lg:w-full mx-0 md:mx-0 lg:mx-0">
//         {advantages.map((advantage, index) => (
//           <div
//             key={advantage.id}
//             ref={el => cellRefs.current[index] = el} // Reference to each cell
//             className="group p-6 bg-white shadow-md border border-gray-200 rounded-lg
//               hover:scale-105 hover:shadow-lg hover:text-white hover:bg-primary
//               transition-transform duration-500 ease-in-out"
//           >
//             <h3 className="text-xl text-primary group-hover:text-white mb-2 font-nudista font-bold">
//               {advantage.title}
//             </h3>
//             <p className="font-sora text-gray-700 group-hover:text-white text-xs md:text-md lg:text-base">
//               {advantage.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Adv;

// import { React, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Adv = () => {
//   const cellRefs = useRef([]);

//   useEffect(() => {
//     // Title Section Animation
//     gsap.fromTo(
//       '#title-adv-section',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '#title-adv-section',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     // Animate each grid cell from right
//     cellRefs.current.forEach((cell, index) => {
//       gsap.fromTo(
//         cell,
//         { x: 100, opacity: 0 }, // Start from right with opacity 0
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.5, // Adjust duration for a quicker slide
//           delay: index * 0.1, // Stagger the animation for each cell
//           scrollTrigger: {
//             trigger: cell,
//             start: 'top 80%',
//             end: 'bottom 60%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });
//   }, []);

//   const advantages = [
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//       id: 'adv-row-1-1',
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//       id: 'adv-row-1-2',
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//       id: 'adv-row-1-3',
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//       id: 'adv-row-1-4',
//     },
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//       id: 'adv-row-1-5',
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//       id: 'adv-row-1-6',
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//       id: 'adv-row-1-7',
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//       id: 'adv-row-1-8',
//     },
//   ];

//   return (
//     <div className="max-w-8xl mx-6 sm:mx-6 md:mx-6 lg:mx-20 mediumLaptop:mx-20 xl:mx-10 2xl:mx-32 largestLaptop:mx-32  mb-16 py-8 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-8 largestLaptop:px-8 flex flex-col justify-center h-full fade-in">
//       {/* Title Section */}
//       <div id="title-adv-section" className="text-center mb-24">
//         <div className="flex justify-center items-center">
//           <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
//           <h2
//             className="text-md sm:text-md md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl
//            mx-10 sm:mx-10 md:mx-10 lg:mx-5 mediumLaptop:mx-5 xl:mx-5 2xl:mx-10 largestLaptop:mx-10 text-black font-nudista font-light"
//           >
//             The{' '}
//             <span className="font-nudista font-bold mb-44">
//               East Coast Growers
//             </span>{' '}
//             Advantage
//           </h2>
//           <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Advantages Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mediumLaptop:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 largestLaptop:grid-cols-4
//       gap-8 text-left w-full  mx-0 ">
//         {advantages.map((advantage, index) => (
//           <div
//             key={advantage.id}
//             ref={(el) => (cellRefs.current[index] = el)} // Reference to each cell
//             className="group p-6 bg-white shadow-md border border-gray-200 rounded-lg
//               hover:scale-105 hover:shadow-lg hover:text-white hover:bg-primary
//               transition-transform duration-500 ease-in-out"
//           >
//             <h3 className="text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-xl xl:text-lg 2xl:text-xl largestLaptop:text-3xl text-primary group-hover:text-white mb-2 font-nudista font-bold">
//               {advantage.title}
//             </h3>
//             <p className="font-sora text-gray-700 group-hover:text-white text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl">
//               {advantage.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Adv;

import { React, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon1 from '../assets/images/adv-icon-1.webp';
import icon2 from '../assets/images/adv-icon-2.webp';
import icon3 from '../assets/images/competitive.svg';
import icon4 from '../assets/images/adv-icon-4.webp';

gsap.registerPlugin(ScrollTrigger);

const Adv= () => {
  const gridRef = useRef(null);
  const cellRefs = useRef([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Title Section Animation
    gsap.fromTo(
      '#title-adv-section',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#title-adv-section',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Check screen width to apply different animations
    if (screenWidth >= 1024) {
      // Large screens and tablets - animate the entire grid
      gsap.fromTo(
        gridRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    } else {
      // Mobile - animate each grid cell individually
      cellRefs.current.forEach((cell, index) => {
        gsap.fromTo(
          cell,
          { x: 100, opacity: 0 }, // Start from the right with opacity 0
          {
            x: 0,
            opacity: 1,
            duration: 0.5, // Adjust duration for a quicker slide
            delay: index * 0.1, // Stagger the animation for each cell
            scrollTrigger: {
              trigger: cell,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  const advantages = [
    {
      img: <img src={icon1} alt="icon1" />,
      title: 'HYBRID MODEL',
      description:
        'Benefits of micro-grow cultivation with the resources of a large scale facility.',
      id: 'adv-row-1-1',
    },
    {
      img: <img src={icon4} alt="icon4" />,
      title: 'PREMIUM QUALITY',
      description:
        'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
      id: 'adv-row-1-2',
    },
    {
      img: <img src={icon2} alt="icon2" />,
      title: 'PRICE POINT',
      description:
        'Higher quality product, high demand, and low supply equals higher prices per pound.',
      id: 'adv-row-1-3',
    },
    {
      img: <img src={icon3} alt="icon3" />,
      title: 'COMPETITIVE EDGE',
      description:
        'Operating in a tightly regulated Connecticut market which avoids saturation.',
      id: 'adv-row-1-4',
    },
  ];

  return (
    <div className=" max-w-8xl mx-2 sm:mx-2 md:mx-6 lg:mx-20 mediumLaptop:mx-20 xl:mx-0 2xl:mx-32 largestLaptop:mx-32 mb-16 py-0 px-4 sm:px-6 md:px-6 lg:px-12 xl:px-12 2xl:px-12 largestLaptop:px-12 flex flex-col justify-center h-full fade-in">
      {/* Title Section */}
      <div id="title-adv-section" className="text-center mb-24">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-secondary w-[5rem] md:w-[10rem] lg:w-[15rem] mt-1"></div>
          <h2 className="text-md sm:text-md md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl mx-10 sm:mx-10 md:mx-10 lg:mx-5 mediumLaptop:mx-5 xl:mx-10 2xl:mx-10 largestLaptop:mx-10 text-black font-nudista font-light">
            The{' '}
            <span className="font-nudista font-bold mb-44">
              East Coast Growers
            </span>{' '}
            Advantage
          </h2>
          <div className="border-t-4 border-secondary w-[5rem] md:w-[10rem] lg:w-[15rem] mt-1"></div>
        </div>
      </div>

      {/* Advantages Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mediumLaptop:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 largestLaptop:grid-cols-4 gap-8 text-left w-full mx-0"
      >
        {advantages.map((advantage, index) => (
          <div
            key={advantage.id}
            ref={(el) => (cellRefs.current[index] = el)} // Reference to each cell
            className="group 
            px-2 py-8 sm:px-2 sm:py-8 md:px-8 md:py-10 lg:px-2 lg:py-8 xl:px-4 xl:py-8 mediumLaptop:px-4 mediumLaptop:py-8 2xl:px-4 2xl:py-8 largestLaptop:px-8 largestLaptop:py-8
            bg-white shadow-md  rounded-lg hover:scale-105 hover:shadow-lg hover:text-white hover:bg-primary transition-transform duration-500 ease-in-out"
          >
            <div
              className="flex rounded-full shadow-md hover:shadow-md items-end
            p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4 mediumLaptop:p-4 2xl:p-4 largestLaptop:p-4
            ml-64 sm:ml-64 md:ml-44 lg:ml-16 xl:ml-32 mediumLaptop:ml-32 2xl:ml-32 largestLaptop:ml-96
            w-20 sm:w-20 md:w-20 lg:w-20 xl:w-20 mediumLaptop:w-20 2xl:w-20 largestLaptop:w-20
            h-20  sm:h-20 md:h-20 lg:h-20 xl:h-20 mediumLaptop:h-20 2xl:h-20 largestLaptop:h-20
            mt-6 sm:mt-6 md:mt-6 lg:mt-4 xl:mt-4 mediumLaptop:mt-4 2xl:mt-4 largestLaptop:mt-4
            -translate-y-20 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-16 xl:-translate-y-16 mediumLaptop:-translate-y-16 2xl:-translate-y-16 largestLaptop:-translate-y-16
            justify-end  border  group-hover:bg-white"
            >
              {advantage.img}
            </div>
            <h3 className=" w-full text-xl sm:text-xl md:text-xl lg:text-xl mediumLaptop:text-xl xl:text-2xl 2xl:text-xl largestLaptop:text-3xl text-primary group-hover:text-white mb-2 font-nudista font-bold">
              {advantage.title}
            </h3>
            <p className="font-sora text-gray-700 group-hover:text-white text-sm sm:text-sm md:text-sm lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adv;


