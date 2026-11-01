import Reveal from "@/components/Reveal";
import { Container, SectionHeading, Stack } from "@/components/ui";
import { featuredProjects, moreProjects } from "@/content/site";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface/70 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Before" title="Earlier work">
          Some of the projects I worked on at Seaflux and Moon Technolabs.
        </SectionHeading>

        <div className="grid gap-x-16 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80} className="border-t border-line-strong py-8">
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-3xl font-medium tracking-tight">{p.name}</h3>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer" className="ink-link text-sm">
                      Visit site ↗
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-faint">{p.company}</p>
                <p className="mt-4 text-pretty">{p.summary}</p>
                <p className="mt-3 leading-relaxed text-muted text-pretty">
                  <em className="font-serif text-accent">My part:</em> {p.did}
                </p>
                <Stack items={p.stack} className="mt-4" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="mb-2 font-serif text-xl italic text-muted">Also shipped</h3>
          <ul className="divide-y divide-line border-y border-line-strong">
            {moreProjects.map((p) => (
              <li
                key={p.name}
                className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-muted">{p.summary}</span>
                <span className="text-sm text-faint">{p.stack.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
