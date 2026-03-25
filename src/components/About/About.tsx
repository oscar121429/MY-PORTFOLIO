import "./About.css";
import profileImg from "../../assets/images/profile.jpg";
import { useEffect, useRef } from "react";

export const About = () => {

  const aboutRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const elements = aboutRef.current?.querySelectorAll(
          ".about-left, .about-right"
        );

        elements?.forEach((el) => el.classList.add("show"));
      }
    },
    { threshold: 0.2 }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <div className="about" ref={aboutRef}>
      <div className="about-container">

       
        <div className="about-left">
          <div className="about-card">
            <img
              src={profileImg}
              alt="profile"
            />
            <div className="about-overlay">
              <p>ABOUT ME</p>
              <h3>My Journey</h3>
            </div>
          </div>
        </div>

    
        <div className="about-right">
          <p className="about-subtitle">ABOUT ME</p>

          <h2 className="about-title">
            Building end-to-end solutions
          </h2>

          <p>
            Hi, I'm <span>Oscar Torres</span>, a full stack developer based in Málaga. 
            I enjoy turning ideas into functional web applications, focusing both on user experience in the frontend and efficient, scalable logic in the backend.
          </p>

          <p>
            I work with modern technologies such as React, Node.js, and SQL databases, building applications that are scalable, maintainable, and well-structured.
          </p>

          <p>
            Outside of coding, I enjoy sports — especially football — which has taught me the value of teamwork, consistency, and discipline, qualities I bring into my work as a developer.
          </p>
        </div>

      </div>
    </div>
  );
};