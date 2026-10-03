import Reveal from "@/components/Reveal";
import { SectionHeading, Tag } from "@/components/ui";
import { featuredProjects, moreProjects } from "@/content/site";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading index="04" eyebrow="Before" title="Earlier work">
          Some of the projects I worked on at Seaflux and Moon Technolabs.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-bg p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                      {p.company}
                    </p>
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted transition hover:border-signal hover:text-signal"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
                <p className="mt-4 text-pretty">{p.summary}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  <span className="text-signal">My part: </span>
                  {p.did}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-faint">Also shipped</h3>
          <ul className="divide-y divide-line border-y border-line">
            {moreProjects.map((p) => (
              <li
                key={p.name}
                className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-sm text-muted">{p.summary}</span>
                <span className="font-mono text-[11px] text-faint">{p.stack.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
