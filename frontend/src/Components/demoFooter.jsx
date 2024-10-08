
const CenteredDivExample = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative w-80">
                <div className="h-36 p-4 bg-gray-200 border border-gray-300">Top Div</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 p-4 bg-yellow-400 border border-gray-300">
                    Center Div
                </div>
                <div className="h-36 p-4 bg-gray-200 border border-gray-300">
                    {/* Footer */}
                    <footer className="relative py-8 px-6 text-white">
                        {/* Background Image Container */}
                        <div 
                            className="w-full h-full absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url(/public/footer-bg.jpg)' }}
                        >
                        {/* Gradient Overlay with mix-blend-mode */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-800 bg-blend-color-overlay"></div>
                        </div>
                        
                        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-end">
                        
                        {/* Logo */}
                        <div className="text-2xl font-bold mb-4 md:mb-0 md:px-24">
                            <a href="/">
                            <img src="/public/ecg-logo-full.png" alt="ECG-Logo" className="h-36 w-auto" />
                            </a>
                        </div>

                        {/* Navigation and Social Media Links */}
                        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 md:ml-auto md:px-32">
                            
                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-4">
                            <h4 className="font-semibold mb-2">Navigation</h4>
                            <a href="#our-history" className="hover:underline">Our History</a>
                            <a href="#about-us" className="hover:underline">About Us</a>
                            <a href="#contact-us" className="hover:underline">Contact Us</a>
                            </div>
                            
                            {/* Social Media Links */}
                            <div className="flex flex-col space-y-4">
                            <h4 className="font-semibold mb-2">Follow Us</h4>
                            <a href="https://twitter.com" className="hover:text-gray-300">Twitter</a>
                            <a href="https://facebook.com" className="hover:text-gray-300">Facebook</a>
                            <a href="https://instagram.com" className="hover:text-gray-300">Instagram</a>
                            </div>
                            
                        </div>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default CenteredDivExample;