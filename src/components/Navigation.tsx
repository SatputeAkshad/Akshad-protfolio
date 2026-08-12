import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'playground', label: 'Playground' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-6 lg:px-8 pointer-events-none`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="pointer-events-auto flex items-center gap-2.5 group bg-[#111111]/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/[0.08] hover:border-[#FF5A00]/50 transition-all cursor-pointer shadow-lg shadow-black/40"
          id="nav-logo-btn"
        >
          <img 
            src="https://i.ibb.co/F4YqQRWT/3-D-Male-Avatar-Icon-with-Glasses-Minimalist-Round-Profile-Picture.jpg"
            alt="Akshad Avatar"
            className="w-6 h-6 rounded-full object-cover border border-[#FF5A00]/40 group-hover:scale-110 transition-transform"
          />
          <span className="font-bold tracking-tight text-white text-base sm:text-lg">
            {PERSONAL_INFO.name}<span className="text-[#FF5A00]">.</span>
          </span>
        </button>

        {/* Desktop Navigation Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-[#111111]/90 backdrop-blur-xl border border-white/[0.08] px-3 py-1.5 rounded-full shadow-2xl shadow-black/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'
                }`}
                id={`nav-link-${item.id}`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#FF5A00]/15 border border-[#FF5A00]/40 rounded-full -z-10 animate-fade-in" />
                )}
                <span className="flex items-center gap-1.5">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]" />}
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 bg-[#FF5A00] hover:bg-[#FF7A18] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#FF5A00]/25 cursor-pointer group"
            id="nav-cta-btn"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-[#111111] border border-white/[0.08] p-2.5 rounded-full text-white hover:text-[#FF5A00] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[#151515] border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono text-[#777777] uppercase tracking-widest mb-1 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Navigation</span>
              <Sparkles className="w-3 h-3 text-[#FF5A00]" />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-left text-sm font-semibold tracking-wide uppercase transition-all ${
                  activeSection === item.id
                    ? 'bg-[#FF5A00]/15 text-[#FF5A00] border border-[#FF5A00]/30'
                    : 'text-white hover:bg-white/5'
                }`}
                id={`mobile-nav-link-${item.id}`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#777777]">
                  {activeSection === item.id ? '● ACTIVE' : '→'}
                </span>
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="mt-4 flex items-center justify-center gap-2 bg-[#FF5A00] text-black font-bold text-sm uppercase tracking-wider py-3 rounded-xl transition-all shadow-lg shadow-[#FF5A00]/25"
              id="mobile-nav-cta"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
