import React from "react";
import Profile from "../assets/Profile.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Home() {
  return (
    <div className="text-white flex flex-col lg:flex-row place-content-around">
      <div className="flex flex-col justify-center items-center gap-2 lg:w-2/5">
        <h1 className="text-5xl flex md:text-4xl">Hi There!</h1>
        <h1 className="text-4xl flex gap-3">
          I am <span className="text-pink-500">Satyajit Sahoo</span>
        </h1>
        <h1 className="text-2xl flex gap-2">
          a passionate
          <span className="text-pink-600"> Softawre Developer</span>
        </h1>
        <p className="p-4 mx-8 text-base font-serif">
          With a strong foundation in{" "}
          <span className="text-pink-600 italic">
            Data Structures and Algorithms, Web development (MERN Stack),
            Machine Learning and problem-solving
          </span>
          .Explore my portfolio to see my projects, technical skills.
        </p>
        <p className="p-4 flex mx-8 text-base font-serif">
          I'm ready to bring fresh ideas and a proactive approach to your team.
          I am actively seeking opportunities where I can leverage my skills and
          contribute to exciting projects.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/satyajit-sahoo-264371240/"
            target="_blank"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="">
            <FaInstagram className="w-10 h-10" />
          </a>
          <a href="">
            <FaFacebook className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div className="flex mt-8 items-center justify-center lg:w-1/3">
        <img src={Profile} alt="" />
      </div>
    </div>
  );
}

export default Home;
