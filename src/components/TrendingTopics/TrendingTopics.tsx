import React from 'react'
import BlogCard from '../BlogCard/BlogCard'

type Props = {
    trendingBlogs: Article[]
}

export default function TrendingTopics({ trendingBlogs }: Props) {
  return (
    <section className='py-8 px-4 my-8 md:my-10'>
        <div className="container mx-auto">
            <h2 className='text-2xl md:text-3xl font-bold mb-2'>Trending Topics</h2>
            <div className='mt-8'>
                <div className="columns-1 md:columns-2 lg:columns-3">
                    {
                        trendingBlogs.map((blog, index) => (
                            <BlogCard key={index} article={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}