import { Container, CompanyLogo } from "@/components/ui";
import { experience } from "@/content/site";

export default function Companies() {
  return (
    <section aria-label="Companies I've worked with">
      <Container>
        <div className="flex flex-col gap-5 border-y border-line py-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 font-serif italic text-muted">Where I&apos;ve worked</p>
          <ul className="flex flex-1 flex-wrap gap-x-10 gap-y-4">
            {experience.map((job) => (
              <li key={job.company}>
                <a href={job.url} target="_blank" rel="noreferrer" className="group flex items-center gap-3">
                  <CompanyLogo src={job.logo} size={34} />
                  <span>
                    <span className="block font-medium transition group-hover:text-accent">{job.company}</span>
                    <span className="block text-xs text-faint">{job.period}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
