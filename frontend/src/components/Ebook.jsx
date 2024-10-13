import React, { useEffect } from 'react';
// import { GoChevronDown } from 'react-icons/go';
import ebook from '../assets/images/ebook.webp';
import pdfFile from '../assets/ecg-pitch-deck.pdf';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Ebook = () => {
  useEffect(() => {
    gsap.fromTo(
      '#text-section',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#text-section',
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Main Content Section Animation
    gsap.fromTo(
      '#image-section',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#image-section',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-44 sm:mb-44 md:mb-0 lg:-mb-44 mediumLaptop:-mb-56 xl:-mt-32 2xl:-mb-44 largestLaptop:mb-52">
      <div id="text-section" className="grid grid-rows-2">
        <div
          className="text-xl sm:text-xl md:text-2xl lg:text-4xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-7xl
            font-nudista font-light  text-center md:text-left lg:text-left
            place-content-end
            ml-16 sm:ml-16 md:ml-16 lg:ml-32 mediumLaptop:ml-[12rem] xl:ml-[7rem] 2xl:ml-[12rem] largestLaptop:ml-[22rem]
            mt-20 sm:mt-20 md:mt-44 lg:mt-56  mediumLaptop:mt-56 xl:mt-56 2xl:mt-56 largestLaptop:mt-80
           w-4/6 sm:w-4/6 md:w-3/4 lg:w-3/4 mediumLaptop:w-[65%] xl:w-[65%] 2xl:w-[55%] largestLaptop:w-3/4"
        >
          Download <span className="font-nudista font-bold ">Our Ebook</span> to
          Enhance Your Knowledge About The Industry
        </div>
        <div className="flex flex-row gap-0">
          <a href={pdfFile} download={'Ebook'}>
            <button
              className=" text-xs sm:text-xs md:text-sm lg:text-base mediumLaptop:text-lg xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
             bg-secondary border-none text-white hover:bg-black font-sora 
                   px-3 md:px-2 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
                   py-3 md:py-2 lg:py-4 xl:py-4 2xl:py-4 largestLaptop:py-4
                   rounded-lg
                    ml-24 sm:ml-24 md:ml-16 lg:ml-32 mediumLaptop:ml-[12rem] xl:ml-[7rem]  2xl:ml-[12rem] largestLaptop:ml-[22rem]
                   mt-5 sm:mt-5 md:mt-4 lg:mt-8 mediumLaptop:mt-8 xl:mt-8 2xl:mt-8 largestLaptop:mt-12 "
            >
              Download Now
            </button>
          </a>
          {/* <a href={pdfFile} download={'Ebook'}> */}
          <a
              href="https://crm.investexpress.ai/v2/preview/7qUAox9kkUgKnoK8UFrO"
              className="text-decoration-none"
            >
            <button
              className=" text-xs sm:text-xs md:text-sm lg:text-base mediumLaptop:text-lg xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
             bg-black border-none text-white hover:bg-secondary font-sora 
                   px-3 md:px-2 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
                   py-3 md:py-2 lg:py-4 xl:py-4 2xl:py-4 largestLaptop:py-4
                   rounded-lg
                    ml-[1rem] sm:ml-[1rem] md:ml-[2rem]lg:ml-[2rem] mediumLaptop:ml-[2rem] xl:ml-[2rem]  2xl:ml-[2rem] largestLaptop:ml-[2rem]
                   mt-5 sm:mt-5 md:mt-4 lg:mt-8 mediumLaptop:mt-8 xl:mt-8 2xl:mt-8 largestLaptop:mt-12 "
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div
        id="image-section"
        className="-mt-40 sm:-mt-40 md:mt-0 lg:mt-0 mediumLaptop:mt-0 xl:mt-0 2xl:mt-0 largestLaptop:mt-0
                      mr-4 sm:mr-4 md:-ml-20 lg:mr-0 mediumLaptop:mr-56 xl:-ml-24  2xl:mr-44 largestLaptop:mr-44 
                      ml-4 sm:ml-4 md:mr-0 lg:-ml-20 mediumLaptop:ml-0 xl:mr-6 2xl:ml-10 largestLaptop:ml-10"
      >
        <img
          src={ebook}
          alt="ebook"
          className="w-full h-full sm:h-full md:h-[110%] lg:h-full mediumLaptop:h-full xl:h-full 2xl:h-full largestLaptop:h-[110%]
          object-contain sm:object-contain md:object-cover lg:object-cover mediumLaptop:object-cover xl:object-cover 2xl:object-cover largestLaptop:object-cover"
        />
      </div>
    </div>
  );
};

export default Ebook;
