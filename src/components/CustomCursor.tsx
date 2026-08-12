import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest('button, a, input, textarea, [data-interactive="true"]');
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-[#FF5A00]/60 transition-transform duration-150 ease-out ${
          isHovered ? 'w-12 h-12 -ml-6 -mt-6 bg-[#FF5A00]/10 border-[#FF5A00]' : 'w-6 h-6 -ml-3 -mt-3'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-50 w-1.5 h-1.5 bg-[#FF5A00] rounded-full -ml-0.75 -mt-0.75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />
    </>
  );
};
