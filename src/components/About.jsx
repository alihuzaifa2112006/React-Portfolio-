import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='aboutContainer' id='about'>
      <div className="contentWrapper">
        <div className="leftContent">
          <h3 className='meetTitle'>Meet Huzaifa</h3>
          <h1 className='roleTitle'>Front End Developer & Graphics Designer</h1>
          <p className='description'>
            Hello! I'm Ali Huzaifa, a 19-year-old Front-End Web Developer and Graphics Designer from Karachi. 
            I have experience working in office environments and collaborating effectively with teams.
            <br /><br />
            My journey began with graphic designing, where I delivered several projects, which helped me 
            develop a strong creative skill set. Later, I transitioned into web development, where I learned 
            HTML, CSS, JavaScript, WordPress, React, and Tailwind CSS.
            <br /><br />
            I am highly motivated, energetic, and eager to grow in the field of software development. 
            My goal is to become a skilled software engineer and master the MERN stack.
          </p>
          <div className="socialMediaIcons">
            <a href="https://www.facebook.com/profile.php?id=61561385766834" target='_blank' rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://www.instagram.com/alihuzaifa2112006/" target='_blank' rel="noopener noreferrer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("In Process"); }}>
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
        <div className="rightImage">
          <img src="/Images/me.jpg" alt="Ali Huzaifa" />
        </div>
      </div>
    </div>
  )
}

export default About