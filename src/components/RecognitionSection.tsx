import React from 'react';
import { RECOGNITIONS } from '../data/portfolioData';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 06. INDUSTRY HONORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            AWARDS & RECOGNITION
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          A few highlights from industry juries, design platforms, and hackathons recognizing the work.
        </p>
      </div>

      {/* Editorial Rows Container */}
      <div className="bg-[#111111] border border-white/[0.08] rounded-[24px] p-6 sm:p-8 divide-y divide-white/[0.08] shadow-xl">
        {RECOGNITIONS.map((rec, index) => (
          <div
            key={index}
            className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#1A1A1A] px-4 rounded-2xl transition-all duration-300"
            id={`award-row-${index}`}
          >
            <div className="flex items-start md:items-center gap-4 sm:gap-6">
              <span className="text-xl font-mono font-bold text-[#FF5A00] shrink-0 w-16">
                {rec.year}
              </span>

              <div className="space-y-1">
                <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#FF5A00] transition-colors font-display">
                  {rec.title}
                </h3>
                <p className="text-xs font-mono text-[#777777]">
                  {rec.organization} — <span className="text-[#B5B5B5]">{rec.project}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              {rec.badge && (
                <span className="bg-[#FF5A00]/15 border border-[#FF5A00]/40 text-[#FF5A00] font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  {rec.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
