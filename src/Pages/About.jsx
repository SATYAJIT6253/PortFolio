import React from "react";
import about from "../assets/about.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/React.png";
import Nodejs from "../assets/Nodejs.jpg";
import MongoDB from "../assets/MongoDB.jpg";
import Sass from "../assets/Sass.png";
import cplus from "../assets/cplus.jpg";
import Tailwincss from "../assets/TailwindCss.png";

function About() {
  return (
    <div className="text-white ml-4 min-h-screen lg:mt-10 lg:ml-10">
      <div className="flex flex-col justify-centre items-centre gap-10 font-serif lg:flex-row ">
        <div className="flex flex-col mx-10 gap-4 items-center justify-center lg:px-20">
          <h1 className="text-2xl">
            <span className="text-4xl text-pink-400">A</span>bout{" "}
            <span className="text-4xl text-purple-900">M</span>yself
          </h1>
          <div className="flex flex-col text-lg gap-4">
            <h3>
            Hello! I'm <span className="text-pink-500"> Satyajit Sahoo, a pre-final year student pursuing civil engineering at NIT, Rourkela, Odisha.</span>
            </h3>
            <h3>
            I solved over <span className="text-pink-500">700+ problems on LeetCode, achieving a maximum rating of 1708</span>. 
            Additionally, I am a <span className="text-pink-500">3-star coder on CodeChef with a peak rating of 1617.</span>
            </h3>
            <h3>
                my coding Profiles are :{" "}  
                <a href="https://leetcode.com/u/SATYAJITSAHOO/" className="text-red-500 text-xl" target="_blank">LeetCode</a>,
                {""}
                <a href="https://www.codechef.com/users/satya6253" className="text-red-500 text-xl" target="_blank">CodeChef</a>,
                {""}
                <a href="https://github.com/SATYAJIT6253" className="text-red-500 text-xl" target="_blank">Github</a>
            </h3>
            <h3>
            Apart from that I have developed a solid foundation in 
            <span className="text-purple-600">  Web Development and Machine leering and have applied these skills in various projects</span>.
            </h3>
           <h3>
           Outside of my professional interests, i enjoy <span className="text-purple-500">Playing Cricket, Watching Movies and reading books</span>, these activities help me stay balanced and bring a fresh perspective to my work.
           </h3>
          </div>
        </div>
        <div className="mx-auto w-3/5 lg:mr-20">
          <img src={about} alt="" className="p-2" />
        </div>
      </div>
      {/* skill subsection */}
      <div className="flex flex-col  mt-7  gap-4 m-7 justify-center items-center lg:mx-60">
        <h1 className="text-2xl text-center">
          <span className="text-4xl text-red-700">M</span>y{" "}
          <span className="text-4xl text-red-500">T</span>ech
          <span className="text-4xl text-pink-700">S</span>tack
        </h1>
        <div className="flex flex-wrap justify-evenly items-center gap-4 lg:justify-centre lg:w-5/6">
          <div
            className="flex flex-col justify-center text-center px-3 gap-2
            hover:shadow-xl hover:shadow-pink-600"
          >
            <img src={html} alt="" className="w-24 h-24" />
            <h3>HTML</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={css} alt="" className="w-24 h-24" />
            <h3>CSS</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={javascript} alt="" className="w-24 h-24" />
            <h3>JavaScript</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={react} alt="" className="w-24 h-24" />
            <h3>React.js</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={Nodejs} alt="" className="w-24 h-24" />
            <h3>Node.js</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={MongoDB} alt="" className="w-24 h-24" />
            <h3>MongoDB</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={Tailwincss} alt="" className="w-24 h-24" />
            <h3>TailwindCSS</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={Sass} alt="" className="w-24 h-24" />
            <h3>Sass</h3>
          </div>
          <div className="flex flex-col justify-center text-center p-3 gap-2 hover:shadow-xl hover:shadow-pink-600">
            <img src={cplus} alt="" className="w-24 h-24" />
            <h3>C++</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
