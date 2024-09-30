import React from 'react'
import { GoChevronDown } from "react-icons/go";
import ebook from '../assets/images/ebook.png'

const InfoPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-52'>
      <div className='grid grid-rows-2'>
        <div className='text-xl md:text-2xl lg:text-5xl font-nudistaLight place-content-end ml-56 leading-relaxed'>
         Unlock Your Business <br />Potential with Our <div className='font-nudista'>Free Ebook</div>
        </div>
        <div>
        <button
            className="btn text-xs md:text-sm lg:text-base bg-secondary  border-none text-white hover:bg-black font-sora
             px-5 md:px-5 lg:px-16 ml-0 md:ml-3 lg:ml-56
                   mt-10 "
          >
            Download Now {' '}<GoChevronDown />
          </button>
        </div>
      </div>
      <div className='mr-56'>
        <img
          src={ebook}
          alt='ebook'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default InfoPage
