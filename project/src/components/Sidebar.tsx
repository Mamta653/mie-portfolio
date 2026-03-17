interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    // Changed: w-full h-16, flex-row, and border-b
    <nav className="fixed top-0 left-0 w-full h-16 backdrop-blur-xl bg-white/5 border-b border-white/10 z-50 flex items-center px-8">
      <div className="flex flex-row gap-6 mx-auto"> 
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group relative flex items-center justify-center px-4 py-2 transition-all duration-300"
          >
            {/* Background Highlight */}
            <div
              className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-emerald-500/20 border border-emerald-400/30'
                  : 'bg-transparent hover:bg-white/5'
              }`}
            />
            {/* Label - Removed vertical writing mode */}
            <span
              className={`relative text-sm font-medium tracking-wider transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-emerald-300'
                  : 'text-slate-400 group-hover:text-white'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}