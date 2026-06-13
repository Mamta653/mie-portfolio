import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];
  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };
  const a = (id: string) => activeSection === id ? 'bg-emerald-500/20 border border-emerald-400/30' : 'bg-transparent hover:bg-white/5';
  const t = (id: string) => activeSection === id ? 'text-emerald-300' : 'text-slate-400 group-hover:text-white';
  const m = (id: string) => activeSection === id ? 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-300' : 'text-slate-400 hover:text-white hover:bg-white/5';
  return (
    <nav className="fixed top-0 left-0 w-full h-16 backdrop-blur-xl bg-white/5 border-b border-white/10 z-50 flex items-center px-6 md:px-8">
      <div className="hidden md:flex flex-row gap-6 mx-auto items-center">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => handleNavigate(item.id)} className="group relative flex items-center justify-center px-4 py-2 transition-all duration-300">
            <div className={'absolute inset-0 rounded-lg transition-all duration-300 ' + a(item.id)} />
            <span className={'relative text-sm font-medium tracking-wider transition-colors duration-300 ' + t(item.id)}>{item.label}</span>
          </button>
        ))}
        <a href="/resume.pdf" download="Mamta_Resume.pdf" className="group relative flex items-center gap-2 px-4 py-2 transition-all duration-300">
          <div className="absolute inset-0 rounded-lg bg-emerald-500/10 border border-emerald-400/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40 transition-all duration-300" />
          <Download size={14} className="relative text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
          <span className="relative text-sm font-medium tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">Resume</span>
        </a>
      </div>
      <div className="flex md:hidden w-full items-center justify-between">
        <span className="text-white font-semibold tracking-wide text-sm">Mamta</span>
        <button onClick={() => setMenuOpen(menuOpen ? false : true)} className="text-slate-400 hover:text-white transition-colors duration-300 p-1">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen ? (
        <div className="absolute top-16 left-0 w-full backdrop-blur-xl bg-[#121212]/95 border-b border-white/10 flex flex-col py-4 px-6 gap-1 md:hidden z-50">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavigate(item.id)} className={'w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wider transition-all duration-300 ' + m(item.id)}>{item.label}</button>
          ))}
          <a href="/resume.pdf" download="Mamta_Resume.pdf" className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-300 mt-1">
            <Download size={14} />
            Resume
          </a>
        </div>
      ) : null}
    </nav>
  );
}
