import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.socials.github, icon: Github },
  { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: Linkedin },
  { label: 'Instagram', href: PERSONAL_INFO.socials.instagram, icon: Instagram },
];

export const SocialLinks = ({ className }: { className: string }) => (
  <div className={className}>
    {LINKS.map(({ label, href, icon: Icon }) => (
      <a key={label} className="social chip glass" href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={15} aria-hidden="true" />
        {label}
        <ArrowUpRight className="arrow" size={13} aria-hidden="true" />
      </a>
    ))}
  </div>
);
