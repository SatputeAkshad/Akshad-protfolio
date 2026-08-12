export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Student Profile' | 'Business / Startups' | 'Content Manager';
  year: string;
  client: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  heroImage: string;
  galleryImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  awards?: string[];
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface Experience {
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; description: string }[];
}

export interface Recognition {
  year: string;
  title: string;
  organization: string;
  project: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  imageUrl: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
