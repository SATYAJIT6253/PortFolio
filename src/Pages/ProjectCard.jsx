import React from "react";

function ProjectCard() {
  return (
    <div
      className="p-4 flex flex-col justify-center items-center gap-5 mx-10 mt-10 w-lg rounded-3xl
     bg-gradient-to-r from-sky-950 to-black hover:cursor-pointer lg:w-2/5"
    > 
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt=""
        className="w-11/12 mx-5 pt-5"
      />
      <h1 className="text-2xl flex justify-center">
        Name of the project
      </h1>
      <p
        className="mx-5 font-sans
       "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta possimus
        amet, odit beatae voluptates dolores nisi a accusamus eius vitae ab
        reprehenderit quod eaque magnam pariatur excepturi sed dolorem dolore,
        voluptate illum debitis, error numquam. Aperiam, mollitia? Quam quis sed
        libero vero, nisi odio recusandae dolorum sequi eum cupiditate inventore
        repellendus quas repudiandae fugiat tempora harum aspernatur minus quia
        ut. Autem similique voluptas dignissimos ullam nulla quod tenetur qui
        provident! Possimus, molestiae doloremque. Sit enim sequi magnam. Eius,
        tempora modi. Dolorum officia atque eius sint fugiat tempora enim sunt
        laudantium, dolor deserunt tenetur, dolorem tempore illo at laboriosam
        voluptatum repellendus.
      </p>
      <button className="bg-cyan-400 w-40 h-10 rounded-full hover:transform translate-z-20">
        <a href="https://leetcode.com/u/SATYAJITSAHOO/" target="_blank">
          Deploy Link
        </a>
      </button>
      <button className=" bg-blue-400 w-40 h-10 rounded-full">
        <a href="https://leetcode.com/u/SATYAJITSAHOO/" target="_blank">
          Github Link
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
