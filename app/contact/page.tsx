"use client";
import Header from "../header";
import Footer from "../footer";
import React, { useState } from 'react';
  
const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  function validateFullname(fullname: string) {
    if (/^[A-Za-z\s]+$/.test(fullname)) {
      return true;
    }
    return false;
  }
  function validateEmail(email: string) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return true;
    }

    return false;
  }
  interface Errors {
    fullname?: string;
    email?: string;
    message?: string;
    // Add more error fields as needed
  }
  function checkMinLength(str: string, min_len: number) {
    if (str.length < min_len) {
      return false;
    }

    return true;
  }
  function checkMaxLength(str: string, max_len: number) {
    if (str.length > max_len) {
      return false;
    }

    return true;
  }
  function validateForm(
    fullname: string,
    email: string,
    message: string
  ): Errors {
    const errors: Errors = {};

    if (!fullname) {
      errors.fullname = "Fullname is required.";
    } else if (!validateFullname(fullname)) {
      errors.fullname = "Only alphabetic characters are allowed.";
    } else if (!checkMinLength(fullname, 2)) {
      errors.fullname = "Name must be at least 2 characters long.";
    } else if (!checkMaxLength(fullname, 50)) {
      errors.fullname = "Name should not exceed 50 characters.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid format for email address.";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    return errors;
  }
  const collectData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Validate the form input
    event.preventDefault();
    const errors = validateForm(name, email, message);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch("/api/contact", {
          body: JSON.stringify({
            send_to: email,
            name: name,
            subject: subject, // Make sure 'subject' is defined somewhere
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const result = await res.json();
        // console.log(result);
        if (result.status) {
          window.alert("Message sent sucessfully");
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        }
        // Handle the response as needed
      } catch (error) {
        // Handle fetch error
        console.error("Error sending data:", error);
      }
    }
  };

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
            <p className="text-center text-[#333333] font-sans text-base font-normal tracking-[.15em] mb-2">
              GET IN TOUCH
            </p>
            <p className="text-center text-[#333333] font-sans text-base font-normal text-4xl mb-2">
              Say
              <span className=""> Hello</span>
            </p>
            <p className="text-center text-[#444444] font-normal text-lg">
              Whether you are a reader or a company interested in working with
              SundayRainday, free to contact us using the form below.
            </p>
            <p className="text-center text-[#444444] font-normal text-lg mt-5">
              You can also send an e-mail to contact@SundayRainday.com. All
              e-mails are answered within 48 hours.
            </p>
            <form className="max-w-sm mx-auto">
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name*"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email*"
              />
              <input
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                aria-describedby="helper-text-explanation"
                className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="subject*"
              />
              <textarea
                id="message"
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="message*"
              />
              <button
                      id="first-button"
                      type="submit"
                      onClick={collectData}
                      className="rounded-md mt-5 bg-rose-400 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit
                </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-20"></div>
      <Footer/>
    </main>
  );
}
export default Contact;
