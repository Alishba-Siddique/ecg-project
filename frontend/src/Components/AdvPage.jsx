// import React from 'react';

// const AdvPage = () => {
//   const advantages = [
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//     },
//   ];

//   return (
//     <div
//       className="max-w-8xl mx-6  md:mx-6 lg:mx-20 xl:mx-20 mb-16
//      py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full "
//     >
//       {/* Title Section */}
//       <div className="text-center mb-24">
//         <div className="flex justify-center items-center">
//           {/* Increased the width of the line */}
//           <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
//           <h2
//             className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl
//                          mx-10 sm:mx-10 md:mx-10 lg:mx-5 xl:mx-10
//                           text-black font-nudista font-bold"
//           >
//             The <span className="font-nudista font-bold mb-44">East Coast Growers</span>{' '}
//             Advantage
//           </h2>
//           <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
//         </div>
//       </div>

//       {/* Advantages Grid */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full md:w-full lg:w-full mx-0 md:mx-0 lg:mx-0 ">
//         {advantages.map((advantage, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white2 shadow-md border border-gray-200 rounded-lg  hover:text-white hover:shadow-lg transition duration-300 ease-in-out"
//           >
//             <h3 className="text-xl font-bold text-primary mb-2 font-nudista">
//               {advantage.title}
//             </h3>
//             <p className="text-gray-700 font-sora text-xs md:text-md lg:text-base">
//               {advantage.description}
//             </p>
//           </div>
//         ))}
//         {/* Repeating the boxes for demonstration */}
//         {advantages.map((advantage, index) => (
//           <div
//             key={index + 4}
//             className="p-6 bg-white2 shadow-md border border-gray-200 rounded-lg   hover:shadow-lg transition duration-300 ease-in-out"
//           >
//             <h3 className="text-xl font-bold hover:bg-white2 text-primary mb-2 font-nudista">
//               {advantage.title}
//             </h3>
//             <p className="text-gray-700 font-sora text-xs md:text-md lg:text-base">
//               {advantage.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdvPage;

import React from 'react';

const AdvPage = () => {
  const advantages = [
    {
      title: 'HYBRID MODEL',
      description:
        'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
    },
    {
      title: 'PREMIUM QUALITY',
      description:
        'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
    },
    {
      title: 'PRICE POINT',
      description:
        'Higher quality product, high demand, and low supply equals higher prices per pound.',
    },
    {
      title: 'COMPETITIVE EDGE',
      description:
        'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
    },
  ];

  return (
    <div
      className="max-w-8xl mx-6 md:mx-6 lg:mx-20 xl:mx-20 mb-16
      py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full"
    >
      {/* Title Section */}
      <div className="text-center mb-24">
        <div className="flex justify-center items-center">
          <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
          <h2
            className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl
            mx-10 sm:mx-10 md:mx-10 lg:mx-5 xl:mx-10
            text-black font-nudista font-light"
          >
            The{' '}
            <span className="font-nudista font-bold mb-44">
              East Coast Growers
            </span>{' '}
            Advantage
          </h2>
          <div className="border-t-4 border-primary w-[15rem] mt-1"></div>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full md:w-full lg:w-full mx-0 md:mx-0 lg:mx-0">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="p-6 bg-white2 shadow-md border border-gray-200 rounded-lg
              hover:scale-105  hover:shadow-lg hover:text-white2 hover:bg-primary
              transition-transform duration-500 ease-in-out"
          >
            <h3 className="text-xl  mb-2 font-nudista font-bold">
              {advantage.title}
            </h3>
            <p className="font-sora text-xs md:text-md lg:text-base">
              {advantage.description}
            </p>
          </div>
        ))}
        {/* Repeating the boxes for demonstration */}
        {advantages.map((advantage, index) => (
          <div
            key={index + 4}
            className="p-6 bg-white2 shadow-md border border-gray-200 rounded-lg
              hover:scale-105  hover:shadow-lg hover:text-white2 hover:bg-primary hover:duration-500
              transition-transform duration-500 ease-in-out"
          >
            <h3 className="text-xl   mb-2 font-nudista font-bold">
              {advantage.title}
            </h3>
            <p className=" font-sora text-xs md:text-md lg:text-base">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvPage;

// import React from 'react';

// const AdvantageSection = () => {
//   const cards = [
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//     },
//     {
//       title: 'PRICE POINT',
//       description:
//         'Higher quality product, high demand, and low supply equals higher prices per pound.',
//     },
//     {
//       title: 'COMPETITIVE EDGE',
//       description:
//         'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
//     },
//     // Repeated cards for demonstration
//     {
//       title: 'HYBRID MODEL',
//       description:
//         'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
//     },
//     {
//       title: 'PREMIUM QUALITY',
//       description:
//         'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
//     },
//   ];

//   return (
//     <section
//       className="max-w-8xl mx-6 md:mx-6 lg:mx-20 xl:mx-20 mb-16
//       py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full"
//     >
//       <h2 className="text-center text-2xl font-bold mb-8">
//         The <span className="text-primary">East Coast Growers</span> Advantage
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:bg-primary hover:text-white transition-all duration-300"
//           >
//             <h3 className="text-lg font-bold mb-2 text-primary ">{card.title}</h3>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AdvantageSection;
