import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, Instagram, Dribbble, Globe, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Creative Development',
    budget: '$5k - $10k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Content Management',
    'Social Media Strategy',
    'Business / Startup',
    'Full-Stack Web App',
    'BCA Project Collaboration'
  ];

  const budgetRanges = [
    '< $5k',
    '$5k - $10k',
    '$10k - $25k',
    '$25k+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="bg-[#111111] border border-white/[0.08] rounded-[24px] p-8 sm:p-12 mb-12 relative overflow-hidden shadow-2xl hover:bg-[#1A1A1A] transition-all duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
        
        <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-3">
          // 06. CONTACT & COLLABORATION
        </span>
        <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-[-2px] font-display max-w-4xl leading-[0.92]">
          LET'S CREATE SOMETHING MEANINGFUL.
        </h2>
        <p className="text-base sm:text-lg text-[#B5B5B5] font-normal max-w-2xl mt-4 leading-relaxed">
          Have an idea, project, collaboration or opportunity? Let's build something great together.
        </p>
      </div>

      {/* Grid Layout: Form (7 Cols) & Info (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Form Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-[#FF5A00]/20 border border-[#FF5A00] text-[#FF5A00] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase font-display">MESSAGE SENT SUCCESSFULLY!</h3>
              <p className="text-sm text-[#B5B5B5] max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. I will review your project requirements and reply within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Creative Development', budget: '$5k - $10k', message: '' });
                }}
                className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#FF5A00] hover:underline cursor-pointer"
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              


              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#B5B5B5] uppercase block font-bold">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Akshad Satpute"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/[0.08] focus:border-[#FF5A00] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors font-mono"
                    id="contact-name-input"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#B5B5B5] uppercase block font-bold">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/[0.08] focus:border-[#FF5A00] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors font-mono"
                    id="contact-email-input"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#B5B5B5] uppercase block font-bold">Project Overview / Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project goals, timelines, and scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-white/[0.08] focus:border-[#FF5A00] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors font-mono resize-none"
                  id="contact-message-input"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF7A18] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-full transition-all shadow-xl shadow-[#FF5A00]/25 cursor-pointer disabled:opacity-50"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        {/* Contact Info & Socials (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          <div className="bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-[10px] font-extrabold font-mono text-[#FF5A00] uppercase tracking-[2px] border-b border-white/[0.08] pb-3 flex items-center gap-2">
              <Mail className="w-4 h-4" /> DIRECT CONTACT
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="block p-4 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF5A00]/50 transition-all group"
                id="direct-email-card"
              >
                <span className="text-[10px] font-mono text-[#B5B5B5] uppercase block font-bold">Email Address</span>
                <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-[#FF5A00] transition-colors break-all">
                  {PERSONAL_INFO.socials.email}
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] space-y-1">
                <span className="text-[10px] font-mono text-[#B5B5B5] uppercase block font-bold">Current Base</span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF5A00]" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 space-y-4 shadow-2xl">
            <div className="text-[10px] font-extrabold font-mono text-[#FF5A00] uppercase tracking-[2px] border-b border-white/[0.08] pb-3">
              SOCIAL PLATFORMS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.socials.instagram1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF5A00]/50 text-white hover:text-[#FF5A00] transition-all"
                id="social-instagram-1-link"
              >
                <Instagram className="w-4 h-4 text-[#FF5A00]" />
                <span>@__stick.with.me</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.instagram2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF5A00]/50 text-white hover:text-[#FF5A00] transition-all"
                id="social-instagram-2-link"
              >
                <Instagram className="w-4 h-4 text-[#FF5A00]" />
                <span>@quote.it7</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF5A00]/50 text-white hover:text-[#FF5A00] transition-all"
                id="social-github-link"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#1A1A1A] border border-white/[0.08] hover:border-[#FF5A00]/50 text-white hover:text-[#FF5A00] transition-all"
                id="social-linkedin-link"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
