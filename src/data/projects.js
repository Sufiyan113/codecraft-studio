// ============================================
// PROJECTS DATA — single source of truth
// Edit this file to update projects / case studies
// Routes: /projects/:slug  (e.g. /projects/beelive)
// ============================================

export const projects = [
  {
    id: 1,
    slug: "beelive",
    name: "BeeLive",
    tagline: "IoT-Based Beehive Monitoring & Alert System",
    description:
      "IoT-based beehive monitoring and alert dashboard for real-time hive health tracking.",
    longDescription:
      "BeeLive is an IoT solution for monitoring beehive health in real time. Sensors on the hive collect temperature, humidity, and weight data, which is sent to a dashboard so beekeepers can track conditions and respond to alerts.",
    problem:
      "Beekeepers often discover hive issues only after checking hives in person. Sudden changes in temperature, humidity, or weight can go unnoticed until colony health is already affected. Continuous monitoring without constant site visits is difficult with traditional methods.",
    solution:
      "BeeLive uses ESP32-based sensors (DHT22, HX711, ESP32-CAM) to measure temperature, humidity, and hive weight, with optional camera capture. Data is published over MQTT and visualized on a React dashboard with threshold-based alerts and historical charts so issues can be spotted early.",
    features: [
      "Temperature monitoring",
      "Humidity monitoring",
      "Hive weight monitoring",
      "Real-time dashboard",
      "Threshold-based alerts",
      "Camera monitoring",
      "Historical data visualization",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "ESP32",
      "DHT22",
      "HX711",
      "ESP32-CAM",
      "MQTT",
      "ThingsBoard",
    ],
    // Keep `tech` for existing filter compatibility on the home grid
    tech: ["React", "Tailwind", "ESP32", "IoT"],
    category: "Dashboard",
    image: "/projects/beelive.png",
    additionalImages: [],
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    accentColor: "amber",
    githubUrl: "https://github.com/yourusername/beelive",
    liveUrl: "#",
    outcome:
      "A working IoT monitoring stack with sensor collection, MQTT pipeline, and a React dashboard for real-time and historical hive data. Replace this text with your own outcome notes when ready.",
  },
  {
    id: 2,
    slug: "bloodbridge",
    name: "BloodBridge",
    tagline: "Smart Blood Donation Management System",
    description:
      "Smart blood donation management platform connecting donors with those in need.",
    longDescription:
      "BloodBridge is a web platform for managing blood donation workflows. It supports donor and hospital records, doctor approval flows, emergency alerts, and role-based dashboards so requests and donors can be coordinated more clearly.",
    problem:
      "Blood donation requests, donor availability, and hospital needs are often handled through scattered calls and spreadsheets. Matching donors quickly during emergencies and keeping approvals and notifications consistent is hard without a shared system.",
    solution:
      "BloodBridge centralizes donor and hospital management, doctor approval, OTP-based authentication, and SMS notifications. Role-based dashboards give each user type the views they need to act on requests and emergencies.",
    features: [
      "Donor management",
      "Hospital management",
      "Doctor approval",
      "Emergency alerts",
      "OTP authentication",
      "SMS notifications",
      "Role-based dashboards",
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    tech: ["Flask", "Python", "HTML/CSS", "JavaScript"],
    category: "Web Application",
    image: "/projects/bloodbridge.png",
    additionalImages: [],
    gradient: "from-red-500/20 via-rose-500/10 to-pink-500/20",
    accentColor: "red",
    githubUrl: "https://github.com/yourusername/bloodbridge",
    liveUrl: "#",
    outcome:
      "A full-stack Flask application covering donation workflows, roles, and notifications. Replace this text with your own outcome notes when ready.",
  },
  {
    id: 3,
    slug: "sprinthub",
    name: "SprintHub",
    tagline: "Multi-Tenant SaaS Agile Project Management Platform",
    description:
      "Multi-tenant SaaS agile project management platform for teams.",
    longDescription:
      "SprintHub is a multi-tenant SaaS platform for agile teams. It supports authentication, team and project management, tasks, and a Kanban board, with role-based access so multiple organizations can use the same product securely.",
    problem:
      "Teams need a place to manage projects, tasks, and sprints without mixing data between organizations. Building authentication, multi-tenancy, and role-based access from scratch is complex for a product aimed at multiple customers.",
    solution:
      "SprintHub provides JWT-based authentication, multi-tenant architecture, team and project management, task tracking, and a Kanban board with role-based access control so each tenant’s data stays isolated.",
    features: [
      "User authentication",
      "Team management",
      "Project management",
      "Task management",
      "Kanban board",
      "Multi-tenant architecture",
      "Role-based access",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "SaaS",
    image: "/projects/sprinthub.png",
    additionalImages: [],
    gradient: "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
    accentColor: "indigo",
    githubUrl: "https://github.com/yourusername/sprinthub",
    liveUrl: "#",
    outcome:
      "A MERN-based multi-tenant project management foundation with auth, teams, projects, tasks, and Kanban. Replace this text with your own outcome notes when ready.",
  },
];

export const techFilters = ["All", "React", "Python", "Dashboard", "SaaS", "IoT"];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
