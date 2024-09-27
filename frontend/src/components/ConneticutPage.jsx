import React from 'react';
import conneticutImg1 from '../assets/images/conneticutImg1.webp';
import threeDBud from '../assets/images/3dBud.webp';
import conneticutImg2 from '../assets/images/conneticutImg2.webp';
// import conneticutImg2 from '../assets/images/conneticutImg3.webp';
import conneticutImg3 from '../assets/images/conneticutImg3.webp';
import windMillIcon from '../assets/images/windmill.svg';

const ConneticutPage = () => {
  return (
    <div className="w-full h-full mt-28 mb-[12rem]">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-primary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] sm:mt-1 md:mt-1 lg:mt-1 "></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-black font-nudistaLight">
            It all begins{' '}
            <span className="font-extrabold font-nudista mb-44">
              East Hardford,
            </span>{' '}
            Connecticut
          </h2>
          <div className="border-t-4 border-primary w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[20rem] mt-1"></div>
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
            Welcome to our farm
          </h4>
          <p className="text-xs  md:text-xs lg:text-lg w-full md:w-full lg:w-4/6  font-sora mt-3 leading-3 text-gray-500 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
            temporibus molestiae dignissimos, eveniet nesciunt corrupti
          </p>
          <img
            src={threeDBud}
            alt="conneticutImg2"
            className="w-[70%] md:w-full lg:w-[75%]  xl:w-[75%] 
            ml-[2.5rem] md:-ml-[1rem] lg:ml-[2.1rem] xl:ml-[2.1rem]
            mt-8 md:mt-[1.3rem] lg:mt-[6.02rem] xl:mt-[6.02rem]
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
          <div className="grid grid-rows-3 justify-items-end -mt-[13rem] md:-mt-[13rem] lg:-mt-[22rem] gap-0  mr-3 md:mr-3  lg:mr-7 ">
            <img
              src={windMillIcon}
              alt="windMillIcon"
              className="mt-[2rem] md:mt-[1rem] lg:mt-[0rem] xl:mt-[0rem] w-[2rem]  md:w-[3rem] lg:w-[5rem] xl:w-[5rem]"
            />

            <p className="text-xs md:text-sm lg:text-md font-sora mt-3 text-gray-500">
              Traditional
            </p>
            <p className="text-md md:text-lg lg:text-3xl font-nudista -mt-[2rem] md:-mt-[2rem] lg:-mt-[2rem] xl:-mt-[2rem]">
              Lorem ipsum do <br /> Lorem ipsum do
            </p>
            <div className="flex items-center -mt-[3rem]  md:-mt-[3rem] lg:-mt-[0rem] ">
              <button className="btn btn-xs md:btn-xs lg:btn-md md:text-sm bg-secondary text-white hover:bg-accent font-sora">
                Read more about us
              </button>
              <button
                className="btn btn-square btn-xs md:btn-xs lg:btn-md
              text-xs md:text-xs 
               -ml-[0.4rem] md:-ml-[0.3rem] lg:-ml-[0.8rem] rounded-l-none
                bg-secondary text-white hover:bg-accent "
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
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
