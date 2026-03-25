import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-container">

        <h2 className="exp-title">Professional Experience</h2>
        <p className="exp-subtitle">
          Experience in web development and project coordination, combining technical expertise with strong organizational skills.
        </p>

        <div className="timeline">

       
          <div className="timeline-item left">
            <div className="content">
              <span className="date">2026</span>
              <h3>Full Stack Developer</h3>
              <h4>Bruver, S.L.</h4>

              <p>
                Developed full stack web applications using React, Node.js, and MySQL. 
                Designed and implemented REST APIs and business logic for managing bookings and services.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

        
          <div className="timeline-item right">
            <div className="content">
              <span className="date">2018 - 2025</span>
              <h3>Receptionist / Coordinator</h3>
              <h4>Club de Raqueta Benalmádena</h4>

              <p>
                Managed the club’s booking platform, handled incidents, and improved internal processes. 
                Organized events and tournaments while coordinating daily operations and providing customer support.
              </p>

              <div className="tags">
                <span>Web Management</span>
                <span>Event Planning</span>
                <span>Organization</span>
                <span>Teamwork</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};