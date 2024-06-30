import React from "react";
import pdfFile from "../assets/Resume.pdf";
function Resume() {
  return (
    <div className="w-full h-screen flex justify-center items-center lg:mt-10">
      <iframe src= {pdfFile}  className="w-3/4 h-4/5  lg:h-full lg:w-2/3" ></iframe>
    </div>
  );
}

export default Resume;
