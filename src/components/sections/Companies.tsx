import { CompanyLogo } from "@/components/ui";
import { experience } from "@/content/site";

export default function Companies() {
  return (
    <section aria-label="Companies I've worked with" className="border-y border-line bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-faint">
          Companies I&apos;ve worked with
        </p>
        <ul className="grid flex-1 gap-4 sm:grid-cols-3">
          {experience.map((job) => (
            <li key={job.company}>
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <CompanyLogo src={job.logo} size={40} />
                <span className="flex flex-col">
                  <span className="text-lg font-semibold tracking-tight text-muted transition group-hover:text-ink">
                    {job.company}
                  </span>
                  <span className="font-mono text-[11px] text-faint">{job.period}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
