import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Bennett University, Greater Noida',
    period: '2023 – 2027',
    detail: 'CGPA: 9.04',
  },
  {
    degree: 'Class XII',
    institution: 'Bhartiya Vidya Bhavan, Lucknow',
    period: '2022 – 23',
    detail: '89%',
  },
  {
    degree: 'Class X',
    institution: 'Bhartiya Vidya Bhavan, Lucknow',
    period: '2020 – 21',
    detail: '93%',
  },
];

const CERTS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'MERN Stack Front To Back', issuer: 'Packt (Coursera)', year: '2025' },
  { name: 'Software Engineering (NPTEL)', issuer: 'IIT', year: '2024' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(0,102,255,0.04),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00e5ff] font-mono text-sm font-semibold tracking-[0.2em] uppercase mb-3">// 01</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            About <span style={{ color: '#00e5ff' }}>Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-[#0066ff] mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">CSE undergrad at Bennett University</span> with a passion for building
              production-grade software. I specialise in Full Stack MERN development, cloud infrastructure with AWS, and integrating AI
              APIs into real-world applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in Data Structures &amp; Algorithms (300+ problems solved, LeetCode rating 1571),
              I write efficient, maintainable code that scales. I hold an{' '}
              <span className="text-[#00e5ff]">AWS Certified Cloud Practitioner</span> certification and have hands-on experience
              with Docker, Linux, and shell scripting.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I've shipped client projects end-to-end — from gathering requirements and designing REST APIs to deploying on AWS
              and building automation workflows with n8n. I'm looking for full-stack, cloud, or AI-product roles where I can
              keep pushing boundaries.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: <Code2 size={16} />, text: '300+ DSA Problems' },
                { icon: <Award size={16} />, text: 'AWS Cloud Practitioner' },
                { icon: <Briefcase size={16} />, text: 'Production Projects' },
                { icon: <GraduationCap size={16} />, text: 'CGPA 9.04' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8">
                  <span className="text-[#00e5ff]">{icon}</span>
                  <span className="text-sm text-gray-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap size={20} className="text-[#00e5ff]" />
                <h3 className="text-white font-bold text-lg">Education</h3>
              </div>
              <div className="space-y-3">
                {EDUCATION.map((e) => (
                  <div key={e.degree} className="p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#00e5ff]/20 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold text-sm">{e.degree}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{e.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[#00e5ff] font-bold text-sm">{e.detail}</p>
                        <p className="text-gray-500 text-xs">{e.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Award size={20} className="text-[#00e5ff]" />
                <h3 className="text-white font-bold text-lg">Certifications</h3>
              </div>
              <div className="space-y-3">
                {CERTS.map((c) => (
                  <div key={c.name} className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#00e5ff]/20 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#00e5ff] shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{c.name}</p>
                      <p className="text-gray-400 text-xs">{c.issuer} · {c.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Briefcase size={20} className="text-[#00e5ff]" />
                <h3 className="text-white font-bold text-lg">Experience</h3>
              </div>
              <div className="p-5 rounded-xl border border-[#00e5ff]/20 bg-[#00e5ff]/[0.03]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-bold">Full-Stack Web Developer (MERN)</p>
                    <p className="text-[#00e5ff] text-sm">Maya Tours And Travels</p>
                  </div>
                  <span className="text-gray-500 text-xs shrink-0">Jun – Jul 2025</span>
                </div>
                <ul className="space-y-1 mt-3">
                  {[
                    'Delivered production MERN app with n8n automation workflows',
                    'Reduced manual operational effort via automated lead routing',
                    'Owned full SDLC: requirements → development → testing → deployment',
                    'Redesigned UI for accessibility and mobile responsiveness',
                  ].map((pt) => (
                    <li key={pt} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-[#00e5ff] mt-1 shrink-0">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}