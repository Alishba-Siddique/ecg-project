import { FiPlay } from 'react-icons/fi';
import cannabisFlower1 from '../assets/images/cannabisFlower.webp';
import cannabisFlower2 from '../assets/images/cannabisFlower2.webp';

const PhotoVideoComponent = () => {
  return (
    <div className="w-[89%] mx-auto mb-20 py-10 px-4 sm:px-4 lg:px-6 flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-6">
        {/* 70% Container: Displaying Photo */}
        <div className="w-full lg:w-[75%] bg-green-300 rounded-md">
            {/* Placeholder for the image */}
            <img 
            src={cannabisFlower2} 
            alt="Main Display" 
            className="w-full h-[300px] lg:h-full object-cover rounded-md" 
            />
        </div>

        {/* 30% Container: Photo and Video Section with Overlay */}
        <div className="w-full lg:w-[25%] relative rounded-md overflow-hidden mt-8 lg:mt-0">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
            <img 
                src={cannabisFlower1} 
                alt="Overlay Image" 
                className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
            </div>

            {/* Text content on top of the overlay */}
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
            <div className="flex items-center justify-start">
                <FiPlay size={50} className="mr-1" /> {/* Adjusted play icon size for responsiveness */}
            </div>
            <div className="text-2xl lg:text-4xl font-bold font-nudista">Photo and Video</div>
            <div className="text-xs lg:text-sm uppercase font-sora">View more</div>
            </div>
        </div>
    </div>


  );
};

export default PhotoVideoComponent;
