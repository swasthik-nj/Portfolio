import React from "react";
import cricket from "/cricket.png"
import web from "/web.png"

export default function About() {
  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-3xl font-bold text-white relative inline-block md:mb-4 md:pb-5 main-head">
        About Me
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>

      <p className="pt-5 text-neutral-300 font-mono">
        <span className="pl-10">I’m a</span> passionate full-stack developer in
        progress, currently pursuing my Master of Computer Applications (MCA) at
        NMAM Institute of Technology ,Nitte. I thrive on learning and building digital
        solutions that solve real-world problems. My journey in web development
        started with curiosity and has grown into a strong commitment to
        mastering both frontend and backend technologies.
      </p>
      <p className="pt-4 text-neutral-300 font-mono">
        <span className="pl-10">I</span> have hands-on experience with tools and
        frameworks like React, Tailwind CSS, Node.js, Express, MongoDB, and I'm
        currently exploring TypeScript and Next.js to further strengthen my
        skills. I enjoy working on clean, user-centric UI as much as designing
        robust backend APIs.
      </p>
      <div className="md:pt-10 pt-8">
        <h2 className="text-2xl font-bold">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0 py-4 ">
          <div className="flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-4 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img src={web} className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">
                Learning Full-Stack Development
              </h3>
              <p className="text-gray-300 pt-2">
                Continuously learning MERN stack and building real-world
                projects to enhance my development skills
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start  rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img src="https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/927f09a6ef894a24cc8aef7a2e51f8e93ac306f7/assets/images/icon-dev.svg" className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px] ">Web Development</h3>
              <p className="text-gray-300 pt-2">
                Designing and building responsive, user-friendly websites using
                React, Tailwind CSS, and Node.js.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img src={cricket} className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">Playing Cricket</h3>
              <p className="text-gray-300 pt-2">
                I enjoy playing cricket as a way to stay active and build
                teamwork skills outside of tech.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
            <img src="https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/927f09a6ef894a24cc8aef7a2e51f8e93ac306f7/assets/images/icon-photo.svg" className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">Photography</h3>
              <p className="text-gray-300 pt-2">
                I enjoy capturing moments and experimenting with composition and
                lighting.
              </p>
            </div>
          </div>
        </div>
      </div>
              <h2 className="pt-5 text-2xl font-bold mb-4">Tech Stack</h2>

      <div className=" pb-4 pl-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
          <div className="flex gap-2">
            <i className="devicon-react-original colored text-2xl"></i>
            React
          </div>
          <div className="flex gap-2">
            <i className="devicon-javascript-plain colored text-2xl"></i>
            JavaScript
          </div>
          <div className="flex gap-2">
            <i className="devicon-tailwindcss-original colored text-2xl"></i>
            Tailwind CSS
          </div>
          <div className="flex gap-2">
            <i className="devicon-nodejs-plain-wordmark colored text-2xl"></i>
            Node.js
          </div>
          <div className="flex gap-2">
            <i className="devicon-express-original text-2xl"></i>
            Express
          </div>
          <div className="flex gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
              height={25}
              width={25}
            />
            Supabase
          </div>
          <div className="flex gap-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              height={25}
              width={25}
            />
            MongoDB
          </div>
          <div className="flex gap-2">
            <i className="devicon-github-original text-2xl"></i>
            Git & GitHub
          </div>
        </div>
      </div>
    </div>
  );
}
