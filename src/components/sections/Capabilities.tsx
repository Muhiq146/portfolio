import Reveal from "@/components/Reveal";
import { Container, SectionHeading, Stack } from "@/components/ui";
import { capabilities, platformSkills } from "@/content/site";

const PIPELINE = ["Mic", "LiveKit room", "Speech to text", "LLM, tools & RAG", "Text to speech", "Speaker"];

export default function Capabilities() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Now" title="What I build today" className="">
              The kind of AI work I&apos;m doing these days, grouped by what it does rather than by
              project.
            </SectionHeading>
            <div className="mt-8 border-l-2 border-accent pl-4">
              <p className="text-sm text-muted">A voice agent, start to finish:</p>
              <p className="mt-1 text-sm leading-relaxed">
                {PIPELINE.map((step, i) => (
                  <span key={step}>
                    {i > 0 && <span className="px-1.5 text-accent">→</span>}
                    {step}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <ol className="divide-y divide-line border-y border-line lg:col-span-8">
          {capabilities.map((c, i) => (
            <li key={c.id}>
              <Reveal className="grid gap-3 py-8 sm:grid-cols-[3rem_1fr]">
                <span className="font-serif text-2xl italic text-accent">{i + 1}.</span>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted text-pretty">{c.body}</p>
                  <Stack items={c.stack} className="mt-4" />
                </div>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal className="grid gap-3 py-8 sm:grid-cols-[3rem_1fr]">
              <span aria-hidden className="font-serif text-2xl italic text-accent">+</span>
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight">Other things I&apos;ve set up</h3>
                <p className="mt-3 leading-relaxed text-muted">{platformSkills.join(", ")}.</p>
              </div>
            </Reveal>
          </li>
        </ol>
      </Container>
    </section>
  );
}
