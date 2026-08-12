import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Award, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Container */}
      <div className="bg-[#111111] border border-white/15 w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-y-auto shadow-2xl relative flex flex-col scrollbar-thin scrollbar-thumb-white/20">
        
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-30 bg-[#111111]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00]" />
            <span className="text-xs font-mono text-white uppercase tracking-wider">
              PROJECT ARCHIVE / {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1A1A1A] border border-white/15 text-white hover:text-[#FF5A00] hover:border-[#FF5A00]/50 transition-all cursor-pointer"
            aria-label="Close Project Modal"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Header & Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="text-xs font-mono text-[#777777] uppercase space-x-4">
                <span>YEAR: <strong className="text-white">{project.year}</strong></span>
                <span>CLIENT: <strong className="text-[#FF5A00]">{project.client}</strong></span>
              </div>

              {project.awards && (
                <div className="flex items-center gap-2">
                  {project.awards.map((award, aIdx) => (
                    <span key={aIdx} className="bg-[#FF5A00]/15 border border-[#FF5A00]/30 text-[#FF5A00] text-[10px] font-mono px-3 py-1 rounded-full uppercase flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {award}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[#B5B5B5] font-light max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#0A0A0A]">
            <img
              src={project.heroImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl || "https://stickwithme.shop"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#FF7A18] text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg shadow-[#FF5A00]/25"
              id="modal-live-link"
            >
              <span>VISIT SITE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            
            {/* Left Narrative (8 Cols) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Full Overview */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-[#FF5A00] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Project Overview
                </h3>
                <p className="text-sm sm:text-base text-[#B5B5B5] font-light leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#1A1A1A] p-5 rounded-[18px] border border-white/[0.08] space-y-2">
                  <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider font-bold">
                    The Challenge
                  </h4>
                  <p className="text-xs text-[#B5B5B5] font-normal leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-[#1A1A1A] p-5 rounded-[18px] border border-white/[0.08] space-y-2">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    The Solution
                  </h4>
                  <p className="text-xs text-[#B5B5B5] font-normal leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Tech Specs (4 Cols) */}
            <div className="md:col-span-4 bg-[#1A1A1A] p-6 rounded-[18px] border border-white/[0.08] space-y-6 h-fit">
              <div>
                <h4 className="text-xs font-mono text-[#FF5A00] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#1A1A1A] border border-white/10 text-white px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-[#777777]">
                <div className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="text-white">Full-Stack / Client</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility:</span>
                  <span className="text-emerald-400">WCAG AA Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span>Performance:</span>
                  <span className="text-white">99/100 Lighthouse</span>
                </div>
              </div>
            </div>

          </div>

          {/* Gallery Showcase */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xs font-mono text-[#FF5A00] uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4" /> Visual Gallery & Screens
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((imgUrl, gIdx) => (
                  <div key={gIdx} className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#0A0A0A]">
                    <img
                      src={imgUrl}
                      alt={`${project.title} preview ${gIdx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
