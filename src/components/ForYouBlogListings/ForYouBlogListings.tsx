import React from "react";
import BlogListItem from "../BlogListItem.tsx/BlogListItem";
import { motion } from "framer-motion";

type Props = {
  blogs: Article[]
};

export default function ForYouBlogListings({ blogs }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 10, x: 0 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.5 }}>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5">
          {blogs.map((blog, index) => (
            <BlogListItem key={index} blog={blog} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <a
          className="p-4 border border-secondary rounded-lg text-gray uppercase text-sm hover:bg-secondary hover:text-white transition duration-300"
          href="/blog"
        >
          View More Post
        </a>
      </div>
    </motion.div>
  );
}
