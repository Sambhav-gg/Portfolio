const SKILL_GROUPS = [
  {
    label: 'Languages',
    color: '#00e5ff',
    bg: 'rgba(0,229,255,0.06)',
    border: 'rgba(0,229,255,0.15)',
    skills: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'C / C++', level: 84 },
      { name: 'Dart', level: 65 },
    ],
  },
  {
    label: 'Frontend',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.2)',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    label: 'Backend',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.04)',
    border: 'rgba(0,255,136,0.15)',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Socket.io', level: 82 },
    ],
  },
  {
    label: 'Database',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.04)',
    border: 'rgba(245,158,11,0.15)',
    skills: [
      { name: 'MongoDB', level: 86 },
      { name: 'SQLite', level: 72 },
      { name: 'JWT Auth', level: 90 },
      { name: 'Mongoose ODM', level: 85 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: '#ff6b35',
    bg: 'rgba(255,107,53,0.04)',
    border: 'rgba(255,107,53,0.15)',
    skills: [
      { name: 'AWS EC2 + S3', level: 80 },
      { name: 'Docker', level: 72 },
      { name: 'Linux / Shell', level: 75 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
  {
    label: 'CS Fundamentals',
    color: '#e879f9',
    bg: 'rgba(232,121,249,0.04)',
    border: 'rgba(232,121,249,0.15)',
    skills: [
      { name: 'DSA (300+ solved)', level: 88 },
      { name: 'OOP', level: 90 },
      { name: 'DBMS', level: 80 },
      { name: 'OS / Networks', level: 78 },
    ],
  },
];

function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_50%,rgba(0,102,255,0.04),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00e5ff] font-mono text-sm font-semibold tracking-[0.2em] uppercase mb-3">// 02</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Technical <span style={{ color: '#00e5ff' }}>Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00e5ff] to-[#0066ff] mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: group.bg, borderColor: group.border }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${group.color}, ${group.color}55)` }}
                />
                <h3 className="text-white font-bold text-base">{group.label}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '20+', label: 'Technologies', color: '#00e5ff' },
            { val: '6', label: 'Projects Built', color: '#7c3aed' },
            { val: 'AWS', label: 'Certified', color: '#00ff88' },
            { val: '300+', label: 'DSA Problems', color: '#f59e0b' },
          ].map(({ val, label, color }) => (
            <div
              key={label}
              className="rounded-2xl p-6 text-center border border-white/8 bg-white/[0.02] hover:border-white/15 transition-colors"
            >
              <div className="text-3xl font-black mb-1" style={{ color }}>{val}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}