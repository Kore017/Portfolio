import { profile, stats } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          About Me
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="mb-4 leading-relaxed text-slate-400">
              {profile.bio}
            </p>
            <p className="leading-relaxed text-slate-400">
              When I&apos;m not coding, I enjoy exploring new technologies,
              participating in hackathons, and contributing to open-source
              projects. I&apos;m always eager to learn and take on new challenges
              that push my skills forward.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-dark-700 bg-dark-800 p-4 text-center transition-colors hover:border-accent/30"
              >
                <p className="mb-1 text-sm font-semibold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
