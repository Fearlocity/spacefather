import React from 'react';
import ReactPlayer from 'react-player';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

export default function BlogPost({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
        ))}
      </div>
      <p className="mb-4">{post.excerpt}</p>
      {post.mediaUrl && (
        <div className="mb-4">
          <ReactPlayer url={post.mediaUrl} controls width="100%" />
        </div>
      )}
      <div className="flex gap-2 mt-2">
        <FacebookShareButton url={post.url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={post.url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={post.url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </article>
  );
}
