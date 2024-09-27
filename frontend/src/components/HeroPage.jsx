//Created by Alishba
import React from 'react';
import logoImage from '../assets/images/ecg-logo.png';
import quoteImage from '../assets/images/quote-mark.jpg';

import imageAndrew from '../assets/images/Andrew Borner.webp';

const HeroPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero h-[110vh] relative overflow-x-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/1335389647/video/senior-farmer-watering-the-plant-cannabis-plants-grow-in-a-greenhouse-at-a-facility-under-the.mp4?s=mp4-640x640-is&amp;k=20&amp;c=zP43A4TPXUgxZaVGxIOr4mXfNPHua4ojIhX6to0NFcQ="
            type="video/webm"
          />
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-primary opacity-50"></div>

        {/* Centered Text Content */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-center
                   text-white2 mx-10 sm:mx-10 md:mx-24 lg:mx-24 xl:mx-24 "
        >
          <p
            className="font-nudistaLight text-left drop-shadow-md
                       text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl"
          >
            Your ticket into
          </p>
          <p
            className="font-bold font-nudista text-left
                       text-3xl sm:text-3xl md:text-5xl lg:text-8xl xl:text-8xl
                       mt-2
                       drop-shadow-md"
          >
            the cannabis industry
          </p>
          <p
            className="font-sora text-left 
                      text-xs md:text-sm lg:text-lg xl:text-lg  
                      mt-3 sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3
                      w-11/12 sm:w-11/12 md:w-11/12 lg:w-3/4 xl:w-3/4 drop-shadow-md"
          >
            lorem ipsum dolor sit amet, sed do eiusmod temporincidid unt ut
            labore et doloreloremips umdolor sita
            <br />
            met, seddoeiu smod tempor incididunt ut labore etdolore
          </p>
          <button
            className="font-nudistaLight text-white2 bg-secondary hover:bg-accent 
                   btn btn-xs sm:btn-sm md:btn-md lg:btn-md border-none
                   mt-8 "
          >
            Read More
          </button>
        </div>
      </div>

      {/* Overlap Container */}
      <div
        className="card card-side
                     -mb-[3rem] sm:-mb-[3rem] md:-mb-[3rem] lg:-mb-[8rem]
                     -mt-[4rem] sm:-mt-[4rem] md:-mt-[4rem] lg:-mt-[7.5rem]
                      ml-[4rem] sm:ml-[10rem] md:ml-[25rem] lg:ml-[53rem]
                      z-50 rounded-lg"
      >
        <figure className="bg-white2">
          <div
            className="w-10 sm:w-10 md:w-14 lg:w-44
                       ml-2 sm:ml-14 md:ml-2 lg:ml-10
                       mt-14 sm:mt-14 md:mt-2 lg:mt-10 "
          >
            <img className="rounded-lg" src={imageAndrew} />
          </div>
        </figure>
        <div
          className="p-2 sm:p-2 md:p-2 lg:p-8
                    bg-white2 rounded-e-lg"
        >
          <svg
            className="w-6 sm:w-6 md:w-6 lg:w-10
                      -mb-[1rem] sm:-mb-[0.8rem] md:-mb-[2rem] lg:-mb-[2rem]
                      -mt-[0.6rem] sm:-mt-[0.2rem] md:-mt-[0.3rem] lg:-mt-[0.6rem]
                      -ml-[0.5rem] sm:-ml-[0.5rem] md:-ml-[0.5rem] lg:-ml-[1rem]
                      rounded-lg z-10 opacity-20"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z"
              fill="#111111"
            />
          </svg>
          <p
            className="text-xs sm:text-xs md:text-xs lg:text-lg
                       font-nudistaLight
                       mt-5 sm:mt-5 md:mt-5 lg:mt-6"
          >
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry.
          </p>
          <p
            className="text-xs sm:text-xs md:text-xs lg:text-lg
                       opacity-50"
          >
            <i className="fas fa-user"></i> Andrew Borner
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
