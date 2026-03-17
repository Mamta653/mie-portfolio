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
      `}</style>

      <div className="max-w-7xl w-full mx-auto flex items-center justify-between relative z-10 gap-12">

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
            FRONTEND & API Developer
          </h3>

          <div className="flex items-center gap-6 mt-12">
            <div className="h-px w-24 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <p className="text-slate-400 text-lg tracking-wide font-light max-w-xl leading-relaxed">
              Architecting scalable enterprise solutions with Java, Spring Boot,
              and modern React ecosystems
            </p>
          </div>

          <div className="flex gap-4 mt-16">
            <button className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-400/30 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-emerald-300 font-medium tracking-wide">View Projects</span>
            </button>

            <button className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className="relative text-slate-300 font-medium tracking-wide">Get in Touch</span>
            </button>
          </div>
        </div>

        <div className="hidden md:block relative flex-shrink-0" style={{ width: '480px', height: '620px' }}>
          <img
            src={mamtaPhoto}
            alt="Mamta"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.9) contrast(1.05)',
            }}
          />
        </div>

      </div>
    </section>
  );
}