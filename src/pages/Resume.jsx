import React from "react";
import { eduData } from "../institution";

export default function Resume() {
  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-3xl font-bold text-white relative inline-block md:mb-4 md:pb-5 main-head">
        Resume
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>
      <div>
        <div className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-amber-300 p-2 rounded-xl bg-[#141414] border-l-2 border-gray-700">
            school
          </span>

          <h1 className="text-2xl font-semibold text-lime-300">Education</h1>
        </div>


        <div className="relative border-l-2 border-amber-200  pl-8 left-5.5 max-w-[97%]">
  {eduData.map((item, index) => (
    <div
      key={index}
      className="mb-8 relative"
    >
      {/* Dot */}
      <span className="absolute -left-[39px] top-7 w-3 h-3 bg-amber-400 rounded-full  shadow"></span>

      <div className=" dark:bg-gray-800 pt-4 rounded-2xl">
        <h1 className="text-lg font-semibold text-white-800 dark:text-white">
          {item.institution}
        </h1>
        <p className="text-sm text-amber-500 font-medium">{item.year}</p>
        <p className="text-gray-100 dark:text-gray-300  text-sm ">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
}
