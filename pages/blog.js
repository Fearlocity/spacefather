import React from 'react';
import BlogPost from '../components/BlogPost';
import MostRead from '../components/MostRead';
import TagList from '../components/TagList';
import posts from '../lib/posts'; // Example static data or fetch from CMS

export default function Blog() {
  // Example: get unique tags and most read posts
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  const mostRead = posts.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <TagList tags={tags} />
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <aside className="w-full md:w-1/3">
          <MostRead posts={mostRead} />
        </aside>
      </div>
    </div>
  );
}
