import './App.css';
// import HeaderPage from './Components/HeaderPage';
import AnimationPage from './components/TextAnimationPage';
import HeroPage from './components/HeroPage';
import TeamPage from './components/TeamPage';
import DownloadPdfPage from './components/DownloadPdfPage';
import ScrollTrigger from './utilities/ScrollToTopButton';
import AdvPage from './components/AdvPage';
import NavbarPage from './components/NavbarPage';
import PhotoVideoPage from './components/PhotoVideoPage';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './styles/fade.css';
import FooterWebPage from './components/FooterWebPage';
import EbookPage from './components/EbookPage';
import InvestmentPage from './components/InvestmentPage';
import GrowthPage from './components/GrowthPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time before showing website content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="-mb-8 fade-in">
          <NavbarPage />
          {/* <HeaderPage /> */}
          <HeroPage />
          <AnimationPage />
          <GrowthPage />
          <DownloadPdfPage />
          <InvestmentPage />
          <AdvPage />
          <PhotoVideoPage />
          <TeamPage />
          {/* <ScrollTrigger /> */}
          <EbookPage />
          <FooterWebPage />
        </div>
      )}
      ;
    </>
  );
}

export default App;
