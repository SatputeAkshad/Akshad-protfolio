import { useRef } from 'react';
import { ArrowDown, Asterisk, Store } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

const PORTRAIT = 'https://i.ibb.co/qMBBY1fZ/Codex-Image-Aug-12-2026-01-39-08-PM.png';
const MARQUEE = ['Web development', 'Content strategy', 'Brand building', 'E-commerce', 'Community', 'UI design'];

export const HeroSection = ({ onExploreWork, onContactClick }: HeroProps) => {
  const visual = useRef<HTMLDivElement>(null);

  // Tilt the sticker card toward the pointer (-1…1 on each axis).
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !visual.current) return;
    const r = visual.current.getBoundingClientRect();
    visual.current.style.setProperty('--tx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    visual.current.style.setProperty('--ty', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const onLeave = () => {
    visual.current?.style.setProperty('--tx', '0');
    visual.current?.style.setProperty('--ty', '0');
  };

  return (
    <>
      <section id="hero" className="hero container">
        <div className="hero-copy">
          <p className="chip glass"><span className="status-dot" aria-hidden="true" />{PERSONAL_INFO.availability}</p>
          <h1>I build websites and the stories behind them.</h1>
          <p className="hero-lede">
            I'm Akshad — a developer, content manager and BCA student in Pune, connecting thoughtful
            websites with the content and communities that bring them to life.
          </p>
          <div className="hero-actions">
            <button className="btn btn-ink glass" onClick={onExploreWork}>View my work <ArrowDown size={17} /></button>
            <button className="btn glass" onClick={onContactClick}>Get in touch</button>
          </div>
          <SocialLinks className="hero-socials" />
        </div>

        <div className="hero-visual" data-depth ref={visual} onPointerMove={onMove} onPointerLeave={onLeave}>
          <figure className="holo-card glass">
            <div className="holo-photo">
              <img src={PORTRAIT} alt="Portrait of Akshad Satpute" fetchPriority="high" referrerPolicy="no-referrer" />
              <div className="holo-sheen" aria-hidden="true" />
            </div>
            <figcaption className="holo-caption">
              <div>
                <strong>{PERSONAL_INFO.fullName}</strong>
                <span>Developer & content manager</span>
              </div>
              <span>Pune, IN</span>
            </figcaption>
          </figure>
          <a className="hero-float glass" href="https://stickwithme.shop" target="_blank" rel="noopener noreferrer">
            <span className="hero-float-icon" aria-hidden="true"><Store size={19} /></span>
            <span>
              <small>Currently building</small>
              <strong>stickwithme.shop</strong>
            </span>
          </a>
        </div>
      </section>

      <div className="container" data-depth>
        <div className="marquee-wrap">
          <div className="marquee glass glass-quiet" aria-hidden="true">
            <div className="marquee-track">
              {[0, 1].map(copy => (
                <div className="marquee-group" key={copy}>
                  {MARQUEE.map(word => (
                    <span className="marquee-item" key={word}>{word}<Asterisk size={20} /></span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
