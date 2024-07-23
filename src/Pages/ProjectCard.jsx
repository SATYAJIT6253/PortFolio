import React from "react";
import { useState } from "react";
function ProjectCard({ project }) {
  const [readmore, setreadmaore] = useState(false);
  const description = readmore ? project.info + ".." : `${project.info.substring(0, 400)}....`;
  function readmorehandeler() {
    setreadmaore(!readmore);
  }
  return (
    <div
      className="flex flex-col h-fit justify-center items-center gap-5 mx-10 mt-10 w-lg rounded-3xl
     bg-gradient-to-r from-sky-950 to-black hover:cursor-pointer lg:w-2/5 md:p-8"
    >
      <img src={project.image} alt="" className="w-11/12 mx-5 pt-5 h-60" />
      <h1 className="text-2xl flex justify-center">{project.name}</h1>
      <p
        className="mx-5 font-sans
       "
      >
        {description}
        <span onClick={readmorehandeler} className="text-sky-400 text-lg">
          {readmore ? `read less` : `read more`}
        </span>
      </p>
      <button className="bg-cyan-400 w-40 h-10 rounded-full hover:transform translate-z-20">
        <a href={project.link} target="_blank">
          Deploy Link
        </a>
      </button>
      <button className=" bg-blue-400 w-40 h-10 rounded-full mb-4">
        <a href={project.githublink} target="_blank">
          Github Link
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
