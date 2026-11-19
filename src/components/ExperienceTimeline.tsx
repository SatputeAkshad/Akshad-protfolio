import { Briefcase, Building2, CalendarDays, CodeXml, GraduationCap, MapPin, Route, type LucideIcon } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Experience } from '../types';
import { SectionHeader } from './SectionHeader';

const KIND_ICON: Record<Experience['kind'], LucideIcon> = {
  work: Briefcase,
  study: GraduationCap,
  self: CodeXml,
};

export const ExperienceTimeline = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHeader icon={Route} title="Where I've been" />
      <ol className="timeline">
        {EXPERIENCES.map(exp => {
          const Icon = KIND_ICON[exp.kind];
          return (
            <li key={`${exp.period}-${exp.role}`} data-depth>
              <span className="timeline-dot glass" aria-hidden="true"><Icon size={17} /></span>
              <article className="timeline-card glass">
                <div className="timeline-top">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline-company">
                      <span className="with-icon"><Building2 size={15} aria-hidden="true" />{exp.company}</span>
                      <span className="with-icon"><MapPin size={15} aria-hidden="true" />{exp.location}</span>
                    </p>
                  </div>
                  <span className="chip chip-sm glass glass-quiet"><CalendarDays size={13} aria-hidden="true" />{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <ul className="tags" aria-label="Skills">
                  {exp.skills.map(skill => <li key={skill} className="tag">{skill}</li>)}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
