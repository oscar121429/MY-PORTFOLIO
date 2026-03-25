import "./Contact.css";
import { BsEnvelope, BsTelephone, BsGeoAlt, BsSend } from "react-icons/bs";
import { useEffect, useRef } from "react";

export const Contact = () => {

  const contactRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const elements = contactRef.current?.querySelectorAll(
          ".contact-left, .contact-right"
        );

        elements?.forEach((el) => el.classList.add("show"));
      }
    },
    { threshold: 0.2 }
  );

  if (contactRef.current) {
    observer.observe(contactRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section className="contact" ref={contactRef}>

     
      <div className="contact-header">
        <p className="contact-subtitle">GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <p className="contact-text">
          Tell me about your project or how I can help you.
        </p>
      </div>

  
      <div className="contact-card">

        
        <div className="contact-left">
          <h3>Contact</h3>

          <p>
            If you have an idea, a project, or need help with web development,
            feel free to reach out — I’d be happy to hear from you.
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
              <span>Málaga, Spain</span>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:torresbausela@gmail.com">
              Send Email
            </a>

            <a
              href="https://wa.me/34673154960?text=Hi%20Oscar%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

       
        <div className="contact-right">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="Your email" />

            <label>Message</label>
            <textarea placeholder="Your message" />

            <button type="submit">
              Send Message <BsSend />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};