import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { projects, projectCategories } from '../data/projects';

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-dark-700 bg-dark-800 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      {/* Image placeholder */}
      <div className="flex h-44 items-center justify-center rounded-t-xl bg-dark-700/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-t-xl object-cover"
            loading="lazy"
          />
        ) : (
          <Code2 size={40} className="text-dark-500" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {project.placeholder && (
          <span className="mb-2 inline-block w-fit rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Placeholder
          </span>
        )}
        <h3 className="mb-2 text-lg font-semibold text-slate-100">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.features && (
          <ul className="mb-4 space-y-1">
            {project.features.slice(0, 3).map((feat) => (
              <li key={feat} className="text-xs text-slate-500">
                • {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-dark-600 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <GitHubIcon size={14} />
              Code
            </a>
          )}
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Projects
        </h2>
        <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-accent" />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-accent text-dark-900'
                  : 'border border-dark-600 text-slate-400 hover:border-accent/40 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
