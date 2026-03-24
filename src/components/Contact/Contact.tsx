

import "./Contact.css";
import { BsEnvelope, BsTelephone, BsGeoAlt, BsSend } from "react-icons/bs";

export const Contact = () => {
  return (
    <section className="contact">

      {/* HEADER */}
      <div className="contact-header">
        <p className="contact-subtitle">PONTE EN CONTACTO</p>
        <h2>Conectemos</h2>
        <p className="contact-text">
          Cuéntame qué estás construyendo o en qué necesitas ayuda.
        </p>
      </div>

      {/* CARD */}
      <div className="contact-card">

        {/* LEFT */}
        <div className="contact-left">
          <h3>Contacto</h3>

          <p>
            Si tienes una idea, proyecto o necesitas ayuda con desarrollo web,
            estaré encantado de escucharte y ayudarte.
          </p>

          <div className="contact-info">
            <div>
              <BsEnvelope />
              <span>torresbausela@gmail.com</span>
            </div>

            <div>
              <BsTelephone />
              <span>+34 673 154 960</span>
            </div>

            <div>
              <BsGeoAlt />
              <span>Málaga, España</span>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:torresbausela@gmail.com">
              Enviar email
            </a>

            <a
              href="https://wa.me/34673154960"
              target="_blank"
              className="whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <form>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />

            <label>Email</label>
            <input type="email" placeholder="Tu email" />

            <label>Mensaje</label>
            <textarea placeholder="Tu mensaje" />

            <button type="submit">
              Enviar mensaje <BsSend />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
