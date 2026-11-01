import { Avatar, Container } from "@/components/ui";
import { profile } from "@/content/site";
import { resumeHref } from "@/lib/assets";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <Avatar size={64} />
        <p className="mt-8 font-serif text-lg italic text-accent">Say hello</p>
        <h2 className="mt-1 max-w-4xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-7xl">
          Let&apos;s build something <em className="text-accent">great</em> together.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="ink-link mt-10 inline-block font-serif text-2xl sm:text-3xl"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-muted">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ink-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ink-link">
              GitHub
            </a>
          </li>
          {resumeHref && (
            <li>
              <a href={resumeHref} className="ink-link">
                Resume (PDF)
              </a>
            </li>
          )}
          <li className="text-faint">Based in {profile.location}</li>
        </ul>
      </Container>
    </section>
  );
}
