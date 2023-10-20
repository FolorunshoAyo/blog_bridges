"use client"

// components/BlogCarousel.tsx
import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; 
import styles from './blogCarousel.module.css';
import './carousel.css';
import Link from "next/link";

type CarouselProps = {
    blogCarouselData: BlogCarouselData[]
}

export default function BlogCarousel({ blogCarouselData }: CarouselProps) {
  return (
    <Fade indicators={true}>
      {blogCarouselData.map((blogCarousel, index) => (
        <div key={index} style={{height: "500px" }} className={`${styles.slideContainer} md:container mt-6 mx-auto flex justify-center items-center`}>
          <div className={styles.sliderContent}>
            <div className="mb-5 flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xs md:text-md md:mr-4 font-bold mr-1 rounded-lg text-white font-semibold px-4 py-2 bg-secondary">{blogCarousel.category}</span>
                <span className="text-gray text-sm">5th september, 2023</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                  <img src={blogCarousel.image} alt="Author name" className="w-full h-full object-cover" />
                </div>
                <div className="ml-3">
                  <span className="text-sm text-gray font-semibold">Dev.Fo</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-4">{blogCarousel.title}</h2>
            <p className="text-sm md:text-md mb-6 text-gray">
              {blogCarousel.caption}
            </p>
            <Link href="#" className="bg-secondary text-white px-4 py-2 mt-4 rounded-lg">
              Read more
            </Link>
          </div>
          <div className={styles.sliderImageContainer}>
            <img
              src={blogCarousel.image}
              alt={`Slide ${index}`}
              className={`${styles.carouselImage} md:rounded-lg object-cover`}
            />
          </div>
        </div>
      ))}
    </Fade>
  );
}
