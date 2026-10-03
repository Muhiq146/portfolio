import { Avatar, linkClass } from "@/components/ui";
import { profile } from "@/content/site";
import { resumeHref } from "@/lib/assets";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="absolute -bottom-48 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
        <Avatar size={72} />
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-signal">
          08 <span className="text-faint">/ Contact</span>
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Let&apos;s build something great together.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-xl text-muted transition hover:text-signal sm:text-2xl"
        >
          {profile.email} →
        </a>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
          {resumeHref && (
            <li>
              <a href={resumeHref} className={linkClass}>
                Resume (PDF)
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
