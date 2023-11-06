import React, { useState, useEffect } from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import { motion } from "framer-motion";
import { fetchForYouData } from "../../../util/mockData";

type Props = {
  blogs: Article[]
};

export default function FollowingBlogListings({ blogs }: Props) {
  const [data, setData] = useState<Article[]>(blogs);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch data function
  const fetchData = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetchForYouData();
      const newData: Article[] = response;

      setData((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
      setHasMore(newData.length > 0);
      setError(null); // Clear any previous errors
    } catch (error) {
      // Handle any errors
      setError(error as Error); // Handle and set the error state
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10, x: 0 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }}>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5">
          {data.map((blog, index) => (
            <BlogListItem key={index} blog={blog} />
          ))}
          {error && (
            <div className="error-message">
              Error: {error.message}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        {
          hasMore &&
            <button
            onClick={fetchData}
            className="p-4 border border-secondary rounded-lg text-gray uppercase text-sm hover:bg-secondary hover:text-white transition duration-300"
            >
               {isLoading ? 'Loading...' : 'View More Post'}
            </button>
        }
        
      </div>
    </motion.div>
  );
}
