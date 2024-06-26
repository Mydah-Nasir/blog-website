import React from "react";
const Sidebar: React.FC = () =>{
    return(
        <div>
        <div className="flex flex-col items-center">
          <img src="https://www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Summer-Weekend-23-scaled.jpg" alt="Author" className="w-full h-auto mb-4" />
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2 font-jost text-[#444444]">Hi, I am Sofia</h2>
            <p className='font-montserrat text-[#444444] text-sm'>I am a 30-year-old obsessed with Productivity and Personal Growth. I help young, ambitious women increase their productivity and design a life they love.</p>
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
    <h2 className="text-2xl font-bold mb-4 font-playfair">Subscribe</h2>
    <p className="mb-4 font-montserrat">Join +5,000 weekly readers and unlock the Free Library</p>
    <button className="font-montserrat bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">Yes, Please!</button>
  </div>
  <div className="relative mb-8">
    <img src="/lifestyle-blog.jpg" alt="alt" className="w-full h-auto rounded-lg" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
      <span className="text-gray-700 font-semibold font-montserrat">Personal Growth</span>
    </div>
  </div>
  <div className="relative mb-8">
    <img src="/beauty-lifestyle.jpg" alt="alt" className="w-full h-auto rounded-lg" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
      <span className="text-gray-700 font-semibold font-montserrat">Life Style</span>
    </div>
  </div>
  <div className="relative mb-8">
    <img src="/skin-care.jpg" alt="alt" className="w-full h-auto rounded-lg" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
      <span className="text-gray-700 font-semibold font-montserrat">Skin Care</span>
    </div>
  </div>
      </div>

    );
};

export default Sidebar;