import LatestPosts from '@/components/LatestPosts/LatestPosts'
import PageDetails from '@/components/PageDetails/PageDetails'
import React from 'react'
import { allBlogCategories, blogCarouselData, minifiedPostData } from '../../../../data'
import BlogCategories from '@/components/BlogCategories/BlogCategories'
import ExporeSlider from '@/components/ExploreSlider/ExporeSlider'
import BlogTabbedListings from '@/components/BlogTabbedListings/BlogTabbedListings'
import { fetchFollowingData, fetchForYouData } from '../../../../util/mockData'
import { Metadata } from 'next'
 

type Props = {}

export const metadata: Metadata = {
  title: 'Tag (Travel) - BlogBridges: Where the world cross paths',
}


export default async function Tag({}: Props) {
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
        <PageDetails pageName='Tag' pageDescription='Everything about Tag in one place' />
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