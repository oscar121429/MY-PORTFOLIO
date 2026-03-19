
import "./Hero.css";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">

        
        <div className="hero-left">
          <p className="hero-subtitle">Hola, soy</p>

          <h1 className="hero-title">
            Oscar Torres
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            Soy un <span className="org">desarrollador full stack</span> de Málaga apasionado por crear aplicaciones web rápidas, escalables y bien diseñadas. Disfruto construyendo desde interfaces intuitivas hasta APIs robustas, siempre buscando soluciones eficientes y mantenibles.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Ver proyectos →
            </a>

            <a href="#contact" className="btn-secondary">
              Contáctame
            </a>
          </div>

          <div className="hero-socials">
            <BsGithub />
            <BsLinkedin />
            <BsEnvelope />
          </div>
        </div>

      
        <div className="hero-right">
          <div className="circle">
            <span>OSC</span>
          </div>
        </div>

      </div>
    </div>
  );
};
