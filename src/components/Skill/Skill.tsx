import "./Skill.css";
import { BsCode, BsServer, BsDatabase, BsTools } from "react-icons/bs";

export const Skill = () => {
  return (
    <div className="skills">
      <div className="skills-container">

        <p className="skills-subtitle">SKILLS & EXPERIENCE</p>
        <h2 className="skills-title">Technical Expertise</h2>

        <div className="skills-grid">

      
          <div className="skill-card">
            <BsCode className="icon" />
            <h3>Frontend</h3>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>Bootstrap</span>
              <span>Responsive Design</span>
              <span>Flexbox</span>
              <span>CSS Grid</span>
            </div>
          </div>

         
          <div className="skill-card">
            <BsServer className="icon" />
            <h3>Backend</h3>

            <div className="tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
              <span>Nodemailer</span>
              <span>JWT Authentication</span>
            </div>
          </div>

         
          <div className="skill-card">
            <BsDatabase className="icon" />
            <h3>Databases</h3>

            <div className="tags">
              <span>MySQL</span>
              <span>Draw.io</span>
            </div>
          </div>

        
          <div className="skill-card">
            <BsTools className="icon" />
            <h3>Tools</h3>

            <div className="tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Scrum</span>
              <span>Trello</span>
              <span>ES6+</span>
              <span>Postman</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};