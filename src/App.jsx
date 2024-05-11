import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom';
<script src="https://cdn.tailwindcss.com"></script>
function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Routes>
       <Route path ="/" element = {<Home/>}/>
       <Route path ="/about" element ={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
