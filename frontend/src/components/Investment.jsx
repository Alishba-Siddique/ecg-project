import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import investmentBg from '../assets/images/investmentBg.webp';
import CT from '../assets/images/CT.jpg';
import ECG from '../assets/images/ECG.jpg';
import Investors from '../assets/images/Investors.jpg';
import Returns from '../assets/images/Returns.jpg';
import ctIcon from '../assets/images/ctIcon.webp';
import ecgIcon from '../assets/images/ecgIcon.webp';
import invesrorsIcon from '../assets/images/investorsIcon.webp';
import returnsIcon from '../assets/images/returnsIcon.webp';

gsap.registerPlugin(ScrollTrigger);

const Investment = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Title Section Animation
    gsap.fromTo(
      '#investment-title',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#investment-title',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#image-section-content',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#image-section-content',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '#image-section-small',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#image-section-small',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Image Row Animation
    gsap.fromTo(
      '#description-section',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#description-section',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const images = [
    {
      src: `${CT}`,
      heading: 'THE STATE OF CONNETICUT',
      text: 'Connecticut',
      description1:
        'Connecticut legalized recreational cannabis in 2021, offering significant growth potential but high barriers to entry due to stringent licensing and regulations. This ensures only well-prepared businesses like ECG can secure a cultivation license and operate within the state’s limited-competition market.',
      icon: <img src={ctIcon} width="30%" className="text-white" />,
    },
    {
      src: `${ECG}`,
      heading: 'EAST COAST GROWERS',
      text: 'ECG',
      description1:
        'ECG will build a state-of-the-art cultivation facility, secure a cannabis cultivation license, and provide the essential technology, processes, expertise, and daily management required for successful operations.',
      icon: <img src={ecgIcon} width="30%" className="text-white" />,
    },
    {
      src: `${Investors}`,
      heading: 'INVESTORS',
      text: 'Investors',
      description1:
        'Our fractional ownership model offers investors the chance to own a share of our facility, providing access to a highly lucrative and unique opportunity, while remaining 100% passive.',
      icon: <img src={invesrorsIcon} width="30%" className="text-white" />,
    },
    {
      src: `${Returns}`,
      heading: 'RETURNS',
      description1:
        'Given Connecticut\'s regulatory landscape and favorable market conditions, this investment is projected to yield returns exceeding 40%. For comparison, since 1924, the S&P 500 has averaged an annual return of approximately 7%, adjusted for inflation.',
      text: 'Returns',
      icon: <img src={returnsIcon} width="30%" className="text-white" />,
    },
  ];

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
      className="relative flex flex-col w-full h-full justify-center items-center 
        mt-32 sm:mt-32 md:mt-32 lg:mt-32 mediumLaptop:mt-32 xl:mt-20 2xl:mt-32 largestLaptop:mt-32
        mb-32 sm:mb-32 md:mb-32 lg:mb-32 mediumLaptop:mb-32 xl:mb-28 2xl:mb-52 largestLaptop:mb-52
         gap-5 bg-blend-overlay bg-opacity-90 overflow-x-hidden"
      style={{
        backgroundImage: `url(${investmentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title Section */}
      <div id="investment-title" className="text-center mb-12 mt-20  ">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-white w-[4rem] md:w-[4rem] lg:w-[10rem] mediumLaptop:w-[10rem] xl:w-[10rem] 2xl:w-[10rem] largestLaptop:w-[10rem]"></div>
          <h2 className="mx-5 text-base sm:text-base md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl text-white font-nudista font-light ">
            A unique collaborative{' '}
            <span className=" font-nudista font-bold mb-44">investment </span>
            opportunity
          </h2>
          <div className="border-t-4 border-white w-[4rem] md:w-[4rem] lg:w-[10rem] mediumLaptop:w-[10rem] xl:w-[10 rem] 2xl:w-[10rem] largestLaptop:w-[10rem]"></div>
        </div>
      </div>

      {/* Images Grid (Visible on Medium and Larger Screens) */}
      <div
        id="image-section-content"
        className="hidden grid-cols-2 md:flex   md:flex-row lg:flex lg:flex-wrap lg:flex-row
         w-64 md:w-[40rem]  lg:w-[63rem] mediumLaptop:w-[63rem] xl:w-[66rem] 2xl:w-[83rem] largestLaptop:w-[120rem]
          gap-4 md:gap-4 lg:gap-8 mx-auto justify-center"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative transition-all duration-500 ${
              selectedImage === index
                ? 'flex-[4]  h-[15rem]  sm:h-[15rem] md:h-[20rem] lg:h-[25rem] mediumLaptop:h-[25rem] xl:h-[25rem] 2xl:h-[35rem] largestLaptop:h-[35rem] '
                : 'flex-[3] h-[10rem] sm:h-[10rem] md:h-[15rem] lg:h-[20rem] mediumLaptop:h-[20rem] xl:h-[20rem] 2xl:h-[30rem] largestLaptop:h-[30rem] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mediumLaptop:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] largestLaptop:max-w-[1000px]'
            }`}
            onMouseEnter={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.heading}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* <div className="absolute inset-0 bg-primary bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-4 duration-300"> */}
            <div className="absolute inset-0  flex flex-col justify-center items-center text-center text-white p-4 duration-300">
              <h3 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-5xl font-nudista font-bold">
                {image.text}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel (Visible on Small Screens) */}
      <div id="image-section-small" className="block md:hidden w-full relative ">
        <button
          className="absolute left-4 top-40 z-10 text-white p-2 bg-secondary rounded-full"
          onClick={handlePrev}
        >
          <FaArrowLeft size={10} />
        </button>
        <div className="w-64 sm:w-64 md:w-[40rem] lg:w-[63rem]  mediumLaptop:w-[83rem] xl:w-[63rem] 2xl:w-[83rem] largestLaptop:w-[120rem] mx-auto relative">
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].heading}
            className="w-64 sm:w-64 md:w-[40rem] lg:w-[63rem]  mediumLaptop:w-[83rem] xl:w-[63rem] 2xl:w-[83rem] largestLaptop:w-[120rem]
               h-full object-cover rounded-lg"
          />
           <div className="absolute inset-0 flex justify-center items-center text-center text-white p-4 duration-300">
            <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl mediumLaptop:text-2xl xl:text-2xl 2xl:text-3xl largestLaptop:text-4xl  font-nudista font-bold">
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
      <div
        id="description-section"
        className=" flex flex-row md:flex-row lg:flex lg:flex-row mediumLaptop:flex-row xl:flex-row 2xl:flex-row largestLaptop:flex-row 
        w-full max-w-[83rem] sm:max-w-[83rem] md:max-w-[83rem] lg:max-w-[63rem] mediumLaptop:max-w-[63rem] xl:max-w-[66rem] 2xl:max-w-[83rem] largestLaptop:max-w-[120rem] 
        mx-auto md:ml-0 lg:mx-0  px-0
        gap-2 md:gap-5 lg:gap-10 my-8 mb-16 justify-center items-center "
      >
        <div className="w-[60%] md:w-[30%] lg:w-[30%] flex justify-center items-center bg-secondary rounded-l-full py-10 md:p-10 lg:py-10 md:rounded-r-none md:rounded-s-full">
          {images[selectedImage].icon}
        </div>
        <div className="w-[70%] md:w-[60%] lg:w-[70%] p-3 md:p-10 lg:py-10 bg-gray-600 text-white rounded-lg">
          <h3 className="text-base sm:text-base md:text-xl lg:text-2xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-4xl  mb-2 font-nudista font-bold">
            {images[selectedImage].heading}
          </h3>
          <p className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-base xl:text-base 2xl:text-lg largestLaptop:text-2xl font-sora leading-normal">
            {images[selectedImage].description1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investment;
