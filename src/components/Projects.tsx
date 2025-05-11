import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Mastermind (Angular)",
    description: "Code breaker game built with Angular 19 adopting Angular Signals for a snappy UI. Utilises CI/CD for auto deployment to GitHub pages",
    liveUrl: "https://aaronbery.github.io/mastermind/",
    githubUrl: "https://github.com/aaronBery/mastermind/",
    skills: ["Angular", "Signals", "TypeScript", "Tailwind", "Material"]
  },
  {
    name: "Mastermind (React)",
    description: "Code breaker game built with React and Vite. It adopts MUI and utilises Tailwind for utility classes. Fully CI/CD.",
    liveUrl: "https://aaronbery.github.io/react-mastermind/",
    githubUrl: "https://github.com/aaronBery/react-mastermind",
    skills: ["React", "TypeScript", "CSS modules", "MUI", "Tailwind"]
  },
  {
    name: "Angular Component Finder",
    description: "A utility to find unused components in Angular applications. Built with C# purely for practicing C#.",
    githubUrl: "https://github.com/aaronBery/ng-component-finder",
    skills: ["C#"]
  },
  {
    name: "Portfolio",
    description: "This portfolio was built with generative AI and a few human interventions.",
    githubUrl: "https://github.com/aaronBery/portfolio",
    skills: ["AI"]
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <span>Personal Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="mt-auto flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline"
                >
                  <ExternalLink className="mr-1" size={18} />
                  Play Game
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
              >
                <Github className="mr-1" size={18} />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 