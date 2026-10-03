import Pipeline from "@/components/Pipeline";
import Reveal from "@/components/Reveal";
import { SectionHeading, Tag } from "@/components/ui";
import { capabilities, platformSkills } from "@/content/site";

export default function Capabilities() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="01" eyebrow="Now" title="What I build today">
        The kind of AI work I&apos;m doing these days, grouped by what it does rather than by
        project.
      </SectionHeading>

      <Reveal>
        <Pipeline />
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-line-strong">
              <p className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-medium tracking-tight transition group-hover:text-signal">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.body}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center">
          <p className="shrink-0 text-sm font-medium">Other things I&apos;ve set up:</p>
          <ul className="flex flex-wrap gap-1.5">
            {platformSkills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
