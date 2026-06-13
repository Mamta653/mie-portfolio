import mamtaPhoto from './download (1).png';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-16 relative overflow-hidden"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,200,120,0.12) 0%, transparent 70%)', filter: 'blur(60px)', top: '-10%', left: '20%', animation: 'aurora1 12s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(112,128,144,0.10) 0%, transparent 70%)', filter: 'blur(60px)', top: '30%', right: '10%', animation: 'aurora2 15s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,200,120,0.07) 0%, transparent 70%)', filter: 'blur(60px)', bottom: '0%', left: '5%', animation: 'aurora3 18s ease-in-out infinite alternate' }} />
      </div>

      <style>{`
        @keyframes aurora1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(80px, 60px) scale(1.15); }
        }
        @keyframes aurora2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(-60px, 80px) scale(1.1); }
        }
        @keyframes aurora3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(50px, -40px) scale(1.2); }
        }
        @keyframes shimmerMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes borderPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        .photo-frame {
          position: relative;
          border-radius: 14px;
        }
        /* Layer 1 — hairline shimmer gradient border */
        .photo-frame::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 15px;
          background: linear-gradient(
            160deg,
            rgba(80, 200, 120, 0.9) 0%,
            rgba(80, 200, 120, 0.2) 30%,
            rgba(112, 128, 144, 0.15) 50%,
            rgba(80, 200, 120, 0.2) 70%,
            rgba(80, 200, 120, 0.85) 100%
          );
          background-size: 300% 300%;
          animation: shimmerMove 6s ease infinite, borderPulse 4s ease-in-out infinite;
          z-index: 0;
        }
        /* Layer 2 — soft outer glow halo */
        .photo-frame::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          background: transparent;
          box-shadow:
            0 0 18px 2px rgba(80, 200, 120, 0.18),
            0 0 40px 4px rgba(80, 200, 120, 0.08);
          animation: borderPulse 4s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
        }
        .photo-frame-inner {
          position: relative;
          z-index: 1;
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          background: #121212;
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto flex items-center justify-between relative z-10 gap-12">

        {/* Left: Text */}
        <div className="space-y-8 flex-1">
          <h1
            className="text-7xl md:text-9xl font-bold tracking-tighter"
            style={{
              background: 'linear-gradient(180deg, #C0C0C0 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
            }}
          >
            Mamta
          </h1>

          <h3
            className="text-xl md:text-2xl font-light uppercase text-slate-400"
            style={{
              background: 'linear-gradient(180deg, #C0C0C0 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
            }}
          >
            Frontend & Full Stack Developer
          </h3>

          <div className="flex items-center gap-6 mt-12">
            <div className="h-px w-24 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <p className="text-slate-400 text-lg tracking-wide font-light max-w-xl leading-relaxed">
              Building modern web applications with React, TypeScript, and Node.js.
              Passionate about clean UI and scalable backends.
            </p>
          </div>

          <div className="flex gap-4 mt-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-400/30 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-emerald-300 font-medium tracking-wide">View Projects</span>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className="relative text-slate-300 font-medium tracking-wide">Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Right: Framed photo */}
        <div
          className="photo-frame hidden md:flex flex-shrink-0"
          style={{ width: '400px', height: '500px' }}
        >
          <div className="photo-frame-inner">
            <img
              src={mamtaPhoto}
              alt="Mamta"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                WebkitMaskImage: `
                  linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
                  linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)
                `,
                maskImage: `
                  linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
                  linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)
                `,
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
                filter: 'brightness(0.82) contrast(1.08) saturate(0.9)',
              }}
            />
            {/* Emerald/slate colour tint overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(80,200,120,0.10) 0%, rgba(112,128,144,0.14) 50%, rgba(80,200,120,0.08) 100%)',
              backgroundSize: '300% 300%',
              animation: 'shimmerMove 8s ease infinite',
              mixBlendMode: 'color',
              borderRadius: '14px',
              pointerEvents: 'none',
            }} />
            {/* Dark vignette edges */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '14px',
              background: `
                radial-gradient(ellipse at center, transparent 45%, rgba(18,18,18,0.55) 100%),
                linear-gradient(to right, rgba(18,18,18,0.4) 0%, transparent 18%, transparent 82%, rgba(18,18,18,0.4) 100%),
                linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, transparent 12%, transparent 88%, rgba(18,18,18,0.45) 100%)
              `,
              pointerEvents: 'none',
            }} />
          </div>
        </div>

      </div>
    </section>
  );
}