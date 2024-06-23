// app/blog/page.tsx
import React from 'react';
import BlogCard from './blogcard';
import Sidebar from '../sidebar';
import Header from '../header';
import Footer from '../footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      imageSrc: 'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/05/how-to-create-a-vision-board-that-manifests-2-1.webp?resize=300%2C300&ssl=1',
      title: 'How to Create a Vision Board: A Step-by-Step Guide',
      date: 'May 12, 2024',
      summary: 'Are you struggling to achieve your life goals? If so, a vision board might be what you need to get unstuck. Imagine having a daily reminder of what your dream...',
    },
    {
      imageSrc: 'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/benefits-of-slow-living-2.webp?resize=300%2C300&ssl=1',
      title: '12 Benefits of Slow Living for a Happier, Healthier Life',
      date: 'April 27, 2024',
      summary: 'Imagine a world where each tick of the clock gives you a moment to breathe, each day wraps around you like a warm blanket, and life moves at just the...',
    },
    {
        imageSrc: 'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/13-habits-to-improve-your-mood-1.webp?resize=300%2C300&ssl=1',
        title: '13 Habits to Improve your Mood',
        date: 'April 14, 2024',
        summary: 'Feeling like you’re stuck in a rut? You’re not alone. It’s very common for stress and monotony to take their toll. The good news is that simple activities can help...',
      },
      {
        imageSrc: 'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/10/signs-you-need-a-hard-reset-in-life-1.webp?resize=300%2C300&ssl=1',
        title: '13 Signs you Need a Hard Reset in Life',
        date: 'October 28, 2023',
        summary: 'A hard reset is a conscious decision to start afresh and redefine our lives. This process involves letting go of our old beliefs, behaviors, and relationships that no longer serve...',
      },
    // Add more blog posts here
  ];

  return (
    <main className="bg-white min-h-screen">
    <Header/>
    <div className="container mx-auto w-4/5 px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <p className="text-center text-[#333333] font-sans text-2xl font-normal tracking-[.15em] mb-5">
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
