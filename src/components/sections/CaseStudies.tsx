import EntryCard from "@/components/EntryCard";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { getEntries } from "@/lib/content";

export default async function CaseStudies() {
  const entries = await getEntries("case-studies");
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="03" eyebrow="Deep dives" title="Case studies">
        A closer look at a few problems I worked through: what went wrong, how I found it, and what I
        changed.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((e, i) => (
          <Reveal key={e.slug} delay={i * 80}>
            <EntryCard entry={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
