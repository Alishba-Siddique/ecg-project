import React from 'react';
import { GoChevronDown } from 'react-icons/go';
import ebook from '../assets/images/ebook.png';
import pdfFile from '../assets/ecg-pitch-deck.pdf';

const InfoPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-44 md:mb-52 lg:mb-52">
      <div className="grid grid-rows-2">
        <div
          className="text-xl md:text-2xl lg:text-5xl 
        font-nudista font-light  text-center md:text-left lg:text-left
        place-content-end md:place-content-end lg:place-content-end 
        mt-20 md:mt-44 lg:mt-56 ml-0 md:ml-20 lg:ml-80 "
        >
          Download <span className="font-nudista font-bold ">Our Ebook</span> to
          <br />
          Enhance Your Knowledge About The Industry
        </div>
        <div>
          <a href={pdfFile} download={'Ebook'}>
            <button
              className="btn btn-xs  md:btn-xs lg:btn-md text-xs md:text-sm lg:text-base bg-secondary  border-none text-white hover:bg-black font-sora
             px-5 md:px-5 lg:px-16 ml-28 md:ml-20 lg:ml-80
                   mt-4 md:mt-10 lg:mt-10"
            >
              Download Now <GoChevronDown />
            </button>
          </a>
        </div>
      </div>
      <div className="-mt-40 md:mt-0 lg:mt-0 mx-4 md:mr-10 lg:mr-56">
        <img
          src={ebook}
          alt="ebook"
          className="w-full h-full object-contain md:object-contain lg:object-cover"
        />
      </div>
    </div>
  );
};

export default InfoPage;
