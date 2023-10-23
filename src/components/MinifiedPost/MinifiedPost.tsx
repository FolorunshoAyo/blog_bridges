import React from "react";

type Props = MinifiedArticle;

export default function MinifiedPost({ authorImage, authorName, title }: Props) {
  return (
    <div className="mb-4">
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
      <p className="text-xs md:text-sm font-bold text-ellipsis overflow-hidden">{title}</p>
    </div>
  );
}
