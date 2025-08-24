import React from 'react';

export default function TagList({ tags }) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Tags:</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs cursor-pointer">{tag}</span>
        ))}
      </div>
    </div>
  );
}
