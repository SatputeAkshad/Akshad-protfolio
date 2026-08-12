import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Compass, Zap, Target, Heart, Award, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            THE PERSON BEHIND THE WORK
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          Content Manager. Developer. BCA Student. Building digital experiences & social media growth.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Bio Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
          
          <div className="space-y-6">
            <span className="bento-label">
              DESIGN PHILOSOPHY
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              I build digital experiences where design, technology, and storytelling meet.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#B5B5B5] leading-relaxed font-normal">
              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Philosophy Highlights */}
          <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="text-[10px] font-extrabold text-[#FF5A00] uppercase tracking-[2px] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Speed & Craft
              </div>
              <p className="text-xs text-[#B5B5B5]">Sub-second loading times with smooth 60fps animations.</p>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-extrabold text-[#FF5A00] uppercase tracking-[2px] flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Intentionality
              </div>
              <p className="text-xs text-[#B5B5B5]">Every pixel, line, and spacing has a mathematical purpose.</p>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-extrabold text-[#FF5A00] uppercase tracking-[2px] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" /> Human Touch
              </div>
              <p className="text-xs text-[#B5B5B5]">Designing for real human delight and effortless flow.</p>
            </div>
          </div>

        </div>

        {/* Right Column: Portrait & Details (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Portrait Image Card */}
          <div className="bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-3 relative overflow-hidden group min-h-[320px] shadow-xl">
            <img
              src="https://i.ibb.co/qMBBY1fZ/Codex-Image-Aug-12-2026-01-39-08-PM.png"
              alt="Akshad profile photo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[18px] group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111111]/95 backdrop-blur-md border border-white/[0.08] rounded-2xl">
              <div className="text-[10px] font-extrabold text-[#FF5A00] uppercase tracking-[2px] mb-1">
                LOCATION & TIMEZONE
              </div>
              <div className="text-sm font-bold text-white flex items-center justify-between">
                <span>Pune, MH, India (IST / GMT+5:30)</span>
                <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Key Facts Grid Card */}
          <div className="bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 space-y-4">
            <div className="text-[10px] font-extrabold text-[#FF5A00] uppercase tracking-[2px] flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span>QUICK SNAPSHOT</span>
              <Award className="w-4 h-4 text-[#FF5A00]" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#1A1A1A] p-3.5 rounded-2xl border border-white/[0.08]">
                <span className="text-[#B5B5B5] block text-[10px] uppercase font-bold tracking-wider">Primary Role</span>
                <span className="text-white font-bold">{PERSONAL_INFO.role}</span>
              </div>

              <div className="bg-[#1A1A1A] p-3.5 rounded-2xl border border-white/[0.08]">
                <span className="text-[#B5B5B5] block text-[10px] uppercase font-bold tracking-wider">Education / Level</span>
                <span className="text-[#FF5A00] font-bold">{PERSONAL_INFO.experienceYears} Student</span>
              </div>

              <div className="bg-[#1A1A1A] p-3.5 rounded-2xl border border-white/[0.08]">
                <span className="text-[#B5B5B5] block text-[10px] uppercase font-bold tracking-wider">Core Skills</span>
                <span className="text-white font-bold">React, Java, DBMS, C++</span>
              </div>

              <div className="bg-[#1A1A1A] p-3.5 rounded-2xl border border-white/[0.08]">
                <span className="text-[#B5B5B5] block text-[10px] uppercase font-bold tracking-wider">Status</span>
                <span className="text-[#FF5A00] font-bold">Open for Hiring</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
