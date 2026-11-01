import Link from "next/link";
import EntryCard from "@/components/EntryCard";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { getEntries } from "@/lib/content";

export default async function Writing() {
  const posts = (await getEntries("blog")).slice(0, 3);
  return (
    <section id="writing" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <SectionHeading eyebrow="Writing" title="Notes from the work">
            Things I&apos;ve run into while building voice apps and the systems behind them.
          </SectionHeading>
          <Link href="/blog/" className="ink-link mb-12 text-sm font-medium">
            All posts →
          </Link>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <li key={p.slug}>
              <Reveal>
                <EntryCard entry={p} showDate />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
