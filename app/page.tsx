'use client'
import BlogPost from "./blogpost";
import Footer from "./footer";
import Header from "./header";
import Carousel from "./carousel";
export default function Home() {
  const images = ['https://www.sundayrainday.com/wp-content/uploads/2024/05/how-to-create-a-vision-board-that-manifests-2-1.webp',
    'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/benefits-of-slow-living-2.webp?resize=665%2C750&ssl=1',
    'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/13-habits-to-improve-your-mood-1.webp?resize=665%2C750&ssl=1'
  ]
  return (
    <main className="bg-white min-h-screen">
      <Header/>
      <h1 className="text-[100px] font-alex font-normal text-center text-[#444444] italic mt-20 mb-10">SundayRainday</h1>
      {/* <div className="bg-rose-200 flex justify-center items-center h-full w-full">
        <img src="/beauty-lifestyle.jpg" className="w-1/3 h-3/4 my-10" />
      </div> */}
       <Carousel images={images} />
      <p className="text-center text-[#333333] font-jost text-sm font-normal tracking-[.15em] my-5">
        WHAT IS GOOD HERE
      </p>
      <p className="text-center text-[#333333] font-playfair font-normal text-[40px] my-5">
        Browse the
        <span className=""> Categories</span>
      </p>
      <div className="container mx-auto px-4 py-8 w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                health and fitness
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                beauty and skin care
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                fashion and grooming
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                parenting
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                travel
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Matcha-Meditation-3-2-scaled.webp?fit=700%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                productivity
              </h3>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#333333] mt-28 font-jost text-sm font-normal tracking-[.15em] mb-5">
        OR
      </p>
      <p className="text-center text-[#333333] font-playfair font-normal text-[40px] my-5">
        Grab a<span className=""> Resource</span>
      </p>
      <div className="container mx-auto px-4 py-8 w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/06/Make-it-happen-promo-2-1.webp?fit=780%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                grab your copy
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/06/Free-resource-library.webp?fit=780%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                get free access
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md relative">
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/06/Vision-board-template-promo.webp?fit=780%2C780&ssl=1"
              alt="Personal Growth"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
              <h3 className="text-center text-sm font-semibold font-montserrat text-gray-800 bg-blue-100 rounded-full py-2">
                grab your copy
              </h3>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#333333] mt-28 font-jost text-sm font-normal tracking-[.15em] mb-5">
        LATEST POST
      </p>
      <p className="text-center text-[#333333] font-playfair font-normal text-[40px] my-5">
        From
        <span className=""> the Blog</span>
      </p>
      <BlogPost imageUrl={'https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/05/how-to-create-a-vision-board-that-manifests-2-1.webp?resize=825%2C930&ssl=1'}/>
      <BlogPost imageUrl="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/benefits-of-slow-living-2.webp?resize=665%2C750&ssl=1" />
      <BlogPost imageUrl="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/13-habits-to-improve-your-mood-1.webp?resize=665%2C750&ssl=1" />
      <BlogPost imageUrl="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/04/five-minute-habits-to-improve-your-health.webp?resize=665%2C750&ssl=1" />
    <Footer/>
    </main>
  );
}
