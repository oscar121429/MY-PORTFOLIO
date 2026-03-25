import "./Hero.css";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">

        
        <div className="hero-left">
          <p className="hero-subtitle">Hi, I'm</p>

          <h1 className="hero-title">
            Oscar Torres
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            I'm a <span className="org">full stack developer</span> based in Málaga, passionate about building fast, scalable, and well-designed web applications. I enjoy working across the entire stack — from intuitive user interfaces to robust backend APIs — always focusing on clean, efficient, and maintainable solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
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