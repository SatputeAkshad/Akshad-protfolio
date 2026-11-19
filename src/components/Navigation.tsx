import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PERSONAL_INFO, SECTIONS } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

type Theme = 'light' | 'dark';

const currentTheme = (): Theme => {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape, and if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); }
    };
    const mq = window.matchMedia('(min-width: 721px)');
    const onMq = () => { if (mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);

  const go = (id: string) => { setOpen(false); onNavigate(id); };

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
    setTheme(next);
  };

  return (
    <>
      <header className={`nav glass${scrolled || open ? ' is-scrolled' : ''}`}>
          <button className="nav-brand" onClick={() => go('hero')} aria-label="Back to top">
            {PERSONAL_INFO.fullName}<span>.</span>
          </button>

          <nav className="nav-links" aria-label="Primary">
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => go(s.id)} aria-current={activeSection === s.id ? 'location' : undefined}>
                {s.label}
              </button>
            ))}
          </nav>

          <div className="nav-tools">
            <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              id="menu-toggle"
              className="icon-btn menu-btn"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
      </header>

      {open && (
        <>
          <div className="menu-scrim" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav id="mobile-menu" className="mobile-menu glass" aria-label="Mobile">
            {SECTIONS.map(s => (
              <button key={s.id} onClick={() => go(s.id)} aria-current={activeSection === s.id ? 'location' : undefined}>
                {s.label}<span className="muted">→</span>
              </button>
            ))}
          </nav>
        </>
      )}
    </>
  );
};
