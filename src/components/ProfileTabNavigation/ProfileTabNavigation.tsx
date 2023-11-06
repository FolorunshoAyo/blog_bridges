// TabNavigation.tsx
import { useState } from 'react';
import PostList from './PostList';
import AboutUser from './AboutUser';

export default function ProfileTabNavigation() {
  const [activeTab, setActiveTab] = useState<string>('posts');

  return (
    <div>
      <div className="flex space-x-4">
        <button onClick={() => setActiveTab('posts')}>Posts</button>
        <button onClick={() => setActiveTab('about')}>About</button>
      </div>

      <div className="mt-4">
        {activeTab === 'posts' && <PostList />}
        {activeTab === 'about' && <AboutUser />}
      </div>
    </div>
  );
}