import React from "react";
import Profile from "../assets/Profile.png";
<script src="https://cdn.tailwindcss.com"></script>
function Home() {
  return (
    <div className="text-white flex flex-col lg:flex-row place-content-around">
      <div className="flex flex-col justify-center items-center gap-2 lg:w-2/5">
        <h1 className="text-5xl flex md:text-4xl">Hi There!</h1>
        <h1 className="text-4xl flex gap-3"> I am <span className="text-pink-500">Satyajit Sahoo</span></h1>
        <h1 className="text-2xl flex gap-2"> a passionate <span className="text-pink-600"> Softawre Developer</span></h1>
        <p className="p-5 flex mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum temporibus, commodi ut suscipit nostrum. Ipsa quibusdam sunt aspernatur esse dignissimos doloribus alias, est illo nulla temporibus perspiciatis perferendis dolores modi veritatis laudantium nam sint facere similique velit. Deleniti deserunt officia .</p>
      </div>
      <div className="flex items-center justify-center lg:w-1/3">
        <img src={Profile} alt="" />
      </div>
    </div>
  );
}

export default Home;
