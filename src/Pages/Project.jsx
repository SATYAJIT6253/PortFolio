import React from "react";
import data from "../projectdata/data";
import ProjectCard from "./ProjectCard";
function Project() {
  const projectdata = data;
  console.log(projectdata);
  return (
    <div className="text-white lg:flex justify-evenly items-center flex-wrap">
      
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      
    </div>
  );
}

export default Project;
