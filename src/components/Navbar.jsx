import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (item) => {
    setActive(item);
    scrollToSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#070a0f]/90 backdrop-blur-xl border-b border-[#00e5ff]/10 shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => handleNav('Home')} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#0066ff] opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300" />
            <div className="relative w-9 h-9 rounded-lg border border-[#00e5ff]/40 flex items-center justify-center bg-[#070a0f]">
              <span className="font-black text-[#00e5ff] text-lg leading-none">S</span>
            </div>
          </div>
          <div className="font-black text-xl tracking-tight">
            <span className="text-white">Sambhav</span>
            <span className="text-[#00e5ff]">.</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg ${
                active === item
                  ? 'text-[#00e5ff]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === item && (
                <span className="absolute inset-0 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20" />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00e5ff]/40 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#070a0f]/98 border-t border-white/5">
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="block w-full text-left px-8 py-4 text-gray-300 hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 transition-all border-b border-white/5 last:border-b-0"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}