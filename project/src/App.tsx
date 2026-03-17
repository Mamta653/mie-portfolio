import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Resume from "./components/resume"
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#121212] overflow-x-hidden">
      <div
        className="aurora-gradient"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="noise-overlay" />

      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative z-10 pt-16">
        <div id="home">
          <Hero />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="resume">
          <Resume />
        </div>

        <div id="stack">
          <TechStack />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;