import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Salus AI — Healthcare Platform',
      description: 'A full stack telehealth platform with JWT auth, doctor consultation booking, Daily.co video call rooms, and transactional email. Built with NestJS REST API, PostgreSQL on Supabase, and a React frontend.',
      tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'Supabase'],
      status: 'fullstack',
      github: 'https://github.com/Mamta653',
      liveUrl: 'https://aegis-frontend-gilt.vercel.app',
    },
    {
      title: 'Developer Portfolio',
      description: 'A sleek, high-performance personal portfolio built with React, TypeScript, and Tailwind CSS. Features glassmorphism UI, aurora gradients, smooth scroll navigation, and a resume viewer.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'live',
      github: 'https://github.com/Mamta653',
      liveUrl: 'https://mie-portfolio-iota.vercel.app',
    },
    {
      title: 'Email Triage RL Environment',
      description: 'A multi-step reinforcement learning environment where an AI agent triages realistic email inboxes across 3 difficulty levels with urgency-aware reward shaping. Built for the Meta PyTorch OpenEnv Hackathon x Scaler 2026.',
      tags: ['Python', 'FastAPI', 'Reinforcement Learning', 'OpenEnv', 'HuggingFace'],
      status: 'live',
      github: 'https://github.com/Mamta653/email-triage-env',
      liveUrl: 'https://mamta24-email-triage-env.hf.space',
    },
  ];

  return (
    <section className='min-h-screen py-32 px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-20'>
          <h2 className='text-6xl font-bold text-white tracking-tight mb-4'>
            Featured Projects
          </h2>
          <div className='h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              delay={index * 100}
              status={project.status}
              github={project.github}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
