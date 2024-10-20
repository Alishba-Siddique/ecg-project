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

// import './App.css';
// import { useState, useEffect } from 'react';
// import './styles/fade.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

//   // useEffect(() => {
//   //   const timeout = setTimeout(() => {
//   //     setLoading(false); // Hide preloader after 5 seconds, even if media isn't fully loaded
//   //   }, 5000); // Adjust the time as needed

//   //   const checkAllMediaLoaded = () => {
//   //     const mediaElements = document.querySelectorAll('img, video');
//   //     const allLoaded = Array.from(mediaElements).every((media) => {
//   //       return (
//   //         media.complete &&
//   //         (media.tagName !== 'VIDEO' || media.readyState === 4)
//   //       );
//   //     });

//   //     if (allLoaded) {
//   //       clearTimeout(timeout); // Clear the timeout if everything loads before 5 seconds
//   //       setLoading(false);
//   //     }
//   //   };

//   //   window.addEventListener('load', checkAllMediaLoaded);

//   //   const mediaElements = document.querySelectorAll('img, video');
//   //   mediaElements.forEach((media) => {
//   //     media.addEventListener('load', checkAllMediaLoaded);
//   //     media.addEventListener('loadeddata', checkAllMediaLoaded);
//   //   });

//   //   return () => {
//   //     clearTimeout(timeout); // Clear timeout on unmount
//   //     window.removeEventListener('load', checkAllMediaLoaded);
//   //     mediaElements.forEach((media) => {
//   //       media.removeEventListener('load', checkAllMediaLoaded);
//   //       media.removeEventListener('loadeddata', checkAllMediaLoaded);
//   //     });
//   //   };
//   // }, []);

//   useEffect(() => {
//     let loadedItems = 0;
//     const totalMedia = document.querySelectorAll('img, video').length;

//     // Function to check if all images and videos have loaded
//     const handleMediaLoad = () => {
//       loadedItems++;
//       if (loadedItems === totalMedia) {
//         setLoading(false);
//       }
//     };

//     // Add event listeners to media elements to track their loading state
//     const mediaElements = document.querySelectorAll('img, video');
//     mediaElements.forEach((media) => {
//       if (media.complete || media.readyState === 4) {
//         handleMediaLoad(); // If media is already loaded
//       } else {
//         media.addEventListener('load', handleMediaLoad);
//         media.addEventListener('loadeddata', handleMediaLoad); // For videos
//       }
//     });

//     // Clean up the event listeners on unmount
//     return () => {
//       mediaElements.forEach((media) => {
//         media.removeEventListener('load', handleMediaLoad);
//         media.removeEventListener('loadeddata', handleMediaLoad);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader />
//       ) : (
//         <div className={`-mb-8 fade-in ${loading ? 'hidden' : ''}`}>
//           <SkeletonTheme color="#202020" highlightColor="#444">
//             <RouterProvider router={router} />
//           </SkeletonTheme>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

// // App.jsx
// import React, { useState, useEffect } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import PreLoader from './utilities/PreLoader';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';

// function App() {
//   const [loading, setLoading] = useState(true);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     index: true,
//   },
//   {
//     path: '/home',
//     element: <HomePage />,
//   },
//   {
//     path: '/about',
//     element: <AboutPage />,
//   },
//   {
//     path: '/contact',
//     element: <ContactPage />,
//   },
//   {
//     path: '/history',
//     element: <HistoryPage />,
//   },
// ]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
// import PreLoader from './utilities/PreLoader';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const imagesLoadedRef = useRef(0);
//   const totalImagesRef = useRef(0);
//   const videosLoadedRef = useRef(0);
//   const totalVideosRef = useRef(0);

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <HomePage />,
  //     index: true,
  //   },
  //   {
  //     path: '/home',
  //     element: <HomePage />,
  //   },
  //   {
  //     path: '/about',
  //     element: <AboutPage />,
  //   },
  //   {
  //     path: '/contact',
  //     element: <ContactPage />,
  //   },
  //   {
  //     path: '/history',
  //     element: <HistoryPage />,
  //   },
  // ]);

//   const handleImageLoaded = () => {
//     imagesLoadedRef.current++;
//     if (
//       imagesLoadedRef.current === totalImagesRef.current &&
//       videosLoadedRef.current === totalVideosRef.current
//     ) {
//       setLoading(false);
//     }
//   };

//   const handleVideoLoaded = () => {
//     videosLoadedRef.current++;
//     if (
//       imagesLoadedRef.current === totalImagesRef.current &&
//       videosLoadedRef.current === totalVideosRef.current
//     ) {
//       setLoading(false);
//     }
//   };



//   useEffect(() => {
//     const images = document.querySelectorAll('img');
//     images.forEach((img) => {
//       img.onload = () => {
//         console.log('Image loaded:', img.src);
//         handleImageLoaded();
//       };
//       img.onerror = () => {
//         console.log('Image loading failed:', img.src);
//       };
//       img.onabort = () => {
//         console.log('Image loading aborted:', img.src);
//       };
//       img.onstalled = () => {
//         console.log('Image loading stalled:', img.src);
//       };
//     });
  
//     const videos = document.querySelectorAll('video');
//     videos.forEach((video) => {
//       video.oncanplaythrough = () => {
//         console.log('Video loaded and ready to play:', video.src);
//         handleVideoLoaded();
//       };
//       video.onerror = () => {
//         console.log('Video loading failed:', video.src);
//       };
//       video.onwaiting = () => {
//         console.log('Video loading...', video.src);
//       };
//       video.onstalled = () => {
//         console.log('Video loading stalled:', video.src);
//       };
//       video.onplay = () => {
//         console.log('Video playing:', video.src);
//       };
//       video.onpause = () => {
//         console.log('Video paused:', video.src);
//       };
//     });
  
//     // Update total images and videos count
//     totalImagesRef.current = images.length;
//     totalVideosRef.current = videos.length;
  
//     console.log('Total images:', totalImagesRef.current);
//     console.log('Total videos:', totalVideosRef.current);
//   }, [handleImageLoaded, handleVideoLoaded]);

//   return (
//     <>
//       {loading ? (
//         <PreLoader handleImageLoaded={handleImageLoaded} />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }

// export default App;

// function App() {
//   const [loading, setLoading] = useState(true);
//   const imagesLoadedRef = useRef(0);
//   const totalImagesRef = useRef(0);
//   const videosLoadedRef = useRef(0);
//   const totalVideosRef = useRef(0);

//   const handleImageLoaded = () => {
//     imagesLoadedRef.current++;
//     if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//       setLoading(false);
//     }
//   };

//   const handleVideoLoaded = () => {
//     videosLoadedRef.current++;
//     if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//       setLoading(false);
//     }
//   };

//   useLayoutEffect(() => {
//     const images = document.querySelectorAll('img');
//     const videos = document.querySelectorAll('video');

//     totalImagesRef.current = images.length;
//     totalVideosRef.current = videos.length;

//     console.log('Total images:', totalImagesRef.current);
//     console.log('Total videos:', totalVideosRef.current);

//     images.forEach((img) => {
//       img.onload = handleImageLoaded;
//       img.onerror = handleImageLoaded;
//     });

//     videos.forEach((video) => {
//       video.oncanplaythrough = handleVideoLoaded;
//       video.onerror = handleVideoLoaded;
//     });
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader handleImageLoaded={() => {}} />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }

// export default App;

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useState, useRef, useLayoutEffect } from 'react';
// import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';
// import PreLoader from './utilities/PreLoader.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     index: true,
//   },
//   {
//     path: '/home',
//     element: <HomePage />,
//   },
//   {
//     path: '/about',
//     element: <AboutPage />,
//   },
//   {
//     path: '/contact',
//     element: <ContactPage />,
//   },
//   {
//     path: '/history',
//     element: <HistoryPage />,
//   },
// ]);

// function App() {
//   const [loading, setLoading] = useState(true);
//   const imagesLoadedRef = useRef(0);
//   const totalImagesRef = useRef(0);
//   const videosLoadedRef = useRef(0);
//   const totalVideosRef = useRef(0);

//   useLayoutEffect(() => {
//     const images = document.querySelectorAll('img');
//     const videos = document.querySelectorAll('video');

//     totalImagesRef.current = images.length;
//     totalVideosRef.current = videos.length;

//     console.log('Total images:', totalImagesRef.current);
//     console.log('Total videos:', totalVideosRef.current);

//     images.forEach((img) => {
//       img.onload = () => {
//         imagesLoadedRef.current++;
//         console.log('Images loaded:', imagesLoadedRef.current, '/', totalImagesRef.current);
//         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//           setLoading(false);
//         }
//       };
//       img.onerror = () => {
//         imagesLoadedRef.current++;
//         console.log('Images loaded:', imagesLoadedRef.current, '/', totalImagesRef.current);
//         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//           setLoading(false);
//         }
//       };
//     });

//     videos.forEach((video) => {
//       video.oncanplaythrough = () => {
//         videosLoadedRef.current++;
//         console.log('Videos loaded:', videosLoadedRef.current, '/', totalVideosRef.current);
//         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//           setLoading(false);
//         }
//       };
//       video.onerror = () => {
//         videosLoadedRef.current++;
//         console.log('Videos loaded:', videosLoadedRef.current, '/', totalVideosRef.current);
//         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//           setLoading(false);
//         }
//       };
//     });
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }

// export default App;

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useState, useRef, useLayoutEffect } from 'react';
// import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';
// import PreLoader from './utilities/PreLoader.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     index: true,
//   },
//   {
//     path: '/home',
//     element: <HomePage />,
//   },
//   {
//     path: '/about',
//     element: <AboutPage />,
//   },
//   {
//     path: '/contact',
//     element: <ContactPage />,
//   },
//   {
//     path: '/history',
//     element: <HistoryPage />,
//   },
// ]);

// // function App() {
// //   const [loading, setLoading] = useState(true);
// //   const imagesLoadedRef = useRef(0);
// //   const totalImagesRef = useRef(0);
// //   const videosLoadedRef = useRef(0);
// //   const totalVideosRef = useRef(0);

// // useLayoutEffect(() => {
// //   const images = document.querySelectorAll('img');
// //   const videos = document.querySelectorAll('video');

// //   totalImagesRef.current = images.length;
// //   totalVideosRef.current = videos.length;

// //   images.forEach((img) => {
// //     if (img.complete) {
// //       imagesLoadedRef.current++;
// //     } else {
// //       img.onload = () => {
// //         imagesLoadedRef.current++;
// //         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
// //           setLoading(false);
// //         }
// //       };
// //       img.onerror = () => {
// //         imagesLoadedRef.current++;
// //         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
// //           setLoading(false);
// //         }
// //       };
// //     }
// //   });

// //   videos.forEach((video) => {
// //     if (video.readyState === 4) {
// //       videosLoadedRef.current++;
// //     } else {
// //       video.oncanplaythrough = () => {
// //         videosLoadedRef.current++;
// //         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
// //           setLoading(false);
// //         }
// //       };
// //       video.onerror = () => {
// //         videosLoadedRef.current++;
// //         if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
// //           setLoading(false);
// //         }
// //       };
// //     }
// //   });

// //   // Add a fallback timeout to ensure loading state is updated
// //   const timeout = setTimeout(() => {
// //     setLoading(false);
// //   }, 5000); // adjust timeout duration as needed

// //   return () => clearTimeout(timeout);
// // }, []);

// //   return (
// //     <>
// //       {loading ? (
// //         <PreLoader />
// //       ) : (
// //         <RouterProvider router={router} />
// //       )}
// //     </>
// //   );
// // }

// // export default App;
// function App() {
//   const [loading, setLoading] = useState(true);
//   const imagesLoadedRef = useRef(0);
//   const totalImagesRef = useRef(0);
//   const videosLoadedRef = useRef(0);
//   const totalVideosRef = useRef(0);

//   useLayoutEffect(() => {
//     const images = document.querySelectorAll('img');
//     const videos = document.querySelectorAll('video');

//     totalImagesRef.current = images.length;
//     totalVideosRef.current = videos.length;

//     const handleImageLoad = () => {
//       imagesLoadedRef.current++;
//       checkIfLoaded();
//     };

//     const handleVideoLoad = () => {
//       videosLoadedRef.current++;
//       checkIfLoaded();
//     };

//     const checkIfLoaded = () => {
//       if (imagesLoadedRef.current === totalImagesRef.current && videosLoadedRef.current === totalVideosRef.current) {
//         setLoading(false);
//       }
//     };

//     images.forEach((img) => {
//       img.onload = handleImageLoad;
//       img.onerror = handleImageLoad; // Treat error as a load
//     });

//     videos.forEach((video) => {
//       video.oncanplaythrough = handleVideoLoad;
//       video.onerror = handleVideoLoad; // Treat error as a load
//     });
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader setLoading={setLoading} />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }
// export default App;

// import { preloadImages, preloadVideos } from './utilities/preloadResources';
// import { useState, useEffect } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';
// import PreLoader from './utilities/PreLoader';


// const router = createBrowserRouter([
//   { path: '/', element: <HomePage />, index: true },
//   { path: '/home', element: <HomePage /> },
//   { path: '/about', element: <AboutPage /> },
//   { path: '/contact', element: <ContactPage /> },
//   { path: '/history', element: <HistoryPage /> },
// ]);

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Collect all images and videos from various pages
//     const images = [
//       // Images from InvestmentPage
//       './assets/images/investmentImg1.webp',
//       './assets/images/investmentImg2.webp',
//       './assets/images/investmentImg3.webp',
//       './assets/images/investmentImg4.webp',
//       './assets/images/investmentIcon1.svg',
//       './assets/images/investmentIcon2.svg',
//       './assets/images/investmentIcon3.svg',
//       './assets/images/investmentIcon4.svg',
//       './assets/images/investmentBg.webp',
//       // Images from AdvPage
//       './assets/images/adv-icon-1.svg',
//       './assets/images/adv-icon-2.svg',
//       './assets/images/adv-icon-3.svg',
//       './assets/images/adv-icon-4.svg',
//       // Images from FunnelPage
//       './assets/images/investorFunnelImg1.webp',
//       './assets/images/investorFunnelImg2.webp',
//       './assets/images/investorFunnelImg3.webp',
//       './assets/images/investorFunnelImg4.webp',
//       // Images from FacilityPage
//       './assets/images/FacilityImg1.webp',
//       './assets/images/FacilityImg2.webp',
//       './assets/images/FacilityImg3.webp',
//       './assets/images/FacilityImg4.webp',
//       // Images from TeamPage
//       './assets/images/Andrew Borner.webp',
//       './assets/images/Daniel Czyzewski.webp',
//       './assets/images/Oz-Pariser.webp',
//       './assets/images/Trent & Chad Lynch.webp',
//       // Images from EbookPage
//       './assets/images/ebook.webp',
//       './assets/images/overlayTextIconOrange.svg',
//       './assets/images/overlayTextIconBlack.svg',
//       // Images from VideoPage
//       './assets/images/vidPoster1.webp',
//       './assets/images/vidPoster2.webp',
//       './assets/images/vidPoster3.webp',
//       './assets/images/vidPoster4.webp',
//       // Images from FooterPage
//       './assets/images/footerBg.webp',
//     ];

//     const videos = [
//       // Videos from different pages
//       './assets/videos/heroBg.webm',
//       './assets/videos/vidPoster1.webp',
//       './assets/videos/vidPoster1.webp',
//       './assets/videos/vidPoster1.webp',
//       './assets/videos/vidPoster1.webp',
//     ];

//     // Preload all resources
//     const preloadAllResources = async () => {
//       try {
//         await preloadImages(images);
//         await preloadVideos(videos);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error preloading resources:', err);
//         setLoading(false);  // Ensure the app still works if an error occurs
//       }
//     };

//     preloadAllResources();
//   }, []);

//   return (
//     <>
//       {loading ? <PreLoader /> : <RouterProvider router={router} />}
//     </>
//   );
// }

// export default App;

// import { preloadImages, preloadVideos } from './utilities/preloadResources';
// import { useState, useEffect, useRef } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import HistoryPage from './pages/HistoryPage';
// import PreLoader from './utilities/PreLoader';

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage />, index: true },
//   { path: '/about', element: <AboutPage /> },
//   { path: '/contact', element: <ContactPage /> },
//   { path: '/history', element: <HistoryPage /> },
// ]);

// function App() {
//   const [loading, setLoading] = useState(true);
//   const resourcesLoadedRef = useRef(false);

//   const preloadAllResources = async () => {
//     try {
//       const images = document.querySelectorAll('img');
//       const videos = document.querySelectorAll('video');

//       await Promise.all([preloadImages(images), preloadVideos(videos)]);
//       setLoading(false); // Set loading to false only after all resources have been loaded
//     } catch (error) {
//       console.error('Error preloading resources:', error);
//       setLoading(false); // Ensure the app continues even if there is an error
//     }
//   };

//   useEffect(() => {
//     if (!resourcesLoadedRef.current) {
//       preloadAllResources(); // Preload images and videos once at initial render
//       resourcesLoadedRef.current = true;
//     }
//   }, []);

//   return (
//     <>
//       {loading ? <PreLoader /> : <RouterProvider router={router} />}
//     </>
//   );
// }

// export default App;


// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import HistoryPage from './pages/HistoryPage.jsx';
// import PreLoader from './utilities/PreLoader.jsx';
// import { preloadAllResources } from './utilities/preloadResources.js';

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage />, index: true },
//   { path: '/home', element: <HomePage /> },
//   { path: '/about', element: <AboutPage /> },
//   { path: '/contact', element: <ContactPage /> },
//   { path: '/history', element: <HistoryPage /> },
// ]);

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Preload all images and videos
//     preloadAllResources()
//       .then(() => {
//         console.log('All resources are fully loaded');
//         setLoading(false); // Stop showing the preloader once all resources are loaded
//       })
//       .catch((error) => {
//         console.error('Error preloading resources:', error);
//         setLoading(false); // Stop showing preloader even if there are load errors
//       });
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <PreLoader />
//       ) : (
//         <RouterProvider router={router} />
//       )}
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import PreLoader from './utilities/PreLoader.jsx';
import { preloadAllResources } from './utilities/preloadResources.js';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, index: true },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/history', element: <HistoryPage /> },
]);


function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all images and videos with progress tracking
    preloadAllResources(setProgress)
      .then(() => {
        console.log('All resources are fully loaded');
        setLoading(false); // Stop showing the preloader once all resources are loaded
      })
      .catch((error) => {
        console.error('Error preloading resources:', error);
        setLoading(false); // Stop showing preloader even if there are load errors
      });
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader progress={progress} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
