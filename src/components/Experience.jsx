import { Briefcase, Rocket } from 'lucide-react';
import { experience } from '../data/education';

export default function Experience() {
  if (experience.length === 0) {
    return (
      <section id="experience" className="bg-dark-800/50 px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
            Experience
          </h2>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

          <div className="rounded-xl border border-dashed border-dark-600 bg-dark-800/50 p-8 text-center">
            <Rocket size={32} className="mx-auto mb-4 text-accent/60" />
            <p className="mb-2 text-slate-300">
              Currently building projects and developing my software engineering
              skills.
            </p>
            <p className="text-sm text-slate-500">
              Actively looking for internship opportunities to apply my skills in
              a professional environment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="bg-dark-800/50 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Experience
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="rounded-xl border border-dark-700 bg-dark-800 p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-3 flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5">
                  <Briefcase size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-400">{exp.company}</p>
                  <p className="text-xs text-slate-500">{exp.period}</p>
                </div>
              </div>
              {exp.description && (
                <p className="mb-3 text-sm text-slate-400">{exp.description}</p>
              )}
              {exp.highlights && (
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
