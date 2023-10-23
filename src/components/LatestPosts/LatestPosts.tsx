import React from 'react'
import MinifiedPost from '../MinifiedPost/MinifiedPost'

type Props = {
    latestPosts: MinifiedArticle[]
}

export default function LatestPosts({ latestPosts }: Props) {
  return (
    <div className='p-8 border border-gray-content/10 rounded-xl w-full'>
        <h2 className='text-base-content font-bold text-2xl'>
            Latest Posts
        </h2>
        <div className='grid grid-cols-1 gap-6 mt-8'>
            {latestPosts.map((post, index) => (
                <MinifiedPost 
                    key={index}
                    authorImage={post.authorImage}
                    authorName={post.authorName}
                    title={post.title}
                />
            ))}
        </div>
    </div>
  )
}