import "./Footer.css";
import { BsGithub, BsLinkedin, BsInstagram, BsEnvelope } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-left">
          <h3 className="footer-logo">{`<oscar/>`}</h3>

          <h4>Oscar Torres</h4>
          <p>
            Full Stack developer who likes building APIs and data services that feel dependable on busy days and easy to iterate on the quiet ones.
          </p>

        <div className="socials">

  <a href="https://github.com/oscar121429" title="GitHub" rel="noopener noreferrer">
    <BsGithub />
  </a>

  <a href="https://www.linkedin.com/in/oscar-torres-bausela/" title="linkedin" rel="noopener noreferrer">
    <BsLinkedin />
  </a>

  <a href="https://instagram.com/oscar.t_b" title="Instagram" rel="noopener noreferrer">
    <BsInstagram />
  </a>

  <a href="mailto:torresbausela@gmail.com" title="Gmail"> 
    <BsEnvelope />
  </a>

</div>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><BsEnvelope /> torresbausela@gemail.com</p>

          <p>
            Open to interesting backend and fronted work — shipping features, tuning performance, or untangling tricky bugs.
          </p>

          <button className="footer-btn">Contact Me</button>
        </div>
      </div>

      
      <div className="footer-bottom">
        © 2026 Oscar Torres. All rights reserved.
      </div>
    </footer>
  );
};