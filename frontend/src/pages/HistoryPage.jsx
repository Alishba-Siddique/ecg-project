import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-r from-primary to-secondary ">
        {/* History Content */}
        <div
          className="
        m-10 sm:m-32 md:m-10  lg:m-44 xl:m-44 2xl:m-44 mediumLaptop:m-44 largestLaptop:m-44
        mt-32 sm:mt-32 md:mt-32  lg:mt-44 xl:mt-44 2xl:mt-44 mediumLaptop:mt-44 largestLaptop:mt-44 "
        >
          <div
            className="container mx-aut
           p-1 sm:p-3 md:p-3 lg:p-3 xl:p-8 2xl:p-8 mediumLaptop:p-8 largestLaptop:p-8  bg-white rounded-lg"
          >
            {/* Animated Title */}
            <h1
              className="text-5xl font-bold font-nudista text-center 
             my-12
             history-title text-primary"
            >
              Our History
            </h1>
            {/* Animated Text */}
            <p
              className="text-lg text-gray-700 
            mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
            my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
            font-sora "
            >
              In April 2023, Dan, Oz, and Andrew came together for the first
              time, and everything began to fall into place. A
              70,000-square-foot facility. The sought-after rights to a
              full-scale cultivation license. A vision for designing the space
              and securing capital.
            </p>
            <p
              className="text-lg text-gray-700 
            mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
           my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
             font-sora"
            >
              After a year and a half of countless meetings and calls with legal
              experts, engineers, and various prospective vendors, a
              comprehensive game plan emerged. They were ready to transform
              their vision into reality.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
