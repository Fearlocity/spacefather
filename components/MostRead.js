import React from 'react';

export default function MostRead({ posts }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold mb-4">Most Read</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <a href={post.url} className="text-blue-600 hover:underline">{post.title}</a>
            <span className="ml-2 text-xs text-gray-500">{post.views} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
