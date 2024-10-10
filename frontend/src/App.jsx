import './App.css';
// import HeaderPage from './Components/HeaderPage';
import HeroPage from './components/HeroPage';
// import TeamPage from './components/TeamPage';
import DownloadPdfPage from './components/DownloadPdfPage';
import ScrollTrigger from './utilities/ScrollToTopButton';
import AdvPage from './components/AdvPage';
import NavbarPage from './components/NavbarPage';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './styles/fade.css';
import FooterWebPage from './components/FooterWebPage';
import EbookPage from './components/EbookPage';
import InvestmentPage from './components/InvestmentPage';
import GrowthPage from './components/GrowthPage';
import FourVideoPage from './Components/FourVideoPage';
import TextAnimationPage from './components/TextAnimationPage';
import TeamWebPage from './Components/TeamWebPage';

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
          <TextAnimationPage />
          <GrowthPage />
          <DownloadPdfPage />
          <InvestmentPage />
          <AdvPage />
          <FourVideoPage />
          {/* <TeamPage /> */}
          <TeamWebPage />
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
