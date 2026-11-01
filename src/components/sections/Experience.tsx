import Reveal from "@/components/Reveal";
import { CompanyLogo, Container, SectionHeading } from "@/components/ui";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="The path so far" title="Experience" className="lg:sticky lg:top-28" />
        </div>
        <ol className="divide-y divide-line border-y border-line lg:col-span-8">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal className="grid gap-5 py-9 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <div>
                  <p className="text-sm text-faint">{job.period}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <CompanyLogo src={job.logo} size={36} />
                    <div>
                      <h3 className="font-serif text-xl font-medium leading-tight">{job.company}</h3>
                      <p className="text-sm text-muted">{job.role}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 leading-relaxed text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-pretty">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
