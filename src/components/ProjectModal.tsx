import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const linkLabel = (url: string) => {
  if (url.includes('instagram.com')) return 'View on Instagram';
  if (url.includes('github.com')) return 'View on GitHub';
  return 'Visit site';
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;
    const trigger = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLElement>('button')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onCloseRef.current(); return; }
      if (e.key !== 'Tab') return;
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      trigger?.focus();
    };
    // Only re-run when a different project opens/closes.
  }, [project]);

  if (!project) return null;

  // Unique, non-empty links only (some projects use the same URL for both).
  const links = [...new Set([project.liveUrl, project.githubUrl].filter((u): u is string => !!u))];

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} className="modal glass" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <div className="modal-bar">
          <span className="project-chips">
            <span className="chip chip-sm glass glass-quiet">{project.category}</span>
            <span className="chip chip-sm glass glass-quiet">{project.year}</span>
          </span>
          <button className="icon-btn" onClick={onClose} aria-label="Close project details"><X size={18} /></button>
        </div>

        <div className="modal-body">
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="modal-sub">{project.subtitle}</p>

          <div className="modal-hero">
            <img src={project.heroImage} alt="" referrerPolicy="no-referrer" />
          </div>

          {links.length > 0 && (
            <div className="modal-links">
              {links.map((url, i) => (
                <a key={url} className={`btn glass${i === 0 ? ' btn-ink' : ''}`} href={url} target="_blank" rel="noopener noreferrer">
                  {linkLabel(url)} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          )}

          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.fullOverview}</p>
          </div>

          <div className="modal-cols">
            <div className="modal-section glass glass-quiet">
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div className="modal-section glass glass-quiet">
              <h3>Approach</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="modal-section">
            <h3>Tools & focus</h3>
            <ul className="tags">
              {project.technologies.map(t => <li key={t} className="tag">{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
