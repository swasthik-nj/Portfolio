import React from "react";
import { eduData } from "../institution";
import { Experience } from "../Experience";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

          <h1 className="text-2xl font-semibold text-lime-300 sub-head">
            Education
          </h1>
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

          <h1 className="text-2xl font-semibold text-lime-300 sub-head">
            Experience
          </h1>
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
                <p className="text-gray-100 dark:text-gray-300  text-sm ">
                  {item.desc}
                </p>
                {/* <a
                  href={item.url}
                  className="text-white flex items-center gap-2.5 pt-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View{" "}
                  <span className="material-symbols-outlined text-green-500 text-[10px] flex items-center justify-center">
                    visibility
                  </span>
                </a> */}

                <Dialog className="p-0" >
                  <DialogTrigger className="group relative px-4 mt-2 py-1.5 bg-gradient-to-r from-gray-800/20 to-gray-500/20 hover:from-gray-500/30 hover:to-gray-800/30 backdrop-blur-sm border border-gray-400/50 text-cyan-300 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
                    <span className="material-symbols-outlined text-lg">
                      workspace_premium
                    </span>
                    View Certificate
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[85vw] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl shadow-cyan-500/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-lg before:pointer-events-none">
                    <DialogHeader className="border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
                          <span className="material-symbols-outlined text-cyan-300 text-2xl">
                            verified
                          </span>
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                            {item.company}
                          </DialogTitle>
                          <p className="text-sm text-cyan-200/80 mt-1 font-medium">Professional Certificate</p>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="mt-6 relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-xl blur-2xl animate-pulse"></div>
                      <div className="relative flex justify-center items-center w-full bg-black/20 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-inner">
                        <img
                          src={item.imageUrl}
                          alt={`${item.company} Certificate`}
                          className="rounded-lg shadow-2xl max-w-full max-h-[65vh] object-contain w-auto h-auto border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
