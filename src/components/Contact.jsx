import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { profile } from '../data/profile';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!validateEmail(form.email)) err.email = 'Enter a valid email';
    if (!form.message.trim()) err.message = 'Message is required';
    else if (form.message.trim().length < 10)
      err.message = 'Message must be at least 10 characters';
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus('sending');

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      };

      await emailjs.send(
        'service_x67vwff',
        'template_lmq1769',
        templateParams,
        'iOYSUG44BYMihJDy9'
      );

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
          Get in Touch
        </h2>
        <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-accent" />

        <div className="grid gap-10 md:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-6 md:col-span-2">
            <p className="text-sm leading-relaxed text-slate-400">
              I&apos;m always open to discussing new projects, internship
              opportunities, or just connecting with fellow developers.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent"
              >
                <Mail size={18} className="text-accent/70" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent"
              >
                <GitHubIcon size={18} className="text-accent/70" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent"
              >
                <LinkedInIcon size={18} className="text-accent/70" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            {status === 'sent' ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                <CheckCircle2 size={40} className="mx-auto mb-3 text-green-400" />
                <h3 className="mb-1 text-lg font-semibold text-slate-100">
                  Message Received!
                </h3>
                <p className="mb-4 text-sm text-slate-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-dark-800 px-4 py-2.5 text-sm text-slate-200 outline-none transition-colors placeholder:text-dark-500 focus:border-accent/50 ${
                      errors.name ? 'border-red-500/50' : 'border-dark-700'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-dark-800 px-4 py-2.5 text-sm text-slate-200 outline-none transition-colors placeholder:text-dark-500 focus:border-accent/50 ${
                      errors.email ? 'border-red-500/50' : 'border-dark-700'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-lg border bg-dark-800 px-4 py-2.5 text-sm text-slate-200 outline-none transition-colors placeholder:text-dark-500 focus:border-accent/50 ${
                      errors.message ? 'border-red-500/50' : 'border-dark-700'
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-dark-900 border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
