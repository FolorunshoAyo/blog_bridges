// pages/index.tsx
import React from 'react';
import EditorsPickSlider from '../EditorsPickSlider/EditorsPickSlider';
import { blogCarouselData } from '../../../data';

export default function EditorsPick () {
  return (
    <section className='bg-primary bg-opacity-80 py-8 px-4 my-8 md:my-10'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4 text-white'>Editor's Picked</h2>
        <EditorsPickSlider editorsPickCarouselData={blogCarouselData} />
    </section>
  );
};
