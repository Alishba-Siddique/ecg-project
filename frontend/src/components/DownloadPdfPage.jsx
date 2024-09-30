import React from 'react';
import conneticutImg1 from '../assets/images/conneticutImg1.webp';
import conneticutImg4 from '../assets/images/conneticutImg4.webp';
import sunnyDayIcon from '../assets/images/sunny-day.svg';
import pdfFile from '../assets/ecg-pitch-deck.pdf';

const DownloadPdfPage = () => {
  return (
    <div
      id="history"
      className="grid grid-cols-1 lg:grid-cols-2  justify-items-center -mt-24 md:-mt-24 lg:mt-16 px-4 lg:px-8 -mb-12 md:-mb-44 lg:mb-8 w-full"
    >
      {/* Left Image with Overlay */}
      <div className="relative sm:w-[83%] md:w-[80%] lg:w-[103%] xl:w-[103%] h-64 sm:h-80 lg:h-[36rem] xl:h-[36rem] mx-[1.5rem] md:ml-[3rem] lg:ml-40 xl:ml-40">
        <img
          src={conneticutImg1}
          alt="conneticutImg1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-65"></div>
      </div>

      {/* Right Side Content */}
      <div className="space-y-6 md:ml-[5.5rem]  lg:ml-20">
        {/* Text and Image Row */}
        <div className=" hidden grid-cols-1  rounded-lg md:grid-cols-2 gap-0 -mb-8 md:-mb-8 lg:mb-24 h:full md:h-1/2 lg:h-1/2 xl:h-1/2
         md:hidden lg:block xl:block">
          
          <div className="relative rounded-lg w-[88%] md:w-[50%] lg:w-[50%] h-52 md:h-52 lg:h-96 xl:h-96 mt-[2rem] md:mt-[3rem] lg:-mt-[9rem]  xl:-mt-[9rem] ml-[1.5rem]  md:ml-14 lg:ml-[17.5rem]">
            <img
              src={conneticutImg4}
              alt="conneticutImg4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-65"></div>
          </div>
        </div>

        {/* Title and Icon Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-0 items-center ml-[1.5rem]  md:-ml-16 lg:ml-0
        mt-[0rem]  md:mt-0 lg:-mt-[36rem] h-[15%] md:h-[15%] lg:h-[15%] xl:h-[15%]">
          <p className="text-lg sm:text-xl lg:text-3xl mt-0 md:-mt-32 lg:-mt-0 xl:-mt-0 
          font-nudista leading-tight">
            State of the Art Tech
          </p>
          <div className="border-t-2 border-secondary  mt-3 h-[10%] md:h-[30%] lg:h-full xl:h-full
          w-20 lg:w-28 block md:hidden lg:hidden xl:hidden"></div>
          <img
            src={sunnyDayIcon}
            alt="sunnyDayIcon"
            className="w-12 h-12 md:w-12 md:h-24 lg:w-16 lg:h-24 ml-56 md:ml-10 lg:ml-44 -mt-[15rem] md:-mt-32 lg:-mt-0 xl:-mt-0  "
          />
          <div className="relative hidden md:block lg:hidden xl:hidden ml-6 md:ml-6 lg:ml-6 
          w-[88%] md:w-[90%] lg:w-[86%] h-52 md:h-52 lg:h-96 xl:h-96 rounded-lg">
            <img
              src={conneticutImg4}
              alt="conneticutImg4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-65"></div>
          </div>
          
        </div>

        {/* Line, Paragraph, and Buttons */}
        <div className="space-y-4  ml-[1.5rem]   md:-ml-16 lg:ml-0 mb-4 md:-mb-[80rem]    ">
          <div className="border-t-2 border-secondary w-20 lg:w-28 -mt-4 mb-6 hidden md:block lg:block xl:block"></div>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 ">
            • Pharmaceutical-grade hydroponic cultivation systems
            <br />
            • Climate Controlled automation
            <br />• Advanced AI Tracking
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={pdfFile} download="Read More">
              <button className="btn text-xs md:text-sm lg:text-base bg-black text-white hover:bg-secondary font-sora px-16 ">
                Learn more{' '}
              </button>
              {/* <button
                className="btn btn-square btn-sm md:btn-sm lg:btn-md 
              -ml-[0.5rem] md:-ml-[0.4rem] lg:-ml-[0.3rem] rounded-l-none bg-secondary text-white hover:bg-accent"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPdfPage;
