import { Project, Service, Experience, SkillCategory, Recognition, GalleryItem } from '../types';

export const PERSONAL_INFO = {
  name: "AKSHAD",
  fullName: "Akshad Satpute",
  role: "BCA 2nd YEAR STUDENT & CONTENT MANAGER",
  secondaryRole: "Content Manager & Developer",
  location: "Pune, India",
  availability: "Open for Internships, Content & Projects",
  experienceYears: "2nd Year",
  tagline: "BCA 2nd Year Student & Content Manager building digital experiences and managing social media brand growth.",
  bio: [
    "I'm a BCA (Bachelor of Computer Applications) 2nd Year Student and Content Manager based in Pune, India.",
    "I manage digital content strategy, visual branding, and community curation for Instagram handles like @__stick.with.me and @quote.it7, while co-founding stickwithme.shop and developing modern web applications.",
    "My goal is to combine computer science principles, content management, and software development into high-impact digital experiences."
  ],
  socials: {
    github: "https://github.com/SatputeAkshad",
    linkedin: "https://www.linkedin.com/in/akshad-satpute7",
    twitter: "https://x.com",
    instagram: "https://instagram.com/__stick.with.me",
    instagram1: "https://instagram.com/__stick.with.me",
    instagram2: "https://instagram.com/quote.it7",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com",
    email: "akshadsatpute@gmail.com"
  },
  stats: [
    { value: "BCA 2nd Yr", label: "Academic Profile" },
    { value: "Content Mgr", label: "Primary Discipline" },
    { value: "2 Handles", label: "Instagram Strategy" },
    { value: "Pune", label: "Current Location" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "stick-with-me",
    title: "STICKWITHME.SHOP",
    subtitle: "Co-Founder & E-Commerce Storefront",
    category: "Business / Startups",
    year: "2026",
    client: "Co-Founder / stickwithme.shop",
    description: "Co-founded stickwithme.shop — an e-commerce brand for custom stickers, graphic apparel, and lifestyle merchandise.",
    fullOverview: "As Co-Founder of stickwithme.shop, I lead technical storefront development, e-commerce architecture, content management strategy, and growth marketing.",
    challenge: "Designing a fast, direct-to-consumer e-commerce experience with seamless mobile navigation and dynamic product catalog management.",
    solution: "Engineered an interactive online store at stickwithme.shop featuring responsive product showcases, quick ordering flows, and custom product visualizers.",
    technologies: ["Business / Startup", "Co-Founder", "Content Management", "E-Commerce", "React", "TypeScript"],
    heroImage: "https://i.ibb.co/Qvgf0Pzb/Create-promotional-banner-for-brand-202608112026.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      "https://i.ibb.co/Qvgf0Pzb/Create-promotional-banner-for-brand-202608112026.jpg"
    ],
    liveUrl: "https://stickwithme.shop",
    githubUrl: "https://github.com/SatputeAkshad",
    awards: ["Co-Founder Business", "Live E-Commerce Store"],
    featured: true
  },
  {
    id: "content-manager-brand",
    title: "CONTENT MANAGER & BRAND CURATION",
    subtitle: "Social Media Strategy for @__stick.with.me & @quote.it7",
    category: "Content Manager",
    year: "2026",
    client: "Instagram & Brand Strategy",
    description: "Content management, visual storytelling, and audience engagement strategy for Instagram accounts @__stick.with.me and @quote.it7.",
    fullOverview: "Managing content pipelines, graphic assets, brand tone, and community engagement for Instagram handles @__stick.with.me and @quote.it7. Focused on consistent visual identity, curated media schedules, and audience growth.",
    challenge: "Maintaining high content frequency and cohesive visual branding across multiple active handles while analyzing audience engagement metrics.",
    solution: "Created content calendars, aesthetic graphic templates, and targeted social media campaigns that expanded brand reach and follower interaction.",
    technologies: ["Content Manager", "Instagram Strategy", "@__stick.with.me", "@quote.it7", "Brand Growth", "Digital Strategy"],
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://instagram.com/__stick.with.me",
    githubUrl: "https://instagram.com/quote.it7",
    awards: ["@__stick.with.me", "@quote.it7"],
    featured: true
  },
  {
    id: "bca-student-profile",
    title: "BCA STUDENT PROFILE",
    subtitle: "Bachelor of Computer Applications — 2nd Year Academic & Tech Projects",
    category: "Student Profile",
    year: "2026",
    client: "Pune University (SPPU) / Personal",
    description: "Academic & project showcase highlighting computer science coursework, data structures, full-stack software development, and database management.",
    fullOverview: "Currently pursuing Bachelor of Computer Applications (BCA 2nd Year) in Pune, India. Combining core computer science concepts—Data Structures & Algorithms, Object-Oriented Programming (Java/C++), and Database Management Systems—with modern web application development using React, TypeScript, and Node.js.",
    challenge: "Translating classroom CS theories and database fundamentals into real-world, high-performance web applications and interactive coding tools.",
    solution: "Engineered a suite of web applications, algorithm visualizers, and database management tools that demonstrate practical software engineering discipline alongside academic rigor.",
    technologies: ["BCA 2nd Year", "Data Structures", "Java & C++", "React & TypeScript", "SQL / DBMS", "Tailwind CSS"],
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://github.com/SatputeAkshad",
    githubUrl: "https://github.com/SatputeAkshad",
    awards: ["BCA 2nd Year Student", "Academic & Project Portfolio"],
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "CREATIVE DEVELOPMENT",
    subtitle: "Interactive Websites & WebGL",
    description: "Building modern, hyper-interactive websites and digital experiences with custom animations, WebGL visualizers, and pixel-perfect responsiveness.",
    tags: ["React / Next.js", "TypeScript", "Canvas / WebGL", "Motion Animations", "Performance Tuning"],
    features: ["Sub-second page load speeds", "Custom kinetic cursor physics", "60fps frame-budget guarantees", "Accessible & SEO optimized"]
  },
  {
    number: "02",
    title: "UI / UX DESIGN",
    subtitle: "Systems & Interfaces",
    description: "Creating intuitive, emotionally resonant, and visually compelling product interfaces designed for clarity, high conversion, and human delight.",
    tags: ["Design Systems", "Prototyping", "User Journeys", "Wireframing", "Information Architecture"],
    features: ["Comprehensive Figma design systems", "High-fidelity interactive prototypes", "WCAG AA contrast compliance", "Micro-interaction specs"]
  },
  {
    number: "03",
    title: "BRAND IDENTITY",
    subtitle: "Visual Direction & Systems",
    description: "Developing memorable visual identities, editorial typography, logo systems, and brand guidelines that set ambitious companies apart.",
    tags: ["Logo Systems", "Typography Pairing", "Brand Guidelines", "Design Tokens", "Packaging Design"],
    features: ["Modular identity toolkits", "Custom typographic lockups", "3D brand mockup renders", "Vector asset pipelines"]
  },
  {
    number: "04",
    title: "FULL-STACK ARCHITECTURE",
    subtitle: "Scalable APIs & Web Apps",
    description: "Engineering robust backend APIs, serverless functions, AI integration, and database systems built for speed and security.",
    tags: ["Node.js / Express", "Gemini AI API", "REST / GraphQL", "Database Schemas", "Cloud Services"],
    features: ["Server-side API key protection", "Real-time streaming routes", "Automated deployment pipelines", "Scalable state management"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2026",
    period: "2025 — PRESENT",
    role: "Co-Founder & Technical Lead",
    company: "stickwithme.shop",
    location: "Pune, India",
    description: "Co-founded stickwithme.shop. Leading direct-to-consumer e-commerce storefront development, brand architecture, product experience, and growth strategy.",
    skills: ["Co-Founder", "E-Commerce", "React & TypeScript", "Tailwind CSS", "Brand Strategy"],
    highlight: true
  },
  {
    year: "2026",
    period: "2024 — PRESENT",
    role: "BCA 2nd Year Student & Developer",
    company: "Savitribai Phule Pune University (SPPU)",
    location: "Pune, India",
    description: "Pursuing Bachelor of Computer Applications (BCA) with focus on Data Structures, Object-Oriented Programming (Java/C++), DBMS, and modern full-stack web development.",
    skills: ["BCA 2nd Year", "Data Structures", "Java & C++", "React & TypeScript", "SQL / DBMS"],
    highlight: true
  },
  {
    year: "2025",
    period: "2023 — 2024",
    role: "BCA 1st Year & Frontend Learner",
    company: "Academic Projects & Self-Driven",
    location: "Pune, India",
    description: "Completed 1st Year BCA coursework with distinction. Built interactive frontend projects and learned modern web frameworks.",
    skills: ["HTML5/CSS3", "JavaScript", "C Programming", "DBMS Fundamentals"],
    highlight: false
  },
  {
    year: "2024",
    period: "2023",
    role: "Web Development & Coding Enthusiast",
    company: "Self-Taught & Projects",
    location: "Pune, India",
    description: "Started journey in software development, learning web design, programming logic, and building personal portfolio projects.",
    skills: ["Web Development", "UI Prototyping", "C Language", "Git Basics"],
    highlight: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DEVELOPMENT",
    skills: [
      { name: "React / React 19", level: 95, description: "Component architecture, hooks, server routes, performance optimization" },
      { name: "TypeScript", level: 92, description: "Strict typing, generics, robust interfaces & API contracts" },
      { name: "Tailwind CSS v4", level: 98, description: "Utility-first layout, custom design tokens, responsive bento grids" },
      { name: "Node.js & Express", level: 88, description: "RESTful server routes, Gemini API integration, secure proxies" },
      { name: "Canvas 2D / WebGL", level: 85, description: "Generative art, particles, audio-reactive graphics, custom shaders" },
      { name: "Motion / Animation", level: 94, description: "Keyframe physics, layout transitions, scroll progress, gesture control" }
    ]
  },
  {
    title: "CONTENT & STRATEGY",
    skills: [
      { name: "Content Management", level: 96, description: "Content pipelines, social media calendars, instagram strategy (@__stick.with.me, @quote.it7)" },
      { name: "Brand Strategy & Curation", level: 95, description: "Visual identity guidelines, graphic themes, copy editing & brand voice" },
      { name: "Social Media Growth", level: 92, description: "Audience analytics, engagement tactics, community management & reach" },
      { name: "Digital Storytelling", level: 94, description: "Curated aesthetic lockups, caption writing, visual communication" },
      { name: "E-Commerce Management", level: 90, description: "Storefront content, product catalog management, marketing banners" }
    ]
  },
  {
    title: "TOOLS & WORKFLOW",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Branching strategies, CI/CD actions, version control" },
      { name: "Vite / Build Tools", level: 92, description: "Bundle optimization, module loading, dev server orchestration" },
      { name: "Gemini AI Studio", level: 94, description: "AI integration, prompt engineering, streaming responses" },
      { name: "Photoshop & Illustrator", level: 88, description: "Vector asset creation, photo manipulation, texture overlays" }
    ]
  }
];

export const RECOGNITIONS: Recognition[] = [
  {
    year: "2026",
    title: "Site of the Day",
    organization: "Awwwards & Design Community",
    project: "STICK.WITH.ME E-Commerce",
    badge: "WINNER"
  },
  {
    year: "2025",
    title: "Gold Award for UI/UX Excellence",
    organization: "Indigo Design Awards",
    project: "Kin Studio Monorail",
    badge: "GOLD"
  },
  {
    year: "2025",
    title: "Special Kudos & Developer Award",
    organization: "CSS Design Awards",
    project: "Nord Agency AI Suite",
    badge: "KUDOS"
  },
  {
    year: "2025",
    title: "Best Portfolio & Creative Direction",
    organization: "Behance Curated Gallery",
    project: "Featured in Web Design Category",
    badge: "FEATURED"
  },
  {
    year: "2024",
    title: "1st Place Winner - WebGL Challenge",
    organization: "National Creative Coding Hackathon",
    project: "Arched Pink Audio Canvas",
    badge: "1ST PLACE"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-stick-1",
    title: "STICK WITH ME — PHONE CASES COLLECTION",
    category: "Stick With Me / Business",
    year: "2026",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=800&auto=format&fit=crop",
    description: "Custom anime, gaming, football, and developer vinyl stickers on premium clear phone cases."
  },
  {
    id: "gal-stick-2",
    title: "STICK WITH ME — TECH DEV PHONE CASE",
    category: "Stick With Me / Business",
    year: "2026",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description: "Developer edition clear phone case featuring React, Docker, Python, Linux, and AI vinyl stickers."
  },
  {
    id: "gal-stick-3",
    title: "STICK WITH ME — LAPTOP VINYL STICKERS",
    category: "Stick With Me / Business",
    year: "2026",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    description: "High-grade waterproof vinyl laptop decals featuring GitHub, Star Wars, Akira, Doge, and Matrix designs."
  },
  {
    id: "gal-stick-4",
    title: "STICK WITH ME — HYDRO FLASK BOTTLE",
    category: "Stick With Me / Business",
    year: "2026",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    description: "Stainless steel water bottle covered in code snippets, anime characters, and motivational developer stickers."
  },
  {
    id: "gal-1",
    title: "ORANGE BLOX SPATIAL",
    category: "3D Artwork / Render",
    year: "2026",
    aspectRatio: "square",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description: "Procedural geometry experiment exploring orange monochromatic light reflection on dark metallic surfaces."
  },
  {
    id: "gal-2",
    title: "NOVA SCENE PERFUME",
    category: "Brand Mockup",
    year: "2026",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    description: "Luxury fragrance glass packaging identity design illuminated by warm sunset gradient lighting."
  },
  {
    id: "gal-3",
    title: "ARCHED PINK & LIQUID",
    category: "Generative Art",
    year: "2025",
    aspectRatio: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    description: "Real-time audio reactive shader canvas generating fluid wave patterns and metallic reflections."
  },
  {
    id: "gal-4",
    title: "CYBERNETIC MONUMENT",
    category: "Digital Artwork",
    year: "2025",
    aspectRatio: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    description: "Editorial digital art piece combining brutalist architecture with vivid orange neon highlights."
  },
  {
    id: "gal-5",
    title: "KIN CONCRETE MONOLITH",
    category: "Architecture / UI",
    year: "2025",
    aspectRatio: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    description: "Minimalist concrete spatial study captured in high contrast monochrome."
  },
  {
    id: "gal-6",
    title: "SPECIALTY POUR-OVER",
    category: "Photography & Packaging",
    year: "2024",
    aspectRatio: "square",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    description: "Art direction and packaging design for Field Coffee Co."
  }
];
