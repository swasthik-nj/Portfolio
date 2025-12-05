import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "/swanj.jpeg";

export default function Home() {
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
  
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const change = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <div className="w-full h-screen dark:bg-white bg-black/92 transition-colors duration-700">
      <div className="flex items-center gap-5 absolute top-4 right-5 sm:right-14 flex-col sm:flex-row">
        <button
          onClick={change}
          className="text-xl p-2 rounded-full cursor-pointer dark:text-black text-white dark:hover:bg-gray-200 hover:bg-gray-800 transition"
        >
          {darkMode ? (
            <span className="material-symbols-outlined">light_mode</span>
          ) : (
            <span className="material-symbols-outlined">dark_mode</span>
          )}
        </button>
        <Link
          to="/explore"
          className="hidden sm:flex w-48 text-center px-6 py-2.5 rounded-3xl border dark:bg-white dark:text-black bg-white text-black transition items-center justify-center gap-2"
        >
          More About
          <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
      </div>

      <div className="w-full max-w-[70rem] mx-auto min-h-screen justify-center items-center flex flex-col gap-6 sm:px-6 lg:px-8">
        <div className="items-center flex flex-col">
          <img
            src={profilePicture}
            alt="Swasthik NJ"
            srcSet=""
            className="main-head h-28 w-28 sm:h-30 sm:w-30 md:w-32 md:h-32 rounded-full object-cover "
          />
          <p className="sub-main-head text-[18px] sm:text-[20px] font-stretch-75% font-semibold pt-2 dark:text-black text-white">
            Hi I'm Swasthik N J
          </p>
        </div>
        <div className="flex items-center text-center px-4 sm:px-10 ">
          <p className="main-head text-3xl sm:text-4xl md:text-6xl/20 font-serif text-shadow-lg dark:text-black text-white">
            Learning to Build the Web, <br /> Full-Stack Developer in Progress.
          </p>
        </div>
        <div className="px-4 sm:px-10">
          <p className="sub-head text-[15px] sm:text-[17px] dark:text-gray-700 text-gray-400 text-center max-w-xl">
            Web Development Learner from India, passionate about building modern
            web experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/explore"
            className="sub-btn1 w-48 text-center px-6 py-2.5 rounded-3xl dark:bg-black dark:text-white bg-white text-black transition flex items-center justify-center gap-2"
          >
            More About
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link
            to="https://tinyurl.com/swasthiknj-resume"
            target="_blank"
            className="sub-btn2 w-48 text-center px-6 py-2.5 rounded-3xl border dark:text-black text-white dark:border-black border-white transition flex items-center justify-center gap-2"
          >
            Resume
            <span className="material-symbols-outlined">download</span>
          </Link>
        </div>
      </div>
    </div>
  );
}