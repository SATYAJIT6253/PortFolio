import React from "react";
import data from "../projectdata/data";
import ProjectCard from "./ProjectCard";
function Project() {
  const projectdata = data;
  return (
    <div className="text-white lg:flex justify-evenly items-center flex-wrap">
      {projectdata.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Project;
