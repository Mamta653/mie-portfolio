import { Github, Clock } from 'lucide-react';
// ExternalLink,
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
  status?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  delay = 0,
  status = 'live',
  github,
}: ProjectCardProps) {
  const statusConfig = {
    live: { color: 'bg-emerald-400', label: 'Live' },
    building: { color: 'bg-yellow-400 animate-pulse', label: 'Building' },
    'coming-soon': { color: 'bg-slate-500', label: 'Coming Soon' },
  }[status] ?? { color: 'bg-slate-500', label: 'Coming Soon' };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="absolute inset-0 backdrop-blur-[40px] bg-white/[0.02] border border-white/[0.12] rounded-2xl transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-emerald-400/30"
        style={{
          boxShadow:
            '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        }}
      />

      <div className="relative p-8 h-full flex flex-col">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium tracking-wide text-emerald-300/90 bg-emerald-500/10 border border-emerald-400/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer row — status + github link */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${statusConfig.color}`} />
            <span className="text-xs text-slate-500 tracking-wide">
              {statusConfig.label}
            </span>
          </div>

          {github && status !== 'coming-soon' && (
            
             <a href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <Github size={14} />
              GitHub
            </a>
          )}

          {status === 'coming-soon' && (
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock size={14} />
              In Progress
            </div>
          )}
        </div>
      </div>
    </div>
  );
}