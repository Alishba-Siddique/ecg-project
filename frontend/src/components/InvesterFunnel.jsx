import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import investorFunnelImg1 from '../assets/images/investorFunnelImg1.webp';
import investorFunnelImg2 from '../assets/images/investorFunnelImg2.webp';
gsap.registerPlugin(ScrollTrigger);

const InvesterFunnel = () => {
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
          start: 'top 80%',
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
        className="relative w-[83%]  sm:w-[83%] md:w-[83%] lg:w-[90%] mediumLaptop:w-[103%] xl:w-[98%] 2xl:w-[103%] largestLaptop:w-[94%] 
       h-64 sm:h-64 md:h-[24rem] lg:h-[34rem] mediumLaptop:h-[43rem] xl:h-[47rem] 2xl:h-[45rem] largestLaptop:h-[55rem]
       mx-[1.5rem] sm:mx-[1.5rem] md:ml-[3rem] lg:ml-28 mediumLaptop:ml-40 xl:ml-40 2xl:ml-40 largestLaptop:ml-72
       mb-12 rounded-lg"
      >
        <img
          src={investorFunnelImg1}
          alt="investorFunnelImg1"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-primary opacity-65"></div> */}
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
            ml-6 sm:ml-[1.5rem]  md:ml-[5rem] lg:ml-[5rem] mediumLaptop:ml-[6rem] xl:ml-[5rem] 2xl:ml-[7rem] largestLaptop:ml-[8rem]
            w-full sm:w-full md:w-full lg:w-[76%]  mediumLaptop:w-[87%]  xl:w-[97%]  2xl:w-[85%]  largestLaptop:w-[100%] 
            h-52 sm:h-52 md:h-52 lg:h-72  mediumLaptop:h-[28rem]  xl:h-[28rem]  2xl:h-[28rem]  largestLaptop:h-[32rem]
            mt-32 sm:mt-32 md:mt-32 lg:-mt-[9rem]  xl:-mt-[9rem] 2xl:-mt-[9rem] largestLaptop:-mt-[3rem]
         "
          >
            <img
              src={investorFunnelImg2}
              alt="investorFunnelImg2"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* <div className="absolute inset-0 rounded-lg bg-primary opacity-65"></div> */}
          </div>
        </div>

        {/* Title and Icon Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-0 items-center 
          -ml-16 sm:-ml-16 md:-ml-3  lg:ml-3 xl:ml-6 mediumLaptop:ml-5 2xl:ml-10 largestLaptop:ml-0
        mt-[0rem]  md:mt-0 lg:-mt-[36rem] h-[15%] md:h-[15%] lg:h-[15%] mediumLaptop:h-[15%]  xl:h-[15%] 2xl:h-[15%]  largestLaptop:h-[15%] "
        >
          <p
            className="text-base sm:text-base md:text-xl lg:text-2xl mediumLaptop:text-3xl xl:text-2xl 2xl:text-3xl largestLaptop:text-5xl
             -mt-12 md:-mt-64 lg:-mt-0 xl:-mt-0 mediumLaptop:-mt-0 2xl:-mt-0 largestLaptop:-mt-0  
          font-nudista font-bold leading-tight w-full sm:w-full md:w-[120%] lg:w-full xl:w-full  mediumLaptop:w-full  2xl:w-full  largestLaptop:w-full "
          >
            State-of-the-art Technology
          </p>
          <div
            className="border-t-2 border-secondary mt-2 sm:mt-6 lg:mt-6 h-[10%] md:h-[30%] lg:h-full xl:h-full
          w-20 lg:w-28 block sm:block md:hidden lg:hidden xl:hidden"
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
            ml-6 sm:ml-6 md:ml-44 
            w-full sm:w-full md:w-full
            h-52 sm:h-52 md:h-80  rounded-lg"
          >
            <img
              src={investorFunnelImg2}
              alt="investorFunnelImg2"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* <div className="absolute inset-0 rounded-lg bg-primary opacity-65"></div> */}
          </div>
        </div>

        {/* Line, Paragraph, and Buttons */}
        <div
          className="space-y-4 -ml-16 sm:-ml-16  md:-ml-3  lg:ml-3 xl:ml-6 mediumLaptop:ml-5 2xl:ml-10 largestLaptop:ml-0
         -mb-0 md:-mb-[80rem] lg:-mb-0 xl:-mb-0 mediumLaptop:-mb-0 2xl:-mb-0 largestLaptop:-mb-32"
        >
          <div
            className="mt-16 sm:mt-16 md:mt-1 lg:mt-6 mediumLaptop:mt-6  xl:mt-2  2xl:mt-8 largestLaptop:mt-0
           border-t-2 border-secondary w-20 sm:w-20 md:w-20 lg:w-28 mediumLaptop:w-28  xl:w-28  2xl:w-28 largestLaptop:w-28 
             mb-6 hidden md:block lg:block xl:block"
          ></div>
          <p className="  text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-lg xl:text-lg 2xl:text-xl largestLaptop:text-2xl text-gray-500 ">
            • Cultivation Tech
            <br />
            • Analytics Tech
            <br />• Tracking & Monitoring
            <br />• Advanced AI Tech
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            {/* <a href={pdfFile} download="Read More"> */}
            <a
              href="https://crm.investexpress.ai/v2/preview/lLSGN70UQ7feCnLjvdwY"
              target="_blank"
              className="text-decoration-none"
            >
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

export default InvesterFunnel;
