import LatestPosts from '@/components/LatestPosts/LatestPosts'
import PageDetails from '@/components/PageDetails/PageDetails'
import React from 'react'
import { allBlogCategories, blogCarouselData, minifiedPostData } from '../../../data'
import BlogCategories from '@/components/BlogCategories/BlogCategories'
import ExporeSlider from '@/components/ExploreSlider/ExporeSlider'
import BlogTabbedListings from '@/components/BlogTabbedListings/BlogTabbedListings'
import { fetchFollowingData, fetchForYouData } from '../../../util/mockData'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Explore - BlogBridges: Where the world cross paths',
}

type Props = {}



export default async function Explore({}: Props) {
  // Initiate both requests in parallel
  const forYouData = fetchForYouData()
  const followingData = fetchFollowingData()
 
  // Wait for the promises to resolve
  const [forYouBlogs, followingBlogs] = await Promise.all([forYouData, followingData])

  if(!forYouBlogs.length || !followingBlogs.length){
    throw Error("Unable to fetch blog data");
  }

  return (
    <main>
        <PageDetails pageName='Explore' pageDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos molestiae recusandae sapiente expedita autem porro praesentium vel amet veritatis!' />
        {/* Blog content goes here*/}
        <section className='container mx-auto px-5 md:px-0 my-12'>
          <div className='flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start'>
              <div className='col-span-12 lg:col-span-8'>
                {/* Explore here */}
                <ExporeSlider slides={blogCarouselData}/>
                {/* Blog Listings here */}
                <BlogTabbedListings forYouData={forYouBlogs} followingBlogData={followingBlogs}/>
              </div>
              {/* Right Sidebar start*/}
              <div className='col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none'>
                  <LatestPosts latestPosts={minifiedPostData}/>
                  {/* Category here */}
                  <BlogCategories allCategories={allBlogCategories}/>
              </div>
              {/* Right sidebar end */}
          </div>
        </section>
    </main> 
  )
}