// app/blog/page.tsx
import React from 'react';
import BlogCard from './blogcard';
import Sidebar from '../sidebar';
import Header from '../header';
import Footer from '../footer';
import { fetchBlogPosts } from '@/lib/contentful/fetchposts';

const BlogPage: React.FC = async () => {
  const blogPosts = await fetchBlogPosts();

  return (
    <main className="bg-white min-h-screen">
    <Header/>
    <div className="container mx-auto w-4/5 px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <p className="text-center text-[#333333] font-playfair text-3xl font-normal tracking-wide mb-5">
             Latest Posts about Personal Growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              date={post.date}
              summary={post.summary}
              slug={post.slug}
            />
          ))}
        </div>
        </div>
        {/* Sidebar */}
        <Sidebar/>
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default BlogPage;
