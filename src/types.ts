export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business' | 'Content' | 'Student';
  year: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  kind: 'work' | 'study' | 'self';
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; description: string }[];
}
