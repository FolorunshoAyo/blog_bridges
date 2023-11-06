// PostList.tsx
import { useState, useEffect } from 'react';
import { fetchForYouData } from '../../../util/mockData';
import InfiniteScroll from 'react-infinite-scroll-component';
import BlogListItem from '../BlogListItem/BlogListItem';

export default function PostList() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<Error | null>(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const loadMorePosts = async () => {
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
    }
  };

  const fetchData = async () => {
    if (!loading) return;

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
    if(!isDataFetched){
      fetchData();
    }
  }, [isDataFetched]);

  return (
    <div>
      <h2 className="xs:text-sm sm:text-lg text-xl font-semibold mb-4">All Writer Posts</h2>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<p className='mt-4'>Loading posts...</p>}
      >
        {posts.map((post: Article, index:number) => (
          <BlogListItem key={index} blog={post} />
        ))}
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

