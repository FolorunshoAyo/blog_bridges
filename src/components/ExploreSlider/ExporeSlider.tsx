"use client"
import React, { useState, useEffect } from 'react';
import ExploreSliderContent from '../ExploreSliderContent/ExploreSliderContent';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

type Props = {
    slides: BlogCarouselData[],
}

export default function ExporeSlider({ slides } : Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setPaused] = useState(false);

    const handleMouseEnter = () => {
      setPaused(true);
    };
  
    const handleMouseLeave = () => {
      setPaused(false);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }
      }, 5000);
  
      return () => clearInterval(interval);
    }, [isPaused]);
  
    return (
      <div className="relative w-full max-h-[450px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {slides.map((slide, index) => (
          <ExploreSliderContent key={index} slide={slide} isActive={index === activeIndex} />
        ))}
  
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 bg-white rounded-full cursor-pointer ${activeIndex === index ? 'bg-opacity-100' : 'bg-opacity-40'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
  
        <button
          onClick={() => setActiveIndex((activeIndex + slides.length - 1) % slides.length)}
          className="absolute z-30 top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full cursor-pointer opacity-50 hover:opacity-100"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
          className="absolute z-30 top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full cursor-pointer opacity-50 hover:opacity-100"
        >
          <FiArrowRight />
        </button>
      </div>
    );
}