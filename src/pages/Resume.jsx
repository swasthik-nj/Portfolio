import React, { useState } from "react";
import { eduData } from "../institution";
import { Experience } from "../Experience";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CertificateImage({ src, alt }) {
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"

  return (
    <div className="mt-4 relative z-10">
      <div className="relative flex justify-center items-center w-full min-h-[220px] bg-neutral-950/60 rounded-lg border border-neutral-700/80 p-3">
        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="w-8 h-8 border-2 border-neutral-600 border-t-amber-400 rounded-full animate-spin"></span>
            <p className="text-sm text-neutral-400">Loading certificate…</p>
          </div>
        )}
        {status === "error" ? (
          <div className="flex flex-col items-center justify-center gap-2 py-10">
            <span className="material-symbols-outlined text-red-400 text-3xl">
              error
            </span>
            <p className="text-sm text-neutral-400">
              Failed to load certificate image.
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="eager"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={`rounded-md max-w-full max-h-[65vh] object-contain w-auto h-auto transition-opacity duration-300 ${
              status === "loaded" ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}

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

                <Dialog>
                  <DialogTrigger className="mt-3 inline-flex items-center gap-2 rounded-md border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-sm font-medium text-orange-400 transition-colors hover:bg-orange-500 hover:text-black hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50">
                    <span className="material-symbols-outlined text-[18px]">
                      workspace_premium
                    </span>
                    View Certificate
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] gap-0 border border-neutral-600 bg-neutral-900 p-0 text-white shadow-2xl sm:max-w-4xl">
                    <DialogHeader className="flex flex-row items-center gap-3 border-b border-neutral-700 px-5 py-4 text-left">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-600 bg-neutral-800">
                        <span className="material-symbols-outlined text-orange-400 text-xl">
                          verified
                        </span>
                      </div>
                      <div className="min-w-0 pr-8">
                        <DialogTitle className="text-lg font-semibold text-white tracking-tight">
                          {item.company}
                        </DialogTitle>
                        <p className="mt-0.5 text-sm text-neutral-400">
                          Internship Certificate
                        </p>
                      </div>
                    </DialogHeader>
                    <div className="px-5 pb-5">
                      <CertificateImage
                        src={item.imageUrl}
                        alt={`${item.company} Certificate`}
                      />
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
