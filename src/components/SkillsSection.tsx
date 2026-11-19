import {
  Atom, Bot, Braces, CalendarDays, CodeXml, Coffee, GitBranch, Image, Palette, PenTool,
  Server, Shapes, ShoppingBag, Sparkles, TrendingUp, Wrench, Zap, type LucideIcon,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

// One icon per category, in the same order as SKILL_CATEGORIES.
const CATEGORY_ICONS: LucideIcon[] = [CodeXml, PenTool, Wrench];

// One icon per skill, keyed by its name in SKILL_CATEGORIES. Unknown names fall back to Sparkles.
const SKILL_ICONS: Record<string, LucideIcon> = {
  'React': Atom,
  'TypeScript': Braces,
  'CSS & Tailwind': Palette,
  'Node.js & Express': Server,
  'Java, C++ & SQL': Coffee,
  'Content management': CalendarDays,
  'Brand curation': Sparkles,
  'Social media growth': TrendingUp,
  'E-commerce': ShoppingBag,
  'Git & GitHub': GitBranch,
  'Vite': Zap,
  'Photoshop & Illustrator': Image,
  'AI tools': Bot,
};

export const SkillsSection = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHeader icon={Shapes} title="What I work with" />
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICONS[i] ?? Wrench;
          return (
            <div key={cat.title} data-depth>
              <div className="skills-panel glass d3">
                <h3><Icon size={18} aria-hidden="true" />{cat.title}</h3>
                <ul>
                  {cat.skills.map(skill => {
                    const SkillIcon = SKILL_ICONS[skill.name] ?? Sparkles;
                    return (
                      <li key={skill.name}>
                        <span className="skill-icon glass glass-quiet" aria-hidden="true"><SkillIcon size={16} /></span>
                        <div>
                          <strong>{skill.name}</strong>
                          <span>{skill.description}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
