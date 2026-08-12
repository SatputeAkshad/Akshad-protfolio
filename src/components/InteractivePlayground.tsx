import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Sparkles, Sliders, Cpu, Zap } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [orangeGlow, setOrangeGlow] = useState(80);
  const [preset, setPreset] = useState<'cyber' | 'liquid' | 'constellation'>('cyber');
  const [aiIdea, setAiIdea] = useState<string | null>(null);
  const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);

  // Canvas Generative Art Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = 360;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles array
    const particleCount = preset === 'constellation' ? 60 : 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2.5 + 1
    }));

    const render = () => {
      if (isPlaying) {
        time += 0.02 * speed;
      }

      // Clear background with semi-transparent black for trail
      ctx.fillStyle = preset === 'liquid' ? 'rgba(10, 10, 10, 0.15)' : 'rgba(10, 10, 10, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (preset === 'liquid') {
        // Render Wave Shaders
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          const hue = 20 + i * 5; // Orange warm range
          ctx.strokeStyle = `hsla(${hue}, 100%, ${orangeGlow}%, ${0.4 - i * 0.06})`;
          
          for (let x = 0; x < canvas.width; x += 5) {
            const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * (30 + i * 10) + Math.cos(time * 0.5 + i) * 20;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else {
        // Render Particles & Nodes
        particles.forEach((p, i) => {
          if (isPlaying) {
            p.x += p.vx * speed;
            p.y += p.vy * speed;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = i % 3 === 0 ? '#FF5A00' : '#FFFFFF';
          ctx.fill();

          // Connect nearby nodes
          if (preset === 'constellation') {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 90) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(255, 90, 0, ${1 - dist / 90})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isPlaying, speed, orangeGlow, preset]);

  // AI Idea Generator Call
  const handleGenerateIdea = async () => {
    setIsGeneratingIdea(true);
    setAiIdea(null);

    const prompts = [
      "Create an interactive WebGL 3D vinyl record player with real-time audio visualization.",
      "Build a generative kinetic typography poster engine that reacts to ambient device motion.",
      "Design an AI-driven brand identity generator that outputs vector SVG tokens in real time.",
      "Develop a 3D raymarching glass sculpture with custom chromatic dispersion shaders.",
      "Engineer a real-time collaborative canvas for spatial architectural wireframing."
    ];

    setTimeout(() => {
      const randomIdea = prompts[Math.floor(Math.random() * prompts.length)];
      setAiIdea(randomIdea);
      setIsGeneratingIdea(false);
    }, 800);
  };

  return (
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF5A00] uppercase block mb-2">
            // 03. CREATIVE PLAYGROUND
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            CREATIVE PLAYGROUND
          </h2>
        </div>

        <p className="text-xs font-mono text-[#777777] max-w-xs uppercase tracking-wider">
          An interactive laboratory testing live shader physics, particle nodes, and concept sparks.
        </p>
      </div>

      {/* Playground Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Canvas Visualizer Card (8 Cols) */}
        <div className="lg:col-span-8 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00] animate-pulse" />
              <span className="text-[10px] font-extrabold font-mono text-white uppercase tracking-[2px]">
                CANVAS SHADER LAB // {preset.toUpperCase()}
              </span>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-1.5 bg-[#0A0A0A] p-1 rounded-full border border-white/[0.08]">
              {(['cyber', 'liquid', 'constellation'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPreset(p)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase transition-all cursor-pointer ${
                    preset === p ? 'bg-[#FF5A00] text-white font-bold' : 'text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Live Canvas Stage */}
          <div className="relative rounded-[18px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A]">
            <canvas ref={canvasRef} className="w-full h-[320px] block cursor-crosshair" />
            
            <div className="absolute bottom-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/[0.08] px-3 py-1 rounded-md text-[10px] font-mono text-[#B5B5B5]">
              FPS: 60 // RENDER: CANVAS 2D
            </div>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/[0.08]">
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-[#B5B5B5] uppercase block font-bold">
                Simulation Speed ({speed.toFixed(1)}x)
              </label>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-[#FF5A00] cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-[#B5B5B5] uppercase block font-bold">
                Glow / Saturation ({orangeGlow}%)
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={orangeGlow}
                onChange={(e) => setOrangeGlow(parseInt(e.target.value))}
                className="w-full accent-[#FF5A00] cursor-pointer"
              />
            </div>

            <div className="flex items-end justify-end">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-white/10 border border-white/[0.08] text-white font-mono text-xs px-4 py-2 rounded-xl transition-all cursor-pointer w-full justify-center"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#FF5A00]" /> : <Play className="w-3.5 h-3.5 text-[#FF5A00]" />}
                <span>{isPlaying ? 'PAUSE ANIMATION' : 'RESUME ANIMATION'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* AI Concept Spark Tool (4 Cols) */}
        <div className="lg:col-span-4 bg-[#111111] border border-white/[0.08] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[24px] p-6 flex flex-col justify-between shadow-2xl space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-4">
              <Sparkles className="w-4 h-4 text-[#FF5A00]" />
              <h3 className="text-[10px] font-extrabold font-mono text-[#FF5A00] uppercase tracking-[2px]">
                CONCEPT SPARK GENERATOR
              </h3>
            </div>

            <p className="text-xs text-[#B5B5B5] font-normal leading-relaxed">
              Generate avant-garde digital project briefs and creative coding prompt ideas.
            </p>

            <div className="min-h-[140px] bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-4 flex flex-col justify-center text-xs font-mono text-[#B5B5B5] leading-relaxed relative">
              {isGeneratingIdea ? (
                <div className="flex items-center gap-2 text-[#FF5A00] animate-pulse">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Synthesizing creative concept...</span>
                </div>
              ) : aiIdea ? (
                <p className="text-white font-medium italic">"{aiIdea}"</p>
              ) : (
                <span className="text-[#B5B5B5]">Click below to generate a new creative direction concept.</span>
              )}
            </div>
          </div>

          <button
            onClick={handleGenerateIdea}
            disabled={isGeneratingIdea}
            className="w-full flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF7A18] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all shadow-lg shadow-[#FF5A00]/25 cursor-pointer"
            id="generate-concept-btn"
          >
            <Zap className="w-4 h-4" />
            <span>GENERATE CREATIVE BRIEF</span>
          </button>
        </div>

      </div>

    </section>
  );
};
