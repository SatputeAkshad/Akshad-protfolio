import { Project, Experience, SkillCategory } from '../types';

// Page sections in the order they appear — drives the nav and scroll spy.
export const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export const PERSONAL_INFO = {
  fullName: "Akshad Satpute",
  role: "BCA student & content manager",
  location: "Pune, India",
  availability: "Open to internships & collaborations",
  bio: [
    "I'm a BCA (Bachelor of Computer Applications) 2nd year student and content manager based in Pune, India.",
    "I manage content strategy, visual branding and community for the Instagram handles @__stick.with.me and @quote.it7, while co-founding stickwithme.shop and building modern web applications.",
    "My goal is to combine computer science fundamentals, content and software development into digital experiences that have real impact."
  ],
  socials: {
    github: "https://github.com/SatputeAkshad",
    linkedin: "https://www.linkedin.com/in/akshad-satpute7",
    instagram: "https://www.instagram.com/isthat_akshad",
    email: "akshadsatpute@gmail.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "stick-with-me",
    title: "stickwithme.shop",
    subtitle: "Co-founder · E-commerce storefront",
    category: "Business",
    year: "2026",
    description: "An e-commerce brand for custom stickers, graphic apparel and lifestyle merchandise, co-founded and built from the ground up.",
    fullOverview: "As co-founder of stickwithme.shop, I lead storefront development, e-commerce architecture, content strategy and growth marketing.",
    challenge: "Designing a fast, direct-to-consumer shopping experience with seamless mobile navigation and a product catalogue that's easy to manage.",
    solution: "Built a responsive online store with clear product showcases, quick ordering flows and custom product visualisers.",
    technologies: ["React", "TypeScript", "E-commerce", "Content management", "Brand strategy"],
    heroImage: "/stickwithme-banner.jpg",
    liveUrl: "https://stickwithme.shop",
  },
  {
    id: "content-manager-brand",
    title: "Content & brand curation",
    subtitle: "Social media strategy for @__stick.with.me and @quote.it7",
    category: "Content",
    year: "2026",
    description: "Content management, visual storytelling and audience engagement for two active Instagram accounts.",
    fullOverview: "Managing content pipelines, graphic assets, brand tone and community engagement for @__stick.with.me and @quote.it7 — focused on a consistent visual identity, planned posting schedules and audience growth.",
    challenge: "Keeping a high posting frequency and a cohesive look across multiple handles while tracking what actually engages the audience.",
    solution: "Content calendars, reusable graphic templates and targeted campaigns that widened reach and lifted follower interaction.",
    technologies: ["Instagram strategy", "Content calendars", "Graphic design", "Brand growth"],
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://instagram.com/__stick.with.me",
    githubUrl: "https://instagram.com/quote.it7",
  },
  {
    id: "bca-student-profile",
    title: "Academic & tech projects",
    subtitle: "Bachelor of Computer Applications — 2nd year",
    category: "Student",
    year: "2026",
    description: "Coursework and projects across data structures, object-oriented programming, databases and full-stack web development.",
    fullOverview: "Currently pursuing a BCA in Pune, combining core computer science — data structures & algorithms, OOP in Java and C++, and database management — with modern web development in React, TypeScript and Node.js.",
    challenge: "Turning classroom theory and database fundamentals into real, working web applications.",
    solution: "A growing set of web apps, algorithm visualisers and database tools that put the coursework into practice.",
    technologies: ["Data structures", "Java & C++", "React & TypeScript", "SQL / DBMS"],
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/SatputeAkshad",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    kind: "work",
    period: "2025 — Present",
    role: "Co-founder & technical lead",
    company: "stickwithme.shop",
    location: "Pune",
    description: "Leading storefront development, brand architecture, product experience and growth strategy for a direct-to-consumer e-commerce brand.",
    skills: ["E-commerce", "React & TypeScript", "Brand strategy"]
  },
  {
    kind: "study",
    period: "2024 — Present",
    role: "BCA student & developer",
    company: "Savitribai Phule Pune University",
    location: "Pune",
    description: "Studying data structures, object-oriented programming (Java/C++), DBMS and full-stack web development.",
    skills: ["Data structures", "Java & C++", "SQL / DBMS"]
  },
  {
    kind: "study",
    period: "2023 — 2024",
    role: "Frontend learner",
    company: "Academic & self-driven projects",
    location: "Pune",
    description: "Completed first-year coursework with distinction while building interactive frontend projects and learning modern web frameworks.",
    skills: ["HTML & CSS", "JavaScript", "C"]
  },
  {
    kind: "self",
    period: "2023",
    role: "Started coding",
    company: "Self-taught",
    location: "Pune",
    description: "Began learning web design, programming logic and Git by building small personal projects.",
    skills: ["Web development", "C", "Git"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development",
    skills: [
      { name: "React", description: "Component architecture, hooks, performance" },
      { name: "TypeScript", description: "Strict typing, interfaces, API contracts" },
      { name: "CSS & Tailwind", description: "Responsive layout, design tokens" },
      { name: "Node.js & Express", description: "REST APIs and server routes" },
      { name: "Java, C++ & SQL", description: "OOP, data structures, databases" }
    ]
  },
  {
    title: "Content & strategy",
    skills: [
      { name: "Content management", description: "Pipelines and social media calendars" },
      { name: "Brand curation", description: "Visual identity, copy and brand voice" },
      { name: "Social media growth", description: "Analytics, engagement and community" },
      { name: "E-commerce", description: "Catalogue content and marketing banners" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", description: "Version control and collaboration" },
      { name: "Vite", description: "Build tooling and dev servers" },
      { name: "Photoshop & Illustrator", description: "Graphics and brand assets" },
      { name: "AI tools", description: "Prompting and AI-assisted workflows" }
    ]
  }
];
