import Link from "next/link";
import VoiceWave from "@/components/VoiceWave";
import { Avatar, Container } from "@/components/ui";
import { profile, stats } from "@/content/site";

export default function Hero() {
  return (
    <section id="top">
      <Container className="grid gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-24">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <Avatar size={44} />
            <p className="text-sm text-muted">
              {profile.role}, {profile.location}
            </p>
          </div>
          <h1 className="mt-8 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-balance sm:text-7xl">
            I build <span className="whitespace-nowrap">real-time,</span>{" "}
            <em className="whitespace-nowrap text-accent">voice-first</em> AI products.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.summary}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            I also build the tech for{" "}
            <Link href="/#aafiyat" className="ink-link text-ink">
              Aafiyat Foundation
            </Link>
            , a charity I volunteer with.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition hover:bg-accent"
            >
              See my work
            </Link>
            <Link href="/#contact" className="ink-link text-sm font-medium">
              or say hello
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <VoiceWave />
          <dl className="mt-8 grid grid-cols-3 divide-x divide-line">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end px-4 first:pl-0">
                <dt className="mt-1 text-sm whitespace-nowrap text-muted">{s.label}</dt>
                <dd className="font-serif text-3xl font-medium tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
