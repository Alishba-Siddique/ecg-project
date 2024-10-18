// import './App.css';
// import { useState, useEffect } from 'react';
// import './styles/fade.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';
// import PreLoader from './utilities/PreLoader.jsx';
// import { SkeletonTheme } from 'react-loading-skeleton';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <HomePage />,
//       index: true,
//     },
//     {
//       path: '/home',
//       element: <HomePage />,
//       index: true,
//     },
//     {
//       path: '/about',
//       element: <AboutPage />,
//       index: true,
//     },
//     {
//       path: '/contact',
//       element: <ContactPage />,
//       index: true,
//     },
//     {
//       path: '/history',
//       element: <HistoryPage />,
//       index: true,
//     },
//   ]);

//   useEffect(() => {
//     // Simulate loading time before showing website content
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Adjust timing as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader />
//       ) : (
//         <div className="-mb-8 fade-in">
//           <SkeletonTheme color="#202020" highlightColor="#444">
//             <RouterProvider router={router} />
//           </SkeletonTheme>
//         </div>
//       )}
//       ;
//     </>
//   );
// }

// export default App;

import './App.css';
import { useState, useEffect } from 'react';
import './styles/fade.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';
import PreLoader from './utilities/PreLoader.jsx';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      index: true,
    },
    {
      path: '/home',
      element: <HomePage />,
      index: true,
    },
    {
      path: '/about',
      element: <AboutPage />,
      index: true,
    },
    {
      path: '/contact',
      element: <ContactPage />,
      index: true,
    },
    {
      path: '/history',
      element: <HistoryPage />,
      index: true,
    },
  ]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false); // Hide preloader after 5 seconds, even if media isn't fully loaded
  //   }, 5000); // Adjust the time as needed

  //   const checkAllMediaLoaded = () => {
  //     const mediaElements = document.querySelectorAll('img, video');
  //     const allLoaded = Array.from(mediaElements).every((media) => {
  //       return (
  //         media.complete &&
  //         (media.tagName !== 'VIDEO' || media.readyState === 4)
  //       );
  //     });

  //     if (allLoaded) {
  //       clearTimeout(timeout); // Clear the timeout if everything loads before 5 seconds
  //       setLoading(false);
  //     }
  //   };

  //   window.addEventListener('load', checkAllMediaLoaded);

  //   const mediaElements = document.querySelectorAll('img, video');
  //   mediaElements.forEach((media) => {
  //     media.addEventListener('load', checkAllMediaLoaded);
  //     media.addEventListener('loadeddata', checkAllMediaLoaded);
  //   });

  //   return () => {
  //     clearTimeout(timeout); // Clear timeout on unmount
  //     window.removeEventListener('load', checkAllMediaLoaded);
  //     mediaElements.forEach((media) => {
  //       media.removeEventListener('load', checkAllMediaLoaded);
  //       media.removeEventListener('loadeddata', checkAllMediaLoaded);
  //     });
  //   };
  // }, []);

  useEffect(() => {
    let loadedItems = 0;
    const totalMedia = document.querySelectorAll('img, video').length;

    // Function to check if all images and videos have loaded
    const handleMediaLoad = () => {
      loadedItems++;
      if (loadedItems === totalMedia) {
        setLoading(false);
      }
    };

    // Add event listeners to media elements to track their loading state
    const mediaElements = document.querySelectorAll('img, video');
    mediaElements.forEach((media) => {
      if (media.complete || media.readyState === 4) {
        handleMediaLoad(); // If media is already loaded
      } else {
        media.addEventListener('load', handleMediaLoad);
        media.addEventListener('loadeddata', handleMediaLoad); // For videos
      }
    });

    // Clean up the event listeners on unmount
    return () => {
      mediaElements.forEach((media) => {
        media.removeEventListener('load', handleMediaLoad);
        media.removeEventListener('loadeddata', handleMediaLoad);
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className={`-mb-8 fade-in ${loading ? 'hidden' : ''}`}>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <RouterProvider router={router} />
          </SkeletonTheme>
        </div>
      )}
    </>
  );
}

export default App;
