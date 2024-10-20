// import React, { useEffect, useRef } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HistoryPage = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       '#history-page',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '#history-page',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div
//         id="history-page"
//         className="relative min-h-screen flex flex-col justify-between bg-gradient-to-r from-primary to-secondary "
//       >
//         {/* History Content */}
//         <div
//           className="
//         m-10 sm:m-32 md:m-10  lg:m-44 xl:m-44 2xl:m-44 mediumLaptop:m-44 largestLaptop:m-44
//         mt-32 sm:mt-32 md:mt-32  lg:mt-44 xl:mt-44 2xl:mt-44 mediumLaptop:mt-44 largestLaptop:mt-44 "
//         >
//           <div
//             className="container mx-aut
//            p-1 sm:p-3 md:p-3 lg:p-3 xl:p-8 2xl:p-8 mediumLaptop:p-8 largestLaptop:p-8  bg-white rounded-lg"
//           >
//             {/* Animated Title */}
//             <h1
//               className="text-5xl font-bold font-nudista text-center
//              my-12
//              history-title text-primary"
//             >
//               Our History
//             </h1>
//             {/* Animated Text */}
//             <p
//               className="text-lg text-gray-700
//             mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
//             my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
//             font-sora "
//             >
//               The journey to establish a premium craft cannabis cultivation
//               facility in Connecticut began in April 2023 when Dan, Oz, and
//               Andrew united with a shared vision and a unique opportunity. With
//               a unique business model for cannabis cultivation, the rare and
//               highly sought-after rights to a full-scale cultivation license
//               secured, and the ideal 70,000-square-foot facility location
//               already owned, the team was well-positioned to turn their dream
//               into reality
//             </p>
//             <p
//               className="text-lg text-gray-700
//             mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
//            my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
//              font-sora"
//             >
//               Early on, they connected with Chad and Trent from Shoreline
//               Hydroponics, experts in cannabis cultivation who would become
//               integral partners in the venture. Chad and Trent brought
//               invaluable knowledge and experience, helping guide the project
//               through the complexities of cultivation practices and facility
//               design. Together, they worked tirelessly to craft a plan that
//               would set the standard for craft cannabis in Connecticut.
//             </p>
//             <p
//               className="text-lg text-gray-700
//             mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
//            my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
//              font-sora"
//             >
//               Over the course of a year and a half, Dan, Oz, Andrew, and their
//               consulting partners navigated countless meetings, legal
//               considerations, and planning challenges. With the support of
//               engineers, vendors, and legal experts, they developed a
//               comprehensive game plan for the facility, and they were ready to
//               take the next steps toward bringing their vision to life
//             </p>
//             <p
//               className="text-lg text-gray-700
//             mx-6 sm:mx-6 md:mx-6 lg:mx-16 xl:mx-16 2xl:mx-16 mediumLaptop:mx-16 largestLaptop:mx-16
//            my-12 sm:my-12 md:my-2 lg:my-12 xl:my-12 2xl:my-12 mediumLaptop:my-12 largestLaptop:my-12
//              font-sora"
//             >
//               Over the course of a year and a half, Dan, Oz, Andrew, and their
//               consulting partners navigated countless meetings, legal
//               considerations, and planning challenges. With the support of
//               engineers, vendors, and legal experts, they developed a
//               comprehensive game plan for the facility, and they were ready to
//               take the next steps toward bringing their vision to life
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default HistoryPage;
// const timelineEvents = [
//   {
//     date: "April 2023",
//     title: "Vision and Planning",
//     description:"The journey to establish a premium craft cannabis cultivation facility in Connecticut began in April 2023 when Dan, Oz, and Andrew united with a shared vision and a unique opportunity. With a unique business model for cannabis cultivation, the rare and highly sought-after rights to a full-scale cultivation license secured, and the ideal 70,000-square-foot facility location already owned, the team was well-positioned to turn their dream into reality."
//   },
//   {
//     date: "May 2023",
//     title: "Partnership Formation",
//     description:"Early on, they connected with Chad and Trent from Shoreline Hydroponics, experts in cannabis cultivation who would become integral partners in the venture. Chad and Trent brought invaluable knowledge and experience, helping guide the project through the complexities of cultivation practices and facility design. Together, they worked tirelessly to craft a plan that would set the standard for craft cannabis in Connecticut."
//   },
//   {
//     date: "June 2023",
//     title: "License and Location",
//     description:"Over the course of a year and a half, Dan, Oz, Andrew, and their consulting partners navigated countless meetings, legal considerations, and planning challenges. With the support of engineers, vendors, and legal experts, they developed a comprehensive game plan for the facility, and they were ready to take the next steps toward bringing their vision to life."
//   },
//   {
//     date: "July 2023 - Present",
//     title: "Project Development",
//     description:"Now, with a strong foundation in place, a management team with a diverse skillset, and the expertise of Shoreline Hydroponics on their side, they are closer than ever to realizing their goal of creating one of Connecticut’s premier cannabis cultivation facilities"
//   }
// ];
// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HistoryPage = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       '#history-page',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '#history-page',
//           start: 'top 80%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, []);

// const timelineEvents = [
//   {
//     date: 'April 2023',
//     title: 'Vision and Planning',
//     description:
//       'The journey to establish a premium craft cannabis cultivation facility in Connecticut began in April 2023 when Dan, Oz, and Andrew united with a shared vision and a unique opportunity. With a unique business model for cannabis cultivation, the rare and highly sought-after rights to a full-scale cultivation license secured, and the ideal 70,000-square-foot facility location already owned, the team was well-positioned to turn their dream into reality.',
//   },
//   {
//     date: 'May 2023',
//     title: 'Partnership Formation',
//     description:
//       'Early on, they connected with Chad and Trent from Shoreline Hydroponics, experts in cannabis cultivation who would become integral partners in the venture. Chad and Trent brought invaluable knowledge and experience, helping guide the project through the complexities of cultivation practices and facility design. Together, they worked tirelessly to craft a plan that would set the standard for craft cannabis in Connecticut.',
//   },
//   {
//     date: 'June 2023',
//     title: 'License and Location',
//     description:
//       'Over the course of a year and a half, Dan, Oz, Andrew, and their consulting partners navigated countless meetings, legal considerations, and planning challenges. With the support of engineers, vendors, and legal experts, they developed a comprehensive game plan for the facility, and they were ready to take the next steps toward bringing their vision to life.',
//   },
//   {
//     date: 'July 2023 - Present',
//     title: 'Project Development',
//     description:
//       'Now, with a strong foundation in place, a management team with a diverse skillset, and the expertise of Shoreline Hydroponics on their side, they are closer than ever to realizing their goal of creating one of Connecticut’s premier cannabis cultivation facilities',
//   },
// ];

//   return (
//     <>
//       <Navbar />
//       <div
//         id="history-page"
//         className="relative min-h-screen flex flex-col justify-between bg-gradient-to-r from-primary to-secondary"
//       >
//         {/* History Content */}
//         <div className="m-10 sm:m-32 md:m-10 lg:m-44 xl:m-44 2xl:m-44 mt-32 sm:mt-32 md:mt-32 lg:mt-44 xl:mt-44 2xl:mt-44">
//           <div className="container mx-auto p-1 sm:p-3 md:p-3 lg:p-3 xl:p-8 2xl:p-8 bg-white rounded-lg">
//             {/* Animated Title */}
//             <h1 className="text-5xl font-bold font-nudista text-center my-12 text-primary">
//               Our History
//             </h1>

//             {/* Timeline Section */}
//             <div className="relative mt-10">
//               {timelineEvents.map((event, index) => (
//                 <div
//                   key={index}
//                   className={`mb-10 flex justify-between items-center w-full ${
//                     index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
//                   }`}
//                 >
//                   {/* Timeline Line */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1/4 bg-gray-300"></div>

//                   {/* Timeline Dot aligned with Date */}
//                   <div
//                     className={`z-50 absolute w-4 h-4 bg-primary rounded-full border border-white ${
//                       index % 2 === 0
//                         ? 'right-[calc(50%-2rem)]' // Align the dot on the right for even indexes
//                         : 'left-[calc(50%-2rem)]' // Align the dot on the left for odd indexes
//                     }`}
//                     style={{ top: '1.5rem' }} // Align it with the date
//                   ></div>

//                   {/* Content Block */}
//                   <div
//                     className={`w-5/12 ${
//                       index % 2 === 0 ? 'text-left' : 'text-right'
//                     }`}
//                   >
//                     <p className="text-sm text-gray-600">{event.date}</p>
//                     <h2 className="text-2xl font-semibold text-gray-800 font-nudista">
//                       {event.title}
//                     </h2>
//                     <p className="text-lg text-gray-700 mt-2 font-s">
//                       {event.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default HistoryPage;

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HistoryPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '#history-title',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#history-page',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#history-one',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#history-one',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#history-two',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#history-two',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#history-three',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#history-three',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#history-four',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#history-four',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-r from-primary to-secondary">
        <div
          className=" bg-white rounded-lg
          m-10 sm:m-32 md:m-10  lg:m-44 xl:m-44 2xl:m-44 mediumLaptop:m-44 largestLaptop:m-44
          mt-32 sm:mt-32 md:mt-32  lg:mt-44 xl:mt-44 2xl:mt-44 mediumLaptop:mt-44 largestLaptop:mt-44 "
        >
          {/* Animated Title */}
          <h1
            id="history-title"
            className="text-5xl font-bold font-nudista text-center my-12 text-primary"
          >
            Our History
          </h1>
          {/* <!-- component --> */}
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-12">
            <li id="history-one">
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#077761"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#077761"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end font-sora ">
                <time className="text-xs italic">April 2023</time>
                <div className="text-lg font-nudista font-bold">
                  Vision and Planning
                </div>
                The journey to establish a premium craft cannabis cultivation
                facility in Connecticut began in April 2023 when Dan, Oz, and
                Andrew united with a shared vision and a unique opportunity.
                With a unique business model for cannabis cultivation, the rare
                and highly sought-after rights to a full-scale cultivation
                license secured, and the ideal 70,000-square-foot facility
                location already owned, the team was well-positioned to turn
                their dream into reality
              </div>
              <hr />
            </li>
            <li id="history-two">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#077761"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 font-sora">
                <time className="italic text-xs">May 2023</time>
                <div className="text-lg font-nudista font-bold">
                  Partnership Formation
                </div>
                Early on, they connected with Chad and Trent from Shoreline
                Hydroponics, experts in cannabis cultivation who would become
                integral partners in the venture. Chad and Trent brought
                invaluable knowledge and experience, helping guide the project
                through the complexities of cultivation practices and facility
                design. Together, they worked tirelessly to craft a plan that
                would set the standard for craft cannabis in Connecticut.
              </div>
              <hr />
            </li>
            <li id="history-three">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#077761"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end font-sora">
                <time className="italic text-xs">June 2023</time>
                <div className="text-lg font-nudista font-bold">
                  License and Location
                </div>
                Over the course of a year and a half, Dan, Oz, Andrew, and their
                consulting partners navigated countless meetings, legal
                considerations, and planning challenges. With the support of
                engineers, vendors, and legal experts, they developed a
                comprehensive game plan for the facility, and they were ready to
                take the next steps toward bringing their vision to life.
              </div>
              <hr />
            </li>
            <li id="history-four">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#077761"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 font-sora">
                <time className="italic text-xs">July 2023 - Present</time>
                <div className="text-lg font-nudista font-bold">
                  Project Development
                </div>
                Now, with a strong foundation in place, a management team with a
                diverse skillset, and the expertise of Shoreline Hydroponics on
                their side, they are closer than ever to realizing their goal of
                creating one of Connecticut’s premier cannabis cultivation
                facilities.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
