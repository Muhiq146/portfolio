import EntryCard from "@/components/EntryCard";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { getEntries } from "@/lib/content";

export default async function CaseStudies() {
  const entries = await getEntries("case-studies");
  return (
    <section id="case-studies" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Deep dives" title="Case studies">
          A closer look at a few problems I worked through: what went wrong, how I found it, and what I
          changed.
        </SectionHeading>
        <ul className="divide-y divide-line border-y border-line">
          {entries.map((e) => (
            <li key={e.slug}>
              <Reveal>
                <EntryCard entry={e} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
