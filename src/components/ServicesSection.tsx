import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 02. WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            SERVICES & EXPERTISE
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          From strategy to visuals and code, tailored services to help your brand grow with clarity.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={service.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectService(service)}
              className={`bg-[#111111] border transition-all duration-300 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-xl ${
                isHovered
                  ? 'border-[#FF5A00] bg-[#1A1A1A] -translate-y-1 shadow-2xl shadow-[#FF5A00]/10'
                  : 'border-white/[0.08] hover:bg-[#1A1A1A]'
              }`}
              id={`service-card-${service.number}`}
            >
              {/* Subtle Ambient Glow */}
              <div 
                className={`absolute -right-16 -top-16 w-48 h-48 bg-[#FF5A00]/10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="space-y-6 relative z-10">
                {/* Number & Arrow Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF5A00]">
                    {service.number}
                  </span>
                  
                  <div className={`p-3 rounded-full border transition-all duration-300 ${
                    isHovered 
                      ? 'bg-[#FF5A00] text-white border-[#FF5A00] rotate-45' 
                      : 'bg-white/5 border-white/[0.08] text-white'
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#FF5A00] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-mono text-[#B5B5B5] block mt-1">
                    {service.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#B5B5B5] font-normal leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features Bullet Points */}
                <div className="space-y-2 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#B5B5B5]">
                      <Check className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 relative z-10">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[11px] font-mono px-3 py-1 rounded-full transition-colors ${
                      isHovered
                        ? 'bg-[#FF5A00]/15 text-[#FF5A00] border border-[#FF5A00]/30'
                        : 'bg-white/5 text-[#777777] border border-white/5'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
