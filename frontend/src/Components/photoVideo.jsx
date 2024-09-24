import { FiPlay } from 'react-icons/fi';

const PhotoVideoComponent = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-4 lg:px-6 flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-6">
        {/* 70% Container: Displaying Photo */}
        <div className="w-full lg:w-[75%] bg-green-300 rounded-md">
            {/* Placeholder for the image */}
            <img 
            src="/public/cannabisFlower2.jpeg" 
            alt="Main Display" 
            className="w-full h-[300px] lg:h-full object-cover rounded-md" 
            />
        </div>

        {/* 30% Container: Photo and Video Section with Overlay */}
        <div className="w-full lg:w-[25%] relative rounded-md overflow-hidden mt-8 lg:mt-0">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
            <img 
                src="public/cannabisFlower.jpeg" 
                alt="Overlay Image" 
                className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
            </div>

            {/* Text content on top of the overlay */}
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
            <div className="flex items-center justify-start">
                <FiPlay size={50} className="mr-2" /> {/* Adjusted play icon size for responsiveness */}
            </div>
            <div className="text-2xl lg:text-4xl font-bold">Photo and Video</div>
            <div className="text-xs lg:text-sm uppercase">View more</div>
            </div>
        </div>
    </div>


  );
};

export default PhotoVideoComponent;
