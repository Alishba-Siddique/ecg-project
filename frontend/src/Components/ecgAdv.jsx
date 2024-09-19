// AdvantageSection.jsx
const AdvantageSection = () => {
  const advantages = [
    {
      title: 'HYBRID MODEL',
      description: 'Benefits of micro-grow cultivation with the resources of a large scale facility in one place.',
    },
    {
      title: 'PREMIUM QUALITY',
      description: 'Top genetics, tight environmental controls resulting in high yields, high THC, and exceptional quality.',
    },
    {
      title: 'PRICE POINT',
      description: 'Higher quality product, high demand, and low supply equals higher prices per pound.',
    },
    {
      title: 'COMPETITIVE EDGE',
      description: 'Operating in a tightly regulated Connecticut market which avoids saturation from other players.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-screen">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          {/* Increased the width of the line */}
          <div className="border-t-2 border-green-600 w-[250px]"></div>
          <h2 className="text-4xl font-bold text-black mx-4">
            The <span className="font-extrabold">East Coast Growers</span> Advantage
          </h2>
          <div className="border-t-2 border-green-600 w-[250px]"></div>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {advantages.map((advantage, index) => (
          <div 
            key={index} 
            className="p-6 bg-white shadow-md border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-lg font-bold text-green-600 mb-2">{advantage.title}</h3>
            <p className="text-gray-700">{advantage.description}</p>
          </div>
        ))}
        {/* Repeating the boxes for demonstration */}
        {advantages.map((advantage, index) => (
          <div 
            key={index + 4} 
            className="p-6 bg-white shadow-md border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-lg font-bold text-green-600 mb-2">{advantage.title}</h3>
            <p className="text-gray-700">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageSection;
