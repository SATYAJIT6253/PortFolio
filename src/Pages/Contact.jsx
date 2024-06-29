import React from "react";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
function Contact() {
  return (
    <div className="m-8 flex flex-col lg:flex-row lg:justify-around">
      <div className="flex flex-col mt-2 mb-6 lg:w-2/5 lg:mt-10 lg:p-3">
        <input
          type="text"
          name=""
          id=""
          className="bg-form-background h-12 p-2 border-solid border-2 border-form-radius rounded-lg text-rose-100 text-lg mb-2 "
          placeholder="First Name"
        />
        <input
          type="text"
          name=""
          id=""
          className="bg-form-background h-12 p-2 border-solid border-2 border-form-radius rounded-lg text-rose-100 text-lg mb-2"
          placeholder="Last Name"
        />
        <input
          type="email"
          name=""
          id=""
          className="bg-form-background h-12 p-2 border-solid border-2 border-form-radius rounded-lg text-rose-100 text-lg mb-2"
          placeholder="Email"
        />
        <textarea
          name=""
          id=""
          className="bg-form-background h-40 p-2 border-solid border-2 border-form-radius rounded-lg
      text-rose-100 text-lg mb-4"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-center">
        <button className=" bg-btn-bg w-40 h-10 rounded-full">Send</button>
        </div>
       
      </div>

        {/* contact section  */}

      <div className="lg:w-2/5">
        <div className="w-full rounded-xl border-2 border-cnt-card-br flex flex-col place-items-center justify-center gap-2 p-6 h-40 bg-cnt-card-bg mb-4">
          <a href="">
            <CgMail className="size-12 text-white" />
          </a>
          <h1 className="text-white">abcdefgh789@gmai.com</h1>
        </div>
        <div className="w-full rounded-xl border-2 border-cnt-card-br flex flex-col place-items-center justify-center gap-2 p-6 h-40 bg-cnt-card-bg mb-4">
          <a href="">
            <BsTelephone className="size-10 text-white" />
          </a>
          <h1 className="text-white">abcdefgh789@gmai.com</h1>
        </div>
        <div className="w-full rounded-xl border-2 border-cnt-card-br flex flex-col place-items-center justify-center gap-2 p-6 h-40 bg-cnt-card-bg mb-4">
          <a href="">
            <FaLinkedinIn className="size-12 text-white" />
          </a>
          <h1 className="text-white">abcdefgh789@gmai.com</h1>
        </div>
        <div className="w-full rounded-xl border-2 border-cnt-card-br flex flex-col place-items-center justify-center gap-2 p-6 h-40 bg-cnt-card-bg mb-4">
          <a href="">
            <FaLinkedinIn className="size-12 text-white" />
          </a>
          <h1 className="text-white">abcdefgh789@gmai.com</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
