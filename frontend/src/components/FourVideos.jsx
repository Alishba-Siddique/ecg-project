// import { FiPlay } from 'react-icons/fi';
// import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
// import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';

// const FourVideos = () => {
//   return (
//     <div className="w-[89%] mx-auto mb-20 py-10 px-4 sm:px-4 lg:px-6 flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-6">
//         {/* 70% Container: Displaying Photo */}
//         <div className="w-full lg:w-[75%] bg-green-300 rounded-md">
//             {/* Placeholder for the image */}
//             <img
//             src={cannabisFlower2}
//             alt="Main Display"
//             className="w-full h-[300px] lg:h-full object-cover rounded-md"
//             />
//         </div>

//         {/* 30% Container: Photo and Video Section with Overlay */}
//         <div className="w-full lg:w-[25%] relative rounded-md overflow-hidden mt-8 lg:mt-0">
//             {/* Background image with overlay */}
//             <div className="absolute inset-0">
//             <img
//                 src={cannabisFlower1}
//                 alt="Overlay Image"
//                 className="w-full h-full object-cover rounded-lg"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
//             </div>

//             {/* Text content on top of the overlay */}
//             <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
//             <div className="flex items-center justify-start">
//                 <FiPlay size={50} className="mr-1" /> {/* Adjusted play icon size for responsiveness */}
//             </div>
//             <div className="text-2xl lg:text-4xl font-bold font-nudista">Photo and Video</div>
//             <div className="text-xs lg:text-sm uppercase font-sora">View more</div>
//             </div>
//         </div>
//     </div>

//   );
// };

// export default FourVideos;

// import { FiPlay } from 'react-icons/fi';
// import Slider from "react-slick"; // Importing react-slick
// import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
// import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';
// import "slick-carousel/slick/slick.css"; // Importing slick-carousel styles
// import "slick-carousel/slick/slick-theme.css";

// const FourVideos = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     appendDots: dots => (
//       <div
//         style={{
//           position: "relative",
//           bottom: "50px", // Positioning dots on the right side
//           top: "50%",
//           transform: "translateY(-50%)",
//           color: "white"
//         }}
//       >

//         <ul style={{ margin: "0px", padding: "4px", color: "white"}}> {dots} </ul>
//       </div>
//     ),
//   };

//   return (
//     <div className="w-[89%] mx-auto mb-20 py-10 px-4 sm:px-4 lg:px-6 flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-6">
//       {/* 70% Container: Displaying Photo Carousel */}
//       <div className="w-full lg:w-[75%] bg-green-300 rounded-md">
//         <Slider {...settings}>
//           <div>
//             <img
//               src={cannabisFlower1}
//               alt="Cannabis Flower 1"
//               className="w-full h-[300px] lg:h-[420px] object-cover rounded-md"
//             />
//           </div>
//           <div>
//             <img
//               src={cannabisFlower2}
//               alt="Cannabis Flower 2"
//               className="w-full h-[300px] lg:h-[420px] object-cover rounded-md"
//             />
//           </div>
//           {/* Add more slides here if needed */}
//         </Slider>
//       </div>

//       {/* 30% Container: Photo and Video Section with Overlay */}
//       <div className="w-full lg:w-[25%] relative rounded-md overflow-hidden mt-8 lg:mt-0">
//         {/* Background image with overlay */}
//         <div className="absolute inset-0">
//           <img
//             src={cannabisFlower1}
//             alt="Overlay Image"
//             className="w-full h-full object-cover rounded-lg"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
//         </div>

//         {/* Text content on top of the overlay */}
//         <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
//           <div className="flex items-center justify-start">
//             <FiPlay size={50} className="mr-1" /> {/* Adjusted play icon size for responsiveness */}
//           </div>
//           <div className="text-2xl lg:text-4xl font-bold font-nudista">Photo and Video</div>
//           <div className="text-xs lg:text-sm uppercase font-sora">View more</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FourVideos;

// import { FiPlay } from 'react-icons/fi';
// import Slider from 'react-slick'; // Importing react-slick
// import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
// import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';
// import 'slick-carousel/slick/slick.css'; // Importing slick-carousel styles
// import 'slick-carousel/slick/slick-theme.css';

// const FourVideos = () => {
//   // Responsive settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: 'absolute',
//           right: '0px', // Positioning dots on the right side
//           top: '95%',
//           transform: 'translateY(-50%)',
//         }}
//       >
//         <ul style={{ margin: '0px', color: 'white' }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={{
//           width: '10px',
//           height: '10px',
//           backgroundColor: 'white', // Making dots white
//           borderRadius: '50%',
//         }}
//       ></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024, // For large tablets/laptops
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, // For tablets
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480, // For mobile devices
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className="w-[89%] mx-auto mb-0 sm:mb-0 md:mb-0 lg:mb-0 mediumLaptop:mb-0 xl:mb-10 2xl:mb-10 largestLaptop:mb-10
//       py-20 sm:py-20 md:py-0 lg:py-10 mediumLaptop:py-10 xl:py-10 2xl:py-10 largestLaptop:py-36
//       px-4 sm:px-4 lg:px-6
//       flex flex-col lg:flex-row justify-center
//       h-auto sm:h-auto md:h-auto lg:h-[500px] mediumLaptop:h-[500px] xl:h-[500px] 2xl:h-[500px] largestLaptop:h-[500px]

//       gap-6"
//     >
//       {/* 70% Container: Displaying Photo Carousel */}
//       <div
//         className="w-full lg:w-[75%]
//       h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] mediumLaptop:h-[420px] xl:h-[350px] 2xl:h-[420px] largestLaptop:h-[500px]
//         bg-green-300 rounded-md"
//       >
//         <Slider {...settings}>
//           <div>
//             <img
//               src={cannabisFlower1}
//               alt="Cannabis Flower 1"
//               className="w-full
//                h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] mediumLaptop:h-[420px] xl:h-[350px] 2xl:h-[420px] largestLaptop:h-[500px] object-cover rounded-md"
//             />
//           </div>
//           <div>
//             <img
//               src={cannabisFlower2}
//               alt="Cannabis Flower 2"
//               className="w-full
//               h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] mediumLaptop:h-[420px] xl:h-[350px] 2xl:h-[420px] largestLaptop:h-[500px] object-cover rounded-md"
//             />
//           </div>
//         </Slider>
//       </div>

//       {/* 30% Container: Photo and Video Section with Overlay */}
//       <div className="w-full lg:w-[25%] h-[300px] sm:h-[300px] md:h-[200px] lg:h-[300px] mediumLaptop:h-[420px] xl:h-[350px] 2xl:h-[420px] largestLaptop:h-[500px] relative rounded-md overflow-hidden mt-8 lg:mt-0">
//         {/* Background image with overlay */}
//         <div className="absolute inset-0">
//           <img
//             src={cannabisFlower1}
//             alt="Overlay Image"
//             className="w-full
//             h-[300px] sm:h-[300px] md:h-[200px] lg:h-[300px] mediumLaptop:h-[420px] xl:h-[350px] 2xl:h-[420px] largestLaptop:h-[500px] object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
//         </div>

//         {/* Text content on top of the overlay */}
//         <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
//           <div className="flex items-center justify-start">
//             <FiPlay size={40} className="mr-1 lg:mr-2" />{' '}
//             {/* Adjusted play icon size for responsiveness */}
//           </div>
//           <div className="text-base sm:text-base md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-2xl 2xl:text-4xl largestLaptop:text-5xl font-bold font-nudista">
//             Photo and Video
//           </div>
//           <div className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-sm xl:text-sm 2xl:text-lg largestLaptop:text-2xl uppercase font-sora">
//             <a
//               href="#"
//               className="hover:underline hover:decoration-secondary duration-300"
//             >
//               View more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FourVideos;

// import { useRef, useEffect } from 'react';
// import sampleVideo1 from '../assets/videos/sampleVideo1.mp4'; // Example video files
// import sampleVideo2 from '../assets/videos/sampleVideo2.mp4';
// import indoorVid1 from '../assets/videos/indoorVid1.mp4';
// import indoorVid2 from '../assets/videos/indoorVid2.mp4';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import vidPoster1 from '../assets/images/vidPoster1.webp';
// import vidPoster2 from '../assets/images/vidPoster2.webp';
// import vidPoster3 from '../assets/images/vidPoster3.webp';
// import vidPoster4 from '../assets/images/vidPoster4.webp';

// gsap.registerPlugin(ScrollTrigger);

// const FourVideos = () => {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);
//   const videoRef3 = useRef(null);
//   const videoRef4 = useRef(null);

//   useEffect(() => {
//     // Four Video Section Animation
//     gsap.fromTo(
//       '#four-video-section',
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '#four-video-section',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, []);

//   const handleMouseEnter = (videoRef) => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = (videoRef) => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   return (
//     <div
//       id="four-video-section"
//       className="w-[89%] mx-auto mb-0
//       py-20 sm:py-20 lg:py-10 px-4 sm:px-4 lg:px-6
//       grid grid-cols-1 md:grid-cols-4 gap-8"
//     >
//       {/* Video Box 1 */}
//       <div
//         className="w-full h-[300px] sm:h-[300px] lg:h-[400px] bg-gray-200 rounded-md hover:scale-105 transition duration-300 relative"
//         onMouseEnter={() => handleMouseEnter(videoRef1)}
//         onMouseLeave={() => handleMouseLeave(videoRef1)}
//       >
//         <video
//           ref={videoRef1}
//           src={sampleVideo1}
//           className="w-full h-full object-cover rounded-lg"
//           muted
//           loop
//           preload='auto'
//           poster={vidPoster1}
//         ></video>
//       </div>

//       {/* Video Box 2 */}
//       <div
//         className="w-full h-[300px] sm:h-[300px] lg:h-[400px] bg-gray-200 rounded-md overflow-hidden hover:scale-105 transition duration-300 relative"
//         onMouseEnter={() => handleMouseEnter(videoRef2)}
//         onMouseLeave={() => handleMouseLeave(videoRef2)}
//       >
//         <video
//           ref={videoRef2}
//           src={indoorVid1}
//           className="w-full h-full object-cover rounded-lg"
//           muted
//           loop
//           preload='auto'
//           poster={vidPoster2}
//         ></video>
//       </div>

//       {/* Video Box 3 */}
//       <div
//         className="w-full h-[300px] sm:h-[300px] lg:h-[400px] bg-gray-200 rounded-md overflow-hidden hover:scale-105 transition duration-300 relative"
//         onMouseEnter={() => handleMouseEnter(videoRef3)}
//         onMouseLeave={() => handleMouseLeave(videoRef3)}
//       >
//         <video
//           ref={videoRef3}
//           src={sampleVideo2}
//           className="w-full h-full object-cover rounded-lg"
//           muted
//           loop
//           preload='auto'
//           poster={vidPoster3}
//         ></video>
//       </div>

//       {/* Video Box 4 */}
//       <div
//         className="w-full h-[300px] sm:h-[300px] lg:h-[400px] bg-gray-200 rounded-md overflow-hidden hover:scale-105 transition duration-300 relative"
//         onMouseEnter={() => handleMouseEnter(videoRef4)}
//         onMouseLeave={() => handleMouseLeave(videoRef4)}
//       >
//         <video
//           ref={videoRef4}
//           src={indoorVid2}
//           className="w-full h-full object-cover rounded-lg"
//           muted
//           loop
//           preload='auto'
//           poster={vidPoster4}
//         ></video>
//       </div>
//     </div>
//   );
// };

// export default FourVideos;

import React, { useRef, useEffect } from 'react';
// import sampleVideo1 from '../assets/videos/sampleVideo1.mp4'; // Example video files
// import sampleVideo2 from '../assets/videos/sampleVideo2.mp4';
// import indoorVid1 from '../assets/videos/indoorVid1.mp4';
// import indoorVid2 from '../assets/videos/indoorVid2.mp4';
import vidPoster1 from '../assets/images/vidPoster1.webp';
import vidPoster2 from '../assets/images/vidPoster2.webp';
import vidPoster3 from '../assets/images/vidPoster3.webp';
import vidPoster4 from '../assets/images/vidPoster4.webp';
import Slick from 'react-slick'; // Import Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FourVideos = () => {
  const videoRefs = useRef([null, null, null, null]);

  // Slider settings for autoplay, infinite loop, and responsive layout
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Showing one video at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          left: '50%', // Centering the dots horizontally
          bottom: '10px', // Adjusting the bottom position for better visibility
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ margin: '0px' }}> {dots} </div>
      </div>
    ),
    customPaging: (i) => <div className="custom-dot"></div>,
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Autoplay all videos on mount
    videoRefs.current.forEach((video) => {
      if (video) video.play();
    });
  }, []);

  return (
    <div
      id="four-video-section"
      className="w-full mx-auto px-4 sm:px-8 lg:px-32"
    >
      <style>
        {`
        .custom-dot {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 141, 42, 0.5);
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.3s;
        }
        .slick-dots li.slick-active .custom-dot {
          background-color: rgba(255, 141, 42, 1);

        }
        `}
      </style>
      <Slick {...settings}>
        {/* Video Slide 1 */}
        <div>
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            // src={sampleVideo1}
            src="https://media.gettyimages.com/id/1436489282/video/upward-tilting-shot-of-industrial-cannabis-grow.mp4?s=mp4-640x640-gi&k=20&c=zv9uKKywNELHA97h0pF0-oq_xtW8XH3AIQ6Bd8lCrKA="
            className="w-full h-[200px] sm:h-[200px] lg:h-[300px] object-cover rounded-lg"
            muted
            autoPlay
            loop
            poster={vidPoster1}
          />
        </div>

        {/* Video Slide 2 */}
        <div>
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            // src={indoorVid1}
            src='https://media.gettyimages.com/id/1415638899/video/cannabis-plants-at-flowering-stage-in-a-greenhouse-with-led-electrical-light-indoor-plants.mp4?s=mp4-640x640-gi&k=20&c=PV0JeIgRyk9JucocATUVZoj18xKzuyPan3oj-MCChx4='
            className="w-full h-[200px] sm:h-[200px] lg:h-[300px] object-cover rounded-lg"
            muted
            autoPlay
            loop
            poster={vidPoster2}
          />
        </div>

        {/* Video Slide 3 */}
        <div>
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            src='https://media.gettyimages.com/id/2167617866/video/cannabis-growing-indoors.mp4?s=mp4-640x640-gi&k=20&c=2N-0N1ffR5Kp5yNra1LRy9FWplJW6V9ZRt0ISB8CexE='
            // src={sampleVideo2}
            className="w-full h-[200px] sm:h-[200px] lg:h-[300px] object-cover rounded-lg"
            muted
            loop
            autoPlay
            poster={vidPoster3}
          />
        </div>

        {/* Video Slide 4 */}
        <div>
          <video
            ref={(el) => (videoRefs.current[3] = el)}
            // src={indoorVid2}
            src="https://media.gettyimages.com/id/1412875480/video/marijuana-cultivator-tending-to-plants-in-warehouse-marijuana-plants-growing-at-indoor.mp4?s=mp4-640x640-gi&k=20&c=h23LJq1XEwSdcTuoFd1j1O7AHTXVQfqHd3WsDoKQiJs="
            className="w-full h-[200px] sm:h-[200px] lg:h-[300px] object-cover rounded-lg"
            muted
            loop
            autoPlay
            poster={vidPoster4}
          />
        </div>
      </Slick>
    </div>
  );
};

export default FourVideos;
