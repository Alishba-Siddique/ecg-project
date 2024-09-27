import React from 'react';
import conneticutImg1 from '../assets/images/conneticutImg1.webp';
import conneticutImg4 from '../assets/images/conneticutImg4.webp';
import sunnyDayIcon from '../assets/images/sunny-day.svg';
import pdfFile from '../assets/ecg-pitch-deck.pdf';

const DownloadPdfPage = () => {
  return (
    <div  id='history' className="grid grid-cols-1 lg:grid-cols-2  justify-items-center mt-8 sm:mt-12 lg:mt-16 px-4 lg:px-8 mb-8 w-full">
      {/* Left Image with Overlay */}
      <div className="relative sm:w-[83%] md:w-[80%] lg:w-full xl:w-full h-64 sm:h-80 lg:h-[30rem] xl:h-[38rem] mx-[1.5rem] md:ml-[3rem] lg:-ml-[4rem] xl:-ml-[4rem]">
        <img
          src={conneticutImg1}
          alt="conneticutImg1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-65"></div>
      </div>

      {/* Right Side Content */}
      <div className="space-y-6 md:ml-[5.5rem]  lg:ml-0">
        {/* Text and Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 h:full md:h-1/2 lg:h-1/2 xl:h-1/2">
          <span
            className="text-xs md:text-sm lg:text-lg leading-6 md:leading-7
          mt-[2rem]  md:mt-[9rem] lg:mt-[9rem]  xl:mt-[9rem] text-gray-500 w-3/4
          mx-[1.5rem]  md:mx-[0em] lg:mx-[0rem]  xl:mx-[0rem]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
            temporibus amet cons.
          </span>
          <div className="relative w-[88%] md:w-[70%] lg:w-[86%] h-52 md:h-52 lg:h-96 xl:h-96 mt-[2rem] md:mt-[3rem] lg:-mt-[9rem]  xl:-mt-[9rem] ml-[1.5rem]  md:ml-14 lg:-ml-[1.5rem]">
            <img
              src={conneticutImg4}
              alt="conneticutImg4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-65"></div>
          </div>
        </div>

        {/* Title and Icon Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center ml-[1.5rem]  md:ml-0 lg:ml-0">
          <p className="text-lg sm:text-xl lg:text-3xl font-nudista leading-tight">
            Lorem ipsum dolor sit amet. consec teturhy amet elitlo. adipisicin.
          </p>
          <div className="border-t-2 border-secondary w-20 lg:w-28 block md:hidden lg:hidden xl:hidden"></div>
          <img
            src={sunnyDayIcon}
            alt="sunnyDayIcon"
            className="w-12 h-12 md:w-24 md:h-24 lg:w-24 lg:h-24 ml-44 md:ml-36 lg:ml-44"
          />
        </div>

        {/* Line, Paragraph, and Buttons */}
        <div className="space-y-4 w-3/4 ml-[1.5rem]  md:ml-0 lg:ml-0">
          <div className="border-t-2 border-secondary w-20 lg:w-28 hidden md:block lg:block xl:block" ></div>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor
            sit. amet consec teturhffy amet consectetur.
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={pdfFile} download="Read More">
              <button className="btn btn-sm md:btn-sm lg:btn-md bg-secondary text-white hover:bg-accent font-sora">
                Read more about us{' '}
              </button>
              <button
                className="btn btn-square btn-sm md:btn-sm lg:btn-md 
              -ml-[0.5rem] md:-ml-[0.4rem] lg:-ml-[0.3rem] rounded-l-none bg-secondary text-white hover:bg-accent"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPdfPage;
