import { Code2, Layers, Zap, Database, Server, GitBranch, Box, Braces } from 'lucide-react';

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  delay?: number;
}

function TechIcon({ icon, name, category, delay = 0 }: TechIconProps) {
  return (
    <div className="group relative w-full" style={{ animationDelay: `${delay}ms` }}>
      <div
        className="relative flex flex-col items-center justify-center gap-1 transition-all duration-500 hover:scale-105 w-full mx-auto"
        style={{ aspectRatio: '1 / 1', maxWidth: '160px' }}
      >
        <div
          className="absolute inset-0 backdrop-blur-[40px] bg-white/[0.03] border border-white/[0.15] rounded-2xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-emerald-400/40"
          style={{ boxShadow: '0 12px 48px 0 rgba(0,0,0,0.5), inset 0 2px 0 0 rgba(255,255,255,0.08)' }}
        />
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(80,200,120,0.15) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(80,200,120,0.5)] scale-50 sm:scale-75 md:scale-90 lg:scale-100">
          {icon}
        </div>
        <div className="relative z-10 text-center px-1">
          <div
            className="font-semibold text-white tracking-wide leading-tight"
            style={{ fontSize: 'clamp(0.45rem, 1.8vw, 0.875rem)' }}
          >
            {name}
          </div>
          <div
            className="text-slate-400 hidden sm:block leading-tight mt-0.5"
            style={{ fontSize: 'clamp(0.4rem, 1.2vw, 0.7rem)' }}
          >
            {category}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const technologies = [
    { icon: <Zap size={48} className="text-emerald-400" strokeWidth={1.5} />, name: 'React', category: 'Frontend' },
    { icon: <Braces size={48} className="text-emerald-400" strokeWidth={1.5} />, name: 'TypeScript', category: 'Language' },
    { icon: <Code2 size={48} className="text-emerald-400" strokeWidth={1.5} />, name: 'Java', category: 'Backend' },
    { icon: <Server size={48} className="text-emerald-400" strokeWidth={1.5} />, name: 'Node.js', category: 'Runtime' },
    { icon: <Layers size={48} className="text-emerald-400" strokeWidth={1.5} />, name: 'NestJS', category: 'Framework' },
    { icon: <Database size={48} className="text-slate-400" strokeWidth={1.5} />, name: 'PostgreSQL', category: 'Database' },
    { icon: <Box size={48} className="text-slate-400" strokeWidth={1.5} />, name: 'Supabase', category: 'BaaS' },
    { icon: <GitBranch size={48} className="text-slate-400" strokeWidth={1.5} />, name: 'Git', category: 'Version Control' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        <div className="mb-10 md:mb-20">
          <h2
         className="font-bold text-white tracking-tight mb-4"
          style={{
            fontSize: 'clamp(2rem, 8vw, 3.75rem)',
            lineHeight: '1.2',
           }}
            >
            Tech Stack
           </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent" />
          <p
            className="text-slate-400 mt-6 max-w-2xl leading-relaxed font-light"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.125rem)' }}
          >
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        {/* Always 4 columns — 2 rows of 4 */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 place-items-center">
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