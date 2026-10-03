import Reveal from "@/components/Reveal";
import { CompanyLogo, SectionHeading } from "@/components/ui";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="05" eyebrow="Path" title="Experience" />
      <ol className="relative border-l border-line">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden
              className={`absolute -left-[5px] top-2 size-2.5 rounded-full ring-4 ring-bg ${
                i === 0 ? "bg-signal" : "bg-line-strong"
              }`}
            />
            <Reveal>
              <div className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-xs text-faint">{job.period}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <CompanyLogo src={job.logo} size={36} />
                    <div>
                      <h3 className="text-lg font-medium leading-tight tracking-tight">{job.company}</h3>
                      <p className="text-sm text-muted">{job.role}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2.5 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-pretty">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
