import { useState, useEffect } from 'react';
import { GiTreeBranch, GiTreeGrowth } from 'react-icons/gi';
import { PiChartLine, PiCurrencyDollar } from 'react-icons/pi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import conneticutImg1 from '../assets/images/exGrowthBg.webp';
import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';

const EGrowthPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    {
      src: `${cannabisFlower1}`,
      heading: 'Analytics Technology',
      text: '3500+ plants',
      description1:
        '- Analyzing market trends and demand to ensure we are up to date on preferences.',
      description2:
        '- Custom strain selection based on analysis of market trends',
      icon: <PiChartLine size={80} className="text-white" />,
    },
    {
      src: `${cannabisFlower2}`,
      heading: 'Cultivation Technology',
      text: '$57B industry',
      description1: '- Fully automated environmental monitoring and control',
      description2:
        '- Monitoring light, temperature, humidity, Co2 and VPD with on/off-site control ',
      description3: '- Unique automations and care for each stage of growth',
      icon: <GiTreeBranch size={80} className="text-white" />,
    },
    {
      src: `${cannabisFlower1}`,
      heading: 'Tracking & Monitoring',
      text: '125+',
      description1:
        '- Seed to sale software: our systems track each plant from seed to sale',
      description2: '- Every plant is tagged and tracking is automated',
      icon: <GiTreeGrowth size={80} className="text-white" />,
    },
    {
      src: `${cannabisFlower2}`,
      heading: 'Investment Returns',
      text: '7899+ plants',
      description1:
        '- Invests the capital to own room(s) or table(s) in our turn key cannabis cultivation facilities',
      description2:
        '- Generates revenue with projected returns in the 30%+ range* ',
      icon: <PiCurrencyDollar size={80} className="text-white" />,
    },
  ];

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length]);

  const handleNext = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center mt-32 mb-20 gap-5 bg-blend-overlay bg-opacity-90"
      style={{
        backgroundImage: `url(${conneticutImg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Title Section */}
      <div className="text-center mb-12 mt-20 px-4">
        <div className="flex justify-center items-center gap-2">
          <div className="border-t-4 border-white2 w-[4rem]  md:w-[4rem] lg:w-[20rem]"></div>
          <h2 className="text-xl  md:text-3xl lg:text-4xl text-white2 font-nudistaLight">
            A market poised for{' '}
            <span className="font-extrabold font-nudista mb-44">
              explosive growth
            </span>
          </h2>
          <div className="border-t-4 border-white2 w-[4rem]  md:w-[4rem] lg:w-[20rem]"></div>
        </div>
      </div>

      {/* Images Grid (Visible on Medium and Larger Screens) */}
      <div className="hidden grid-cols-2 md:flex md:flex-row lg:flex lg:flex-wrap lg:flex-row w-64 md:w-[40rem] lg:w-[83rem] gap-4 md:gap-4 lg:gap-8 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-500 ${
              selectedImage === index
                ? 'flex-[4]  h-[15rem] md:h-[20rem] lg:h-[25rem]'
                : 'flex-[3] h-[10rem] md:h-[15rem] lg:h-[20rem] max-w-[300px] sm:max-w-[400px] md:max-w-[500px]'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.heading}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-4 duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-nudista">
                {image.text}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel (Visible on Small Screens) */}
      <div className="block md:hidden w-full relative">
        <button
          className="absolute left-4 top-40 z-10 text-white p-2 bg-secondary rounded-full"
          onClick={handlePrev}
        >
          <FaArrowLeft size={10} />
        </button>
        <div className="w-64 md:w-[40rem] lg:w-[83rem] mx-auto relative">
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].heading}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Text overlay on image */}
          <div className="absolute inset-0 bg-primary bg-opacity-30 flex justify-center items-center text-center text-white p-4 duration-300">
            <h3 className="text-2xl font-bold font-nudista">
              {images[selectedImage].text}
            </h3>
          </div>
        </div>
        <button
          className="absolute right-4 top-40 z-10 text-white p-2 bg-secondary rounded-full"
          onClick={handleNext}
        >
          <FaArrowRight size={10} />
        </button>
      </div>

      {/* Icon and Description Row (Same for all screens) */}
      <div className="flex flex-row md:flex-row w-full max-w-[83rem] gap-2 md:gap-5 lg:gap-5 my-8 mb-16 justify-center items-center  px-4 mx-0  md:ml-0 lg:mx-0">
        <div className="w-[15%] md:w-[20%] lg:w-[30%] flex justify-center items-center bg-secondary rounded-l-full p-1 md:p-10 lg:p-10 md:rounded-r-none md:rounded-s-full">
          {images[selectedImage].icon}
        </div>
        <div className="w-[70%] md:w-[60%] lg:w-[70%] p-3 md:p-10 lg:p-10 bg-gray-600 text-white rounded-lg">
          <h3 className="text-md md:text-xl lg:text-3xl font-bold mb-2 font-nudista">
            {images[selectedImage].heading}
          </h3>
          <p className="text-xs md:text-sm lg:text-xl font-sora leading-normal">
            {images[selectedImage].description1} <br />
            {images[selectedImage].description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EGrowthPage;
