import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section className="skills-section " id='skillPage'>
      <div className="container">
        <h2 className="section-heading ">Tools In My Inventory 🛠️</h2>
        
        <div className="skills-box">
          <h3 className="skills-title">Skills</h3>
          
          <div className="skills-grid">
     
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo" />
              <span className="skill-name">HTML5</span>
            </div>
      
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo" />
              <span className="skill-name">CSS3</span>
            </div>
            
        
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
              <span className="skill-name">JavaScript</span>
            </div>
            
       
            <div className="skill-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="skill-logo" />
              <span className="skill-name">React</span>
            </div>
            
        
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="skill-logo" />
              <span className="skill-name">WordPress</span>
            </div>
            
     
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="skill-logo" />
              <span className="skill-name">Bootstrap</span>
            </div>
            
        
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-logo" />
              <span className="skill-name">Tailwind CSS</span>
            </div>
            

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="skill-logo" />
              <span className="skill-name">Photoshop</span>
            </div>
            

            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="skill-logo" />
              <span className="skill-name">Illustrator</span>
            </div>
            
    
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="skill-logo" />
              <span className="skill-name">Figma</span>
            </div>
            
            
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="skill-logo" />
              <span className="skill-name">Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;