import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    blog: Article
}

export default function BlogListItem({ blog : { coverImage, tag, date, title, caption, authorImage, authorName } }: Props) {
  return (
    <div className='pb-5 border-b border-secondary/10'>
        <div className="p-0 rounded-xl w-fit">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <figure className="flex-none !block w-full md:w-fit">
                    <a href="/single-post">
                        <Image src={`/${coverImage}`} alt="post-thumb" width={320} height={240} className="rounded-md w-full md:w-fit" />
                    </a>
                </figure>
                <div>
                    <Link className='mb-3 block' href="/category/right-sidebar">
                        <span className="btn no-animation bg-primary border-0 text-white text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize">{tag}</span>
                    </Link>
                    <h3>
                        <a className="line-clam-2 font-semibold text-xl md:text-2xl leading-7 hover:text-primary transition hover:duration-300" href="/single-post">{title}</a>
                    </h3>
                    <p className="mt-4">{caption}...</p>
                    <div className="mt-6 flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-7 h-7 rounded-full overflow-hidden">
                                    <Image style={{height: "100%", width: "100%"}} src={`/${authorImage}`} width={100} height={100} alt="Blog Image" />
                                </div>
                            </div>
                            <h5>
                                <a className="text-sm hover:text-primary transition hover:duration-300 whitespace-nowrap" href="/author">{authorName}</a>
                            </h5>
                        </div>
                        <p className="text-sm whitespace-nowrap">Dec 27, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}