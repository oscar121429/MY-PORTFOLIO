import "./Skill.css";
import { BsCode, BsServer, BsDatabase, BsTools } from "react-icons/bs";

export const Skill = () => {
  return (
    <div className="skills">
      <div className="skills-container">

        <p className="skills-subtitle">HABILIDADES Y EXPERIENCIA</p>
        <h2 className="skills-title">Experiencia técnica</h2>

        <div className="skills-grid">

          {/* FRONTEND */}
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
              <span>Responsive</span>
              <span>Flexbox</span>
              <span>Grid</span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-card">
            <BsServer className="icon" />
            <h3>Backend</h3>

            <div className="tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
              <span>Nodemeiler</span>
              <span>JWT</span>
            </div>
          </div>

          {/* DATABASE */}
          <div className="skill-card">
            <BsDatabase className="icon" />
            <h3>Bases de datos</h3>

            <div className="tags">
              <span>MySQL</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-card">
            <BsTools className="icon" />
            <h3>Herramientas</h3>

            <div className="tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Scrum</span>
              <span>ES6</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};