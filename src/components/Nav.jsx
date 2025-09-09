import React from "react";

export default function Nav({ onNavClick, activePage }) {
  const navItems = ["about", "resume", "projects"];

  return (
    <nav
      className="
  md:text-[17px]
  text-[15px]
  md:gap-15 
  gap-7
  font-medium

  p-3
  rounded-tr-3xl 
  rounded-tl-3xl
  border border-gray-600 
  backdrop-blur-sm 
  bg-amber-100/10 
  z-20

  fixed bottom-0 left-0 w-full 

  md:absolute md:top-0 md:right-0 md:w-[35rem] md:h-fit
  md:rounded-tl-none md:rounded-tr-2xl md:rounded-bl-2xl
  md:bottom-auto md:left-auto
  flex justify-center md:flex md:items-end 
"
    >
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => onNavClick(item)}
          className={`relative pb-1 cursor-pointer transition-all duration-300 
            after:content-[''] after:absolute after:left-1/2 after:-bottom-0.5 after:-translate-x-1/2
            after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
            ${activePage === item ? "after:w-full" : "after:w-0"}
          `}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </nav>
  );
}
