import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xl font-black text-white tracking-tight font-display">
            {PERSONAL_INFO.name}<span className="text-[#FF5A00]">.</span>
          </div>
          <p className="text-xs font-mono text-[#777777] uppercase tracking-wider">
            {PERSONAL_INFO.role} / {PERSONAL_INFO.secondaryRole}
          </p>
        </div>

        {/* Local Time Widget */}
        <div className="bg-[#111111] border border-white/[0.08] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-mono text-[#B5B5B5]">
          <Clock className="w-3.5 h-3.5 text-[#FF5A00]" />
          <span>PUNE, IN: <strong className="text-white">{time || '12:00 PM IST'}</strong></span>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#B5B5B5]">
            © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#111111] border border-white/[0.08] hover:border-[#FF5A00] text-white hover:text-[#FF5A00] transition-all cursor-pointer shadow-lg"
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
