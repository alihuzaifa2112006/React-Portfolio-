import React from 'react';
import './Exp_.css';
import { useState } from 'react';
import { button, h1 } from 'framer-motion/client';
const Exp_Section = () => {
 
  const [ showMore , setshowMore] = useState(false);
  const [closeUp, setcloseUp] = useState(false)
 const handleShow = () => {
  setshowMore(prev => !prev);
};

  const Data = [
    {
      CompanyName: "Information Tech \n Gateway",
      JobRole: "Frontend Developer",
      image: '/Images/ITG_logo.jpg',
      desc: "At ITG UAE, I played a key role in building and maintaining scalable ERP applications using React JS and Material UI. My responsibilities included developing dynamic user interfaces, optimizing components for better performance, and implementing pixel-perfect responsive designs. I collaborated daily with backend developers to integrate APIs, resolve bugs, and ensure seamless functionality across multiple ERP modules tailored for enterprise use.",
      startDate: "July 2025",
      endDate: "Present",
    },
    {
      CompanyName: "Aykays Agency",
      JobRole: "React JS Developer",
      image: '/Images/Aykays_Logo.png',
      desc: "During my time at Aykays, I contributed to multiple client and internal web applications using React JS, Tailwind CSS, and Firebase. I worked on projects ranging from eCommerce platforms to business websites, and portfolio systems. My role involved building reusable components, managing state, connecting with Firebase services, and deploying fully functional UIs. I also handled custom WordPress projects and played a key role in website maintenance, speed optimization, and responsive design.",
      startDate: "January 2025",
      endDate: "April 2025"
    },
    {
      CompanyName: "Data Tronex",
      JobRole: "Frontend Developer Intern",
      image: '/Images/DT_Logo.jpg',
      desc: "As a frontend development intern at Tronex, I was responsible for creating responsive and mobile-friendly static websites using HTML, CSS, and Bootstrap. I collaborated with the senior development team to design landing pages, company profiles, and marketing pages for small businesses. My tasks also involved writing clean, maintainable code, testing cross-browser compatibility, and enhancing overall UI/UX of the client projects.",
      startDate: "August 2023",
      endDate: "March 2024"
    }
  ];
  const OtherData = [
  {
    CompanyName: "Iflogics Solution",
    JobRole: "CSR / Sales (Lead Generation)",
    image: '/Images/If_Logo.jpg', 
    desc: "At Iflogics Solution, I worked as a Customer Service Representative focused on lead generation and sales. I handled customer queries, converted leads through calls, and ensured high-quality communication with clients. My responsibilities included explaining services, generating interest, and closing deals through outbound interactions.",
    startDate: "October 2024",
    endDate: "February 2025"
  },
  {
    CompanyName: "WeGrow International",
    JobRole: "Facebook Marketing Executive",
    image: '/Images/We_Logo.png', 
    desc: "At WeGrow International, I was responsible for managing Facebook marketing campaigns. I created ad creatives, optimized budgets, and targeted specific demographics to boost brand reach and engagement. My role was to enhance online visibility and generate leads through paid and organic social strategies.",
    startDate: "June 2024",
    endDate: "October 2024"
  }
];


  return (
    <div className="Exp_Section" id='Exp_Sec'>
      <div className="Exp_Heading">
        <div className="iconDiv">🚀</div>
        <h1 className="Exp_Title">My Journey</h1>
      </div>

      <div className="Exp_Container">
        {Data.map((item, index) => (
          <div className="Exp_Box" key={index}>
            <div className="Exp_Left">
              <img src={item.image} alt={item.CompanyName} className="company-logo" />
              <h2 className="company-name">
                {item.CompanyName.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </div>

            <div className="Exp_Middle">
              <div className="Exp_Line"></div>
            </div>

            <div className="Exp_Right">
              <p className="Exp_Date">📅 {item.startDate} – {item.endDate}</p>
              <h3 className="job-role">👨‍💻 {item.JobRole}</h3>
              <p className="Exp_Desc">{item.desc}</p>
            </div>
          </div>
        ))}
   
   <div className="showMoreWrapper">
  <a className='showMoreBtn' onClick={handleShow}>
    {showMore ? "Hide" : "Show Other Experience"}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="36" fill="rgb(255, 255, 255)">
      <path d="M4.99989 13.9999L4.99976 5.00003L6.99976 5L6.99986 11.9999L14.5859 12V6.58581L21.0001 13L14.5859 19.4142L14.5859 14L4.99989 13.9999Z"></path>
    </svg>
  </a>
</div>
  {showMore && (
    <>
  {showMore && (
  <>
    {OtherData.map((item, index) => (
      <div className="Exp_Box" key={index}>
        <div className="Exp_Left">
          <img src={item.image} alt={item.CompanyName} className="company-logo" />
          <h2 className="company-name">
            {item.CompanyName.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>

        <div className="Exp_Middle">
          <div className="Exp_Line"></div>
        </div>

        <div className="Exp_Right">
          <p className="Exp_Date">📅 {item.startDate} – {item.endDate}</p>
          <h3 className="job-role">👨‍💼 {item.JobRole}</h3>
          <p className="Exp_Desc">{item.desc}</p>
        </div>
      </div>
    ))}
  </>
)}
  </>
  )}

      </div>
    </div>
  );
};

export default Exp_Section;