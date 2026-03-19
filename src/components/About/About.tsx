import "./About.css";
import profileImg from "../../assets/images/profile.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">

        {/* LEFT (imagen) */}
        <div className="about-left">
          <div className="about-card">
            <img
              src={profileImg}
              alt="profile"
            />
            <div className="about-overlay">
              <p>ACERCA DE MÍ</p>
              <h3>Mi viaje</h3>
            </div>
          </div>
        </div>

        {/* RIGHT (texto) */}
        <div className="about-right">
          <p className="about-subtitle">ACERCA DE MÍ</p>

          <h2 className="about-title">
            Construyendo soluciones completas
          </h2>

          <p>
            Hola, soy <span>Oscar Torres</span>, desarrollador full stack en Málaga. 
            Me gusta transformar ideas en aplicaciones web funcionales, cuidando tanto la experiencia de usuario en el frontend como la lógica y eficiencia del backend.
          </p>

          <p>
            Trabajo con tecnologías modernas como React, Node.js y bases de datos SQL, creando aplicaciones escalables, mantenibles y bien estructuradas.
          </p>

          <p>
            Fuera del código, me gusta el deporte y especialmente el fútbol, lo que me ha enseñado la importancia del trabajo en equipo, la constancia y la disciplina.
          </p>
        </div>

      </div>
    </div>
  );
};