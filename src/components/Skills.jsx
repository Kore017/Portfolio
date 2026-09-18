import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-dark-800/50 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Skills & Technologies
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-dark-700 bg-dark-800 p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-dark-700 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:bg-dark-600"
                  >
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
}
