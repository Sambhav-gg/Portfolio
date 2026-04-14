import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: '#070a0f', fontFamily: "'DM Mono', 'Courier New', monospace" }}
    >
      <Helmet>
        <title>Sambhav Garg | Full Stack MERN & Cloud Developer</title>
        <meta
          name="description"
          content="Sambhav Garg — CSE undergrad at Bennett University. Full Stack MERN Developer, AWS Cloud Practitioner, AI integrations. CGPA 9.04, LeetCode 1571, 300+ DSA solved."
        />
        <meta
          name="keywords"
          content="Sambhav Garg, MERN Developer, Full Stack Developer, AWS Cloud Practitioner, React Developer, Node.js, Portfolio, AI Developer, DSA"
        />
        <meta name="author" content="Sambhav Garg" />
        <meta property="og:title" content="Sambhav Garg Portfolio" />
        <meta
          property="og:description"
          content="Full Stack MERN Developer with AWS Cloud Practitioner certification, AI integrations, and production projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Background noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Scan line effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.005) 2px, rgba(0,229,255,0.005) 4px)',
        }}
      />

      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />

      {/* Horizontal dividers */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" /></div>
      <About />
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" /></div>
      <Skills />
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" /></div>
      <Projects />
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#00e5ff]/10 to-transparent" /></div>
      <Contact />
      <Footer />
    </div>
  );
}