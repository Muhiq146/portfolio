import VoiceWave from "@/components/VoiceWave";
import { Avatar } from "@/components/ui";
import { profile, stats } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <Avatar size={40} />
            <p className="font-mono text-xs text-muted">
              {profile.role}
              <span className="text-faint"> · </span>
              {profile.location}
            </p>
          </div>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            I build <span className="text-signal">real-time</span>, <span className="whitespace-nowrap">voice-first</span> AI products.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium transition hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <VoiceWave />
          <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-surface px-4 py-4">
                <dt className="mt-1 text-xs leading-snug text-faint">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
