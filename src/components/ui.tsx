import Image from "next/image";
import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import { headshotSrc } from "@/lib/assets";
import { profile } from "@/content/site";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-signal">
        {index} <span className="text-faint">/ {eyebrow}</span>
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-muted text-pretty">{children}</p>}
    </header>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </li>
  );
}

export function Avatar({ size }: { size: number }) {
  if (headshotSrc) {
    return (
      <Image
        src={headshotSrc}
        alt={profile.name}
        width={size}
        height={size}
        className="shrink-0 rounded-full border border-line-strong object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full border border-line-strong bg-surface-2 text-signal"
      style={{ width: size, height: size }}
    >
      <Logo style={{ width: size * 0.52 }} strokeWidth={2.8} />
    </span>
  );
}

// Company icon on a neutral tile, so marks of different colours sit together evenly.
export function CompanyLogo({ src, size }: { src: string; size: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-xl border border-line bg-surface-2"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, decorative icon */}
      <img src={src} alt="" width={size * 0.55} height={size * 0.55} />
    </span>
  );
}

export const linkClass =
  "underline decoration-line-strong underline-offset-4 transition hover:text-signal hover:decoration-signal";
