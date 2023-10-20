// components/PopularCategories.tsx
import Link from 'next/link';
import React from 'react';

interface PopularCategoriesProps {
  categories: Category[];
}

export default function PopularCategories ({ categories } : PopularCategoriesProps) {
  return (
    <section className="bg-primary bg-opacity-30 py-16 px-4 my-14 md:my-15">
      <div className="container mx-auto">
        <div className='flex flex-col justify-start md:flex-row md:justify-between md:items-center mb-8'>
          <h2 className="text-3xl font-bold mb-4 text-white">Popular Categories</h2>
          <Link href="#" className='text-sm hover:underline hover:text-white transition duration-300'>See all topics</Link>
        </div>
        <div className="flex flex-wrap -mx-2">
          {categories.map((category, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <Link
                href={category.link}
                className="block relative rounded-lg overflow-hidden shadow-md group"
              >
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform transform scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-40 transition-opacity opacity-0 group-hover:opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  {category.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
