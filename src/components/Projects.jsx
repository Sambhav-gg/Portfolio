import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'AWS Cost Dashboard',
    tagline: 'Cloud Spend Visibility Platform',
    description:
      'Full-stack dashboard aggregating AWS cost & usage data via the Cost Explorer API. Integrates AWS Budgets alert thresholds and CloudWatch metrics for resource utilisation, anomaly detection, and cost-optimisation insights. Secure Node.js/Express REST API backend with JWT auth; static assets served via AWS S3.',
    tech: ['React.js', 'Node.js', 'Express', 'AWS Cost Explorer', 'AWS Budgets', 'CloudWatch', 'S3', 'JWT'],
    github: '#',
    live: '#',
    category: 'Cloud / DevOps',
    categoryColor: '#ff6b35',
    status: 'Personal Project',
    metrics: ['Real-time spend visibility', 'Anomaly detection', 'JWT-secured API'],
    featured: true,
  },
  {
    id: 2,
    title: 'StreetBites',
    tagline: 'AI-Powered Vendor Discovery Platform',
    description:
      'End-to-end MERN application helping users discover nearby food stalls. Integrates Gemini AI for intelligent vendor recommendations, Google Maps API for geolocation-based discovery with distance-aware filtering, and Cloudinary for secure image upload pipelines. All endpoints validated via Postman.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Google Maps API', 'AWS S3', 'Cloudinary', 'JWT'],
    github: '#',
    live: 'https://street-bites-rho.vercel.app/',
    category: 'Original Product',
    categoryColor: '#00e5ff',
    status: 'Live in Production',
    metrics: ['Geolocation-based search', 'AI recommendations', '99.9% uptime'],
    featured: true,
  },
  {
    id: 3,
    title: 'Epidora',
    tagline: 'AI-Driven Skincare Recommendation System',
    description:
      'Translates user health requirements into technical specs; built symptom and allergen tracking with AI-driven recommendation workflows delivering personalised skincare guidance. Documented system architecture, API contracts, and data flow diagrams. Modular MVC architecture with structured error handling.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'REST APIs', 'Supabase'],
    github: 'https://github.com/Sambhav-gg/epidoraa',
    live: 'https://epidora.netlify.app/',
    category: 'Original Product',
    categoryColor: '#00e5ff',
    status: 'Beta Testing',
    metrics: ['AI skincare guidance', 'Allergen-aware filtering', 'UV index recommendations'],
    featured: false,
  },
  {
    id: 4,
    title: 'Bootrider',
    tagline: 'Ride-booking & Fleet Management App',
    description:
      'Full-stack ride-booking platform with real-time driver-passenger matching, live location tracking via WebSockets, and role-based dashboards for riders, drivers, and admins. Built with a MERN stack, secured with JWT, and designed for low-latency real-time communication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Google Maps API'],
    github: '#',
    live: '#',
    category: 'Technical Showcase',
    categoryColor: '#7c3aed',
    status: 'In Development',
    metrics: ['Real-time matching', 'Live location', 'Role-based access'],
    featured: false,
  },
  {
    id: 5,
    title: 'Maya Tours & Travels',
    tagline: 'Client Project — Travel Agency Platform',
    description:
      'Production MERN web app for a travel agency with a customer-facing booking/enquiry interface and an admin panel for the owner. Integrated n8n automation to streamline enquiry handling and WhatsApp API for follow-ups. Redesigned the UI for mobile responsiveness; improved enquiry handling by 30%.',
    tech: ['MERN Stack', 'Redux', 'JWT', 'N8N', 'WhatsApp API', 'Google Maps API'],
    github: '#',
    live: 'https://tourtravels-3xq6.vercel.app/',
    category: 'Client Project',
    categoryColor: '#00ff88',
    status: 'Live in Production',
    metrics: ['n8n automation', '+30% enquiry efficiency', 'Custom admin panel'],
    featured: true,
  },
  {
    id: 6,
    title: 'ChatZ',
    tagline: 'Real-Time Communication Hub',
    description:
      'Scalable real-time messaging platform built with advanced Socket.io implementation. Features private messaging, file uploads, message history, and real-time presence indicators. Designed to handle thousands of concurrent users with minimal latency.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'JWT'],
    github: 'https://github.com/Sambhav-gg/Chat-Z',
    live: 'https://chat-z-45og.onrender.com/',
    category: 'Technical Showcase',
    categoryColor: '#7c3aed',
    status: 'Demo Available',
    metrics: ['Real-time messaging', 'File sharing', 'Persistent history'],
    featured: false,
  },
  {
    id: 7,
    title: 'JobPortal',
    tagline: 'Role-Based Hiring Platform',
    description:
      'MERN stack job portal with JWT authentication, Redux state management, and protected routes. Role-based dashboards for job seekers, recruiters, and admins. RESTful APIs for job posting, application tracking, and status management. Fully tested via Postman with modular MVC architecture.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'bcrypt', 'Cloudinary'],
    github: '#',
    live: 'https://jobportal-gg-f1g2.onrender.com',
    category: 'Technical Showcase',
    categoryColor: '#7c3aed',
    status: 'Demo Available',
    metrics: ['Secure JWT auth', 'Redux state mgmt', 'Protected routes'],
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className={`group relative rounded-2xl border bg-white/[0.02] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/15 flex flex-col ${
        project.featured ? 'border-white/10' : 'border-white/6'
      }`}
    >
      {/* Top bar accent */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.categoryColor}80, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className="px-2.5 py-1 rounded-md text-xs font-bold"
            style={{ background: `${project.categoryColor}18`, color: project.categoryColor, border: `1px solid ${project.categoryColor}30` }}
          >
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs text-gray-500 border border-white/8 bg-white/[0.02]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#00e5ff] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: project.categoryColor }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.metrics.map((m) => (
            <div key={m} className="bg-white/[0.03] border border-white/6 rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400 leading-tight">{m}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md text-xs text-gray-400 border border-white/8 bg-white/[0.03]">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.github}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github size={15} />
            Source
          </a>
          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              style={{ color: project.categoryColor }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.03),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00e5ff] font-mono text-sm font-semibold tracking-[0.2em] uppercase mb-3">// 03</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Featured <span style={{ color: '#00e5ff' }}>Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-[#0066ff] mt-4 rounded-full" />
        </div>

        {/* Featured row */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Rest */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}