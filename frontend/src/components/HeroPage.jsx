//Created by Alishba
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import overlayTextIcon from '../assets/images/overlayTextIcon.png';
import heroVideo from '../assets/videos/bgVideo.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
  useEffect(() => {
    // Title Section Animation
    gsap.fromTo(
      '#white-section',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#white-section',
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero h-[118vh] sm:h-[118vh] md:h-[118vh] lg:h-[118vh] mediumLaptop:h-[118vh] xl:h-[118vh]2xl:h-[118vh] largestLaptop:h-[118vh] relative overflow-x-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-primary opacity-50"></div>

        {/* Centered Text Content */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-center
                   text-white 
                     mx-10 sm:mx-10 md:mx-14 lg:mx-24 mediumLaptop:mx-24 xl:mx-24 2xl:mx-24 largestLaptop:mx-44"
        >
          <p
            className="font-nudista font-light text-left drop-shadow-mdl
                          text-2xl sm:text-2xl md:text-4xl lg:text-5xl mediumLaptop:6xl xl:text-6xl 2xl:text-7xl largestLaptop:text-8xl"
          >
            Your Ticket Into
          </p>
          <p
            className="font-nudista font-bold text-left
                       text-3xl sm:text-3xl md:text-5xl lg:text-6xl mediumLaptop:7xl xl:text-7xl 2xl:text-7xl largestLaptop:text-9xl
                       mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-4 2xl:mt-8 largestLaptop:mt-8 
                       drop-shadow-md"
          >
            The Cannabis Industry
          </p>
          <p
            className="font-sora text-left 
                      text-xs md:text-sm lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-3xl
                      mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-4 2xl:mt-8 largestLaptop:mt-8 
                      ml-0 sm:ml-0 md:ml-3 lg:ml-3 medimLaptop:ml-3 xl:ml-3 2xl:ml-3 largestLaptop:ml-5
                      w-11/12 sm:w-11/12 md:w-[75%] lg:w-[55%]  mediumLaptop:w-[55%] xl:w-full 2xl:w-full largestLaptop:w-full drop-shadow-md"
          >
            Unlocking unprecedented opportunities for success in a market poised
            for explosive growth
          </p>
          <button
            className=" text-xs sm:text-xs md:text-sm lg:text-sm mediumLaptop:text-base xl:text-base 2xl:text-lg largestLaptop:text-3xl 
             bg-secondary border-none text-white hover:bg-black font-sora 
                   px-3 md:px-3 lg:px-6 xl:px-4 2xl:px-6 largestLaptop:px-20
                   py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-4 largestLaptop:py-4
                   rounded-lg
                   ml-0 sm:ml-0 md:ml-3 lg:ml-3 medimLaptop:ml-3 xl:ml-3 2xl:ml-3 largestLaptop:ml-5
                   mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-4 2xl:mt-8 largestLaptop:mt-8 "
          >
            Learn More{' '}
          </button>
        </div>
      </div>

      {/* Overlap Container */}
      <div
        id="white-section"
        className="card card-side
                     -mb-[3rem] sm:-mb-[3rem] md:-mb-[3rem] lg:-mb-[5rem] mediumLaptop:-mb-[5.3rem] xl:-mb-[5.5rem] 2xl:-mb-[5rem] largestLaptop:-mb-[5rem]
                      ml-[3rem] sm:ml-[20rem] md:ml-[25rem] lg:ml-[32rem] mediumLaptop:ml-[50rem] xl:ml-[45rem] 2xl:ml-[55rem] largestLaptop:ml-[115rem]
                      -mt-[4rem] sm:-mt-[4rem] md:-mt-[4rem]  lg:-mt-[7.5rem] mediumLaptop:-mt-[7.5rem] xl:-mt-[9rem] 2xl:-mt-[7.5rem] largestLaptop:-mt-[9rem]
                      z-50 rounded-lg"
      >
        <figure className="bg-white">
          <div
            className="w-10 sm:w-10 md:w-10 lg:w-14 mediumLaptop:w-20 xl:w-16 2xl:w-16 largestLaptop:w-16
                       ml-2 sm:ml-2 md:ml-3 lg:ml-8 mediumLaptop:ml-8 xl:ml-8 2xl:ml-8 largestLaptop:ml-8 
                       mt-16 sm:mt-16 md:mt-12 lg:mt-20 mediumLaptop:mt-24 xl:mt-20 2xl:mt-24 largestLaptop:mt-24"
          >
            <img className="rounded-lg" src={overlayTextIcon} />
          </div>
        </figure>
        <div
          className="p-2 sm:p-2 md:p-4 lg:p-6 mediumLaptop:p-8 xl:p-8 2xl:p-8 largestLaptop:p-8
                    bg-white rounded-e-lg w-3/4 "
        >
          <p
            className="text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-base xl:text-base 2xl:text-lg largestLaptop:text-lg
                       
                       mt-3 sm:mt-3 md:mt-0 lg:-mt-0 mediumLaptop:mt-0 xl:mt-0 2xl:mt-0 largestLaptop:mt-0
                       font-sora text-left drop-shadow-mdl"
          >
            At our state-of-the-art craft cannabis cultivation facility, we
            combine meticulous cultivation practices with expert curation to
            produce the highest quality cannabis products available on the
            market
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
