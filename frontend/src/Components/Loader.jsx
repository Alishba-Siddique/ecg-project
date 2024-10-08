import React, { useState, useEffect } from 'react';
import ecgWhiteLogo from '../assets/images/ecg-white-logo.webp';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 38); // Increment progress every 50ms (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary -mb-8">
      <div className="relative">
        {/* Circular Progress SVG */}
        <svg className="absolute w-20 h-20 top-0 left-0" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset="0"
          />
          <path
            className="text-primary"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={`${100 - progress}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Bouncing Image */}
        <div
          className="w-44 sm:w-44  md:w-44 lg:w-44 mediumLaptop:w-44 xl:w-44 2xl:w-80 largestLaptop:w-80
             h-44 sm:h-44 md:h-44 lg:h-44 mediumLaptop:h-44 xl:h-44 2xl:h-80 largestLaptop:h-80
        animate-bounce -mb-10"
        >
          <img
            src={ecgWhiteLogo}
            alt="ecgWhiteLogo"
            className="w-44 sm:w-44  md:w-44 lg:w-44 mediumLaptop:w-44 xl:w-44 2xl:w-80 largestLaptop:w-80
             h-44 sm:h-44 md:h-44 lg:h-44 mediumLaptop:h-44 xl:h-44 2xl:h-80 largestLaptop:h-80
             object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Text Animation and Loading Percentage */}
      <h1
        className="mt-5 text-white
       text-2xl sm:text-2xl md:text-2xl lg:text-4xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-4xl
       font-nudista font-bold tracking-widest animate-pulse"
      >
        Growing... {progress}%
      </h1>
    </div>
  );
};

export default Loader;
