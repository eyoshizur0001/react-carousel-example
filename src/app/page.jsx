"use client";

import { useState, useEffect } from 'react';

export default function Carousel() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const array = ['a', 'b', 'c', 'd', 'e'];

  // This is what you need to do for your event listener
  // you have the right idea for the event listener, but you need to
  // use the retrun value of useEffect to remove the event listener
  // and define the handleArrowKeys function inside the useEffect
  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveCardIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft') {
        setActiveCardIndex(prev => prev - 1);
      }
    }

    document.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, []);

  const handleLeftClick = () => {
    setActiveCardIndex(prev => prev - 1);
  }

  const handleRightClick = () => {
    setActiveCardIndex(prev => prev + 1);
  }

  return (
    <div className="flex">
      <button onClick={handleLeftClick}>Left</button>
      {
        array.map((item, index) => (
          <div key={item} className='px-4' style={{ display: activeCardIndex === index ? 'block' : 'none' }}>
            {item}
          </div>
        ))
      }
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}