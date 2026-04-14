import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Terminal } from 'lucide-react';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'AWS Cloud Practitioner',
  'AI Integration Builder',
];

export default function Hero({ scrollToSection }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Canvas particle grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h, dots;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      const cols = Math.floor(w / 60);
      const rows = Math.floor(h / 60);
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: (c + 0.5) * (w / cols),
            y: (r + 0.5) * (h / rows),
            ox: (c + 0.5) * (w / cols),
            oy: (r + 0.5) * (h / rows),
            size: Math.random() * 1.2 + 0.3,
            speed: Math.random() * 0.4 + 0.1,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.005;
      dots.forEach((d) => {
        d.x = d.ox + Math.sin(t * d.speed + d.phase) * 8;
        d.y = d.oy + Math.cos(t * d.speed + d.phase * 1.3) * 6;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,0.18)';
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Canvas BG */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(0,102,255,0.08),transparent)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#00e5ff]/25 bg-[#00e5ff]/5">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-[#00e5ff] text-sm font-medium tracking-wide">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
          <span className="text-white">Sambhav</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #00e5ff, #0066ff)' }}
          >
            Garg
          </span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-2 mb-8 h-12">
          <Terminal size={18} className="text-[#00e5ff]" />
          <p className="text-xl md:text-2xl font-mono text-gray-200 min-w-[260px] text-left">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-[#00e5ff] ml-0.5 animate-pulse" />
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          B.Tech CSE @ Bennett University · CGPA 9.04 · AWS Certified Cloud Practitioner ·{' '}
          <span className="text-white">300+ DSA problems</span> · LeetCode 1571
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 rounded-xl font-bold text-black text-base bg-gradient-to-r from-[#00e5ff] to-[#0066ff] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-xl font-bold text-[#00e5ff] text-base border border-[#00e5ff]/30 bg-[#00e5ff]/5 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/60 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { val: '9.04', label: 'CGPA' },
            { val: '300+', label: 'DSA Solved' },
            { val: '1571', label: 'LeetCode' },
          ].map(({ val, label }) => (
            <div key={label} className="border border-white/10 rounded-xl p-4 bg-white/[0.03]">
              <div className="text-2xl font-black text-[#00e5ff]">{val}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#00e5ff] transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}