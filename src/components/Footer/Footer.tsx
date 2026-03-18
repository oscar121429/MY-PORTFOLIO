import "./Footer.css";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsEnvelope } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3 className="footer-logo">{`<amidat/>`}</h3>

          <h4>Ammy Ogunbiyi</h4>
          <p>
            Backend developer who likes building APIs and data services that feel dependable on busy days and easy to iterate on the quiet ones.
          </p>

          <div className="socials">
            <BsGithub />
            <BsLinkedin />
            <BsTwitter />
            <BsInstagram />
            <BsEnvelope />
          </div>
        </div>

        {/* CENTER */}
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

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><BsEnvelope /> your@email.com</p>

          <p>
            Open to interesting backend work — shipping features, tuning performance, or untangling tricky bugs.
          </p>

          <button className="footer-btn">Contact Me</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Your Name. All rights reserved.
      </div>
    </footer>
  );
};