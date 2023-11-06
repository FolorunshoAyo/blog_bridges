"use client"
import React, { useState, Suspense } from 'react'
import ForYouBlogListings from '../ForYouBlogListings/ForYouBlogListings';
import FollowingBlogListings from '../FollowingBlogListings/FollowingBlogListings';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


type Props = {
  forYouData: Article[],
  followingBlogData: Article[]
}

const BlogSkeleton = () => {
    return (
      <div className='flex gap-4'>
        <div className='w-2/4 bg-gray-light rounded-sm mr-2 animate-pulse'></div>
        <div className='h-full w-2/4'>
            <div className="w-[40px] h-[20px] bg-gray-light w-3/4 mb-2 rounded-md animate-pulse"></div>
            <div className="h-[80px] bg-gray-light w-3/4 mb-2 rounded-md animate-pulse"></div>
            <div className="h-[40px] bg-gray-light w-1/2 rounded-md animate-pulse"></div>
        </div>
      </div>
    );
  };


export default function BlogTabbedListings({ forYouData, followingBlogData }: Props) {
  const [activeTab, setActiveTab] = useState('forYou');
  const tabs = ['forYou', 'following'];

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`w-1/2 rounded-md px-4 py-2 mr-2 hover:bg-primary hover:text-white hover:bg-opacity-50 focus:outline-none ${
                activeTab === tab
                  ? 'bg-primary text-white hover:bg-opacity-100'
                  : ''
              } transition duration-300`}
            onClick={() => switchTab(tab)}
          >
            {tab === 'forYou' ? 'For You' : 'Following'}
          </button>
        ))}
      </div>
      <div>
        <ErrorBoundary>
        {activeTab === 'forYou' ? (
          <ForYouBlogListings blogs={forYouData} />
        ) : (
          <FollowingBlogListings blogs={followingBlogData} />
        )}
        </ErrorBoundary>
      </div>
    </div>
  );
}