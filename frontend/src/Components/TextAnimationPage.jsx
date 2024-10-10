// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './../styles/animationText.css';
// import bgImage from '../assets/images/ecg-bg.jpeg';

// gsap.registerPlugin(ScrollTrigger);

// const ScrollTextEffect = () => {
//   useEffect(() => {
//     const firstLine = document.querySelector('.first-line');
//     const secondLine = document.querySelector('.second-line');
//     const thirdLine = document.querySelector('.third-line');
//     const fourthLine = document.querySelector('.fourth-line');
//     const fifthLine = document.querySelector('.fifth-line');

//     // Highlight first line
//     gsap.to(firstLine, {
//       backgroundSize: '100%',
//       ease: 'none',

//       scrollTrigger: {
//         trigger: firstLine,
//         start: 'center 80%',
//         end: 'center 20%',
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = Math.max(0, (self.progress - 0.5) * 2);
//           gsap.to(secondLine, {
//             backgroundSize: `${progress * 100}%`,
//             ease: 'none',
//             overwrite: 'auto',
//           });
//         },
//       },
//     });

//     // Highlight second line when first line is halfway
//     gsap.to(secondLine, {
//       backgroundSize: '100%',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: secondLine,
//         start: 'center 80%',
//         end: 'center 20%',
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = Math.max(0, (self.progress - 0.4) * 2);
//           gsap.to(thirdLine, {
//             backgroundSize: `${progress * 100}%`,
//             ease: 'none',
//             overwrite: 'auto',
//           });
//         },
//       },
//     });

//     // Highlight third line when second line is halfway
//     gsap.to(thirdLine, {
//       backgroundSize: '100%',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: thirdLine,
//         start: 'center 80%',
//         end: 'center 20%',
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = Math.max(0, (self.progress - 0.3) * 2);
//           gsap.to(fourthLine, {
//             backgroundSize: `${progress * 100}%`,
//             ease: 'none',
//             overwrite: 'auto',
//           });
//         },
//       },
//     });

//     // Highlight fourth line when third line is halfway
//     gsap.to(fourthLine, {
//       backgroundSize: '100%',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: fourthLine,
//         start: 'center 80%',
//         end: 'center 20%',
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = Math.max(0, (self.progress - 0.2) * 2);
//           gsap.to(fifthLine, {
//             backgroundSize: `${progress * 100}%`,
//             ease: 'none',
//             overwrite: 'auto',
//           });
//         },
//       },
//     });

//     // Clean up ScrollTrigger when the component unmounts
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const containerStyles = {
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

//   return (
//     <>
//       <section className="relative" style={containerStyles}>
//         <div className="absolute inset-0 bg-[#01775D] opacity-70"></div>
//         <div className="mx-20 sm:mx-20 md:mx-20 lg:mx-52 py-64">
//           <h1 className="elementor-heading-title first-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl ">
//             Connecticut's first
//           </h1>
//           <h1 className="elementor-heading-title second-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
//             <b>100% turn-key</b>
//           </h1>
//           <h1 className="elementor-heading-title third-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl ">
//             <b>passive cultivation</b>
//           </h1>
//           <h1 className="elementor-heading-title fourth-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
//             <b>facility</b> built and
//           </h1>
//           <h1 className="elementor-heading-title fifth-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
//             managed for you
//           </h1>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ScrollTextEffect;

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './../styles/animationText.css';
// import bgImage from '../assets/images/ecg-bg.webp';

// gsap.registerPlugin(ScrollTrigger);

// const AnimationPage = () => {
//   useEffect(() => {
//     const lines = document.querySelectorAll('.line');

//     // Function to apply GSAP animation to each line with text highlighting adjustments
//     const applyScrollAnimation = (line, nextLine, progressStart) => {
//       gsap.to(line, {
//         backgroundSize: '100%',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: line,
//           start: 'top 80%',
//           end: 'center 30%',
//           scrub: true,

//           onUpdate: (self) => {
//             if (nextLine) {
//               const progress = Math.max(0, (self.progress - progressStart) * 2);
//               gsap.to(nextLine, {
//                 backgroundSize: `${progress * 100}%`,
//                 ease: 'none',
//               });
//             }
//           },
//         },
//       });
//     };

//     // Apply animations to all lines, adjusting progressStart for specific lines
//     lines.forEach((line, index) => {
//       const nextLine = lines[index + 1];
//       // line.style.lineHeight = '1.28'; // Adjust line-height as needed

//       // Setting custom progressStart for specific lines
//       if (line.textContent.includes('passive cultivation')) {
//         applyScrollAnimation(line, nextLine, 0.4);
//       } else if (line.textContent.includes('facility built and')) {
//         applyScrollAnimation(line, nextLine, 0.3);
      
//       } else {
//         applyScrollAnimation(line, nextLine, 0.5); // Default progress start
//       }
//     });

//     // Cleanup ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const containerStyles = {
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: 'contain',
//     backgroundPosition: 'center',
//   };

//   return (
//     <section
//       className="relative z-0  h-full sm:h-full md:h-full lg:h-[73rem] mediumLaptop:h-[83rem] xl:h-[65rem] 2xl:h-[97rem] largestLaptop:h-[115rem]"
//       style={containerStyles}
//     >
//       <div className="absolute inset-0 bg-primary opacity-80"></div>
//       <div className="mx-10 sm:mx-10 md:mx-24 lg:mx-24 mediumLaptop:mx-24 xl:mx-24 2xl:mx-24 largestLaptop:mx-44
//         py-24 sm:py-24 md:py-24 lg:py-52 mediumLaptop:py-52 xl:py-44 2xl:py-72 largestLaptop:py-72 font-nudista font-light">
//         {[
//           "Connecticut's first",
//           <span key="1" className="font-nudista font-bold">
//             100% turn-key
//           </span>,
//           <span key="2" className="font-nudista font-bold">
//             passive cultivation
//           </span>,
//           <>
//             <span key="3" className="font-nudista font-bold">
//               facility
//             </span>{' '}
//             built and
//           </>,
//           'managed for you',
//         ].map((text, idx) => (
//           <h1
//             key={idx}
//             className={`heading-title line  tracking-tight font-nudista font-light 
//             text-5xl sm:text-6xl md:text-7xl lg:text-[6.6rem] mediumLaptop:text-[9rem] xl:text-[6.6rem]  2xl:text-[10rem] largestLaptop:text-[12rem] drop-shadow-md`}
//             style={{ lineHeight: '1.2' }} // Inline style for full coverage
//           >
//             {text}
//           </h1>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AnimationPage;


import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './../styles/animationText.css';
import bgVideo from '../assets/videos/bgVideo.mp4'; // Add your video file
import poster1 from '../assets/images/poster-1.webp'


gsap.registerPlugin(ScrollTrigger);

const TextAnimationPage = () => {
  useEffect(() => {
    const lines = document.querySelectorAll('.line');

    // Function to apply GSAP animation to each line with text highlighting adjustments
    const applyScrollAnimation = (line, nextLine, progressStart) => {
      gsap.to(line, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: line,
          start: 'top 80%',
          end: 'center 30%',
          scrub: true,
          onUpdate: (self) => {
            if (nextLine) {
              const progress = Math.max(0, (self.progress - progressStart) * 2);
              gsap.to(nextLine, {
                backgroundSize: `${progress * 100}%`,
                ease: 'none',
              });
            }
          },
        },
      });
    };

    // Apply animations to all lines, adjusting progressStart for specific lines
    lines.forEach((line, index) => {
      const nextLine = lines[index + 1];

      // Setting custom progressStart for specific lines
      if (line.textContent.includes('passive cultivation')) {
        applyScrollAnimation(line, nextLine, 0.4);
      } else if (line.textContent.includes('facility built and')) {
        applyScrollAnimation(line, nextLine, 0.3);
      } else {
        applyScrollAnimation(line, nextLine, 0.5); // Default progress start
      }
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative z-0 h-full sm:h-full md:h-full lg:h-[73rem] mediumLaptop:h-[83rem] xl:h-[65rem] 2xl:h-[97rem] largestLaptop:h-[115rem]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        poster={poster1}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="mx-10 sm:mx-10 md:mx-24 lg:mx-24 mediumLaptop:mx-24 xl:mx-24 2xl:mx-24 largestLaptop:mx-44
        py-24 sm:py-24 md:py-24 lg:py-52 mediumLaptop:py-52 xl:py-44 2xl:py-72 largestLaptop:py-72 font-nudista font-light">
        {[
          "Connecticut's first",
          <span key="1" className="font-nudista font-bold">
            100% turn-key
          </span>,
          <span key="2" className="font-nudista font-bold">
            passive cultivation
          </span>,
          <>
            <span key="3" className="font-nudista font-bold">
              facility
            </span>{' '}
            built and
          </>,
          'managed for you',
        ].map((text, idx) => (
          <h1
            key={idx}
            className={`heading-title line tracking-tight font-nudista font-light 
            text-5xl sm:text-6xl md:text-7xl lg:text-[6.6rem] mediumLaptop:text-[9rem] xl:text-[6.6rem]  2xl:text-[10rem] largestLaptop:text-[12rem] drop-shadow-md`}
            style={{ lineHeight: '1.2' }} // Inline style for full coverage
          >
            {text}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default TextAnimationPage;

