import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, SnapchatIcon } from './SocialIcons';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-dark-700 bg-dark-800/50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-bold text-accent">
              &lt;Jay Kore /&gt;
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Building things that matter.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={profile.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
              aria-label="Snapchat"
            >
              <SnapchatIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-dark-700 hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1 text-xs text-slate-600">
          <span>&copy; {new Date().getFullYear()} Jay Kore. Made with</span>
          <Heart size={12} className="text-red-500" />
        </div>
      </div>
    </footer>
  );
}
