import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill';
import Project from './components/Project'
import Footer from './components/Footer';


import { FormspreeProvider } from '@formspree/react';
import Exp_Section from './components/Exp_Section';


function App() {
  

  return (
   <div className=''>

     <Navbar />
     <div className="firstSection">
     <Home /> 
     </div>
     <div className="secondSection">
      < About />
     </div>
     <div className="thirdSection">
    < Skill  />
     </div>
     <div className="fourthSection">
     < Project  />
     

     </div>
     <Exp_Section/>
      < Contact  />
     
         < Footer /> 
       
     
    

   </div>
  )
}

export default App
