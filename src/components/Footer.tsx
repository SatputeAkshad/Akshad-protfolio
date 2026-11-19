import { useEffect, useState } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const formatPuneTime = () =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());

export const Footer = () => {
  const [time, setTime] = useState(formatPuneTime);

  useEffect(() => {
    const interval = setInterval(() => setTime(formatPuneTime()), 15_000);
    return () => clearInterval(interval);
  }, []);

  const toTop = () => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  };

  return (
    <footer className="footer container">
      <div className="footer-bar glass">
        <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</span>
        <span className="footer-time with-icon"><Clock size={14} aria-hidden="true" />{time} in Pune</span>
        <button className="btn glass" onClick={toTop}>Back to top <ArrowUp size={14} /></button>
      </div>
    </footer>
  );
};
