import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "/swanj.jpeg";
import CareerShell from "./CareerShell";
import { Boxes } from "./ui/background-boxes";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const [shellOpen, setShellOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setShellOpen((prev) => !prev);
      }

      // Ctrl+C toggles theme only when terminal is closed and no text is selected
      if (
        (e.ctrlKey || e.metaKey) &&
        !e.shiftKey &&
        e.key.toLowerCase() === "c"
      ) {
        if (shellOpen) return;
        const selected = window.getSelection()?.toString();
        if (selected) return;
        e.preventDefault();
        setDarkMode((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shellOpen]);

  return (
    <div className="relative w-full min-h-screen dark:bg-white bg-black/92 transition-colors duration-700 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 opacity-30">
        <Boxes />
      </div>
      <div className="flex items-center gap-3 absolute top-4 right-5 sm:right-14 z-20">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full cursor-pointer dark:text-black text-white dark:hover:bg-gray-200 hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <span className="material-symbols-outlined">light_mode</span>
          ) : (
            <span className="material-symbols-outlined">dark_mode</span>
          )}
        </button>
        <Link
          to="/explore"
          className="hidden sm:flex w-44 text-center px-5 py-2 rounded-3xl border dark:bg-white dark:text-black bg-white text-black transition items-center justify-center gap-2 text-sm"
        >
          More About
          <span className="material-symbols-outlined text-base">arrow_outward</span>
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-[70rem] mx-auto min-h-screen justify-center items-center flex flex-col gap-6 sm:px-6 lg:px-8 py-20">
        <div className="items-center flex flex-col">
          <img
            src={profilePicture}
            alt="Swasthik NJ"
            className="main-head h-28 w-28 sm:h-30 sm:w-30 md:w-32 md:h-32 rounded-full object-cover"
          />
          <p className="sub-main-head text-[18px] sm:text-[20px] font-semibold pt-2 dark:text-black text-white">
            Hi I&apos;m Swasthik N J
          </p>
        </div>

        <div className="flex items-center text-center px-4 sm:px-10">
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

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap px-4">
          <Link
            to="/explore"
            className="sub-btn1 w-48 text-center px-6 py-2.5 rounded-3xl dark:bg-black dark:text-white bg-white text-black transition flex items-center justify-center gap-2"
          >
            More About
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link
            to="https://tinyurl.com/swasthiknj-resumezz"
            target="_blank"
            className="sub-btn2 w-48 text-center px-6 py-2.5 rounded-3xl border dark:text-black text-white dark:border-black border-white transition flex items-center justify-center gap-2"
          >
            Resume
            <span className="material-symbols-outlined">download</span>
          </Link>
          <button
            type="button"
            onClick={() => setShellOpen(true)}
            className="sub-btn3 w-48 text-center px-6 py-2.5 rounded-3xl border border-orange-500/60 bg-orange-500/10 text-orange-400 dark:border-orange-600 dark:text-orange-600 transition flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-black dark:hover:bg-orange-500 dark:hover:text-black"
          >
            <span className="material-symbols-outlined text-lg">terminal</span>
            Open Terminal
          </button>
        </div>

        <p className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400 font-mono text-center px-4">
          Press{" "}
          <kbd className="rounded border border-neutral-600 px-1.5 py-0.5 dark:border-neutral-400">
            Ctrl
          </kbd>{" "}
          +{" "}
          <kbd className="rounded border border-neutral-600 px-1.5 py-0.5 dark:border-neutral-400">
            `
          </kbd>{" "}
          to toggle terminal. Press{" "}
          <kbd className="rounded border border-neutral-600 px-1.5 py-0.5 dark:border-neutral-400">
            Ctrl
          </kbd>{" "}
          +{" "}
          <kbd className="rounded border border-neutral-600 px-1.5 py-0.5 dark:border-neutral-400">
            C
          </kbd>{" "}
          to toggle theme (select text first to copy).
        </p>
      </div>

      <CareerShell open={shellOpen} onClose={() => setShellOpen(false)} />
    </div>
  );
}
