import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "/_DSC0069.jpg";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const change = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);
  
  return (
    <div className="w-full h-screen bg-white dark:bg-black transition-colors duration-700">
      <div className=" flex items-center gap-5 absolute top-4 right-5 sm:right-14 flex-col sm:flex-row">
        <button
          onClick={change}
          className=" text-xl p-2 rounded-full cursor-pointer text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? (
            <span class="material-symbols-outlined">light_mode</span>
          ) : (
            <span class="material-symbols-outlined">dark_mode</span>
          )}
        </button>
        <Link
          to="/explore"
          className="hidden sm:flex w-48 text-center px-6 py-2.5 rounded-3xl border bg-white text-black dark:bg-white dark:text-black transition items-center justify-center gap-2"
        >
          More About
          <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
      </div>

      <div className="w-full max-w-[70rem] mx-auto  min-h-screen justify-center items-center flex flex-col gap-6 sm:px-6 lg:px-8">
        <div className="items-center flex flex-col">
          <img
            src={profilePicture}
            alt="Swasthik NJ"
            srcset=""
            className="h-28 w-28 sm:h-30 sm:w-30 md:w-32 md:h-32 rounded-full object-cover"
          />
          <p className="text-[18px] sm:text-[20px] font-stretch-75% font-semibold pt-2 text-black dark:text-white">
            Hi I'm Swasthik N J
          </p>
        </div>
        <div className="flex items-center text-center px-4 sm:px-10 ">
          <p className="text-3xl sm:text-4xl md:text-6xl/20 font-serif text-shadow-lg text-black dark:text-white">
            Learning to Build the Web <br /> Full-Stack Developer in Progress.
          </p>
        </div>
        <div className="px-4 sm:px-10">
          <p className="text-[15px] sm:text-[17px]  text-gray-700 dark:text-gray-400 text-center max-w-xl">
            Web Development Learner from India, passionate about building modern
            web experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/explore"
            className="w-48 text-center px-6 py-2.5 rounded-3xl bg-black text-white dark:bg-white dark:text-black transition flex items-center justify-center gap-2"
          >
            More About
            <span class="material-symbols-outlined">
arrow_forward
</span>
          </Link>
          <Link
            to="https://tinyurl.com/swasthiknj-resume"
            target="_blank"
            className="w-48 text-center px-6 py-2.5 rounded-3xl border text-black dark:text-white border-black dark:border-white transition flex items-center justify-center gap-2"
          >
            Resume
            <span className="material-symbols-outlined">download</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
