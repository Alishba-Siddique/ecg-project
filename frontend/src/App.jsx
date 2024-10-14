import './App.css';
import { useState, useEffect } from 'react';
import './styles/fade.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';
import PreLoader from './utilities/PreLoader.jsx';

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
        <PreLoader />
      ) : (
        <div className="-mb-8 fade-in">
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
      ;
    </>
  );
}

export default App;

// App.jsx
// import './App.css';
// // import HeaderPage from './Components/HeaderPage';
// import HeroPage from './components/HeroPage';
// // import TeamPage from './components/TeamPage';
// import DownloadPdfPage from './components/DownloadPdfPage';
// import ScrollTrigger from './utilities/ScrollToTopButton';
// import AdvPage from './components/AdvPage';
// import NavbarPage from './components/NavbarPage';
// import { useState, useEffect } from 'react';
// import Loader from './components/Loader';
// import './styles/fade.css';
// import FooterWebPage from './components/FooterWebPage';
// import EbookPage from './components/EbookPage';
// import InvestmentPage from './components/InvestmentPage';
// import GrowthPage from './components/GrowthPage';
// import FourVideoPage from './Components/FourVideoPage';
// import TextAnimationPage from './components/TextAnimationPage';
// import TeamWebPage from './components/TeamWebPage';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0); // To track real loading progress

//   useEffect(() => {
//     const mediaElements = document.querySelectorAll('img, video');
//     let loadedCount = 0;

//     const handleMediaLoad = () => {
//       loadedCount++;
//       const progressPercentage = (loadedCount / mediaElements.length) * 100;
//       setProgress(Math.floor(progressPercentage));

//       if (loadedCount === mediaElements.length) {
//         setLoading(false);
//       }
//     };

//     mediaElements.forEach((element) => {
//       if (element.complete || element.readyState === 4) {
//         handleMediaLoad();
//       } else {
//         element.addEventListener('load', handleMediaLoad);
//         element.addEventListener('error', handleMediaLoad);
//       }
//     });

//     return () => {
//       mediaElements.forEach((element) => {
//         element.removeEventListener('load', handleMediaLoad);
//         element.removeEventListener('error', handleMediaLoad);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader progress={progress} />
//       ) : (
//         <div className="-mb-8 fade-in">
//           <NavbarPage />
//           {/* <HeaderPage /> */}
//           <HeroPage />
//           <TextAnimationPage />
//           <GrowthPage />
//           <DownloadPdfPage />
//           <InvestmentPage />
//           <AdvPage />
//           <FourVideoPage />
//           {/* <TeamPage /> */}
//           <TeamWebPage />
//           {/* <ScrollTrigger /> */}
//           <EbookPage />
//           <FooterWebPage />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
