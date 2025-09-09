import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
// import profilePicture from "/_DSC0069.jpg";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

function App() {
  const [activePage, setActivePage] = useState("about");
  const [showcontent, setShowcontent] = useState(false);

  const showContent = () => {
    setShowcontent(!showcontent);
  };
  

  return (
    <div className="min-h-screen w-full bg-black/93 flex justify-center items-start py-10">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row pb-10 gap-7 md:px-4 px-4">
        <div className="w-full opacity-100  h-full bg-neutral-800/70 rounded-2xl  flex-shrink-0 text-white border border-gray-500  lg:w-[280px]  more ">
          <div className="flex items-center justify-center pt-3 md:pt-0">
            <div className="flex flex-col items-center text-center w-full sm:pt-4">
              <div className="flex lg:flex-col  lg:justify-center pl-10 md:pl-0 justify-start items-center top-0 pb-3 md:pb-0 w-full">
                <img
                  src='https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/my-avatar.png'
                  alt="Swasthik NJ"
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
                />

                <div className="flex flex-col justify-start items-start lg:items-center">
                  <p className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold  ">
                    Swasthik N J
                  </p>

                  <div className="text-[12px]  sm:text-[14px] md:mt-5 mt-2 px-2 py-0.5 md:mb-5 mb-3 bg-gray-500/20  w-fit rounded">
                    Student
                  </div>
                </div>
              </div>
              <hr className="w-[10rem] border-t border-gray-700  " />
              {/* //////////// */}
              <button
                className="block md:hidden bg-orange-500 text-black font-semibold text-sm px-4 py-2 rounded-bl-lg rounded-tr-2xl mt-4 absolute top-6 right-4"
                onClick={showContent}
              >
                {showcontent ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
              </button>

              <button
                className="hidden md:block lg:hidden bg-orange-500 text-black font-semibold text-sm px-4 py-2 rounded-bl-lg rounded-tr-2xl mt-4 absolute top-6 right-4"
                onClick={showContent}
              >
                {showcontent ? "Hide Contacts" : "Show Contacts"}
              </button>

              <div>
                <div
                  className={`transition-all duration-900 ease-in transform overflow-hidden ${
                    showcontent
                      ? "translate-y-0 opacity-100 max-h-[1000px]"
                      : "-translate-y-10 opacity-0 max-h-0"
                  } lg:opacity-100 lg:translate-y-0 lg:max-h-full`}
                >
                  <div className="flex gap-5 items-center md:pt-5 md:pb-2 pt-3 pb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#141414] border-l-2 border-gray-700">
                      <MdOutlineEmail className="text-yellow-400 text-lg" />
                    </div>
                    <div className="flex flex-col  items-start w-[11rem]">
                      <p className="text-[12px] sm:text-[13px] text-gray-400 font-semibold">
                        EMAIL
                      </p>
                      <a
                        href="mailto:swastiknj76@gmail.com"
                        className="text-[12px] sm:text-[14px] font-semibold"
                      >
                        swastiknj76@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center md:pt-5 md:pb-2 pt-3 pb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#141414] border-l-2 border-gray-700">
                      <IoIosPhonePortrait className="text-yellow-400 text-lg" />
                    </div>
                    <div className="flex flex-col  items-start w-[11rem]">
                      <p className="text-[12px] sm:text-[13px] text-gray-400 font-semibold">
                        Phone
                      </p>
                      <a
                        href="tel:+918951192848"
                        className="text-[12px] sm:text-[14px] font-semibold"
                      >
                        +91 8951192848
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center md:pt-5 md:pb-2 pt-3 pb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#141414] border-l-2 border-gray-700">
                      <IoCalendarOutline className="text-yellow-400 text-lg" />
                    </div>
                    <div className="flex flex-col  items-start w-[11rem]">
                      <p className="text-[12px] sm:text-[13px] text-gray-400 font-semibold">
                        Birthday
                      </p>
                      <time
                        dateTime="2004-06-07"
                        className="text-[12px] sm:text-[14px] font-semibold"
                      >
                        June 07,2004
                      </time>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center md:pt-5 md:pb-2 pt-3 pb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#141414] border-l-2 border-gray-700">
                      <GrLocation className="text-yellow-400 text-lg" />
                    </div>
                    <div className="flex flex-col  items-start w-[11rem]">
                      <p className="text-[12px] sm:text-[13px] text-gray-400 font-semibold">
                        Location
                      </p>
                      <p className="text-[12px] sm:text-[14px] font-semibold">
                        Dakshina Kannada,
                        <br />
                        Karnataka, INDIA
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4.5 pt-8 pb-7  justify-center">
                    <Link
                      to="https://www.instagram.com/swasthik_birwa_official/"
                      target="_blank"
                      className="text-white hover:text-gray-400"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      to="https://github.com/swasthik-nj"
                      target="_blank"
                      className="text-white hover:text-gray-400"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/swasthik-nj"
                      target="_blank"
                      className="text-white hover:text-gray-400"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      to="https://x.com/swasthik_nj"
                      target="_blank"
                      className="text-white hover:text-gray-400"
                    >
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        <div className="relative flex-1 bg-neutral-800/70 border border-gray-500 pb-5 px-4 text-white rounded-2xl overflow-y-auto h-fit ">
          <Nav onNavClick={setActivePage} activePage={activePage} />
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "projects" && <Project />}
        </div>
      </div>
    </div>
  );
}

export default App;
