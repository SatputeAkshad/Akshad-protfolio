import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Layout, Wrench, Sparkles, Code2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: number; description: string } | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-4 h-4 text-[#FF5A00]" />;
      case 1: return <Layout className="w-4 h-4 text-[#FF5A00]" />;
      default: return <Wrench className="w-4 h-4 text-[#FF5A00]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 05. TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            SKILLS & ARCHITECTURE
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          Categorized proficiency across modern frontend engineering, UI design systems, and creative technology.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(catIdx)}
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#FF5A00] font-bold">
                  0{catIdx + 1}
                </span>
              </div>

              {/* Skills Pill List */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <div
                      key={sIdx}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF5A00] text-white border-[#FF5A00] font-bold shadow-lg shadow-[#FF5A00]/20'
                          : 'bg-[#1A1A1A] border-white/[0.08] text-white hover:border-[#FF5A00]/50 hover:bg-white/5'
                      }`}
                      id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold tracking-wide">{skill.name}</span>
                        <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-black text-[#FF5A00]' : 'bg-white/10 text-[#FF5A00]'
                        }`}>
                          Mastery {skill.level}%
                        </span>
                      </div>

                      <p className={`text-[11px] mt-1 font-normal leading-relaxed ${
                        isSelected ? 'text-white/90' : 'text-[#B5B5B5]'
                      }`}>
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#B5B5B5] uppercase pt-4 border-t border-white/[0.08] text-center">
              ● Click any skill to inspect focus area
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
