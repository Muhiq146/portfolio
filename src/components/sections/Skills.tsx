import Reveal from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { education, skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/70 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Toolkit" title="What I work with" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60} className="border-t border-line-strong pt-5">
              <h3 className="font-serif text-xl italic text-accent">{g.label}</h3>
              <p className="mt-3 leading-loose">{g.items.join(", ")}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <p className="text-muted">
            <span className="font-serif italic text-ink">Education.</span> {education.degree},{" "}
            {education.school}, {education.period}.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
