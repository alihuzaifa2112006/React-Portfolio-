import React from 'react'
import './Home.css';
import { motion } from "framer-motion"

const Home = () => {
  const scrollToProjectPage = () => {
    const projectPage = document.getElementById('projectPage');
    projectPage.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='HomeBox'>
      <div className="contentContainer">
        <div className="title">
        <motion.h1 
      className='heading'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      Front
      <motion.span 
        className='text-yellow'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          delay: 1.2,
          type: "spring", 
          stiffness: 400,
          damping: 10
        }}
      >
        {" "}End{" "}
      </motion.span>
      Web Developer
    </motion.h1>
          <div className="shortAbout">
           <motion.h4 
      className='name'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }}
    >
      Ali Huzaifa Karimi.
    </motion.h4>
          </div>
          <div className="shortPara">
              <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      I'm Huzaifa, a Front-End Web Developer with 1 year of experience working with local clients. I specialize in HTML, CSS, JavaScript, React, Redux, and WordPress, and have developed multiple projects using these technologies. I also hold a certification in Graphic Design, combining my coding skills with creative design to deliver visually appealing and user-friendly websites.
    </motion.p>
          </div>
        </div>
        <button onClick={scrollToProjectPage} className='btn2'>
          View Projects <i className="ri-arrow-right-fill arrowIcon"></i>
        </button>
      </div>
    </div>
  )
}

export default Home