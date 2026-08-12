import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Sparkles, ExternalLink, Award } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Content Manager',
    'Business / Startups',
    'Student Profile'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 02. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            SELECTED PROJECTS
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          A curated selection of visual identities, interactive platforms, and digital products built for impact.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === category
                ? 'bg-[#FF5A00] text-black font-bold shadow-lg shadow-[#FF5A00]/25'
                : 'bg-[#151515] text-[#B5B5B5] hover:text-white border border-white/10 hover:border-white/20'
            }`}
            id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, index) => {
          // Asymmetrical layout logic: first and fourth project get 7 cols, others get 5 cols
          const isLargeCard = index % 3 === 0;
          const colSpanClass = isLargeCard ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`${colSpanClass} bg-[#111111] border border-white/[0.08] hover:border-[#FF5A00]/60 hover:bg-[#1A1A1A] rounded-[24px] p-4 sm:p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-2xl overflow-hidden relative`}
              id={`project-card-${project.id}`}
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[18px] overflow-hidden mb-6 bg-[#0A0A0A] border border-white/[0.08]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/[0.08] text-[10px] font-extrabold tracking-[2px] text-[#FF5A00] px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>

                  <div className="bg-[#FF5A00] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Awards Tag if present */}
                {project.awards && project.awards.length > 0 && (
                  <div className="absolute bottom-4 left-4 bg-[#111111]/95 backdrop-blur-md border border-white/[0.08] px-3 py-1 rounded-lg text-[10px] font-mono text-white flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-[#FF5A00]" />
                    <span>{project.awards[0]}</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="text-xs font-mono text-[#B5B5B5]">
                    YEAR: <span className="text-white">{project.year}</span> — CLIENT: <span className="text-[#FF5A00]">{project.client}</span>
                  </div>
                  <span className="text-xs font-mono text-[#FF5A00] font-bold">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#FF5A00] transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#B5B5B5] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#B5B5B5] font-normal line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono bg-white/5 border border-white/[0.08] text-white px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono bg-white/5 text-[#B5B5B5] px-2 py-1 rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Link */}
                <div className="pt-4 flex items-center justify-between text-xs font-mono font-bold text-[#FF5A00] group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROJECT DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
