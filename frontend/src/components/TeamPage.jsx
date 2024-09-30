import React from 'react';
import team1 from '../assets/images/Daniel Czyzewski.webp';
import team2 from '../assets/images/Oz-Pariser.webp';
import team3 from '../assets/images/Andrew Borner.webp';
import team4 from '../assets/images/Trent & Chad Lynch.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeamPage = () => {
  return (
    <>
      <div className="py-8" id="about">
        <div className="container mx-auto px-12 md:px-12 lg:px-24 xl:px-14">
          <div className="grid gap-8 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="space-y-4 text-left">
              <LazyLoadImage
                className="w-full h-56 sm:h-64 lg:h-80 object-cover  rounded-xl"
                src={team1}
                alt="Daniel Czyzewski"
                loading="lazy"
              />
              
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-4xl text-primary  font-nudista font-bold">
                  Daniel Czyzewski
                </h4>
                <span className="block text-2xl lg:text-lg tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base lg:text-base font-sora mt-6">
                  {/* Content */}
                  Dan brings extensive experience in construction and real
                  estate development, successfully transforming properties and
                  securing a provisional license to cultivate and sell cannabis
                  in Connecticut. His approach and hands-on experience position
                  him perfectly to navigate the complexities of the cannabis
                  market.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="space-y-4 text-left">
              <img
                className="w-full h-56 sm:h-64 lg:h-80 object-cover mx-auto rounded-xl"
                src={team2}
                alt="Oz Pariser"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-4xl text-primary font-nudista font-bold">
                  Oz Pariser
                </h4>
                <span className="block text-2xl lg:text-lg tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base lg:text-base font-sora mt-6">
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
                className="w-full h-56 sm:h-64 lg:h-80 object-cover mx-auto rounded-xl "
                src={team3}
                alt="Andrew Borner"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-4xl text-primary font-nudista font-bold">
                  Andrew Borner
                </h4>
                <span className="block text-2xl lg:text-lg tracking-wider text-secondary font-sora">
                  CO-FOUNDER
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base font-sora lg:text-base font-normal mt-6">
                  {/* Content */}
                  Andrew has a diverse and strong background in organizational
                  leadership and insurance, where he built substantial books of
                  business and developed valuable entrepreneurial skills. His
                  business acumen, coupled with a clear vision to seize
                  opportunities in the cannabis market, uniquely qualifies him
                  to contribute to its continued growth.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="space-y-4 text-left">
              <img
                className="w-full h-56 sm:h-64 lg:h-80 object-cover mx-auto rounded-xl "
                src={team4}
                alt="Trent & Chad Lynch"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-4xl text-primary font-nudista font-bold">
                  Trent & Chad Lynch
                </h4>
                <span className="block text-2xl lg:text-lg tracking-wider text-secondary font-sora">
                  CONSULTANTS
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base font-sora lg:text-base font-normal mt-6">
                  {/* Content */}
                  Co-founders of Shoreline Hydroponics, leverage their extensive
                  expertise in cannabis cultivation and operational efficiency
                  to drive sustainable success in the industry. Trent's
                  management of large-scale cultivation facilities and Chad's
                  deep experience in logistics and process optimization position
                  them as leaders in the cannabis sector.
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
                <p className="text-2xl sm:text-3xl lg:text-4xl text-black font-nudista">
                  Trent & Chad Lynch
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-black font-nudista mt-2">
                  Consultants
                </p>
                <p className="text-sm sm:text-base lg:text-base text-gray-700 font-sora mt-6">
                  
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
