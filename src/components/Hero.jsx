import { ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-wider text-accent">
          Hello, World! I&apos;m
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mb-6 text-lg text-slate-400 sm:text-xl">
          {profile.role}
        </p>

        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Passionate about building software that makes an impact. Currently
          exploring full-stack development, AI, and automation.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            View My Projects
          </button>
          <a
            href={profile.resumePath}
            download
            className="rounded-lg border border-dark-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-accent/40 hover:text-accent"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-lg border border-dark-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-accent/40 hover:text-accent"
          >
            Contact Me
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full p-2.5 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="mt-16 animate-bounce text-slate-600 transition-colors hover:text-accent"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
