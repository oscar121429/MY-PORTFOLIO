export const projects = [
  {
    id: "bruver",

    title: "Bruver",
    subtitle: "Appointment management platform",

    description:
      "Full stack web application for managing appointments in a real dog grooming business, featuring user authentication and an internal management panel.",

    longDescription: [
      "This project is a full stack web application developed for managing appointments in a real dog grooming business.",
      "Customers can register and book services easily, while staff can manage appointments through a dashboard with daily, weekly, and monthly views.",
      "An admin panel was also implemented to provide full control over the system, improving organization and business efficiency.",
    ],

    features: [
      {
        title: "Authentication",
        text: "Role-based authentication system (client, staff, admin) implemented using JWT.",
      },
      {
        title: "Appointment Management",
        text: "Create, view, and manage appointments with daily, weekly, and monthly calendar views.",
      },
      {
        title: "Staff Dashboard",
        text: "Interface for managing schedules, appointments, and services.",
      },
      {
        title: "Admin Dashboard",
        text: "Global system overview with user and business management capabilities.",
      },
    ],

    techDetails: {
      frontend: ["React", "JavaScript", "CSS", "Bootstrap", "React Big Calendar"],
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
    category: "Full Stack Application",
    role: "Solo Developer",
  },
];