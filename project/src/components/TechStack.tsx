import { Code2, Layers, Zap, Database, Server, GitBranch, Box, Braces } from 'lucide-react';

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  delay?: number;
}

function TechIcon({ icon, name, category, delay = 0 }: TechIconProps) {
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-40 h-40 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:scale-110">
        <div
          className="absolute inset-0 backdrop-blur-[40px] bg-white/[0.03] border border-white/[0.15] rounded-3xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-emerald-400/40"
          style={{
            boxShadow:
              '0 12px 48px 0 rgba(0, 0, 0, 0.5), inset 0 2px 0 0 rgba(255, 255, 255, 0.08), 0 0 80px 0 rgba(80, 200, 120, 0.1)',
            transform: 'translateZ(0)',
          }}
        />

        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(80, 200, 120, 0.15) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(80,200,120,0.5)]">
          {icon}
        </div>

        <div className="relative z-10 text-center">
          <div className="text-sm font-semibold text-white tracking-wide mb-1">
            {name}
          </div>
          <div className="text-xs text-slate-400 tracking-wider">{category}</div>
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const technologies = [
    {
      icon: <Zap size={48} className="text-emerald-400" strokeWidth={1.5} />,
      name: 'React',
      category: 'Frontend',
    },
    {
      icon: <Braces size={48} className="text-emerald-400" strokeWidth={1.5} />,
      name: 'TypeScript',
      category: 'Language',
    },
    {
      icon: <Code2 size={48} className="text-emerald-400" strokeWidth={1.5} />,
      name: 'Java',
      category: 'Backend',
    },
    {
      icon: <Server size={48} className="text-emerald-400" strokeWidth={1.5} />,
      name: 'Node.js',
      category: 'Runtime',
    },
    {
      icon: <Layers size={48} className="text-emerald-400" strokeWidth={1.5} />,
      name: 'NestJS',
      category: 'Framework',
    },
    {
      icon: <Database size={48} className="text-slate-400" strokeWidth={1.5} />,
      name: 'PostgreSQL',
      category: 'Database',
    },
    {
      icon: <Box size={48} className="text-slate-400" strokeWidth={1.5} />,
      name: 'Supabase',
      category: 'Backend as a Service',
    },
    {
      icon: <GitBranch size={48} className="text-slate-400" strokeWidth={1.5} />,
      name: 'Git',
      category: 'Version Control',
    },
  ];

  return (
    <section className="min-h-screen py-32 px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="text-6xl font-bold text-white tracking-tight mb-4">
            Technology Stack
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent" />
          <p className="text-slate-400 text-lg mt-6 max-w-2xl leading-relaxed font-light">
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 place-items-center">
          {technologies.map((tech, index) => (
            <TechIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              category={tech.category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}