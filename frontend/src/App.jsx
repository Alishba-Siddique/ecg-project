import './App.css';
import HeaderPage from './Components/HeaderPage';
import AnimationPage from './components/TextAnimationPage';
import ConneticutPage from './components/ConneticutPage';
import HeroPage from './components/HeroPage';
import TeamPage from './components/TeamPage';
import DownloadPdfPage from './components/DownloadPdfPage';
import ScrollTrigger from './utilities/ScrollToTopButton';
import AdvPage from './components/AdvPage';
import NavbarPage from './components/NavbarPage';
import PhotoVideoPage from './components/PhotoVideoPage';
import EGrowthPage from './components/EGrowthPage';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './styles/fade.css';
import InfoPage from './components/InfoPage';
import FooterWebPage from './components/FooterWebPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time before showing website content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='-mb-8 fade-in'>
          <NavbarPage />
          {/* <HeaderPage /> */}
          <HeroPage />
          <AnimationPage />
          <ConneticutPage />
          <DownloadPdfPage />
          <EGrowthPage />
          <AdvPage />
          <PhotoVideoPage />
          <TeamPage />
          <ScrollTrigger />
          <InfoPage />
          <FooterWebPage />
          </div>
      )}
      ;
    </>
  );
}

export default App;
