import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium font-sans text-[12px] tracking-[.15em] lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PRIVACY POLICY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <p className="text-center text-[#333333] font-sans text-base font-normal tracking-[.15em] my-5">WHAT IS GOOD HERE</p>
      <p className="text-center text-[#333333] font-sans text-base font-normal text-[40px] my-5">Browse the
        <span className=""> Categories</span>
      </p>
      <div className="container mx-auto px-4 py-8 w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md relative">
          <img
            src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/POST-Pinterest-Static-pins-template-2000-%C3%97-3000-px-2.png?w=1200&ssl=1"
            alt="Personal Growth"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
              personal growth
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md relative">
          <img
            src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/07/Styled-Stock-Society-Healthy-Habits-21-1-scaled.jpg?w=1200&ssl=1"
            alt="Personal Growth"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
              habits and routines
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
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
              productivity
            </h3>
          </div>
        </div>

      </div>
    </div>
    <p className="text-center text-[#333333] mt-28 font-sans text-base font-normal tracking-[.15em] mb-5">OR</p>
      <p className="text-center text-[#333333] font-sans text-base font-normal text-[40px] my-5">Grab a 
        <span className=""> Resource</span>
      </p>
      <div className="container mx-auto px-4 py-8 w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md relative">
          <img
            src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2024/06/Make-it-happen-promo-2-1.webp?fit=780%2C780&ssl=1"
            alt="Personal Growth"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-5 mb-[-20px] w-3/4 mx-auto">
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
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
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
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
            <h3 className="text-center text-lg font-medium text-gray-800 bg-blue-100 rounded-full py-2">
              grab your copy
            </h3>
          </div>
        </div>

      </div>
    </div>
    </main>
  );
}
