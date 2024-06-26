import Header from "../header";
import Footer from "../footer";
export default function Contact() {
  return (
    <main className="bg-white min-h-screen">
      <Header/>
      <div className="bg-rose-200 flex justify-center items-center h-full w-full">
        <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 py-10">
          <div>
            <img
              src="https://i0.wp.com/www.sundayrainday.com/wp-content/uploads/2023/06/productive-ways-to-make-your-life-easier.webp?w=750&ssl=1"
              alt="Personal Growth"
              className="w-4/5 mr-0 object-cover mt-20 border-white border-8"
            />
          </div>
          <div className="w-4/5 ml-0">
            <p className="text-center text-[#333333] font-jost text-sm font-normal tracking-[.15em] mb-2">
              GET IN TOUCH
            </p>
            <p className="text-center text-[#333333] font-jost font-normal text-4xl mb-2">
              Say
              <span className=""> Hello!</span>
            </p>
            <p className="text-center text-[#444444] font-normal font-montserrat text-lg">
              Whether you are a reader or a company interested in working with
              SundayRainday, free to contact us using the form below.
            </p>
            <p className="text-center text-[#444444] font-normal font-montserrat text-lg mt-5">
              You can also send an e-mail to contact@SundayRainday.com. All
              e-mails are answered within 48 hours.
            </p>
            <form className="max-w-sm mx-auto">
              <input
                type="name"
                id="name"
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name*"
              />
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email*"
              />
              <input
                type="subject"
                id="subject"
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="subject*"
              />
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="message*"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-20"></div>
      <Footer/>
    </main>
  );
}
