import React from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps { onExploreWork: () => void; onContactClick: () => void; }
export const HeroSection: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => (
  <section id="hero" className="hero-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="hero-eyebrow"><span><span className="availability-dot" /> Open to internships & collaborations</span><span className="hidden sm:block">Pune, India · Portfolio</span></div>
    <div className="hero-layout">
      <div className="hero-copy">
        <p className="hero-intro">Hey, I'm Akshad <span aria-hidden="true">↗</span></p>
        <h1>I build digital<br /><span>experiences.</span><br />And the stories<br />behind them.</h1>
        <p className="hero-description">Developer, content manager, and BCA student. Connecting thoughtful websites with the content and communities that bring them to life.</p>
        <div className="hero-actions">
          <button className="primary-action" onClick={onExploreWork} id="hero-view-work-btn">Explore my work <ArrowDownRight size={18} /></button>
          <button className="secondary-action" onClick={onContactClick} id="hero-talk-btn">Let's talk <ArrowUpRight size={18} /></button>
        </div>
        <div className="hero-socials">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <span>Code. Content. Community.</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-art-top"><span>THE CREATIVE SIDE OF CODE</span><span>AS / 01</span></div>
        <img src="https://i.ibb.co/RGB0B4vn/22127.jpg" alt="Akshad Satpute outdoors" fetchPriority="high" className="hero-art-image" />
        <div className="hero-art-shade" />
        <div className="hero-sticker"><Code2 size={18} /><span>Built with curiosity.</span></div>
        <div className="hero-art-caption"><span>DEVELOPER × STORYTELLER</span><strong>Ideas into<br />something real<span>.</span></strong></div>
        <a className="hero-feature" href="https://stickwithme.shop" target="_blank" rel="noopener noreferrer"><div className="hero-feature-icon"><Instagram size={22} /></div><div><span>CURRENTLY BUILDING</span><strong>stickwithme.shop</strong><small>Co-founder · Content & commerce</small></div><ArrowUpRight size={22} /></a>
      </div>
    </div>
    <div className="hero-footer"><span>DEVELOPMENT</span><span aria-hidden="true">✳</span><span>CONTENT STRATEGY</span><span aria-hidden="true">✳</span><span>BRAND BUILDING</span><button onClick={onExploreWork}>Scroll to explore <ArrowDownRight size={16} /></button></div>
  </section>
);
