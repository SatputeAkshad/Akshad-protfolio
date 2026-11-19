import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: React.ReactNode;
}

export const SectionHeader = ({ icon: Icon, title }: SectionHeaderProps) => (
  <div data-depth>
    <header className="section-head d3">
      <span className="section-icon glass" aria-hidden="true"><Icon size={20} /></span>
      <h2 className="section-title">{title}</h2>
    </header>
  </div>
);
