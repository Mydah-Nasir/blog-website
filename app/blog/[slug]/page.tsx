// components/BlogDetails.tsx
import React from 'react';
import Header from '@/app/header';
import Footer from '@/app/footer';
const BlogDetails: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
    <Header/>
    <div className="container mx-auto w-4/5 px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <p>This post may contain affiliate links. This means that if you click a link and purchase a product or service we recommend, we will receive a small commission at no extra cost to you.</p>
          </div>
          <img src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/05/how-to-create-a-vision-board-that-manifests-2-1.webp?w=1500&ssl=1" alt="Blog Image" className="w-full h-auto mb-8" />
          <div>
            <h3 className="text-xl text-rose-400 mb-4 text-center">Personal Growth</h3>
            <h1 className="text-4xl mb-4 text-center">How to Create a Vision Board: A Step-by-Step Guide</h1>
            <h3 className="text-base text-rose-400 mb-4 text-center">May, 22, 2024</h3>
            <h3 className="text-base font-bold text-center">Sharing is caring!</h3>
            <div className="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
            <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
                <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
                </svg>
            </button>
            <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                    <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="url(#paint0_linear_7092_54439)"/>
                        <path d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_7092_54439" x1="90.9407" y1="91.5618" x2="-0.621143" y2="-2.46459e-06" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FBE18A"/>
                                <stop offset="0.21" stopColor="#FCBB45"/>
                                <stop offset="0.38" stopColor="#F75274"/>
                                <stop offset="0.52" stopColor="#D53692"/>
                                <stop offset="0.74" stopColor="#8F39CE"/>
                                <stop offset="1" stopColor="#5B4FE9"/>
                            </linearGradient>
                        </defs>
                </svg>
            </button>
            <button className="group transition-all duration-500 hover:-translate-y-2">       
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                    <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#FF0000"/>
                    <path d="M44.2808 23.0437C36.8492 23.893 29.4439 30.0479 29.1382 38.84C28.9461 44.2083 30.435 48.2356 35.4258 49.3664C37.5915 45.4553 34.7272 44.5927 34.2818 41.7633C32.4523 30.1686 47.346 22.2615 55.14 30.3563C60.5324 35.9615 56.9826 53.206 48.2848 51.4136C39.9537 49.7017 52.3629 35.9749 45.713 33.2796C40.3074 31.0894 37.4343 39.9798 39.9974 44.396C38.4953 51.9902 35.2599 59.1464 36.5698 68.6715C40.8183 65.5158 42.2504 59.4727 43.425 53.1702C45.5601 54.4978 46.6998 55.8789 49.4244 56.0935C59.4714 56.8891 65.0822 45.8263 63.7112 35.6218C62.4929 26.5749 53.6729 21.971 44.2808 23.0437Z" fill="white"/>
                </svg>
            </button>
        </div>
            <p className='mb-3'>Are you struggling to achieve your life goals?</p>
            <p className='mb-3'>If so, a vision board might be what you need to get unstuck.</p>
            <p className='mb-3'>Imagine having a daily reminder of what your dream life looks like, vividly depicted right before your eyes.</p>
            <p className='mb-3'>And being able to take a quick look at it every time you feel like giving up.</p>
            <p className='mb-3'>Ready to bring your aspirations to life?</p>
            <p className='mb-3'>If so, let’s get started!</p>
            <h1 className="text-3xl my-8">What is a vision broad?</h1>
            <p className='mb-3'>You can think of a vision board as your personal gallery of aspirations.</p>
            <p className='mb-3'>A vision board is a collection of images and quotes that represent your life goals.</p>
            <p className='mb-3'>When you think about it, a vision board is really an inspiration board you rely on to remind you of your goals and why you need to keep going.</p>
            <p className='mb-3'>A vision board helps keep goals in mind to stay consistent even when life gets in the way.</p>
            <p className='mb-3'>Something as trivial as a vision board can help you stay focused on your life goals and keep going when you feel like giving up.
</p>
            <p className='mb-3'>Because transforming your life and achieving life goals is a challenging process.</p>
            <p className='mb-3'>And to be successful, you need to find creative ways to stay committed to your goals and keep working on them day after day.</p>
            <p className='mb-3'>A vision board is the perfect tool to achieve this.</p>
            <h1 className="text-3xl my-8">How do vision broads work and why are they so effective?</h1>
            <p className='mb-3'>The magic of a vision board lies in its ability to engage your senses, keeping your dreams clear and tangible, laid out in a format that you can see, touch, and even interact with daily.</p>
            <p className='mb-3'>As you consistently visualize your success, your mind becomes increasingly adept at recognizing the opportunities and resources that can make your goals a reality.</p>
          </div>
          <div className="flex flex-wrap -m-1">
          <span className="m-1 bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded">
            Personal Growth
          </span>
          <span className="m-1 bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded">
            Skin Care
          </span>
          <span className="m-1 bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded">
            Life Style
          </span>
          </div>
        </div>
        {/* Sidebar */}
        <div>
          <div className="flex flex-col items-center">
            <img src="https://www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Summer-Weekend-23-scaled.jpg" alt="Author" className="w-full h-auto mb-4" />
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Hi, I am Sofia</h2>
              <p>I am a 30-year-old obsessed with Productivity and Personal Growth. I help young, ambitious women increase their productivity and design a life they love.</p>
            </div>
          </div>
          <div className="bg-rose-100 p-6 text-center my-4 mb-8">
          <div className="mb-4 mx-auto justify-center">
          <a href="#"
      className="p-2 rounded-lg flex items-center justify-center">   
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
      fill="none">
      <path
        d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
        fill="#111827" />
      <path
        d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
        fill="#111827" />
      <path
        d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
        fill="#111827" />
      <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
        fill="#111827" />
      <path
        d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
        fill="#111827" />
      </svg></a>
         </div>
      <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
      <p className="mb-4">Join +5,000 weekly readers and unlock the Free Library</p>
      <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">Yes, Please!</button>
    </div>
    <div className="relative mb-8">
      <img src="/lifestyle-blog.jpg" alt="alt" className="w-full h-auto rounded-lg" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
        <span className="text-gray-700 font-semibold">Personal Growth</span>
      </div>
    </div>
    <div className="relative mb-8">
      <img src="/beauty-lifestyle.jpg" alt="alt" className="w-full h-auto rounded-lg" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
        <span className="text-gray-700 font-semibold">Life Style</span>
      </div>
    </div>
    <div className="relative mb-8">
      <img src="/skin-care.jpg" alt="alt" className="w-full h-auto rounded-lg" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
        <span className="text-gray-700 font-semibold">Skin Care</span>
      </div>
    </div>
        </div>
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default BlogDetails;
