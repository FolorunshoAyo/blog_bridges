import React from 'react'
import BlogCard from '../BlogCard/BlogCard'

type Props = {
    recentBlogs: Article[]
}

export default function RecentBlogs({ recentBlogs }: Props) {
  return (
    <section className='py-8 px-4 my-8 md:my-10'>
        <div className="container mx-auto">
            <h2 className='text-3xl font-bold mb-4'>Recent Articles</h2>
            <p className='text-sm text-gray-light'>Don't miss new trends</p>
            <div className='mt-11'>
                <div className="columns-1 md:columns-2">
                    {
                        recentBlogs.map((blog, index) => (
                            <BlogCard key={index} article={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}