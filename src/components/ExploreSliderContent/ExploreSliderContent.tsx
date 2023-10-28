import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    slide: BlogCarouselData,
    isActive: boolean
}

export default function ExploreSliderContent({ slide, isActive }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 10, x: 0 }} animate={isActive ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.5 }}>
        <div className={`card relative overflow-y-hidden max-h-[450px] transition-opacity duration-500 ${isActive ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <figure style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Image src={`${slide.image}`} alt="post-thumb" width={1216} height={450} className="rounded-xl w-full object-cover" />
            </figure>
            <div className="flex flex-col gap-2 flex-auto p-2 md:p-10 absolute bottom-0 w-full z-20">
                <a href="/category/travel">
                    <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">{slide.category}</div>
                </a>
                <motion.h3 initial={{ y: 20, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.5 }} className='mb-2'>
                    <a href="/single-post" className="text-white font-semibold text-xl line-clam-3 md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500">{slide.title}</a>
                </motion.h3>
                <motion.p initial={{ y: 20, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.7 }} className="text-sm md:text-lg text-white mb-2">
                    {slide.caption}
                </motion.p>
                <div className="mt-3 md:mt-6 flex items-center gap-5 text-white">
                    <div className=" flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-9 rounded-full">
                                <img alt="author" width="100" height="100" src="/user-avatar.png" />
                            </div>
                        </div>
                        <h5>
                            <a href="/author" className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300">Author 1</a>
                        </h5>
                    </div>
                    <p className=" text-xs md:text-base">Dec 27, 2022</p>
                </div>
            </div>
            <div className="absolute max-h-[450px] inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
        </div>
    </motion.div>
  )
}