import React from 'react';
import team1 from '../assets/images/Daniel Czyzewski.webp';
import team2 from '../assets/images/Oz-Pariser.webp';
import team3 from '../assets/images/Andrew Borner.webp';
import team4 from '../assets/images/Trent & Chad Lynch.webp';

const TeamPage = () => {
  return (
    <>
      <div className="py-10" id='about'>
        <div className="container mx-auto px-12 md:px-12 lg:px-24 xl:px-24">
          <div className="grid gap-12 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="space-y-4 text-left">
              <img
                className="w-full h-56 sm:h-64 lg:h-80 object-cover mx-auto rounded-xl"
                src={team1}
                alt="Daniel Czyzewski"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold font-nudista">
                  Daniel Czyzewski
                </h4>
                <span className="block text-xl sm:text-2xl font-nudistaLight">
                  Co-Founder
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base lg:text-lg font-sora mt-6">
                  {/* Content */}
                  Daniel Czyzewski became a licensed electrician in CT in 2008
                  after attending trade school. In 2013, he became a real estate
                  broker in multiple states. Dan owns Exclusive Development, a
                  construction company specializing in residential and
                  commercial construction, real estate development, sales, and
                  management. He quickly advanced to project management. During
                  a market downturn, Dan secured his first real estate
                  investments in rentals and renovations, gaining valuable
                  restoration experience. In 2019, he redeveloped New Britain’s
                  first successful luxury apartment building and food hall, his
                  signature project. Recently, Dan acquired a 225-boat slip
                  marina in South Glastonbury, CT, transforming it into a
                  popular destination. He also secured a provisional license in
                  Connecticut to cultivate and sell cannabis. Dan's success is
                  attributed to his hard work, focus, and approach to projects.
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
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold font-nudista">
                  Oz Pariser
                </h4>
                <span className="block text-xl sm:text-2xl font-nudistaLight">
                  Co-Founder
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base lg:text-lg font-sora mt-6">
                  {/* Content */}
                  Oz Pariser earned his Bachelor’s in Health Science in 2007 and
                  his Doctorate of Physical Therapy in 2010 from the University
                  of Hartford. He worked as a Physical Therapist for over 10
                  years before transitioning to real estate investment in 2020.
                  Starting in 2015, he has bought, sold, and brokered over 100
                  properties. In 2019, Oz began acquiring large multifamily
                  apartment buildings in Hartford, repositioning a multi-million
                  dollar portfolio and adding millions in value. In 2023, he
                  began acquiring out-of-state mobile home parks, using the same
                  strategy to increase their value. He self-manages his
                  portfolio using cutting-edge technology and has built a team
                  of 5 employees at Pariser Enterprises. Oz is a lifelong
                  martial artist, former professional MMA fighter, and a
                  Brazilian Jiu-jitsu black belt and instructor. He lives in
                  Manchester, CT with his wife and two young boys. In his free
                  time, Oz enjoys hiking and traveling.
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
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold font-nudista">
                  Andrew Borner
                </h4>
                <span className="block text-xl sm:text-2xl font-nudistaLight">
                  Co-Founder
                </span>
                <p className="text-left text-gray-700 text-sm sm:text-base font-sora lg:text-lg font-normal mt-6">
                  {/* Content */}
                  Andrew has a Bachelor of Science in Management from the
                  University of Connecticut; a Master of Science in
                  Organizational Leadership from Quinnipiac University; and an
                  LUTCF professional life insurance designation from The
                  American College. While in school, Andrew was an intern with a
                  Connecticut-based real estate development company. For nearly
                  three years following graduation, Andrew was employed by a
                  prominent Connecticut-based construction company. From July of
                  2002 until the inception of his own successful insurance
                  agency, Olde Liberty Insurance, LLC in May 2013, Andrew was
                  employed as a highly regarded personal lines insurance
                  producer in the State of Connecticut for Liberty Mutual
                  Insurance and built a $2,900,000 book of business. Between May
                  2013 and December of 2022, when the agency was successfully
                  sold, Andrew had built a $2,700,000 book of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section for Trent & Chad Lynch */}
      <div className="w-full bg-[#dddddd]">
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
                <p className="text-lg sm:text-xl lg:text-2xl text-black font-nudistaLight mt-2">
                  Consultants
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-sora mt-6">
                  {/* Content */}
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
      </div>
    </>
  );
};

export default TeamPage;
