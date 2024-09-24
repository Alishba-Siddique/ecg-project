import { useState } from "react";
import { GiTreeBranch, GiTreeGrowth } from 'react-icons/gi';
import { PiChartLine} from "react-icons/pi";
import { PiCurrencyDollar } from "react-icons/pi";// Example icon

const eGrow = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    {
        src: '/cannabisFlower.jpeg',
        heading: 'Analytics Technology',
        description1: '- Analyzing market trends and demand to ensure we are up to date on the latest consumer preferences',
        description2: '- Custom strain selection based on analysis of market trends',
        icon: <PiChartLine size={80} className="text-white  text" />, // Icon 1
    },
    {
        src: '/cannabisFlower2.jpeg',
        heading: 'Cultivation Technology',
        description1: '- Fully automated environmental monitoring and control',
        description2: '- Monitoring light, temperature, humidity, Co2 and VPD with on/off-site control ',
        description3: '- Unique automations and care for each stage of growth',
        icon: <GiTreeBranch size={80} className="text-white" />, // Icon 2
    },
    {
        src: '/cannabisFlower.jpeg',
        heading: 'Tracking & Monitoring',
        description1: '- Seed to sale software: our systems track each plant from seed to sale',
        description2: '- Every plant is tagged and tracking is automated',
        icon: <GiTreeGrowth size={80} className="text-white" />, // Icon 3
    },
    {
        src: '/cannabisFlower2.jpeg',
        heading: 'Investment Returns',
        description1: '- Invests the capital to own room(s) or table(s) in our turn key cannabis cultivation facilite',
        description2: '- Generates revenue with projected returns in the 30%+ range* ',
        icon: <PiCurrencyDollar size={80} className="text-white" />, // Icon 4
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-gray-500 justify-center items-center gap-5 bg-blend-overlay " style={{ backgroundImage: 'url(/public/growExplosive.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Title Section */}
      <div className="text-center my-10">
        <div className="flex justify-center items-center">
          {/* Increased the width of the line */}
          <div className="border-t-2 border-white w-[250px]"></div>
          <h2 className="text-3xl font-bold text-white mt-8 mx-4">
            A market poised to <span className="font-extrabold">explosive growth</span>
          </h2>
          <div className="border-t-2 border-white w-[250px]"></div>
        </div>
      </div>

      {/* Images Row */}
      <div className="flex w-full max-w-4xl gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-500  ${
              selectedImage === index ? 'basis-4/12' : 'basis-3/12'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.description}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* New Row with Icon and Description */}
      <div className="flex w-full max-w-4xl gap-5 my-8 items-center ">
        <div className="w-[30%] h-full flex justify-center items-center bg-orange-500 p-10 rounded-s-full">
          {/* Icon (GiChestnutLeaf is used as an example, replace with desired icon) */}
          {images[selectedImage].icon}
        </div>
        <div className="w-[70%] h-full p-10 bg-[#666666] text-white rounded-lg">
          {/* Display description of the selected image */}
          <h3 className="text-xl font-bold mb-2">{images[selectedImage].heading}</h3>
          <p className="text-lg md:text-left ">{images[selectedImage].description1} <br /> {images[selectedImage].description2}</p>
        </div>
      </div>
    </div>
  );
};

export default eGrow;
