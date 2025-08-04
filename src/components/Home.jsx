import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "/_DSC0069.jpg";

export default function Home() {
  const [bgcolour, setBgcolour] = useState("bg-white");
  const [textcolour, setTextcolour] = useState("text-black");
  const [border, setBorder] = useState("border-black");
  const change = () => {
    if (bgcolour == "bg-white") {
      setBgcolour("bg-black");
      setTextcolour("text-white");
      setBorder("border-white");
    } else {
      setBgcolour("bg-white");
      setTextcolour("text-black");
      setBorder("border-black");
    }
  };
  return (
    <div className={`w-full h-screen ${bgcolour}`}>
      <button className={`${textcolour}`} onClick={change}>
        click
      </button>
      <div className="w-full max-w-[70rem] m-auto  h-screen justify-center items-center flex flex-col gap-6">
        <div className="items-center flex flex-col">
          <img
            src={profilePicture}
            alt="Swasthik NJ"
            srcset=""
            className="h-30 w-30 rounded-full object-cover"
          />
          <p
            className={`text-[20px] font-stretch-75% font-semibold pt-2 ${textcolour}`}
          >
            Hi I'm Swasthik N J
          </p>
        </div>
        <div className="flex items-center text-center px-10 ">
          <p className={`text-6xl/20 font-serif text-shadow-lg ${textcolour}`}>
            Learning to Build the Web <br /> Full-Stack Developer in Progress.
          </p>
        </div>
        <div>
          <p className="text-[17px]  text-gray-700 text-center">
            Web Development Learner from India, passionate about building modern
            web experiences.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Link
            to="/explore"
            className={`px-12 py-2.5 rounded-4xl ${
              bgcolour === "bg-black"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            More About
          </Link>

          <Link
            to="/resume"
            className={`text-black px-12 py-2.5 rounded-4xl border ${
              (border, textcolour)
            } `}
          >
            resume
          </Link>
        </div>
      </div>
    </div>
  );
}
