import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Education
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-dark-700 bg-dark-800 p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-400">{edu.institution}</p>
                  {edu.college !== 'Your College Name' && (
                    <p className="text-sm text-slate-500">{edu.college}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent/70" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={14} className="text-accent/70" />
                  {edu.status}
                </span>
                {edu.cgpa !== 'N/A' && (
                  <span className="text-accent">CGPA: {edu.cgpa}</span>
                )}
              </div>

              {edu.highlights && (
                <ul className="space-y-1.5">
                  {edu.highlights.map((h) => (
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
