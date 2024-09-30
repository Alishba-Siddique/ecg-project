// import { FiPlay } from 'react-icons/fi';
// import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
// import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';

// const PhotoVideoComponent = () => {
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
//                 className="w-full h-full object-cover"
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

// export default PhotoVideoComponent;

// import { FiPlay } from 'react-icons/fi';
// import Slider from "react-slick"; // Importing react-slick
// import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
// import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';
// import "slick-carousel/slick/slick.css"; // Importing slick-carousel styles
// import "slick-carousel/slick/slick-theme.css";

// const PhotoVideoComponent = () => {
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
//             className="w-full h-full object-cover"
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

// export default PhotoVideoComponent;

import { FiPlay } from 'react-icons/fi';
import Slider from 'react-slick'; // Importing react-slick
import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';
import 'slick-carousel/slick/slick.css'; // Importing slick-carousel styles
import 'slick-carousel/slick/slick-theme.css';

const PhotoVideoComponent = () => {
  // Responsive settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          right: '0px', // Positioning dots on the right side
          top: '95%',
          transform: 'translateY(-50%)',
        }}
      >
        <ul style={{ margin: '0px', color: 'white' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'white', // Making dots white
          borderRadius: '50%',
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For large tablets/laptops
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
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[89%] mx-auto mb-20 py-10 px-4 sm:px-4 lg:px-6 flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-6">
      {/* 70% Container: Displaying Photo Carousel */}
      <div className="w-full lg:w-[75%] bg-green-300 rounded-md">
        <Slider {...settings}>
          <div>
            <img
              src={cannabisFlower1}
              alt="Cannabis Flower 1"
              className="w-full h-[300px] md:h-[450px] lg:h-[420px] object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src={cannabisFlower2}
              alt="Cannabis Flower 2"
              className="w-full h-[300px] md:h-[450px] lg:h-[420px] object-cover rounded-md"
            />
          </div>
        </Slider>
      </div>

      {/* 30% Container: Photo and Video Section with Overlay */}
      <div className="w-full lg:w-[25%] relative rounded-md overflow-hidden mt-8 lg:mt-0">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={cannabisFlower1}
            alt="Overlay Image"
            className="w-full h-[200px] sm:h-[300px] lg:h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
        </div>

        {/* Text content on top of the overlay */}
        <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
          <div className="flex items-center justify-start">
            <FiPlay size={40} className="mr-1 lg:mr-2" />{' '}
            {/* Adjusted play icon size for responsiveness */}
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl font-bold font-nudista">
            Photo and Video
          </div>
          <div className="text-xs lg:text-sm uppercase font-sora">
            <a
              href="#"
              className="hover:underline hover:decoration-secondary duration-300"
            >
              View more
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoVideoComponent;
