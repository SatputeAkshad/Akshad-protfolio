import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles, Code2, Palette, Globe, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Top Editorial Label */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2.5 bg-[#111111] border border-white/[0.08] px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-[2px] text-[#FF5A00] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-ping" />
          <span>BASED IN INDIA / AVAILABLE 2026</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#B5B5B5]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF5A00]" />
            {PERSONAL_INFO.location}
          </span>
          <span className="hidden sm:inline border-l border-white/[0.08] pl-4 text-[#FF5A00]">
            ● {PERSONAL_INFO.availability}
          </span>
        </div>
      </div>

      {/* Bento Grid Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Main Hero Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF5A00]/20 transition-all duration-700" />
          
          <div className="space-y-6 relative z-10">
            <div className="space-y-3">
              <span className="bento-label">
                BCA 2nd YEAR STUDENT & CONTENT MANAGER
              </span>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-white tracking-[-2px] uppercase leading-[0.88] font-display">
                CONTENT MANAGER
                <br />
                <span className="text-[#FF5A00]">
                  & DEVELOPER
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#B5B5B5] max-w-xl font-normal leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* CTA Buttons & Metadata */}
          <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreWork}
                className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#FF7A18] text-white font-bold text-xs uppercase tracking-[1px] px-6 py-3.5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-[#FF5A00]/20 cursor-pointer group"
                id="hero-view-work-btn"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-white/10 border border-white/[0.08] text-white font-bold text-xs uppercase tracking-[1px] px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                id="hero-talk-btn"
              >
                <span>LET'S CREATE ↗</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#B5B5B5] flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/[0.08] text-[#FF5A00] font-medium font-mono">
                BCA 2nd YEAR
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/[0.08] text-white font-medium">
                15+ PROJECTS
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card (5 Cols) */}
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          className="lg:col-span-5 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-3 relative overflow-hidden min-h-[380px] lg:min-h-[480px] flex flex-col justify-end group shadow-2xl"
        >
          {/* Parallax Background Artwork */}
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img
              src="https://i.ibb.co/RGB0B4vn/22127.jpg"
              alt="Akshad Creative Hero Artwork"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              style={{
                transform: `scale(1.08) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
            <div className="absolute inset-0 bg-[#FF5A00]/10 mix-blend-overlay group-hover:opacity-60 transition-opacity" />
            
            {/* Visual Accent Circle from Bento Theme */}
            <div className="absolute -top-[50px] -right-[50px] w-[300px] h-[300px] rounded-full border border-[#FF5A00] opacity-20 pointer-events-none" />
          </div>

          {/* Floating Editorial Badges over Artwork */}
          <div className="relative z-10 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="bg-[#111111]/90 backdrop-blur-md border border-white/[0.08] px-3.5 py-2 rounded-xl text-xs font-mono text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>SELECTED ARTWORK</span>
              </div>

              <div className="bg-[#FF5A00] text-white font-mono font-bold text-xs px-3 py-1.5 rounded-full tracking-wider shadow-lg">
                Akshad Amol Satpute
              </div>
            </div>

            <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/[0.08] border-l-2 border-l-[#FF5A00] p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#B5B5B5]">
                <span className="uppercase text-[10px] tracking-[2px] text-[#FF5A00]">CORE FOCUS</span>
                <span className="text-[#FF5A00]">01 / 03</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs bg-white/5 border border-white/[0.08] text-white px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-[#FF5A00]" /> Content & Strategy
                </span>
                <span className="text-xs bg-white/5 border border-white/[0.08] text-white px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Palette className="w-3 h-3 text-[#FF5A00]" /> Social Media Growth
                </span>
                <span className="text-xs bg-white/5 border border-white/[0.08] text-white px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#FF5A00]" /> BCA 2nd Year Tech
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Stats & Client Ticker Bar */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div 
            key={idx}
            className="bg-[#111111] border border-white/[0.08] hover:border-[#FF5A00]/40 hover:bg-[#1A1A1A] p-5 rounded-[24px] transition-all duration-300 group"
          >
            <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF5A00] transition-colors font-mono">
              {stat.value}
            </div>
            <div className="text-[10px] text-[#B5B5B5] font-extrabold uppercase tracking-[2px] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
