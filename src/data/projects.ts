export const projects = [
  {
    id: "bruver",

    title: "Bruver",
    subtitle: "Backend de gestión de citas",

    description:
      "Aplicación full stack para la gestión de citas en una peluquería canina real, con sistema de usuarios y panel de administración.",

    longDescription: [
      "Este proyecto consiste en el desarrollo de una aplicación web full stack para la gestión de citas en una peluquería canina real.",
      "El sistema permite a los clientes registrarse y reservar servicios de forma sencilla, mientras que los trabajadores pueden gestionar las citas desde un panel interno con vistas diarias, semanales y mensuales.",
      "Además, se implementó un panel de administración que permite tener un control global del negocio.",
    ],

    features: [
      {
        title: "Autenticación",
        text: "Sistema de login con roles (cliente, trabajador y administrador) usando JWT.",
      },
      {
        title: "Gestión de citas",
        text: "Creación y administración de citas con vistas diaria, semanal y mensual.",
      },
      {
        title: "Panel de trabajador",
        text: "Gestión de horarios, citas y servicios.",
      },
      {
        title: "Dashboard admin",
        text: "Control global del negocio y gestión de usuarios.",
      },
    ],

    techDetails: {
      frontend: ["React", "JavaScript", "CSS", "Bootstrap", "React-bug-calendar"],
      backend: ["Node.js", "Express"],
      database: ["MySQL"],
      auth: ["JWT"],
    },

    tech: [
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "React",
      "Nodemailer",
    ],

    github: "https://github.com/reposocratech/MVP-Bruver",
    live: "https://www.bruver.es/", 

    images: [
      "/images/bruver1.png",
      "/images/bruver2.png",
      "/images/bruver3.png",
      "/images/bruver4.png",
      "/images/bruver5.png",
      "/images/bruver6.png",
    ],

    year: "2026",
    category: "Full Stack App",
    role: "Solo",
  },
];