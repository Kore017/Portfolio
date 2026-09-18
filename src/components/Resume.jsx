import { FileDown, ExternalLink, FileText } from 'lucide-react';
import { profile } from '../data/profile';

export default function Resume() {
  return (
    <section id="resume" className="bg-dark-800/50 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Resume
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="rounded-xl border border-dark-700 bg-dark-800 p-6 sm:p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="rounded-lg bg-accent/10 p-3">
              <FileText size={28} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                {profile.name} — Resume
              </h3>
              <p className="text-sm text-slate-400">
                Computer Engineering Student &amp; Developer
              </p>
            </div>
          </div>

          {/*
            TODO: Place your resume at public/resume.pdf
            The embedded preview and buttons below will work automatically once the file is there.
          */}

          <div className="mb-6 hidden overflow-hidden rounded-lg border border-dark-700 sm:block">
            <iframe
              src={`${profile.resumePath}#toolbar=0`}
              title="Resume Preview"
              className="h-[500px] w-full bg-dark-700"
            />
          </div>

          <p className="mb-6 text-center text-sm text-slate-500 sm:hidden">
            Preview is available on desktop. Use the buttons below to view or download.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumePath}
              download
              className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-dark-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-accent/40 hover:text-accent"
            >
              <ExternalLink size={16} />
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
