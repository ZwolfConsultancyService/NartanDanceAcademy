import React, { useEffect, useState } from 'react';
import '../pageCss/HeroSec.css';

const HeroSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const crousalsImages = [
    "/images/herodance6.jpg",
    "/images/herodance5.jpg",
    "/images/herodance4.jpg",
    "/images/dancehero.jpg",
    "/images/herodance7.jpg",
    "/images/herodance8.jpg"

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % crousalsImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [crousalsImages.length]);

  return (
    <main className="new-sec bg-dark">
      <ul className="slide">
        {crousalsImages.map((imageItem, index) => (
          <li key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={imageItem} alt={`crousalsImages ${index + 1}`} className="img-fluid" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HeroSec;
