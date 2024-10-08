import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import conneticutImg1 from '../assets/images/conneticutImg1.webp';
import conneticutImg4 from '../assets/images/conneticutImg4.webp';
import sunnyDayIcon from '../assets/images/sunny-day.svg';
import pdfFile from '../assets/ecg-pitch-deck.pdf';

gsap.registerPlugin(ScrollTrigger);

const DownloadPdfPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '#left-image',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#left-image',
          start: 'top 30%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#right-section',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#right-section',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      id="history"
      className="grid grid-cols-1 lg:grid-cols-2  justify-items-center -mt-24 md:-mt-24 lg:mt-16 px-4 lg:px-8 -mb-12 md:-mb-44 lg:mb-8 w-full"
    >
      {/* Left Image with Overlay */}
      <div
        id="left-image"
        className="relative w-[83%]  sm:w-[83%] md:w-[83%] lg:w-[90%] mediumLaptop:w-[103%] xl:w-[100%] 2xl:w-[103%] largestLaptop:w-[94%] 
       h-64 sm:h-80 md:h-[24rem] lg:h-[32rem] mediumLaptop:h-[36rem] xl:h-[40rem] 2xl:h-[45rem] largestLaptop:h-[50rem]
       mx-[1.5rem] sm:mx-[1.5rem] md:ml-[3rem] lg:ml-28 mediumLaptop:ml-40 xl:ml-32 2xl:ml-40 largestLaptop:ml-72"
      >
        <img
          src={conneticutImg1}
          alt="conneticutImg1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-65"></div>
      </div>

      {/* Right Side Content */}
      <div id="right-section" className="space-y-6 md:ml-[5.5rem]  lg:ml-10">
        {/* Text and Image Row */}
        <div
          className=" hidden grid-cols-1  rounded-lg md:grid-cols-2 gap-0 -mb-8 md:-mb-8 lg:mb-24 h:full md:h-1/2 lg:h-1/2 xl:h-1/2
         md:hidden lg:block mediumLaptop:block xl:block 2xl:block largestLaptop:block "
        >
          <div
            className="relative rounded-lg
             hidden md:block lg:block mediumLaptop:block xl:block 2xl:block largestLaptop:block 
            ml-6 sm:ml-[1.5rem]  md:ml-14 lg:ml-[13rem] mediumLaptop:ml-[13rem] xl:ml-[13rem] 2xl:ml-[13rem] largestLaptop:ml-[13rem]
            w-[88%] sm:w-[88%] md:w-[50%] lg:w-[50%]  mediumLaptop:w-[50%]  xl:w-[50%]  2xl:w-[50%]  largestLaptop:w-[50%] 
            h-52 sm:h-52 md:h-52 lg:h-72  mediumLaptop:h-96 xl:h-96  2xl:h-96 largestLaptop:h-96
            mt-[2rem] sm:mt-[2rem] md:mt-[3rem] lg:-mt-[9rem]  xl:-mt-[9rem]
         "
          >
            <img
              src={conneticutImg4}
              alt="conneticutImg4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-65"></div>
          </div>
        </div>

        {/* Title and Icon Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-0 items-center 
          ml-[1.5rem] sm:ml-[1.5rem]  md:-ml-16  lg:ml-0 xl:ml-0 mediumLaptop:ml-0 2xl:ml-0 largestLaptop:ml-0
        mt-[0rem]  md:mt-0 lg:-mt-[36rem] h-[15%] md:h-[15%] lg:h-[15%] mediumLaptop:h-[15%]  xl:h-[15%] 2xl:h-[15%]  largestLaptop:h-[15%] "
        >
          <p
            className="text-base sm:text-base md:text-xl lg:text-2xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-5xl
             mt-0 md:-mt-32 lg:-mt-0 xl:-mt-0 mediumLaptop:-mt-0 2xl:-mt-0 largestLaptop:-mt-0  
          font-nudista font-bold leading-tight w-full" 
          >
             State of the Art Technology
          </p>
          <div
            className="border-t-2 border-secondary  mt-4 h-[10%] md:h-[30%] lg:h-full xl:h-full
          w-20 lg:w-28 block md:hidden lg:hidden xl:hidden"
          ></div>
          {/* <img
            src={sunnyDayIcon}
            alt="sunnyDayIcon"
            className=" h-12 md:h-24  lg:h-24
             ml-56 md:ml-10 lg:ml-32 mediumLaptop:ml-20 xl:ml-20 2xl:ml-20 largestLaptop:ml-44
              -mt-[3rem] sm:-mt-[3rem] md:-mt-32 lg:-mt-0 xl:-mt-0  mediumLaptop:-mt-[0rem] 2xl:-mt-[0rem] largestLaptop:-mt-[0rem]
                         w-[2rem] md:w-[2rem] lg:w-[4rem] mediumLaptop:w-[4rem] xl:w-[4rem] 2xl:w-[4rem] largestLaptop:w-[6rem]"
          /> */}
          <div
            className="relative hidden md:block lg:hidden mediumLaptop:hidden xl:hidden 2xl:hidden  largestLaptop:hidden
            ml-6 sm:ml-6 md:ml-6 lg:ml-6 mediumLaptop:ml-6 xl:ml-6 2xl:ml-36 largestLaptop:ml-80
            w-[88%] sm:w-[88%] md:w-[90%] lg:w-[70%]  mediumLaptop:w-[86%]  xl:w-[100%]  2xl:w-[70%]  largestLaptop:w-[100%] 
            h-52 sm:h-52 md:h-52 lg:h-52 mediumLaptop:h-96 xl:h-96 2xl:h-80 largestLaptop:h-96  rounded-lg"
          >
            <img
              src={conneticutImg4}
              alt="conneticutImg4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-65"></div>
          </div>
        </div>

        {/* Line, Paragraph, and Buttons */}
        <div
          className="space-y-4 ml-[1.5rem] sm:ml-[1.5rem]  md:-ml-16  lg:ml-0 xl:ml-0 mediumLaptop:ml-0 2xl:ml-0 largestLaptop:ml-0
         mb-4 md:-mb-[80rem]    "
        >
          <div className="border-t-2 border-secondary w-20 sm:w-20 md:w-20 lg:w-28 mediumLaptop:w-28  xl:w-28  2xl:w-28 largestLaptop:w-28  -mt-4 mb-6 hidden md:block lg:block xl:block"></div>
          <p className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-lg xl:text-lg 2xl:text-xl largestLaptop:text-2xl text-gray-500 ">
            • Cultivation Tech
            <br />
            • Analytics Tech
            <br />• Tracking & Monitoring
            <br />• Advanced AI Tech
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={pdfFile} download="Read More">
              {/* <button className="btn text-xs md:text-sm lg:text-base bg-black text-white hover:bg-secondary font-sora px-16 ">
                Learn more{' '}
              </button> */}
              <button
                className=" text-xs sm:text-xs md:text-sm lg:text-sm mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
             bg-black border-none text-white hover:bg-secondary font-sora 
                   px-3 md:px-3 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
                   py-3 md:py-3 lg:py-3 xl:py-4 2xl:py-4 largestLaptop:py-4
                   rounded-lg
                   mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-8 2xl:mt-8 largestLaptop:mt-2 "
              >
                Learn more{' '}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPdfPage;
