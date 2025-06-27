import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Project.css';

const projects = [
  {
    title: 'Qucik Notes App | Firebase + React |',
    image: 'Images/noteApp.png',
    link: 'https://quicknotesapp123.netlify.app/',
    techStack: ['React', 'Tailwind CSS', 'Firebase'],
    description: `QuickNotes is a sleek and responsive note-taking web app designed for simplicity and speed. Users can easily create, save, and manage their notes with a clean user interface. It features theme settings, smooth navigation, and a focus on productivity. Built with React and Tailwind CSS, it ensures fast performance and an intuitive experience.`,
  },
  {
    title: 'React Ecommerce Project with Framer Motion',
    image: 'Images/plant.png',
    link: 'https://ecommercekahard.netlify.app/',
    techStack: ['HTML', 'CSS', 'Framer Motion', 'React'],
    description: `This is a modern eCommerce frontend project built using React.js and animated with Framer Motion for smooth and engaging user interactions. The website features a clean UI, product sections, and responsive design, offering a dynamic shopping experience.`,
  },
  {
    title: 'Itask | To Do List',
    image: 'Images/Itask.png',
    link: 'https://todo-application-final.vercel.app/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    description: `A responsive task manager allowing users to add, delete, and mark tasks as complete. Built with React and Tailwind CSS to provide an intuitive and stylish UI.`,
  },
  {
    title: 'Finance Tracker | React Js',
    image: 'Images/Smart.png',
    link: 'https://smarttrackerbyali.netlify.app/',
    techStack: ['HTML', 'CSS', 'React', 'Chart Js', 'Routers'],
    description: `Smart Tracker is a modern web application built using React that helps users efficiently manage and monitor their tasks, goals, or personal records. Designed with a clean and responsive user interface, this app ensures a smooth experience across devices. It showcases real-time updates, dynamic rendering, and user-friendly features that highlight my front-end development skills.`,
  },
  {
    title: 'Currency Converter',
    image: 'Images/cc.png',
    link: 'https://currency-converter-psi-blond.vercel.app/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: `This web app allows users to convert between different currencies using live exchange rates. It includes responsive design, error handling, and animated transitions.`,
  },
  {
    title: 'WeatherX | Weather Application',
    image: 'Images/Weather.png',
    link: 'https://weatherapplicationbyali.netlify.app/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    description: `A real-time weather app using WeatherAPI. Displays temperature, humidity, wind speed, and more. Responsive and searchable by city.`,
  },
  {
    title: 'PasswordGen | Generator',
    image: 'Images/Pg.png',
    link: 'https://beamish-crepe-98b66f.netlify.app/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: `Generates strong passwords based on user preferences (length, symbols, etc). Demonstrates DOM manipulation and JavaScript logic.`,
  },
  {
    title: 'UI | Landing Page',
    image: 'Images/dmw.png',
    link: 'https://digitalproductwebsite.netlify.app/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: `A sleek, responsive UI to showcase digital marketing services. Features clean design, animations, and mobile-friendly layout.`,
  },
  {
    title: 'Dictionary API App',
    image: 'Images/Dic.png',
    link: 'https://cool-yeot-163a4c.netlify.app/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: `The Dictionary API App is a web application that allows users to search for word definitions using a public API.`,
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="projectPage" id="projectPage">
      <motion.div 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projects 💻</h1>
      </motion.div>

      <div className="projects">
        {displayedProjects.map((proj, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="leftPro">
              <motion.img 
                src={proj.image} 
                alt={proj.title}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="rightPro">
              <h1>{proj.title}</h1>
              <div className="tech-stack">
                <p>Tech Stack Used:</p>
                <div className="spansDiv">
                  {proj.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <p className="about">{proj.description}</p>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <i className="ri-arrow-right-fill"></i>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 4 && (
        <motion.div
          className="show-more-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="show-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Project;