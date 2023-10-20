import Link from 'next/link';
import React from 'react'
import { FiHeart, FiMessageSquare, FiEye } from 'react-icons/fi';

type Props = {
    article: Article
}

export default function BlogCard({ article }: Props) {
  return (
    <Link href="#" className="block bg-white rounded-lg shadow-md w-full mb-4 group">
      <div className="relative">
        <img style={{height: "250px"}} src={article.coverImage} alt={article.title} className="w-full rounded-t-lg" />

        <span className="bg-primary text-white text-xs font-semibold px-2 py-1 absolute top-0 left-0 mt-2 ml-2 rounded-tr-lg">Tag</span>
      </div>

        <div className="p-4">
            <div className="mt-2">
                <p className="text-xs lg:text-sm text-gray-500">{article.date}</p>
            </div>
            <div className='mt-2'>
                <h2 className="md:text-sm text-xl font-semibold group-hover:text-primary transition-colors duration-500">{article.title}</h2>
                <p className="text-xs md:text-sm text-gray-600 mt-2">{article.caption}</p>
                <div className='flex flex-col justify-start items-start xl:flex-row xl:justify-between xl:items-center'>
                    <div className="flex items-center mt-4">
                        <img src={article.authorImage} alt={article.authorName} className="w-8 h-8 rounded-full" />
                        <p className="text-xs md:text-sm text-gray-700 ml-2">{article.authorName}</p>
                    </div>
                    <div className="flex items-center mt-4 xl:mt-2 text-xs xl:text-sm">
                        <div className="flex items-center text-gray mr-2 lg:mr-4">
                            <FiHeart className="w-4 h-4 mr-1" />
                            {article.likes} Likes
                        </div>
                        <div className="flex items-center text-gray mr-2 md:mr-4">
                            <FiMessageSquare className="w-4 h-4 mr-1" />
                            {article.comments} Comments
                        </div>
                        {/* <div className="flex items-center text-gray">
                            <FiEye className="w-4 h-4 mr-1" />
                            {article.views} Views
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      
    </Link>
  )
}