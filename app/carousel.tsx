import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  interval?: number; // Add optional interval prop for auto-slide duration
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[32rem] py-20 overflow-hidden" style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="w-1/4 mx-auto bg-white h-full p-5">
        <p className="text-xs text-[#1A61A2] font-jost uppercase tracking-[.15em] font-medium">
          Habits & Routines
        </p>
        <h2 className="mt-2 text-3xl font-medium font-playfair text-[#333333]">
          15 Essential Five-Minute Habits To Improve Your Health
        </h2>
        <p className="mt-2 text-xs text-[#1A61A2] font-jost uppercase tracking-[.15em] font-medium">April 13, 2024</p>
        <p className="mt-4 text-[#444444] font-montserrat text-lg">
          The good news is that many small habits
          that are super easy to integrate into[...]
        </p>
        <a
          href="/blog"
          className="mt-4 inline-block text-blue-600 hover:underline font-montserrat text-sm"
        >
          Read more...
        </a>
      </div>

      {/* Circles */}
      <div className="absolute bottom-0 w-full flex justify-center pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
