import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Aegis AI — Healthcare Platform',
      description:
        'An autonomous healthcare intelligence platform powered by agentic AI. Features AI agents for symptoms, diagnosis, and care plans. Currently in active development.',
      tags: ['React', 'TypeScript', 'AI Agents', 'Healthcare'],
      status: 'building',
    },
    {
      title: 'Developer Portfolio',
      description:
        'A sleek, high-performance personal portfolio built with React, TypeScript, and Tailwind CSS. Features glassmorphism UI, aurora gradients, smooth scroll navigation, and a resume viewer.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'live',
      github: 'https://github.com/Mamta653',
    },
    {
      title: 'Landing Portfolio',
      description:
        'A high-performance landing page built with pure HTML, CSS and no frameworks. Features a Midnight & Emerald glassmorphism aesthetic, responsive design, and near-instant load times.',
      tags: ['HTML5', 'CSS3', 'Glassmorphism', 'Responsive'],
      status: 'live',
      github: 'https://github.com/Mamta653',
    },
    {
      title: 'Todo App',
      description:
        'A clean and simple task manager built with HTML, Tailwind CSS and vanilla JavaScript. Supports adding, deleting tasks with localStorage persistence across sessions.',
      tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'localStorage'],
      status: 'live',
      github: 'https://github.com/Mamta653/Todo-app',
    },
    {
      title: 'Spotify Clone',
      description:
        'A frontend clone of Spotify\'s UI built while learning React. Features playlist browsing, music player controls, and a responsive layout mimicking the original design.',
      tags: ['React', 'CSS', 'JavaScript'],
      status: 'coming-soon',
    },
    {
      title: 'More Coming Soon',
      description:
        'Currently learning and building. New projects will be added here as they are completed. Follow my GitHub to stay updated.',
      tags: [],
      status: 'coming-soon',
    },
  ];

  return (
    <section className="min-h-screen py-32 px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl font-bold text-white tracking-tight mb-4">
            Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              delay={index * 100}
              status={project.status}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}