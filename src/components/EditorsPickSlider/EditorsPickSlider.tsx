"use client";

import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import "./editorsPickSlider.css";
import Link from "next/link";

type Props = {
  editorsPickCarouselData: BlogCarouselData[];
};

export default function EditorsPickSlider({ editorsPickCarouselData }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % editorsPickCarouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + editorsPickCarouselData.length) %
        editorsPickCarouselData.length
    );
  };

  return (
    <div className="relative">
      <div className="slider">
        {editorsPickCarouselData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "reveal" : ""}`}
          >
            <div className="text-section bg-white rounded-lg p-4">
              <div className="mb-5 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <span className="text-xs md:text-md md:mr-4 font-bold mr-1 rounded-lg text-white font-semibold px-4 py-2 bg-secondary">
                    {slide.category}
                  </span>
                  <span className="text-gray text-sm">5th september, 2023</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={slide.image}
                      alt="Author name"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm text-gray font-semibold">
                      Dev.Fo
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-sm md:text-md mb-6 text-gray">{slide.caption}</p>
              <Link
                href="#"
                className="bg-secondary text-white px-4 py-2 mt-4 rounded-lg"
              >
                Read more
              </Link>
            </div>
            <div className="image-section">
              <img src={slide.image} alt={slide.title} className="rounded-lg object-cover"/>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button
          onClick={prevSlide}
          className="prev-button text-white bg-primary hover:shadow-sm hover:bg-white hover:text-primary transition duration-300"
        >
          <FiArrowUp />
        </button>
        <button
          onClick={nextSlide}
          className="prev-button text-white bg-primary hover:shadow-sm hover:bg-white hover:text-primary transition duration-300"
        >
          <FiArrowDown />
        </button>
      </div>
    </div>
  );
}
