import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon1 from '../assets/images/01.svg';
import icon2 from '../assets/images/02.svg';
import icon3 from '../assets/images/03.svg';
import icon4 from '../assets/images/04.svg';
import icon5 from '../assets/images/05.svg';
import icon6 from '../assets/images/06.svg';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const wheelCards = [
    {
      img: <img src={icon1} alt="icon1" width={110}/>,
      title: (
        <>
          Web <br />Development
        </>
      ),
      id: 'icon1',
    },
    {
      img: <img src={icon2} alt="icon2" width={110}/>,
      title: (
        <>
          Mobile <br />Development
        </>
      ),
      id: 'icon2',
    },
    {
      img: <img src={icon3} alt="icon3" width={110} />,
      title: (
        <>
           Generative <br /> AI
        </>
      ),
      id: 'icon3',
    },
    {
      img: <img src={icon4} alt="icon4" width={110} />,
      title: (
        <>
          Custom 
          <br /> Applications
        </>
      ),
      id: 'icon4',
    },
    {
      img: <img src={icon5} alt="icon5" width={110} />,
      title: (
        <>
          Automation 
          <br /> & QA
        </>
      ),
      id: 'icon5',
    },
    {
      img: <img src={icon6} alt="icon6" width={110} />,
      title: (
        <>
          Mobile 
          <br /> Games
        </>
      ),
      id: 'icon6',
    },
  ];
  return (
    <>
    <div className='slider-section'>
      <div className="wheel">
        <div className="wheel-card max-w-xl">
        {
          wheelCards.map(card => (
            <div className="grid space-y-9   justify-items-center text-center wheel-card-item border border-black" key={card.id}>
              {card.img }
              <h3>{card.title}</h3>
            </div>
          ))
        }
        </div>
      </div>
    </div>
    <div>
        
    </div>
    </>
  );
};

export default ServicesSection;
