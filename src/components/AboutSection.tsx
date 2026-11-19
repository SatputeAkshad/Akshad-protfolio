import { CodeXml, Compass, GraduationCap, MapPin, Sparkles, User, type LucideIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const FACTS: [LucideIcon, string, string][] = [
  [MapPin, 'Based in', 'Pune, India (IST)'],
  [GraduationCap, 'Studying', 'BCA, 2nd year'],
  [Compass, 'Focus', 'Web development & content'],
  [CodeXml, 'Core stack', 'React, TypeScript, Java, SQL'],
  [Sparkles, 'Status', 'Open to internships'],
];

export const AboutSection = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader icon={User} title="The person behind the work" />
      <div className="about-grid">
        <div data-depth>
          <div className="about-copy glass d3">
            <p className="about-lead">I build digital experiences where design, technology and storytelling meet.</p>
            {PERSONAL_INFO.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
        </div>

        <div data-depth>
          <div className="about-side d3">
            <div className="about-photo glass">
              <div className="about-photo-inner">
                <img src="https://i.ibb.co/RGB0B4vn/22127.jpg" alt="Akshad Satpute outdoors" loading="lazy" referrerPolicy="no-referrer" />
              </div>
            </div>
            <dl className="facts glass">
              {FACTS.map(([Icon, k, v]) => (
                <div key={k}><dt><Icon size={16} aria-hidden="true" />{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);
