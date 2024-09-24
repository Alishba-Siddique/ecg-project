

const Footer = () => {
  return (
    <div className="relative">
        {/* Footer */}
        <footer className="relative py-8 px-6 text-white h-full">
            <div className="flex flex-row justify-center">
                {/* Contact Form */}
                <div className="absolute h-fit w-fit z-40 bg-white justify-center text-center -mt-44 rounded-2xl p-12">
                    <p className="text-black text-lg md:text-3xl font-medium mb-4">
                    Schedule a call with <span className="font-bold">management team</span>
                    <br /> for more information
                    </p>

                    <form className="flex flex-col justify-center items-center gap-4 mt-6">
                    
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
                        <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                        />
                        <input
                        type="text"
                        placeholder="Contact"
                        className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                        />
                        <input
                        type="email"
                        placeholder="Email ID"
                        className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
                        />
                    </div>

                    <div className="mt-2">
                        <button className="bg-orange-500 text-white px-10 py-2 rounded-lg hover:bg-orange-600 transition w-full md:w-auto">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>

            {/* Background Image Container */}
            <div 
                className="w-full h-full absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/public/footer-bg.jpg)' }}
            >
            {/* Gradient Overlay with mix-blend-mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-800 bg-blend-color-overlay"></div>
            </div>

            <div className="relative flex flex-col mt-64 lg:mt-44 mx-auto md:flex-row items-center md:items-start md:justify-end">
        
                {/* Logo */}
                <div className="text-2xl font-bold mb-4 md:mb-0 md:px-24">
                    <a href="/">    
                    <img src="/public/ecg-logo-full.png" alt="ECG-Logo" className="h-36 w-auto" />
                    </a>
                </div>

                {/* Navigation and Social Media Links */}
                <div className="flex flex-row gap-20 md:grid md:grid-cols-2 md:gap-20 md:ml-auto md:px-32">
                    
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold mb-2">Navigation</h4>
                    <a href="#our-history" className="hover:underline">Our History</a>
                    <a href="#about-us" className="hover:underline">Contact Us</a>
                    <a href="#contact-us" className="hover:underline">About Us</a>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex flex-col space-y-4">
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <a href="https://twitter.com" className="hover:text-gray-300">Facebook</a>
                    <a href="https://facebook.com" className="hover:text-gray-300">Instagram</a>
                    <a href="https://instagram.com" className="hover:text-gray-300">Twitter</a>
                    </div>
            
                </div>
            </div>
        </footer>
    </div>

  );
};

export default Footer;
