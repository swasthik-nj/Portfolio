import React, { useState, useEffect } from "react";
import { projects } from "../projects";

export default function Project() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 1s (replace with API fetch later)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-2xl font-bold text-white relative inline-block mb-4 pb-3 main-head">
        Projects
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>

      <div className="sub-head flex gap-5 md:justify-start justify-center  md:pl-2  flex-wrap">
        {loading
          ? // 🔹 Skeletons while loading
            Array.from({ length: projects.length }).map((_, i) => (
              <div
                key={i}
                className=" flex p-3 rounded-sm bg-gray-600/30 border border-gray-600 md:w-[16rem] w-[18rem] animate-pulse"
              >
                <div className="w-full">
                  <div className="flex justify-center items-center w-full">
                    <div className="h-[8rem] w-full bg-gray-300 rounded-md" />
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="h-4 w-2/3 bg-gray-300 rounded" />
                    <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))
          : // 🔹 Actual projects
            projects.map((project, index) => (
            <a href={project.url} target="_blank" >
                <div
                key={index}
                className="flex p-3 rounded-sm bg-gray-600/30 border border-gray-600   md:w-[16rem] w-[18rem] shadow-md hover:shadow-lg transition"
              >
                <div className="w-full">
                  <div className="flex justify-center items-center w-full">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-[8rem] w-full object-cover rounded-md projects"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="font-semibold text-blue-200">{project.title}</h1>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
            ))}
      </div>
      <div className="text-gray-400 text-sm text-center mt-8">
        More projects coming soon...
      </div>
    </div>
  );
}
