import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { education, skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading index="06" eyebrow="Toolkit" title="Skills" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60} className="bg-bg p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal">{g.label}</h3>
              <ul className="mt-4 space-y-1.5 text-sm">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="flex flex-col gap-1 rounded-2xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
            </div>
            <p className="font-mono text-xs text-faint">{education.period}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
