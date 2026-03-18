import { Download, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section className="min-h-screen flex items-center justify-center px-16 relative py-32">
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          <div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(180deg, #C0C0C0 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Resume
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-emerald-500/50 to-transparent" />
              <p className="text-slate-400 text-base tracking-wide font-light">
                My professional resume
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden bg-slate-950/30">
            <iframe
              src="/resume.pdf"
              className="w-full h-[75vh]"
              title="Resume Preview"
            />
          </div>

          <div className="flex gap-4">
            
              <a href="/resume.pdf"
              download
              className="flex-1 group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-400/30 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2 text-emerald-300 font-medium tracking-wide">
                <Download size={18} />
                Download Resume
              </span>
            </a>

            
              <a href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-700/20 border border-white/10 rounded-xl" />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2 text-slate-300 font-medium tracking-wide">
                <Eye size={18} />
                Open in New Tab
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}