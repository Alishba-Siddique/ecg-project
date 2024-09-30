import React, { useState, useEffect } from 'react';
import ecgWhiteLogo from '../assets/images/ecg-white-logo.png';

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
    }, 99); // Increment progress every 50ms (adjust as needed)

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
        <div className="w-44 h-44 animate-bounce -mb-10">
          <img
            src={ecgWhiteLogo}
            alt="Cannabis Leaf"
            className="w-44 h-44 object-contain"
          />
        </div>
      </div>

      {/* Text Animation and Loading Percentage */}
      <h1 className="mt-5 text-white text-3xl font-bold font-nudista tracking-widest animate-pulse">
        Growing... {progress}%
      </h1>
    </div>
  );
};

export default Loader;
