import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 04. CAREER TIMELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            CAREER TIMELINE
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          A track record of engineering leadership, creative development, and cross-functional design excellence.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-10 space-y-10 border-l border-white/15">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="relative group cursor-default"
            id={`experience-item-${index}`}
          >
            {/* Timeline Node Dot */}
            <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              exp.highlight
                ? 'bg-[#FF5A00] border-black ring-4 ring-[#FF5A00]/20 scale-125'
                : 'bg-[#151515] border-white/30 group-hover:border-[#FF5A00] group-hover:bg-[#FF5A00]'
            }`} />

            {/* Experience Card */}
            <div className={`bg-[#111111] border rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:bg-[#1A1A1A] ${
              exp.highlight
                ? 'border-[#FF5A00]/50 bg-[#1A1A1A] shadow-xl shadow-[#FF5A00]/5'
                : 'border-white/[0.08]'
            }`}>
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-extrabold font-mono tracking-[2px] text-[#FF5A00] uppercase">
                    {exp.year}
                  </span>
                  <span className="text-xs font-mono text-[#B5B5B5] bg-white/5 border border-white/[0.08] px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#B5B5B5]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight font-display">
                  {exp.role}
                </h3>
                <div className="text-sm font-mono text-[#FF5A00] font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <p className="text-sm text-[#B5B5B5] font-normal leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Technologies / Skills Used */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.08]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono bg-white/5 text-white border border-white/[0.08] px-3 py-1 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
