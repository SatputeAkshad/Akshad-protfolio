import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'playground', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#B5B5B5] min-h-screen font-sans selection:bg-[#FF5A00] selection:text-black antialiased relative overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Trailing Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="space-y-12">
        <HeroSection
          onExploreWork={() => handleNavigate('work')}
          onContactClick={() => handleNavigate('contact')}
        />

        <AboutSection />

        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

        <InteractivePlayground />

        <ExperienceTimeline />

        <SkillsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
