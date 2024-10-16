import React, { useEffect } from 'react';
import NavbarPage from '../components/Navbar';
import FooterWebPage from '../components/Footer';
import heroBg from '../assets/videos/heroBg.webm';
import posterHero from '../assets/images/poster-2.png';
import {
  CiLinkedin,
  CiFacebook,
  CiTwitter,
  CiInstagram,
  CiMail,
} from 'react-icons/ci';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '#contact-page',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#contact-page',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div className="relative  overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        poster={posterHero} // This shows a poster image before the video loads
      >
        <source src={heroBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 top-0 left-0 w-full h-full object-cover -z-10 bg-primary opacity-20"></div>

      {/* Overlay */}

      <NavbarPage />

      <div
        id="contact-page"
        className="text-gray-100
      font-sora 
      py-10 sm:py-10 md:py-20 lg:py-20 xl:py-20 mediumLaptop:py-20 2xl:py-20 largestLaptop:py-20
      px-6 sm:px-6 md:px-20 lg:px-36 xl:px-36 mediumLaptop:px-36 2xl:px-36 largestLaptop:px-36"
      >
        <div
          className="
        items-start  p-8 mx-auto  bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.3)]
        max-w-4xl mt-24 px-8 grid gap-14 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16  text-gray-900 rounded-md "
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-nudista">
                Let's talk
              </h2>
              <p className="text-sm text-gray-500 mt-4 font-sora">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help.
              </p>

              <div className="mt-12">
                <h2 className="text-gray-800 text-base font-bold font-nudista">
                  Email
                </h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="group bg-[#e6e6e6cf] hover:bg-black h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <a
                        href="mailto:info@eastcoastgrowersct.com"
                        className="group-hover:text-white "
                      >
                        <CiMail size={20} />
                      </a>
                    </div>
                    <a
                      href="mailto:info@eastcoastgrowersct.com"
                      className="text-secondary text-sm ml-4"
                    >
                      <small className="block font-nudista">Mail</small>
                      <strong className="font-sora">
                        {' '}
                        info@eastcoastgrowersct.com
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-gray-800 text-base font-bold font-nudista">
                  Socials
                </h2>

                <ul className="flex mt-4 space-x-4">
                  <li className="group bg-[#e6e6e6cf] hover:bg-black h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <a
                      href="https://linkedin.com"
                      className="group-hover:text-white "
                    >
                      <CiLinkedin size={20} />
                    </a>
                  </li>
                  <li className="group bg-[#e6e6e6cf] hover:bg-black h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <a
                      href="https://facebook.com"
                      className="group-hover:text-white "
                    >
                      <CiFacebook size={20} />
                    </a>
                  </li>
                  <li className="group bg-[#e6e6e6cf] hover:bg-black h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <a
                      href="https://twitter.com"
                      className="group-hover:text-white "
                    >
                      <CiTwitter size={20} />
                    </a>
                  </li>
                  <li className="group bg-[#e6e6e6cf] hover:bg-black h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <a
                      href="https://instagram.com"
                      className="group-hover:text-white "
                    >
                      <CiInstagram size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="ml-auto space-y-4 font-sora">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-gray-800  rounded-md py-2.5 px-4 border text-sm outline-secondary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-secondary"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-secondary"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-secondary"
            ></textarea>
            <button
              type="button"
              className="text-white bg-secondary hover:bg-black rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <FooterWebPage />
    </div>
  );
};

export default ContactPage;
