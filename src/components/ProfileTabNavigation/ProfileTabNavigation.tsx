// TabNavigation.tsx
"use client"
import { useState } from 'react';
import PostList from './PostList';
import AboutUser from './AboutUser';

export default function ProfileTabNavigation() {
  const [activeTab, setActiveTab] = useState<string>('posts');

  return (
    <div className='px-2'>
      <div className="flex space-x-4 border-b border-primary">
        <button onClick={() => setActiveTab('posts')} className={`relative group bg-transparent hover:bg-transparent text-sm py-2 px-4`}>
          Posts
          <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100 ${activeTab === "posts" ? 'scale-x-100' : ''}`}></div>
        </button>
        <button onClick={() => setActiveTab('about')} className={`relative group bg-transparent hover:bg-transparent text-sm py-2 px-4`}>
          About
          <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100 ${activeTab === "about" ? 'scale-x-100' : ''}`}></div>
        </button>
      </div>

      <div className="mt-6">
        <div className={`${activeTab === "posts"? "opacity-100 block" : "opacity-0 hidden"}`}>
          <PostList />
        </div>
        <div className={`${activeTab === "about"? "opacity-100 block" : "opacity-0 hidden"}`}>
          <AboutUser />
        </div>
      </div>
    </div>
  );
}