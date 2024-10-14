import React from 'react';

const NewsLetter = () => {
  return (
    <section
      id="contact"
      className="relative z-20 flex flex-row justify-center drop-shadow-md"
    >
      {/* Contact Form */}
      <div
        className="absolute h-fit w-fit  mx-4 bg-white justify-center text-center 
                  -mt-44 sm:-mt-44 md:-mt-56 lg:-mt-44 mediumLaptop:mt-44 xl:mt-32 2xl:mt-44 largestLaptop:-mt-80
                  rounded-2xl 
                  p-8 sm:p-8 md:p-12 lg:p-12 mediumLaptop:p-12 xl:p-12 2xl:p-12 largestLaptop:p-24
                  ml-10 sm:ml-10 md:ml-10 lg:mx-10 mediumLaptop:ml-10 xl:ml-10 2xl:ml-10 largestLaptop:ml-10 "
      >
        <p
          className="text-black text-base sm:text-base md:text-2xl lg:text-4xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-7xl
                  mb-4 font-nudista font-light "
        >
          Request a call from{' '}
          <span className="font-nudista font-bold">our team </span>
        </p>

        <form className="flex flex-col justify-center items-center gap-4 mt-6 text-xs md:text-base lg:text-lg">
          <div
            className="flex flex-col md:flex-col lg:flex-row  mediumLaptop:flex-row xl:flex-row 2xl:flex-row largestLaptop:flex-row
      gap-4 w-full md:w-full justify-center font-sora
      text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl"
          >
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300
         p-3 sm:p-3 md:p-3 lg:p-3 mediumLaptop:p-3 xl:p-3 2xl:p-3 largestLaptop:p-6
        rounded w-full md:w-full md:flex-1"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded w-full md:w-full md:flex-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full md:w-full md:flex-1"
            />
          </div>
          <button
            className=" text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem]  lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-3xl 
     bg-secondary border-none text-white hover:bg-black font-sora 
           px-4 sm:px-4 md:px-4 lg:px-6 xl:px-6 2xl:px-6 largestLaptop:px-20
           py-3 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-4 largestLaptop:py-4
           rounded-lg
           ml-0 sm:ml-0 md:ml-3 lg:ml-3 medimLaptop:ml-3 xl:ml-8 2xl:ml-8 largestLaptop:ml-5
           mt-2 sm:mt-2 md:mt-4 lg:mt-4 mediumLaptop:mt-4 xl:mt-8 2xl:mt-8 largestLaptop:mt-2 "
          >
            Submit{' '}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
