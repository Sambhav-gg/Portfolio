import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, ArrowDown, MousePointer, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import streetbites from "../assets/streetbites.png"
import epidora from "../assets/epidora.png"
import maya from "../assets/maya.png"
import ChatZ from "../assets/ChatZ.png"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced technical arsenal with proficiency levels
  const technicalArsenal = {
    core: [
      { name: "JavaScript", level: 95, category: "Language", icon: "🚀" },
      { name: "Python", level: 90, category: "Language", icon: "🐍" },
      { name: "C/C++", level: 85, category: "Language", icon: "⚡" },
      { name: "HTML/CSS", level: 92, category: "Frontend", icon: "🎨" }
    ],
    frontend: [
      { name: "React", level: 93, category: "Framework", icon: "⚛️" },
      { name: "Redux", level: 88, category: "State Management", icon: "🔄" },
      { name: "Tailwind CSS", level: 90, category: "Styling", icon: "💨" },
      { name: "Responsive Design", level: 92, category: "UI/UX", icon: "📱" }
    ],
    backend: [
      { name: "Node.js", level: 90, category: "Runtime", icon: "🟢" },
      { name: "Express.js", level: 88, category: "Framework", icon: "🚂" },
      { name: "Socket.io", level: 85, category: "Real-time", icon: "⚡" },
      { name: "REST APIs", level: 92, category: "Architecture", icon: "🔗" }
    ],
    data: [
      { name: "MongoDB", level: 87, category: "Database", icon: "🍃" },
      { name: "Pandas", level: 83, category: "Data Analysis", icon: "🐼" },
      { name: "JWT Auth", level: 90, category: "Security", icon: "🔐" },
      { name: "WebSockets", level: 88, category: "Real-time", icon: "🔄" }
    ],
    cloud: [
      { name: "AWS S3", level: 80, category: "Storage", icon: "☁️" },
      { name: "GitHub", level: 95, category: "Version Control", icon: "🐙" },
      { name: "N8N", level: 75, category: "Automation", icon: "🔧" },
      { name: "DSA", level: 88, category: "Problem Solving", icon: "🧠" }
    ]
  };

  // Real projects with proper categorization
  const projects = [
    {
      id: 1,
      title: "StreetBites",
      description: "StreetBites is a MERN stack web app that helps users discover nearby food stalls while empowering local vendors to list stalls, upload images via S3, and access AI-driven insights through Gemini and geolocation-based filters.",
      longDescription: "StreetBites is a MERN stack web app that helps users discover nearby food stalls while empowering local vendors to list stalls, upload images via S3, and access AI-driven insights through Gemini and geolocation-based filters.",
      technologies: ["React", "Node.js", "MongoDB", "AI APIs", "JWT", "AWS S3"],
      image: streetbites,
      github: "#",
      live: "https://street-bites-rho.vercel.app/",
      category: "Original Product",
      status: "Live in Production",
      featured: true,
      metrics: ["🏪 Boosting local vendor visibility", "⚙️ 99.9% uptime", "🔗 5+ smart integrations"]
    },
    {
      id: 2,
      title: "Epidora",
      description: "Epidora is an AI-powered MERN app that recommends skincare based on user symptoms and crop-related allergens, helping farmers manage skin issues effectively.",
      longDescription: "Epidora is an AI-powered web application combining skincare and agriculture. Built with the MERN stack, it recommends personalized skincare products based on user symptoms and crop-related allergens — especially tailored for farmers. The app uses geolocation, allergen data, and smart filtering to deliver meaningful skincare solutions.",
      technologies: ["react.tsx", "Supabase", "Gemini API"],
      image: epidora,
      github: "https://github.com/Sambhav-gg/epidoraa",
      live: "https://epidora.netlify.app/",
      category: "Original Product",
      status: "Beta Testing",
      featured: true,
      metrics: ["AI-powered skincare suggestions","Allergen-aware product filtering","UV index-based recommendations"]    },
    {
      id: 3,
      title: "Maya Tours and Travels",
      description: "Maya Tours & Travel is a MERN web app with a booking interface for users and an admin panel for the owner, enhanced with n8n automation to streamline inquiries and reduce manual work.",
      longDescription: "Maya Tours & Travel is a MERN stack web app built for a travel agency, featuring a customer-facing booking/enquiry interface and an admin panel for the owner. Integrated n8n automation to streamline inquiries and redesigned the UI to improve user experience and drive more traffic.",
      technologies: ["MERN Stack", "Redux", "JWT", "MongoDB", "Express.js", "N8N", "Whatsapp API", "Google Maps API"],
      image: maya,
      github: "#",
      live: "https://company-erp.com",
      category: "Client Project",
      status: "Production",
      featured: true,
      metrics: ["Automated enquiry areas with n8n", "Improved enquiry handling by 30%", "Enabled custom admin panel"]

    },
    {
      id: 4,
      title: "Real-Time Communication Hub",
      description: "High-performance chat application with advanced features like file sharing, message encryption, and real-time presence indicators. Built to handle thousands of concurrent users.",
      longDescription: "ChatZ is a scalable messaging platform with advanced Socket.io implementation, featuring private messaging, file uploads ans message history",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT"],
      image: ChatZ,
      github: "https://github.com/Sambhav-gg/Chat-Z",
      live: "https://chat-z-45og.onrender.com/",
      category: "Technical Showcase",
      status: "Demo Available",
      featured: false,
      metrics: ["Real-time messaging", "File sharing", "Message history"]
    },
    {
      id: 5,
      title: "Job Portal",
      description: "Full-stack web application demonstrating advanced authentication flows, state management with Redux, and secure API development. Perfect showcase of modern web development practices.",
      longDescription: "A MERN stack job portal featuring JWT authentication, Redux for state management, and protected routes. It offers role-based dashboards where job seekers can apply to jobs, recruiters can manage listings, and admins oversee users and platform activity—demonstrating complete full-stack capability.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT", "bcrypt"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "#",
      live: "https://jobportal-gg-f1g2.onrender.com",
      category: "Technical Showcase",
      status: "Open Source",
      featured: true,
      metrics: ["Secure authentication", "Redux state mgmt", "Protected routes"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Enhanced Project Card Component
  const ProjectCard = ({ project, index }) => (
    <div 
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Project Category Badge */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          project.category === 'Original Product' 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500/50' 
            : project.category === 'Client Project'
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500/50'
            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-500/50'
        }`}>
          {project.category}
        </div>
        <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs border border-white/20">
          {project.status}
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            project.featured ? 'h-80' : 'h-64'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      
      <div className={`p-6 ${project.featured ? 'lg:p-8' : ''}`}>
        <h3 className={`font-bold text-white mb-3 group-hover:text-purple-300 transition-colors ${
          project.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-gray-300 mb-4 leading-relaxed ${
          project.featured ? 'text-base lg:text-lg mb-6' : 'text-sm'
        }`}>
          {project.featured ? project.longDescription : project.description}
        </p>
        
        {/* Project Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-400 mb-1">Achievement</p>
                <p className="text-sm font-semibold text-white">{metric}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.github}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
          >
            <Github size={16} />
            <span className="group-hover/link:underline">Source Code</span>
          </a>
          {project.live !== "#" && (
            <a 
              href={project.live}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
            >
              <ExternalLink size={16} />
              <span className="group-hover/link:underline">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: `translate(-50%, -50%)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transform: `translate(50%, 50%)`
          }}
        ></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-3xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Sambhav Garg
              </div>
            </div>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button 
              className="md:hidden relative w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? <X size={20} className="text-white relative z-10" /> : <Menu size={20} className="text-white relative z-10" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-3xl border-t border-white/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-2000 opacity-60"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-3000 opacity-60"></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300">Available for opportunities</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-white/90">Creative</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through{' '}
              <span className="text-purple-400 font-semibold">Full Stack Development</span>{' '}
              and <span className="text-pink-400 font-semibold">AI Integration</span>.
              Turning complex problems into elegant solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                Let's Connect
                <MousePointer size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xl text-gray-300 leading-relaxed space-y-6">
                <p>
                  I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with a 
                  deep focus on <span className="text-pink-400 font-semibold">Data Structures and Algorithm</span> and cutting-edge 
                  AI integration. I specialize in building scalable web applications that don't just work—they excel.
                </p>
                <p>
                  My expertise spans modern web technologies, cloud architecture, and advanced prompt engineering. 
                  I have a proven track record in AWS services and excel at creating robust applications that handle 
                  complex data processing and real-time interactions seamlessly.
                </p>
                <p>
                  With a solid foundation in data structures and algorithms, I write clean, efficient code that 
                  performs exceptionally under pressure. I'm constantly pushing boundaries at the intersection of 
                  web development and DSA.
                </p>
              </div>
              
             
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Currently building amazing projects</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Learning new AWS services</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Open to collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Mastery Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-stack expertise with deep proficiency across modern technologies and development practices
            </p>
          </div>
          
          {/* Interactive Technology Map */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Frontend Technologies */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                    <p className="text-blue-300">User Experience & Interface</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {technicalArsenal.frontend.concat(technicalArsenal.core.filter(s => s.name === 'JavaScript' || s.name === 'HTML/CSS')).map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group/skill">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{skill.icon}</span>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">{skill.category}</span>
                          <span className="text-blue-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/50"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                    <p className="text-green-300">Server & API Architecture</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {technicalArsenal.backend.concat(technicalArsenal.core.filter(s => s.name === 'Python' || s.name === 'C/C++')).map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group/skill">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{skill.icon}</span>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">{skill.category}</span>
                          <span className="text-green-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-green-500/50"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data & Cloud Technologies */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Data & Security */}
            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🗄️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Data & Security</h3>
                  <p className="text-purple-300">Database & Authentication</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {technicalArsenal.data.map((skill, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold">{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.category}</p>
                        </div>
                      </div>
                      <span className="text-purple-400 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Tools */}
            <div className="group bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Cloud & Tools</h3>
                  <p className="text-orange-300">DevOps & Automation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {technicalArsenal.cloud.map((skill, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-orange-400/30 transition-all duration-300 group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold">{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.category}</p>
                        </div>
                      </div>
                      <span className="text-orange-400 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-orange-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">20+</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Technologies</h3>
              <p className="text-gray-300">Modern Tech Stack</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Real Projects</h3>
              <p className="text-gray-300">Production Ready</p>
            </div>
            <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Original Ideas</h3>
              <p className="text-gray-300">From Concept to Reality</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">Dedication</h3>
              <p className="text-gray-300">Quality Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss how we can create something extraordinary together.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:sambhavgarg24@gmail.com"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <Mail size={20} />
                  <span>Send Message</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://github.com/Sambhav-gg"
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sambhav-garg-50386a291/"
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="text-lg">© 2025 Sambhav Garg. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
