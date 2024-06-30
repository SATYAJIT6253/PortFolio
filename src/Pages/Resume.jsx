import React from "react";
import pdfFile from "../assets/Resume.pdf";
function Resume() {
  return (
    <div className="w-full h-screen flex justify-center items-center lg:mt-10">
      <iframe src= {pdfFile}  className="w-2/3 h-4/5  lg:h-full" ></iframe>
    </div>
  );
}

export default Resume;
