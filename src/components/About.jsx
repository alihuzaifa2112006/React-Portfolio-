import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate"
      }
    }
  };

  return (
    <motion.div 
      className='aboutContainer' 
      id='about'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="contentWrapper">
        <div className="leftContent">
          <motion.h3 className='meetTitle' variants={itemVariants}>
            Meet Huzaifa
          </motion.h3>
          <motion.h1 className='roleTitle' variants={itemVariants}>
            Front End Developer & Graphics Designer
          </motion.h1>
          <motion.p className='description' variants={itemVariants}>
            Hello! I'm Ali Huzaifa, a 19-year-old Front-End Web Developer and Graphics Designer from Karachi. 
            I have experience working in office environments and collaborating effectively with teams.
            <br /><br />
            My journey began with graphic designing, where I delivered several projects, which helped me 
            develop a strong creative skill set. Later, I transitioned into web development, where I learned 
            HTML, CSS, JavaScript, WordPress, React, and Tailwind CSS.
            <br /><br />
            I am highly motivated, energetic, and eager to grow in the field of software development. 
            My goal is to become a skilled software engineer and master the MERN stack.
          </motion.p>
          <motion.div className="socialMediaIcons" variants={itemVariants}>
            <a href="https://www.facebook.com/profile.php?id=61561385766834" target='_blank' rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://www.instagram.com/alihuzaifa2112006/" target='_blank' rel="noopener noreferrer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/ali-huzaifa-92137a292/" target='_blank'>
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </motion.div>
        </div>
        <motion.div className="rightImage" variants={imageVariants}>
          <img src="/Images/me.jpg" alt="Ali Huzaifa" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About;