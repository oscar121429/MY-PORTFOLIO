import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDetail.css";
import { BsGithub, BsBoxArrowUpRight,  BsArrowLeft } from "react-icons/bs";

export const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [current, setCurrent] = useState(0);

  if (!project) return <p>Proyecto no encontrado</p>;

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
  <BsArrowLeft /> Volver
</button>
      {/* HEADER */}
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="project-buttons">
          <a href={project.github} target="_blank">
            <BsGithub /> Código
          </a>

          {project.live && (
            <a href={project.live} target="_blank" className="live-btn">
              <BsBoxArrowUpRight /> Demo en vivo
            </a>
          )}
        </div>

        <div className="project-meta">
          <div>
            <span>Año</span>
            <p>{project.year}</p>
          </div>

          <div>
            <span>Categoría</span>
            <p>{project.category}</p>
          </div>

          <div>
            <span>Rol</span>
            <p>{project.role}</p>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="carousel">
        <button onClick={prev}>‹</button>

        <img src={project.images[current]} alt="project" />

        <button onClick={next}>›</button>
      </div>

      {/* DESCRIPCIÓN */}
      <div className="project-section">
        <h2>Descripción general</h2>

        {project.longDescription.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      {/* FEATURES */}
      <div className="project-section">
        <h2>Características principales</h2>

        <div className="features">
          {project.features.map((f, i) => (
            <div key={i} className="feature">
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TECH DETAILS */}
      <div className="tech-box">
        <h2>Detalles técnicos</h2>

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
            <h4>Base de datos</h4>
            {project.techDetails.database.map(t => <span key={t}>{t}</span>)}
          </div>

          <div>
            <h4>Auth</h4>
            {project.techDetails.auth.map(t => <span key={t}>{t}</span>)}
          </div>

        </div>

        <div className="tech-buttons">
          <a href={project.github} target="_blank">
            <BsGithub /> Ver código fuente
          </a>

          {project.live && (
            <a href={project.live} target="_blank" className="live-btn">
              Visitar proyecto
            </a>
          )}
        </div>
      </div>

    </div>
  );
};