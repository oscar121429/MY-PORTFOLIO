import { useState, useEffect } from "react";
import "./Navbar.css";


const sections = ["home", "about", "skills", "experience", "projects", "contact"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detectar sección en scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">{`<dev/>`}</span>
        </div>

        <div className="nav-center">
          <ul className="nav-pill">
            {sections.map((sec) => (
              <li key={sec} className={active === sec ? "active" : ""}>
                <a href={`#${sec}`}>{sec}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <button className="menu-btn" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-content">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <ul>
              {sections.map((sec) => (
                <li
                  key={sec}
                  className={active === sec ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  <a href={`#${sec}`}>{sec}</a>
                </li>
              ))}
            </ul>

            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      )}
    </>
  );
};