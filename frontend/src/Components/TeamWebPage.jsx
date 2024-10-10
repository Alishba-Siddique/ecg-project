import React from 'react';
import team1 from '../assets/images/Daniel Czyzewski.webp';
import team2 from '../assets/images/Oz-Pariser.webp';
import team3 from '../assets/images/Andrew Borner.webp';
import team4 from '../assets/images/Trent & Chad Lynch.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamWebPage = () => {
  // Title Section Animation
  gsap.fromTo(
    '#title-team-section',
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#title-team-section',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
  gsap.fromTo(
    '#about',
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
  return (
    <>
      {/* Title Section */}
      <div
        id="title-team-section"
        className="text-center mb-10 sm:mb-10 md:mb-32 lg:mb-32 mediumLaptop:mb-36 xl:mb-10 2xl:ml-36  largestLaptop:mb-36"
      >
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-secondary w-[5rem] md:w-[10rem] lg:w-[15rem] mt-1"></div>
          <h2 className="text-md sm:text-md md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl mx-10 sm:mx-10 md:mx-10 lg:mx-5 mediumLaptop:mx-5 xl:mx-5 2xl:mx-10 largestLaptop:mx-10 text-black font-nudista font-light">
            Meet the <span className="font-bold font-nudista mb-44">Team</span>{' '}
          </h2>
          <div className="border-t-4 border-secondary w-[5rem] md:w-[10rem] lg:w-[15rem] mt-1"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div
        id="about"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
         mx-16  sm:mx-16 md:mx-16 lg:mx-20 xl:mx-24  mediumLaptop:mx-24  2xl:mx-24  largestLaptop:mx-44
          gap-6 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10  mediumLaptop:gap-10  2xl:gap-10  largestLaptop:gap-10"
      >
        {/* <!-- Column 1 --> */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left">
          <img
            src={team1}
            alt="Daniel Czyzewski"
            className="w-80 h-52 sm:w-80 sm:h-52 lg:w-80 lg:h-52 xl:w-80 xl:h-52 mediumLaptop:w-80 mediumLaptop:h-52 2xl:w-80 2xl:h-52 largestLaptop:w-[35rem] largestLaptop:h-[26rem]  object-cover mb-4 rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl  xl:text-3xl  mediumLaptop:text-3xl  2xl:text-3xl  largestLaptop:text-5xl font-bold font-nudista text-primary">
            Daniel <br /> Czyzewski
          </h1>
          <h3 className="text-base sm:text-lg md:text-lg lg:text-lg  xl:text-lg  mediumLaptop:text-lg  2xl:text-lg  largestLaptop:text-2xl font-sora text-secondary">
            CO-FOUNDER
          </h3>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm  xl:text-sm  mediumLaptop:text-sm  2xl:text-sm  largestLaptop:text-lg mt-2 font-sora ">
            Dan brings extensive experience in construction, real estate
            development, and project management, successfully transforming
            properties and securing a provisional license to cultivate and sell
            cannabis in Connecticut. His strategic approach and hands-on
            experience positions him perfectly to navigate the complexities of
            the cannabis market.
          </p>
        </div>

        {/* <!-- Column 2 --> */}
        <div className="flex flex-col items-center text-center   sm:items-start sm:text-left md:items-start md:text-left lg:items-start lg:text-left">
          <img
            src={team2}
            alt="Oz Pariser"
            className="w-80 h-52 sm:w-80 sm:h-52 lg:w-80 lg:h-52 xl:w-80 xl:h-52 mediumLaptop:w-80 mediumLaptop:h-52 2xl:w-80 2xl:h-52 largestLaptop:w-[35rem] largestLaptop:h-[26rem] object-cover mb-4 rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl  xl:text-3xl  mediumLaptop:text-3xl  2xl:text-3xl  largestLaptop:text-5xl font-bold font-nudista text-primary">
            Oz <br /> Pariser
          </h1>
          <h3 className="text-base sm:text-lg md:text-lg lg:text-lg  xl:text-lg  mediumLaptop:text-lg  2xl:text-lg  largestLaptop:text-2xl font-sora text-secondary">
            CO-FOUNDER
          </h3>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm  xl:text-sm  mediumLaptop:text-sm  2xl:text-sm  largestLaptop:text-lg mt-2 font-sora ">
            Oz combines over a decade of experience as a licensed physical
            therapist with a successful real estate investment career, where he
            has significantly increased property values. His early investments
            in the burgeoning cannabis industry and vision to establish a
            state-of-the-art facility in Connecticut highlight his keen
            understanding of the sector's potential.
          </p>
        </div>

        {/* <!-- Column 3 --> */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left">
          <img
            src={team3}
            alt="Andrew Borner"
            className="w-80 h-52 sm:w-80 sm:h-52 lg:w-80 lg:h-52 xl:w-80 xl:h-52 mediumLaptop:w-80 mediumLaptop:h-52 2xl:w-80 2xl:h-52 largestLaptop:w-[35rem] largestLaptop:h-[26rem] object-cover mb-4 rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl  xl:text-3xl  mediumLaptop:text-3xl  2xl:text-3xl  largestLaptop:text-5xl font-bold font-nudista text-primary">
            Andrew <br /> Borner
          </h1>
          <h3 className="
          text-base sm:text-lg md:text-lg lg:text-lg  xl:text-lg  mediumLaptop:text-lg  2xl:text-lg  largestLaptop:text-2xl
           font-sora text-secondary">
            CO-FOUNDER
          </h3>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm  xl:text-sm  mediumLaptop:text-sm  2xl:text-sm  largestLaptop:text-lg mt-2 font-sora ">
            Andrew has a diverse and strong background in organizational
            leadership and insurance, where he built substantial books of
            business and developed valuable entrepreneurial skills. His sharp
            business acumen, coupled with a clear vision to seize emerging
            opportunities in the cannabis market, uniquely qualifies him to
            contribute to its continued growth.
          </p>
        </div>

        {/* <!-- Column 4 --> */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left">
          <img
            src={team4}
            alt="Trent & Chad Lynch"
            className="w-80 h-52 sm:w-80 sm:h-52 md:w-80 md:h-52 lg:w-80 lg:h-52 xl:w-80 xl:h-52 mediumLaptop:w-80 mediumLaptop:h-52 2xl:w-80 2xl:h-52 largestLaptop:w-[35rem] largestLaptop:h-[26rem] object-cover mb-4 rounded-lg"
          />
          <h1
            className="
          text-xl sm:text-2xl md:text-2xl lg:text-3xl  xl:text-3xl  mediumLaptop:text-3xl  2xl:text-3xl  largestLaptop:text-5xl
           font-bold font-nudista text-primary"
          >
            Trent & <br /> Chad Lynch
          </h1>
          <h3 className="text-base sm:text-lg md:text-lg lg:text-lg  xl:text-lg  mediumLaptop:text-lg  2xl:text-lg  largestLaptop:text-2xl font-sora text-secondary">
            CONSULTANTS
          </h3>
          <p className="
          text-xs sm:text-sm md:text-sm lg:text-sm  xl:text-sm  mediumLaptop:text-sm  2xl:text-sm  largestLaptop:text-lg mt-2 font-sora">
            Co-founders of Shoreline Hydroponics, leverage their expertise in
            cannabis cultivation and operational efficiency to drive sustainable
            success in the industry. Trent's management of large-scale
            cultivation facilities and Chad's experience in logistics and
            process optimization position them as leaders in the cannabis
            sector.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamWebPage;
