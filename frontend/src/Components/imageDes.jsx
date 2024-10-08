import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const ImageFlexbox = () => {
  const [selectedImage, setSelectedImage] = useState(0); // Default to first image index

  const images = [
    {
      src: '/public/cannabisFlower.jpeg',
      description: 'Description for Image 1',
    },
    {
      src: '/public/cannabisFlower2.jpeg',
      description: 'Description for Image 2',
    },
    {
      src: '/public/cannabisFlower.jpeg',
      description: 'Description for Image 3',
    },
    {
      src: '/public/cannabisFlower2.jpeg',
      description: 'Description for Image 4',
    },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-2xl mb-5">
        A market poised to <span className="font-bold">explosive growth</span>
      </h2>

      {/* Flexbox Container */}
        {/* Flexbox Container for Images */}
        <div className="flex gap-6 flex-wrap max-w-[70%]">
            {images.map((image, index) => (
            <div
                key={index}
                className={`relative cursor-pointer transition-transform duration-300 ${selectedImage === index ? 'flex-grow' : 'scale-90'}`}
                onClick={() => setSelectedImage(index)}
                style={{ minWidth: selectedImage === index ? '250px' : '150px' }}
            >
                <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className={`w-full object-cover rounded-lg ${selectedImage === index ? 'h-80' : 'h-48'}`} // Larger image sizes
                />
            </div>
            ))}

        </div>


        {/* Description Box on the Right */}
        <div className="w-[30%] ml-6 p-6 border rounded-lg bg-gray-100 shadow-lg flex flex-col justify-center">
            <FaInfoCircle className="text-6xl text-blue-500" /> {/* Icon next to images */}
            <h3 className="text-xl font-bold mb-2">Image Description</h3>
            <p>{images[selectedImage].description}</p>
            {/* Removed the button as per your request */}
        </div>
    </div>
  );
};

export default ImageFlexbox;
