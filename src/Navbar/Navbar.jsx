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
  function ContactHandeler() {
    navigate("/contactsection");
    setactive(!active);
  }
  return (
    <nav className="px-8 my-0 mb-4 flex justify-between items-center mt-6 lg:px-12 lg:ml-28">
      <a
        href=""
        id="brand"
        className="flex gap-2 items-center"
        onClick={clickhandlere}
      >
        <img src={Logo} alt="" className="object-cover max-w-14 max-h-14" />
      </a>
      <div className="hidden lg:flex gap-12">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:shadow-xl hover:shadow-purple-600 rounded-lg 
          transition ease-in-out duration-300 delay-10 hover:-translate-y-1 hover:scale-110"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:shadow-xl hover:shadow-purple-600 rounded-lg
          transition ease-in-out duration-300 delay-10 hover:-translate-y-1 hover:scale-110"
        >
          About Me
        </NavLink>
        <NavLink
          to="/project"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:shadow-xl hover:shadow-purple-600 rounded-lg
          transition ease-in-out duration-300 delay-10 hover:-translate-y-1 hover:scale-110"
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          style={{ textDecoration: "none" }}
          className="text-xl  text-white px-2 py-2  hover:shadow-xl hover:shadow-purple-600 rounded-lg
          transition ease-in-out duration-300 delay-10 hover:-translate-y-1 hover:scale-110"
        >
          Resume
        </NavLink>
      </div>
      <button
        className="hidden lg:flex items-center  bg- border-gray-400 px-6 py-2
       font-bold text-white transition-all duration-200 bg-gray-900 
       border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-gray-900 hover:bg-gray-600 rounded"
        onClick={ContactHandeler}
      >
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
            className="fixed inset-0 z-10 bg-gray-700 lg:hidden"
          >
            <div className="flex mb-4">
              <a
                href=""
                id="brand"
                className="flex gap-2 items-center hover:shadow-xl hover:shadow-purple-600"
                onClick={clickhandlere}
              >
                <img
                  src={Logo}
                  alt=""
                  className="object-cover max-w-14 max-h-14 mt-6 ml-8 hover:shadow-xl hover:shadow-purple-600"
                />
              </a>
              <button
                className="text-white w-full flex items-end justify-end mr-6 hover:shadow-xl hover:shadow-purple-600"
                onClick={MenuHandeler}
              >
                <RxCross2 className="text-white w-14 h-12 px-2" />
              </button>
            </div>
            <div className="flex flex-col ml-2">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-6 py-4  rounded-lg hover:shadow-xl hover:shadow-purple-600"
                onClick={MenuHandeler}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-6 py-4   rounded-lg hover:shadow-xl hover:shadow-purple-600"
                onClick={MenuHandeler}
              >
                About Me
              </NavLink>
              <NavLink
                to="/project"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-6 py-4   rounded-lg hover:shadow-xl hover:shadow-purple-600"
                onClick={MenuHandeler}
              >
                Projects
              </NavLink>
              <NavLink
                to="/resume"
                style={{ textDecoration: "none" }}
                className="text-xl  text-white px-6 py-4   rounded-lg hover:shadow-xl hover:shadow-purple-600"
                onClick={MenuHandeler}
              >
                Resume
              </NavLink>
            </div>

            <button
              className="flex items-center ml-6 bg- border-gray-400 px-6 py-2
            font-bold text-white transition-all duration-200 bg-gray-900 border-2
            border-transparent mt-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
             hover:bg-gray-600 rounded"
              onClick={ContactHandeler}
            >
              <span className="text-white">Contact Me</span>
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
