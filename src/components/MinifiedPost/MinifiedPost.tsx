import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = MinifiedArticle;

export default function MinifiedPost({ authorImage, authorName, title, isLast }: Props) {
  return (
    <div className={`py-4 border-secondary ${isLast? "" : "border-b-2"}`}>
      <div className="flex items-center gap-4 font-work">
        <figure className="flex-none">
          <a href="/single-post">
            <Image src="/travel.jpg" alt="post-thumb" width={110} height={190} className="rounded-md" />
          </a>
        </figure>
        <div>
          <div className="flex items-center mb-2">
            <img
              src={authorImage}
              alt={authorName}
              className="w-8 h-8 rounded-full"
            />
            <p className="text-xs md:text-sm ml-2">
              {authorName}
            </p>
          </div>
          <Link href="/single-post" className="block hover:text-primary transition duration-500">
            <p className="text-xs md:text-sm font-bold text-ellipsis overflow-hidden">{title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
