import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Container, SectionHeading, Stack } from "@/components/ui";
import { aafiyat } from "@/content/site";

export default function Aafiyat() {
  return (
    <section id="aafiyat" className="bg-surface/70 py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading eyebrow="My own project" title={aafiyat.name} className="lg:col-span-7">
            {aafiyat.intro}
          </SectionHeading>
          <blockquote className="border-l-2 border-accent pl-5 lg:col-span-5">
            <p className="font-serif text-xl italic leading-snug">
              &ldquo;A made-up recommendation is worse than no recommendation.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-muted">From the voice notes case study below</footer>
          </blockquote>
        </div>

        <div className="mt-14 grid gap-12 border-t border-line-strong pt-10 lg:grid-cols-2 lg:gap-16">
          {aafiyat.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-3xl font-medium tracking-tight">{p.name}</h3>
                  {"url" in p && p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer" className="ink-link text-sm">
                      {p.tag} ↗
                    </a>
                  ) : (
                    <span className="text-sm text-faint">{p.tag}</span>
                  )}
                </div>
                <p className="mt-4 leading-relaxed text-muted text-pretty">{p.body}</p>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span aria-hidden className="text-olive">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Stack items={p.stack} className="mt-6" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link
            href={aafiyat.caseStudy}
            className="group flex flex-col gap-3 rounded-2xl bg-ink p-7 text-bg transition hover:bg-[#2a241e] sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div>
              <p className="font-serif italic text-[#e9b99f]">Case study</p>
              <p className="mt-1 font-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                Turning volunteers&apos; voice notes into verification forms, in Hinglish
              </p>
            </div>
            <span className="shrink-0 text-sm font-medium transition group-hover:translate-x-1">
              Read the story →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
