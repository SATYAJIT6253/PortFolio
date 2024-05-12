import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
function Navbar() {
  const [active, setactive] = useState(true);
  const navigate = useNavigate();
  function MenuHandeler() {
    setactive(!active);
  }
  function clickhandlere() {
      navigate("/");
  }
  return (
    <nav className="p-5 my-0 flex justify-between items-center mt-5">
      <a href="" id="brand" className="flex gap-2 items-center" onClick={clickhandlere}>
        <img src={Logo} alt="" className="object-cover max-w-14 max-h-14" />
      </a>
      <div className="hidden lg:flex gap-12">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:border border-red-400 rounded-lg"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:border border-red-400 rounded-lg"
        >
          About Me
        </NavLink>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:border border-red-400 rounded-lg"
        >
          Projects
        </NavLink>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:border border-red-400 rounded-lg"
        >
          Resume
        </NavLink>
      </div>
      <button className="hidden lg:flex items-center  bg- border-gray-400 px-6 py-2
       font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded">
       
        <span className="text-white">Contact Me</span>
      </button>
      {active ? (
        <>
          <button className="lg:hidden p-2" onClick={MenuHandeler}>
            <i className="fa-solid fa-bars text-white"></i>
            <IoMenuSharp className="text-white w-8 h-8" />
          </button>
        </>
      ) : (
        <>
          <div
            id="nav-dioluge"
            className=" fixed inset-0 z-10 bg-gray-700 lg:hidden"
          >
            <button className="text-white w-full flex items-end justify-end mr-3" onClick={MenuHandeler}>
              <RxCross2 className="text-white w-14 h-14 px-3"/>
            </button>
            <div className="flex flex-col mt-20">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-4 py-4  hover:border border-red-400 rounded-lg"
                onClick={MenuHandeler}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-4 py-4  hover:border border-red-400 rounded-lg"
                onClick={MenuHandeler}
              >
                About Me
              </NavLink>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-4 py-4  hover:border border-red-400 rounded-lg"
              >
                Projects
              </NavLink>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-4 py-4  hover:border border-red-400 rounded-lg"
              >
                Resume
              </NavLink>
            </div>
            
            <button className="lex items-center  bg- border-gray-400 px-6 py-2
       font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded">
              <span className="text-white">Hire Me</span>
            </button>
          </div>

        </>
      )}
    </nav>
  );
}

export default Navbar;
