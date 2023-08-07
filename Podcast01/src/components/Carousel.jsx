import React, { useState } from 'react';
import '../index.css';

const Carousel = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const slideRight = () => {
    setSlideIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  if (items.length === 0) {
    return null; // Don't render anything if there are no items
  }

  return (
    <div className="slide-show-container">
      <ul className="slide-show-list" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {items.map((item) => (
          <li key={item.id} className="slide">
            <div>{item.title}</div>
          </li>
        ))}
      </ul>

      <div className="slide-buttons">
        <div className="slide-button" onClick={slideLeft}>
          &lt; Slide Left
        </div>
        <div className="slide-button" onClick={slideRight}>
          Slide Right &gt;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
