// app/components/BlogCard.tsx
import React from 'react';

interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, date, summary }) => {
  return (
    <div className="max-w-sm mx-auto px-4 mb-8 text-center">
      <img src={imageSrc} alt={title} className="w-full h-auto" />
      <h2 className="mt-4 text-xl font-sans">{title}</h2>
      <p className="text-gray-500 mt-2 font-sans">{date}</p>
      <p className="mt-2 text-gray-700 font-sans">{summary}</p>
      <a href="#" className="mt-4 inline-block text-gray-600 font-sans mx-auto">Read more...</a>
    </div>
  );
};

export default BlogCard;
