import React from "react";
import { eduData } from "../institution";
import { Experience } from "../Experience";

export default function Resume() {
  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-2xl font-bold text-white relative inline-block md:mb-2 md:pb-3 main-head">
        Resume
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>
      <div className="pt-5 md:pt-4 sub-main-head">
        <div className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-amber-300 p-2 rounded-xl bg-[#141414] border-l-2 border-gray-700">
            school
          </span>

          <h1 className="text-2xl font-semibold text-lime-300 sub-head">Education</h1>
        </div>

        <div className="relative border-l-2 border-amber-200  pl-8 left-5.5 max-w-[97%]">
          {eduData.map((item, index) => (
            <div key={index} className="mb-8 relative">
              {/* Dot */}
              <span className="absolute -left-[39px] top-7 w-3 h-3 bg-amber-400 rounded-full  shadow"></span>

              <div className=" pt-4 rounded-2xl">
                <h1 className="text-lg font-semibold text-white-800 dark:text-white">
                  {item.institution}
                </h1>
                <p className="text-sm text-amber-500 font-medium">
                  {item.year}
                </p>
                <p className="text-gray-100 dark:text-gray-300  text-sm ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="pt-5 md:pt-4 sub-main-head">
        <div className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-amber-300 p-2 rounded-xl bg-[#141414] border-l-2 border-gray-700">
            school
          </span>

          <h1 className="text-2xl font-semibold text-lime-300 sub-head">Experience</h1>
        </div>

        <div className="relative border-l-2 border-amber-200  pl-8 left-5.5 max-w-[97%]">
          {Experience.map((item, index) => (
            <div key={index} className="mb-1 relative">
              {/* Dot */}
              <span className="absolute -left-[39px] top-7 w-3 h-3 bg-amber-400 rounded-full  shadow"></span>

              <div className=" pt-4 rounded-2xl">
                <h1 className="text-lg font-semibold text-cyan-200">
                  {item.company}
                </h1>
                {/* <p className="text-sm text-amber-500 font-medium">
                  {item.year}
                </p> */}
                <p className="text-gray-100 dark:text-gray-300  text-sm ">
                  {item.desc}
                </p>
                <a href={item.url} className="text-blue-300 flex items-center gap-2.5 pt-1.5 " target="_blank" rel="noopener noreferrer">View <span className="material-symbols-outlined h-5 w-2">
card_membership
</span></a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
