import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/card.css';
import team1 from '../assets/images/Daniel Czyzewski.webp';
import team2 from '../assets/images/Oz-Pariser.webp';
import team3 from '../assets/images/Andrew Borner.webp';
import team4 from '../assets/images/Trent & Chad Lynch.webp';


gsap.registerPlugin(ScrollTrigger);

const RotatingCard = () => {
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `${team1}`, `${team2}`, `${team3}`, `${team4}`
  ];

  const texts = [
    'This is the first text for the first image!',
    'This is the second text for the second image!',
    'This is the third text for the third image!',
    'This is the fourth text for the fourth image!'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        rotationY: 360 * images.length, 
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top center', 
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            
            const newIndex = Math.floor(progress * (images.length - 1));
            setCurrentIndex(newIndex);

            
            const nextImageIndex = (newIndex + 1) % images.length;
            const overlapProgress = progress * (images.length - 1) - newIndex;

            
            gsap.to(`.card-image-${newIndex}`, { opacity: 1 - overlapProgress });
            gsap.to(`.card-image-${nextImageIndex}`, { opacity: overlapProgress });
          },
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <div className="card-container">
      <div ref={cardRef} className="card">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Card Image ${index + 1}`}
            className={`card-image card-image-${index}`}
            style={{ zIndex: index === currentIndex ? 2 : 1 }}
          />
        ))}
        <h1 className="card-title">Rotating Card</h1>
        <p className="card-text">{texts[currentIndex]}</p>
      </div>
    </div>
  );
};

export default RotatingCard;
