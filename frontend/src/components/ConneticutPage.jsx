import React from 'react';
import conneticutImg1 from '../assets/images/conneticutImg1.webp';
import threeDBud from '../assets/images/3dBud.webp';
import conneticutImg2 from '../assets/images/conneticutImg2.webp';
// import conneticutImg2 from '../assets/images/conneticutImg3.webp';
import conneticutImg3 from '../assets/images/conneticutImg3.webp';
import windMillIcon from '../assets/images/windmill.svg';
import overlayTextIconOrange from '../assets/images/overlayTextIconOrange.png';

const ConneticutPage = () => {
  return (
    <div className="w-full h-full mt-28 mb-[12rem]">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] sm:mt-1 md:mt-1 lg:mt-1 "></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-black font-nudistaLight">
            An Industry poised for{' '}
            <span className="font-extrabold font-nudista mb-44">
              explosive growth
            </span>{' '}
          </h2>
          <div className="border-t-4 border-secondary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] mt-1"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-0 mx-8 sm:ml-7 md:ml-16 lg:-ml-[1rem] md:gap-10 lg:gap-10">
        <div className="relative w-[95%] md:w-[110%] lg:w-[103%] sm:h-full md:h-full lg:h-[23rem] scale-y-100 md:scale-y-110 lg:scale-y-150 mt-6 md:mt-10 lg:mt-36  md:ml-[7rem] lg:ml-[16rem]">
          <img
            src={conneticutImg1}
            alt="conneticutImg1"
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#759157] opacity-50"></div>
        </div>
        <div className="mt-5  md:mt-20 lg:mt-28 md:mx-16 lg:ml-36 mx-3 ">
          <h4 className="text-md md:text-lg lg:text-xl xl:text-3xl font-nudista ">
            Welcome to our facility
          </h4>
          <p className="text-xs  md:text-xs lg:text-base w-full md:w-full lg:w-4/6  font-sora mt-3 leading-3 text-gray-500 text-left">
            Our planned 42,000 Square foot facility is located in the bustling
            locally of East Hartford, CT.
          </p>
          <img
            src={threeDBud}
            alt="conneticutImg2"
            className="w-[70%] md:w-full lg:w-[75%]  xl:w-[75%] 
            ml-[3rem] md:-ml-[1rem] lg:ml-[2.1rem] xl:ml-[3rem]
            mt-8 md:mt-[1.3rem] lg:mt-[9rem] xl:mt-[9rem]
            -mb-[2.5rem] md:-mb-[2.5rem] lg:-mb-[2rem]"
          />
        </div>
      </div>

      {/* Image and Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10 md:-mt-[1rem] lg:-mt-[3rem] ml-[0rem] md:ml-[9rem] lg:ml-[14rem] drop-shadow-lg">
        <div className="relative z-50 w-[80%] md:w-[95%] lg:w-[95%] xl:w-[95%] order-2 md:order-1 lg:order-1 xl:order-1">
          <img
            src={conneticutImg2}
            alt="conneticutImg2"
            className="  w-full
             h-full md:h-[90%] lg:h-[90%] xl:h-[90%]"
          />
          <div className="grid grid-rows-3 justify-items-end -mt-[17rem] md:-mt-[19.5rem] lg:-mt-[22rem] gap-4 md:gap-4 lg:gap-4  mr-3 md:mr-3  lg:mr-7 ">
            <img
              // src={windMillIcon}
              src={overlayTextIconOrange}
              alt="windMillIcon"
              className="mt-[2rem] md:mt-[4rem] lg:-mt-[10rem] xl:-mt-[10rem] w-[2rem]  md:w-[2rem] lg:w-[4rem] xl:w-[4rem]"
            />

            <p
              className="text-xs md:text-lg w-1/2 md:w-1/2
            mt-[0rem] md:mt-[0rem] lg:mt-0 xl:mt-0
            -mr-[1rem] md:-mr-[0.5rem] lg:-mr-9 xl:-mr-9
             lg:w-[50%] lg:text-[1.62rem]  font-nudista "
            >
              Precision in Cultivation
            </p>
            <p
              className="text-[0.6rem] md:text-[0.6rem] lg:text-base font-sora 
            -mt-[3.3rem]  md:-mt-[3.5rem] lg:-mt-[2rem] 
            -mr-[1rem] md:-mr-[0.5rem] lg:-mr-0 xl:-mr-0
            w-[50%] lg:w-[45%] md:w-[50%]"
            >
              Our team of trained experts deliver exceptional value to both our
              customers and the market by keeping yields and proﬁts high.
            </p>
            <div className="flex items-center -mt-[3rem]  md:-mt-[7rem] lg:-mt-[0rem]  ">
              <button
                className="btn text-[0.6rem] md:text-xs lg:text-base bg-black text-white
               hover:bg-secondary font-sora  mr-16 md:mr-14 lg:mr-[7.5rem] xl:mr-[7.5rem]
               px-2 md:px-2 lg:px-16 "
              >
                Learn More
              </button>
              {/* <button
                className="btn btn-square btn-xs md:btn-xs lg:btn-md
              text-xs md:text-xs 
               -ml-[0.4rem] md:-ml-[0.3rem] lg:-ml-[0.8rem] rounded-l-none
                bg-secondary text-white hover:bg-accent "
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button> */}
            </div>
          </div>
        </div>

        <div className="relative w-[80%] md:w-[95%] lg:w-[90%] xl:w-[90%] mr-0 md:mr-28 lg:mr-40 order-1 md:order-2 lg:order-2 xl:order-2">
          <img
            src={conneticutImg3}
            alt="conneticutImg3"
            className="w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] "
          />
          <div className="absolute top-0 left-0 w-full h-full md:h-[90%] lg:h-[90%] xl:h-[90%] bg-[#759157] opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ConneticutPage;
