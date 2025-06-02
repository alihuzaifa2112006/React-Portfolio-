import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import About from './About';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex p-4 bg-black text-white justify-around fixed top-0 w-full z-50 shadow-md">
        <h1 className="h1 font-bold text-xl">MyArt</h1>
        <ul className="flex flex-row gap-12 nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projectPage">Projects</a></li>
          <li><a href="#skillPage">Skills</a></li>
          <li><a href="#contactPage">Contact</a></li>
        </ul>
       
        <i onClick={toggleMenu} className={`menu-icon ${isOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="flex flex-col items-center gap-8 mt-16 text-white">
          <li><a onClick={toggleMenu} href="#">Home</a></li>
          <li><a onClick={toggleMenu} href="#about">About</a></li>
          <li><a onClick={toggleMenu} href="#projectPage">Projects</a></li>
          <li><a onClick={toggleMenu} href="#skillPage">Skills</a></li>
          <li><a onClick={toggleMenu} href="#contactPage">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
