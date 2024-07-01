import React from 'react'
import about from '../assets/about.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/React.png';
import Nodejs from '../assets/Nodejs.jpg';
import MongoDB from '../assets/MongoDB.jpg';
import Sass from '../assets/Sass.png';
import cplus from '../assets/cplus.jpg';
import python from '../assets/python.jpg';
import Tailwincss from '../assets/TailwindCss.png';
function About() {
  return (
    <div className='text-white lg:mt-10 lg:ml-10'>
      <div className='flex flex-col justify-centre items-centre gap-10 lg:flex-row '>
      <div className='flex flex-col text-center mx-10 gap-5 lg:items-center justify-center lg:px-20'>
        <h1 className='text-2xl'><span className='text-4xl text-pink-400'>A</span>bout <span className='text-4xl text-purple-900'>M</span>yself</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque molestiae reprehenderit ratione quibusdam nihil amet repudiandae id accusantium. Nisi, molestias. Tenetur, nostrum dignissimos.</h3>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque molestiae reprehenderit ratione quibusdam nihil amet repudiandae id accusantium. Nisi, molestias. Tenetur, nostrum dignissimos.</h3>
      </div>
      <div className='mx-auto w-3/5 lg:mr-20'>
        <img src={about} alt="" className='p-2'/>
      </div>
      </div>
      {/* skill subsection */}
      <div className='flex flex-col  mt-7  gap-4 mx-5 lg:mx-60'>
          <h1 className='text-2xl text-center'><span className='text-4xl text-red-700'>M</span>y <span className='text-4xl text-red-500'>T</span>ech <span
          className='text-4xl text-pink-700'>S</span>tack</h1>
          <div className='flex flex-wrap justify-around lg:justify-centre' >
            <div className='flex flex-col justify-center text-center p-3 gap-2
            shadow-cyan-500/50'> 
              <img src={html} alt="" 
              className='w-32 h-32'/>
              <h3>HTML</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={css} alt="" 
              className='w-32 h-32'/>
              <h3>CSS</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={javascript} alt="" 
              className='w-32 h-32'/>
              <h3>JavaScript</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={react} alt="" 
              className='w-32 h-32'/>
              <h3>React.js</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={Nodejs} alt="" 
              className='w-32 h-32'/>
              <h3>Node.js</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={MongoDB} alt="" 
              className='w-32 h-32'/>
              <h3>MongoDB</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={Tailwincss} alt="" 
              className='w-32 h-32'/>
              <h3>TailwindCSS</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={Sass} alt="" 
              className='w-32 h-32'/>
              <h3>Sass</h3>
            </div>
            <div className='flex flex-col justify-center text-center p-3 gap-2'>
              <img src={cplus} alt="" 
              className='w-32 h-32'/>
              <h3>C++</h3>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About