import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDetail.css";
import { BsGithub, BsBoxArrowUpRight, BsArrowLeft } from "react-icons/bs";

export const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [current, setCurrent] = useState(0);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <p>Project not found</p>;

  const next = () => {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail">

      <button className="back-btn" onClick={() => navigate(-1)}>
        <BsArrowLeft /> Back
      </button>

      
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="project-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <BsGithub /> Code
          </a>

          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">
              <BsBoxArrowUpRight /> Live Demo
            </a>
          )}
        </div>

        <div className="project-meta">
          <div>
            <span>Year</span>
            <p>{project.year}</p>
          </div>

          <div>
            <span>Category</span>
            <p>{project.category}</p>
          </div>

          <div>
            <span>Role</span>
            <p>{project.role}</p>
          </div>
        </div>
      </div>

     
      <div className="carousel">
        <button onClick={prev}>‹</button>

        <img src={project.images[current]} alt="project" />

        <button onClick={next}>›</button>
      </div>

     
      <div className="project-section">
        <h2>Overview</h2>

        {project.longDescription.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      
      <div className="project-section">
        <h2>Key Features</h2>

        <div className="features">
          {project.features.map((f, i) => (
            <div key={i} className="feature">
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="tech-box">
        <h2>Technical Details</h2>

        <div className="tech-grid">

          <div>
            <h4>Frontend</h4>
            {project.techDetails.frontend.map(t => <span key={t}>{t}</span>)}
          </div>

          <div>
            <h4>Backend</h4>
            {project.techDetails.backend.map(t => <span key={t}>{t}</span>)}
          </div>

          <div>
            <h4>Database</h4>
            {project.techDetails.database.map(t => <span key={t}>{t}</span>)}
          </div>

          <div>
            <h4>Authentication</h4>
            {project.techDetails.auth.map(t => <span key={t}>{t}</span>)}
          </div>

        </div>

        <div className="tech-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <BsGithub /> View Source Code
          </a>

          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">
              Visit Live Project
            </a>
          )}
        </div>
      </div>

    </div>
  );
};