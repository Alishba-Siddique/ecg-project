const HeroSection = () => {
    return (
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-12 bg-gray-300 text-white pt-20">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to East Coast Growers</h1>
          <p className="text-lg mb-4 text-left">
            We offer the best quality products and services to help you grow your business and achieve success.
          </p>
          <a href="#learn-more" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Learn More
          </a>
        </div>
  
        {/* Image Section */}
        <div className="md:w-1/2">
          <img 
            src="/public/ecg-logo-full.png" 
            alt="Hero Image" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
