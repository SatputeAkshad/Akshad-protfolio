import type { CSSProperties } from 'react';
import { ArrowUpRight, GraduationCap, Layers, Megaphone, Store, type LucideIcon } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeader } from './SectionHeader';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORY_ICON: Record<Project['category'], LucideIcon> = {
  Business: Store,
  Content: Megaphone,
  Student: GraduationCap,
};

export const FeaturedProjects = ({ onSelectProject }: FeaturedProjectsProps) => (
  <section id="work" className="section">
    <div className="container">
      <SectionHeader icon={Layers} title="Selected projects" />
      {/* Cards stick and stack; each tilts back as the next slides over it (see --cover). */}
      <ul className="stack">
        {PROJECTS.map((project, i) => {
          const CategoryIcon = CATEGORY_ICON[project.category];
          return (
            <li key={project.id} className="stack-item" data-stack style={{ '--i': i } as CSSProperties}>
              <button
                type="button"
                className="project-card glass"
                onClick={() => onSelectProject(project)}
                aria-label={`${project.title} — view details`}
              >
                <div className="project-thumb">
                  <img src={project.heroImage} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="project-chips">
                    <span className="chip chip-sm glass glass-quiet"><CategoryIcon size={13} aria-hidden="true" />{project.category}</span>
                    <span className="chip chip-sm glass glass-quiet">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-more">View details <ArrowUpRight size={17} aria-hidden="true" /></span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
