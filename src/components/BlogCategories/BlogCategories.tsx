"use client"
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

type Props = {
    allCategories: BlogCategory[]
}

export default function BlogCategories({ allCategories }: Props) {
    const [viewMore, setViewMore] = useState(false);

    const toggleViewMore = function (){
        setViewMore(!viewMore);
    };

  return (
    <div className={`relative rounded-xl border border-base-content border-opacity-10 p-8 transition-all duration-500 ${viewMore? "" : "max-h-[600px] overflow-y-hidden"}`}>
        <h4 className="text-xl font-semibold leading-6 text-base-content">Category</h4>
        <div className="pt-6">
            {
                allCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between last:border-none border-b border-base-content border-opacity-10 py-3.5">
                        <a className="text-base font-medium text-base-content text-opacity-70 capitalize hover:text-primary transition ease-in-out duration-300" href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}>{category.name}</a>
                        <span className="px-2 py-1 rounded-md bg-primary bg-opacity-5 text-primary text-xs font-medium">{category.posts}</span>
                    </div>
                ))
            }
        </div>
        <div className={`w-full flex justify-center items-center p-4 text-primary bg-gradient-to-t from-white/80 to-transparent ${viewMore? "" : "h-[50px] absolute bottom-0 left-0 right-0"}`}>
            <button onClick={toggleViewMore} style={{width: "50%"}} className='flex items-center justify-center'>
                {
                    viewMore?
                    <>
                        <FiMinus className='h-4 w-4 mr-2'/> view less
                    </>
                    :
                    <>
                        <FiPlus className='h-4 w-4 mr-2'/> view more
                    </>
                }
            </button>
        </div>
    </div>
    )
}