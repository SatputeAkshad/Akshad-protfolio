import { useCallback, useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollProgress } from './components/ScrollProgress';
import { Backdrop } from './components/Backdrop';
import { useScroll3D } from './useScroll3D';
import { Project } from './types';
import { SECTIONS } from './data/portfolioData';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll spy: a section is "active" when it crosses a band near the top of the viewport.
  useEffect(() => {
    const ids = ['hero', ...SECTIONS.map(s => s.id)];
    const elements = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    elements.forEach(el => observer.observe(el));

    // The last section is often too short to reach the band; mark it active at page bottom.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiveSection(ids[ids.length - 1]);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Scroll-linked 3D transforms, backdrop parallax and glass highlights.
  useScroll3D();

  const handleNavigate = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);

  // Stable reference so the modal's effect doesn't re-run (and steal focus) on every App render.
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <Backdrop />
      <ScrollProgress />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main id="main-content" tabIndex={-1}>
        <HeroSection onExploreWork={() => handleNavigate('work')} onContactClick={() => handleNavigate('contact')} />
        <FeaturedProjects onSelectProject={setSelectedProject} />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
