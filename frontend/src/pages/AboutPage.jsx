import React from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Footer from '../components/Footer';
import heroBg from '../assets/videos/heroBg.mp4';
import posterHero from '../assets/images/poster-2.webp';

const AboutPage = () => {
  

  return (
    <div className="relative flex flex-col justify-between gap-20 ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        poster={posterHero} // This shows a poster image before the video loads
      >
        <source src={heroBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 top-0 left-0 w-full h-full object-cover -z-10 bg-primary opacity-50"></div>
      <div>
        <Navbar />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Footer />{' '}
      </div>
    </div>
  );
};

export default AboutPage;
