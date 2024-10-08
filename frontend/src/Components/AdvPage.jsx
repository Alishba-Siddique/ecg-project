// import { React, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../styles/fade.css';

// gsap.registerPlugin(ScrollTrigger);

// const AdvPage = () => {
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

// export default AdvPage;

// import { React, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const AdvPage = () => {
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

// export default AdvPage;

import { React, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TbGrowth } from 'react-icons/tb';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CiDollar } from "react-icons/ci";


gsap.registerPlugin(ScrollTrigger);

const AdvPage = () => {
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
      icon: <TbGrowth size={100} />,
      title: 'HYBRID MODEL',
      description:
        'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
      id: 'adv-row-1-1',
    },
    {
      icon: <MdOutlineWorkspacePremium size={100}/>,
      title: 'PREMIUM QUALITY',
      description:
        'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
      id: 'adv-row-1-2',
    },
    {
      icon: '',
      title: 'PRICE POINT',
      description:
        'Higher quality product, high demand, and low supply equals higher prices per pound.',
      id: 'adv-row-1-3',
    },
    {
      icon: '',
      title: 'COMPETITIVE EDGE',
      description:
        'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
      id: 'adv-row-1-4',
    },
  ];

  return (
    <div className="max-w-8xl mx-6 sm:mx-6 md:mx-6 lg:mx-20 mediumLaptop:mx-20 xl:mx-10 2xl:mx-32 largestLaptop:mx-32 mb-16 py-8 px-4 sm:px-6 md:px-6 lg:px-12 xl:px-12 2xl:px-12 largestLaptop:px-12 flex flex-col justify-center h-full fade-in">
      {/* Title Section */}
      <div id="title-adv-section" className="text-center mb-24">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
          <h2 className="text-md sm:text-md md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl mx-10 sm:mx-10 md:mx-10 lg:mx-5 mediumLaptop:mx-5 xl:mx-5 2xl:mx-10 largestLaptop:mx-10 text-black font-nudista font-light">
            The{' '}
            <span className="font-nudista font-bold mb-44">
              East Coast Growers
            </span>{' '}
            Advantage
          </h2>
          <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
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
            className="group px-3 py-24 bg-white shadow-md border border-gray-200 rounded-lg hover:scale-105 hover:shadow-lg hover:text-white hover:bg-primary transition-transform duration-500 ease-in-out"
          >
            <div className="flex justify-center items-center mb-9">
              {advantage.icon}
            </div>
            <h3 className=" w-full text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-xl xl:text-2xl 2xl:text-xl largestLaptop:text-3xl text-primary group-hover:text-white mb-2 font-nudista font-bold">
              {advantage.title}
            </h3>
            <p className="font-sora text-gray-700 group-hover:text-white text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvPage;
