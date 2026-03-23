import "./Projects.css";
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsArrowRight } from "react-icons/bs";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <p className="projects-subtitle">PROYECTOS DESTACADOS</p>
      <h2 className="projects-title">Muestra de Trabajos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            
            <div className="project-image">
              <img src={project.images[0]} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <a href={project.github} target="_blank" className="github-link">
                  <BsGithub /> Código
                </a>

                <button
                  className="details-btn"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  Ver detalles <BsArrowRight />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};