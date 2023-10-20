// pages/index.tsx
import React from 'react';
import BlogCarousel from '../BlogCarousel/BlogCarousel';
import { blogCarouselData } from '../../../data';

export default function HomeSlider () {
  return (
    <section className="w-full">
      <BlogCarousel blogCarouselData={blogCarouselData} />
    </section>
  );
};
