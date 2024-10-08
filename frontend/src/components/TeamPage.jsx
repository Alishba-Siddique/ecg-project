import React from 'react';
import team1 from '../assets/images/Daniel Czyzewski.webp';
import team2 from '../assets/images/Oz-Pariser.webp';
import team3 from '../assets/images/Andrew Borner.webp';
import team4 from '../assets/images/Trent & Chad Lynch.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/fade.css';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  gsap.fromTo(
    '#about',
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
  return (
    <>
      <div
        className=" 
      mx-0 sm:mx-0 md:mx-16 lg:mx-10 mediumLaptop:mx-16 xl:mx-10 2xl:ml-14  largestLaptop:mx-36
       mb-0 sm:mb-0 md:-mb-16 lg:-mb-16 mediumLaptop:-mb-5 xl:-mb-16 2xl:-mb-16  largestLaptop:-mb-44
        mt-16 sm:mt-0 md:mt-16 lg:mt-16 mediumLaptop:mt-36 xl:mt-16 2xl:mt-36  largestLaptop:mt-96"
        id="about"
      >
        {/* Title Section */}
        <div id="title-adv-section" className="text-center mb-0">
          <div className="flex justify-center items-center">
            <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
            <h2 className="text-md sm:text-md md:text-2xl lg:text-3xl mediumLaptop:text-4xl xl:text-4xl 2xl:text-4xl largestLaptop:text-6xl mx-10 sm:mx-10 md:mx-10 lg:mx-5 mediumLaptop:mx-5 xl:mx-5 2xl:mx-10 largestLaptop:mx-10 text-black font-nudista font-light">
              Meet the{' '}
              <span className="font-nudista font-bold mb-44">
                Team
              </span>{' '}
            </h2>
            <div className="border-t-4 border-secondary w-[15rem] mt-1"></div>
          </div>
        </div>
        <div className="container mx-auto px-12 sm:px-12 md:px-0 lg:px-10 mediumLaptop:px-14 xl:px-14 2xl:px-14 largestLaptop:px-12">
          <div
            className="grid
            items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {/* Team Member 1 */}
            <div className="space-y-4 text-left">
              <img
                className="w-full -mt-2 sm:-mt-2 md:-mt-2 lg:-mt-[4rem] mediumLaptop:-mt-10 xl:mt-[3.5rem] 2xl:-mt-6 largestLaptop:-mt-2
                 h-56 sm:h-64 md:h-64 lg:h-44 mediumLaptop:h-80 xl:h-64 2xl:h-80 largestLaptop:h-96 object-cover  rounded-xl"
                src={team1}
                alt="Daniel Czyzewski"
                loading="lazy"
              />

              <div>
                <h4 className="text-base sm:text-base md:text-2xl lg:text-2xl mediumLaptop:text-3xl xl:text-3xl 2xl:text-4xl largestLaptop:text-5xl text-primary  font-nudista font-bold">
                  Daniel Czyzewski
                </h4>
                <span className="block text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-sm 2xl:text-lg largestLaptop:text-2xl tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl font-sora mt-6">
                  {/* Content */}
                  Dan brings extensive experience in construction, real estate
                  development, and project management, successfully transforming
                  properties and securing a provisional license to cultivate and
                  sell cannabis in Connecticut. His strategic approach and
                  hands-on experience position him perfectly to navigate the
                  complexities of the cannabis market.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="space-y-4 text-left">
              <img
                className="w-full -mt-2 sm:-mt-2 md:-mt-2 lg:-mt-20 mediumLaptop:-mt-24 xl:-mt-6 2xl:-mt-20 largestLaptop:-mt-8 
                h-56 sm:h-64 md:h-64 lg:h-44 mediumLaptop:h-80 xl:h-64 2xl:h-80 largestLaptop:h-96  object-cover mx-auto rounded-xl"
                src={team2}
                alt="Oz Pariser"
                loading="lazy"
              />
              <div>
                <h4 className="text-base sm:text-base md:text-2xl lg:text-2xl mediumLaptop:text-3xl xl:text-3xl 2xl:text-4xl largestLaptop:text-5xl text-primary font-nudista font-bold">
                  Oz Pariser
                </h4>
                <span className="block text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-sm 2xl:text-lg largestLaptop:text-2xl tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl  font-sora mt-6">
                  {/* Content */}
                  Oz combines over a decade of experience as a physical
                  therapist with a successful real estate investment career,
                  where he has significantly increased property values. His
                  early investments in the cannabis industry and vision to
                  establish a facility in Connecticut highlight his keen
                  understanding of the sector's potential.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="space-y-4 text-left">
              <img
                className="-mt-2 sm:-mt-2 md:-mt-2 lg:-mt-16 mediumLaptop:-mt-10 xl:-mt-2 2xl:-mt-14 largestLaptop:-mt-0  w-full
                 h-56 sm:h-64 md:h-64 lg:h-44  mediumLaptop:h-80 xl:h-64 2xl:h-80 largestLaptop:h-96  object-cover mx-auto rounded-xl "
                src={team3}
                alt="Andrew Borner"
                loading="lazy"
              />
              <div>
                <h4 className="text-base sm:text-base md:text-2xl lg:text-2xl mediumLaptop:text-3xl xl:text-3xl 2xl:text-4xl largestLaptop:text-5xl text-primary font-nudista font-bold">
                  Andrew Borner
                </h4>
                <span className="block text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-sm 2xl:text-lg largestLaptop:text-2xl tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl font-sora font-normal mt-6">
                  {/* Content */}
                  Andrew has a diverse and strong background in organizational
                  leadership and insurance, where he built substantial books of
                  business and developed valuable entrepreneurial skills. His
                  sharp business acumen, coupled with a clear vision to seize
                  emerging opportunities in the cannabis market, uniquely
                  qualifies him to contribute to its continued growth.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="space-y-4 text-left">
              <img
                className=" -mt-2 sm:-mt-2 md:-mt-2 lg:-mt-[2rem] mediumLaptop:-mt-10 xl:mt-2 2xl:-mt-10 largestLaptop:-mt-0 
                 w-full
                 h-56 sm:h-64 md:h-64 lg:h-44  mediumLaptop:h-80 xl:h-64 2xl:h-80 largestLaptop:h-96  object-cover mx-auto rounded-xl "
                src={team4}
                alt="Trent & Chad Lynch"
                loading="lazy"
              />
              <div>
                <h4 className="text-base sm:text-base md:text-2xl lg:text-2xl mediumLaptop:text-3xl xl:text-3xl 2xl:text-4xl largestLaptop:text-5xl text-primary font-nudista font-bold">
                  Trent & Chad Lynch
                </h4>
                <span className="block text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-sm 2xl:text-lg largestLaptop:text-2xl tracking-wider text-secondary font-sora">
                  CONSULTANTS
                </span>
                <p className="text-left text-gray-700 text-[0.6rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm mediumLaptop:text-lg xl:text-sm 2xl:text-lg largestLaptop:text-2xl font-sora font-normal mt-6">
                  {/* Content */}
                  Co-founders of Shoreline Hydroponics, leverage their expertise
                  in cannabis cultivation and operational efficiency to drive
                  sustainable success in the industry. Trent's management of
                  large-scale cultivation facilities and Chad's experience in
                  logistics and process optimization position them as leaders in
                  the cannabis sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section for Trent & Chad Lynch */}
      {/* <div className="w-full bg-[#dddddd]">
        <section className="max-w-9xl mx-8 md:mx-8 lg:mx-24 px-4 pt-10 pb-44 md:pb-56 lg:pb-64">
          <div className="grid grid-cols-1 gap-6">
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-2/4 h-56 sm:h-64 lg:h-80">
                <img
                  className="object-center rounded-xl object-cover w-full h-full"
                  src={team4}
                  alt="Trent & Chad Lynch"
                />
              </div>
              <div className="w-full text-left pl-0 md:pl-6 mt-4 md:mt-0">
                <p className="text-2xl sm:text-2xl lg:text-4xl text-black font-nudista">
                  Trent & Chad Lynch
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-black font-nudista mt-2">
                  Consultants
                </p>
                <p className="text-xs sm:text-xs md:text-base lg:text-base mediumLaptop:text-base xl:text-lg 2xl:text-lg largestLaptop:text-2xl lg:text-base text-gray-700 font-sora mt-6">
                  
                  Co-Founders of Shoreline Hydroponics, LLC, Trent and Chad are
                  leaders in the cannabis and hydroponics sectors. Trent excels
                  in Massachusetts' cannabis industry, managing two
                  10,000-square-foot canopy licenses at Mayflower Medicinals and
                  overseeing an 18,000-plant garden at New England Treatment
                  Access, advancing to Cultivation Manager by 2018. In 2021, he
                  founded Shoreline Hydroponics to focus on high-quality fresh
                  frozen cannabis. Trent holds a Bachelor's in Plant, Soil, and
                  Insect Science from UMass Amherst. Chad, as COO, leverages his
                  experience as Logistics and Process Manager at Bender
                  Plumbing, boosting productivity and profitability with
                  scalable SOPs. His background in technical sales and
                  environmental cleanup during the Deepwater Horizon crisis
                  underscores his strategic acumen, anchored by his Business
                  Administration degree from Southern Connecticut State
                  University. Together, they have built Shoreline Hydroponics
                  into a pioneering company in sustainable cannabis cultivation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default TeamPage;
