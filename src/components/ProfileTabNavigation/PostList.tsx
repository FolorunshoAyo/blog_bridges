// PostList.tsx
import { useState, useEffect } from 'react';
import { fetchForYouData } from '../../../util/mockData';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function PostList() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<Error | null>(null);

  const loadMorePosts = () => {
    // Fetch more posts as the user scrolls
    // fetch(`/api/posts?page=${page}`) // Replace with your API endpoint and pagination logic
    //   .then((response) => response.json())
    //   .then((data: Article[]) => {
    //     if (data.length === 0) {
    //       setHasMore(false);
    //     } else {
    //       setPosts([...posts, ...data]);
    //       setPage(page + 1);
    //     }
    //   });
    fetchData();
  };

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetchForYouData();
      const newData: Article[] = response;

      setPosts((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
      setHasMore(newData.length > 0);
      setError(null); // Clear any previous errors
    } catch (error) {
      // Handle any errors
      setError(error as Error); // Handle and set the error state
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch('/api/posts') // Initial load, replace with your API endpoint
    //   .then((response) => response.json())
    //   .then((data: Article[]) => {
    //     setPosts(data);
    //     setLoading(false);
    //   });
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">All Writer Posts</h2>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<p>Loading more posts...</p>}
      >
        <ul>
          {posts.map((post: Article, index:number) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

