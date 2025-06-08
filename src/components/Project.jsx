import React from 'react';
import './Project.css';

const projects = [
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
    techStack: ['HTML', 'CSS',  'React', 'Chart Js', 'Routers'],
    description: `Smart Tracker is a modern web application built using React that helps users efficiently manage and monitor their tasks, goals, or personal records. Designed with a clean and responsive user interface, this app ensures a smooth experience across devices. It showcases real-time updates, dynamic rendering, and user-friendly features that highlight my front-end development skills.`,
  }
  ,
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
  return (
    <div className="projectPage" id="projectPage">
      <div className="heading">
        <h1 className="font-bold text-5xl text-center mt-2">Projects 💻</h1>
      </div>

      <div className="projects">
        {projects.map((proj, index) => (
          <div key={index} className="project project-1 flex flex-col md:flex-row mb-8">
            <div className="leftPro flex items-center justify-center">
              <img src={proj.image} alt={proj.title} className="w-120" />
            </div>
            <div className="rightPro p-4">
              <h1 className="font-bold text-3xl mb-2">{proj.title}</h1>

              <div className="text-gray-800">
                <p className="font-semibold">Tech Stack Used:</p>
                <div className="spansDiv flex flex-wrap gap-2 mt-1">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded shadow text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="about text-gray-700 mt-4">{proj.description}</p>

              <button className="btn2 bg-black text-white mt-4 px-4 py-2 rounded shadow hover:bg-gray-800 transition">
                <a target="_blank" rel="noopener noreferrer" href={proj.link}>
                  View Project <i className="ri-arrow-right-fill"></i>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
