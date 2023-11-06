"use client"
import React, { useState } from 'react'
import BlogListItem from '../BlogListItem/BlogListItem'

type Props = {
    blogs: Article[]
}

export default function BlogListings({ blogs }: Props) {
  return (
    <div className='mt-8'>
        <div className="w-full">
            <div className="grid grid-cols-1 gap-5">
                {
                    blogs.map((blog, index) => (
                        <BlogListItem key={index} blog={blog}/>
                    ))
                }
            </div>
        </div>
        <div className="flex items-center justify-center mt-8">
            <a className="p-4 border border-secondary rounded-lg text-gray uppercase text-sm hover:bg-secondary hover:text-white transition duration-300" href="/blog">View More Post</a>
        </div>
    </div>
  )
}