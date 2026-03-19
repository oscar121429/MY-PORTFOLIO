import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-container">

        <h2 className="exp-title">Trayectoria profesional</h2>
        <p className="exp-subtitle">
          Experiencia en desarrollo web y gestión de proyectos, combinando habilidades técnicas y organizativas.
        </p>

        <div className="timeline">

          {/* ITEM 1 */}
          <div className="timeline-item left">
            <div className="content">
              <span className="date">2026</span>
              <h3>Full Stack Developer</h3>
              <h4>Bruver, S.L.</h4>

              <p>
                Desarrollo de aplicaciones web completas utilizando React, Node.js y MySQL. 
                Implementación de APIs REST y lógica de negocio para la gestión de reservas y servicios.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="timeline-item right">
            <div className="content">
              <span className="date">2018 - 2025</span>
              <h3>Recepcionista / Coordinador</h3>
              <h4>Club de Raqueta Benalmádena</h4>

              <p>
                Gestión de la plataforma web de reservas, resolución de incidencias y mejora de procesos. 
                Organización de eventos, torneos y actividades, además de atención al cliente y coordinación general del club.
              </p>

              <div className="tags">
                <span>Gestión web</span>
                <span>Eventos</span>
                <span>Organización</span>
                <span>Trabajo en equipo</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};