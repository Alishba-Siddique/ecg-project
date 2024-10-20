// // utilities/preloadResources.js

// export const preloadImages = (images) => {
//     return Promise.all(
//       images.map((src) => {
//         return new Promise((resolve, reject) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = resolve;
//           img.onerror = (error) => {
//             console.error(`Error loading image: ${src}`, error);
//             resolve(); // Continue even if one image fails
//           };
//         });
//       })
//     );
//   };

//   export const preloadVideos = (videos) => {
//     return Promise.all(
//       videos.map((src) => {
//         return new Promise((resolve, reject) => {
//           const video = document.createElement('video');
//           video.src = src;
//           video.oncanplaythrough = resolve;
//           video.onerror = (error) => {
//             console.error(`Error loading video: ${src}`, error);
//             resolve(); // Continue even if one video fails
//           };
//         });
//       })
//     );
//   };

// utilities/preloadResources.js

// utilities/preloadResources.js

// export const preloadImages = (images) => {
//     const imagesArray = Array.from(images); // Convert NodeList to array
//     return Promise.all(
//       imagesArray.map((img) => {
//         return new Promise((resolve) => {
//           const image = new Image();
//           image.src = img.src;
//           image.onload = resolve;
//           image.onerror = resolve; // Continue even if the image fails to load
//         });
//       })
//     );
//   };

//   export const preloadVideos = (videos) => {
//     const videosArray = Array.from(videos); // Convert NodeList to array
//     return Promise.all(
//       videosArray.map((video) => {
//         return new Promise((resolve) => {
//           video.oncanplaythrough = resolve;
//           video.onerror = resolve; // Continue even if the video fails to load
//         });
//       })
//     );
//   };

// export const preloadImages = () => {
//     const images = Array.from(document.querySelectorAll('img')); // Convert NodeList to array
//     return Promise.all(
//       images.map((img) => {
//         return new Promise((resolve) => {
//           const image = new Image();
//           image.src = img.src;
//           image.onload = resolve;
//           image.onerror = resolve; // Resolve even if the image fails to load
//         });
//       })
//     );
//   };

//   export const preloadVideos = () => {
//     const videos = Array.from(document.querySelectorAll('video')); // Convert NodeList to array
//     return Promise.all(
//       videos.map((video) => {
//         return new Promise((resolve) => {
//           video.oncanplaythrough = resolve;
//           video.onerror = resolve; // Resolve even if the video fails to load
//         });
//       })
//     );
//   };

//   export const preloadAllResources = () => {
//     return Promise.all([preloadImages(), preloadVideos()]);
//   };

export const preloadImages = (onProgress) => {
  const images = Array.from(document.querySelectorAll('img'));
  let loadedImages = 0;

  return Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          loadedImages++;
          onProgress((loadedImages / images.length) * 100); // Update progress based on images loaded
          resolve();
        };
        image.onerror = resolve; // Resolve even if the image fails to load
      });
    })
  );
};

export const preloadVideos = (onProgress) => {
  const videos = Array.from(document.querySelectorAll('video'));
  let loadedVideos = 0;

  return Promise.all(
    videos.map((video) => {
      return new Promise((resolve) => {
        video.oncanplaythrough = () => {
          loadedVideos++;
          onProgress((loadedVideos / videos.length) * 100); // Update progress based on videos loaded
          resolve();
        };
        video.onerror = resolve; // Resolve even if the video fails to load
      });
    })
  );
};

export const preloadAllResources = (onProgress) => {
  const totalResources =
    document.querySelectorAll('img').length +
    document.querySelectorAll('video').length;
  let loadedResources = 0;

  const updateProgress = () => {
    loadedResources++;
    onProgress((loadedResources / totalResources) * 100);
  };

  return Promise.all([
    preloadImages(updateProgress),
    preloadVideos(updateProgress),
  ]);
};
