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
import FooterPAge from './components/FooterPAge';
import PhotoVideoPage from './components/PhotoVideoPage';
import EGrowthPage from './components/EGrowthPage';

function App() {
  return (
    <>
      <div>
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
        <FooterPAge />
      </div>
    </>
  );
}

export default App;
