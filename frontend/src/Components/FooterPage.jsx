import React from 'react';
import ecgWhiteLogo from '../assets/images/ecg-white-logo.png';
import footerBg from '../assets/images/footerBg.webp';

const FooterPAge = () => {
  return (
    <div className="relative">
      {/* Footer */}
      <footer className="relative py-8  px-6 md:mx-0 text-white h-full drop-shadow-xl">
        <div id="contact" className="flex flex-row justify-center">
          {/* Contact Form */}
          <div className="absolute h-fit w-fit z-40 bg-white justify-center text-center -mt-44 md:-mt-56 lg:-mt-44 rounded-2xl p-8  md:p-12 lg:p-12 lg:mx-0 md:ml-10 mx-4">
            <p className="text-black text-md md:text-2xl lg:text-4xl  mb-4 font-nudistaLight">
              Request a call from <span className='font-nudista'>our team{' '}</span>
            </p>

            <form className="flex flex-col justify-center items-center gap-4 mt-6 text-xs md:text-md lg:text-lg">
              <div className="flex flex-col md:flex-col lg:flex-row gap-4 w-full md:w-full justify-center font-sora">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                />
              </div>

              <div className="mt-2">
                <button className="bg-secondary text-white px-10 py-2 font-sora rounded-lg hover:bg-accent  transition w-full md:w-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Background Image Container */}
        <div
          className="w-full h-full absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          {/* Gradient Overlay with mix-blend-mode */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-800 bg-blend-color-overlay"></div>
        </div>

        <div className="relative flex flex-col mt-64 lg:mt-44 mx-auto md:flex-row items-center md:items-center lg:items-start justify-center md:justify-center lg:justify-end">
          {/* Logo */}
          <div className="mb-4 md:mb-0 lg:px-24">
            <a href="/">
              <img
                src={ecgWhiteLogo}
                alt="ECG-Logo"
                className="h-36 sm:w-auto md:w-[23rem] lg:w-[23rem]"
              />
            </a>
          </div>

          {/* Navigation and Social Media Links */}
          <div className="flex flex-row gap-10 w-full justify-center md:justify-center lg:justify-normal  md:grid md:grid-cols-2 md:gap-20 lg:gap-20 ml-auto md:ml-auto lg:ml-auto px-10 md:px-10 lg:px-32 ">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-4 font-sora ">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <a href="#history" className="hover:underline">
                Our History
              </a>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-4 font-sora">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <a href="https://twitter.com" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="https://facebook.com" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPAge;
