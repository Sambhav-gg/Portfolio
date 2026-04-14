import { Github, Linkedin, Send, Mail, MapPin } from 'lucide-react';

const LINKS = [
  {
    label: 'LinkedIn',
    value: '/in/sambhav-garg-50386a291',
    href: 'https://www.linkedin.com/in/sambhav-garg-50386a291/',
    icon: <Linkedin size={20} />,
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/Sambhav-gg',
    href: 'https://github.com/Sambhav-gg',
    icon: <Github size={20} />,
    color: '#ffffff',
  },
  {
    label: 'Telegram',
    value: 't.me/SambhavGarg',
    href: 'https://t.me/SambhavGarg',
    icon: <Send size={20} />,
    color: '#2AABEE',
  },
  {
    label: 'Email',
    value: 'sambhavgarg24@gmail.com',
    href: 'mailto:sambhavgarg24@gmail.com',
    icon: <Mail size={20} />,
    color: '#00e5ff',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_80%,rgba(0,229,255,0.04),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00e5ff] font-mono text-sm font-semibold tracking-[0.2em] uppercase mb-3">// 04</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Let's <span style={{ color: '#00e5ff' }}>Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-[#0066ff] mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-black text-white mb-4">
              Open to roles &amp; collaborations
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm actively looking for full-stack, cloud, or AI-product opportunities — internships and entry-level roles both welcome.
              If you have an idea, a project, or just want to chat about tech, reach out.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-[#00e5ff]" />
              <span>Greater Noida, India (open to remote)</span>
            </div>

            {/* Status badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00ff88]/25 bg-[#00ff88]/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88] font-semibold">Available for opportunities</span>
            </div>
          </div>

          {/* Right — link cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LINKS.map(({ label, value, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 truncate max-w-[140px]">{value}</p>
                </div>
                <div className="ml-auto text-gray-600 group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}