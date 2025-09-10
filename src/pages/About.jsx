import React from "react";
import cricket from "/cricket.png";
import web from "/web.png";

export default function About() {
  return (
    <div className="md:pt-8 nav">
      <h1 className="md:text-3xl text-2xl font-bold text-white relative inline-block md:mb-4 md:pb-3 main-head">
        About Me
        <span className="absolute left-0 -bottom-1 h-[6px] w-14 bg-orange-500 rounded-md"></span>
      </h1>

      <p className="pt-5 text-neutral-300 font-mono sub-head">
        <span className="pl-10 ">I’m a</span> full-stack developer and a Master
        of Computer Applications student at NMAM Institute of Technology, Nitte.
        I enjoy building web applications that solve real-world problems.
      </p>
      <p className="pt-4 text-neutral-300 font-mono sub-head">
        <span className="pl-10">I</span>have experience with React, Node.js,
        Express, and MongoDB, and I am currently learning TypeScript and
        Next.js. I'm passionate about creating both user-friendly frontends and
        strong, reliable backends.
      </p>
      <div className="md:pt-10 pt-8">
        <h2 className="text-2xl font-bold sub-main-head">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0 py-4 ">
          <div className=" sub-div-head flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-4 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img src={web} className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">
                Learning Full-Stack Development
              </h3>
              <p className="text-gray-300 pt-2">
                I'm strengthening my MERN stack skills by building real-world projects.
              </p>
            </div>
          </div>

          <div className="sub-div-head   flex gap-4 items-start  rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img
                src="https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/927f09a6ef894a24cc8aef7a2e51f8e93ac306f7/assets/images/icon-dev.svg"
                className="h-10 w-20"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px] ">
                Web Development
              </h3>
              <p className="text-gray-300 pt-2">
                I build easy-to-use websites with React, Tailwind CSS, and Node.js
              </p>
            </div>
          </div>

          <div className="sub-div-head flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img src={cricket} className="h-10 w-20" alt="" srcset="" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">
                Playing Cricket
              </h3>
              <p className="text-gray-300 pt-2">
               I play cricket to stay active and practice teamwork.
              </p>
            </div>
          </div>

          <div className=" sub-div-head flex gap-4 items-start rounded-xl border border-gray-500/30 bg-black/20 p-6 shadow-md shadow-gray-600/20">
            <div className="text-yellow-400 text-3xl">
              <img
                src="https://raw.githubusercontent.com/codewithsadee/vcard-personal-portfolio/927f09a6ef894a24cc8aef7a2e51f8e93ac306f7/assets/images/icon-photo.svg"
                className="h-10 w-20"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-[18px]">Photography</h3>
              <p className="text-gray-300 pt-2">
                I enjoy photography and trying out different kinds of shots.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="pt-5 text-2xl font-bold mb-4">Tech Stack</h2>

      <div className=" pb-4 pl-6">
        <div className="sub-head grid grid-cols-2 sm:grid-cols-4 gap-4 text-white ">
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
