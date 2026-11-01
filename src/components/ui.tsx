import Image from "next/image";
import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import { headshotSrc } from "@/lib/assets";
import { profile } from "@/content/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Italic serif label above a serif title. No numbering: sections read like chapters, not slides.
export function SectionHeading({
  eyebrow,
  title,
  children,
  className = "mb-12",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`max-w-2xl ${className}`}>
      <p className="font-serif text-lg italic text-accent">{eyebrow}</p>
      <h2 className="mt-1 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{children}</p>}
    </header>
  );
}

// Tech stack as a quiet line of text rather than a row of chips.
export function Stack({ items, className = "" }: { items: string[]; className?: string }) {
  return <p className={`text-sm text-faint ${className}`}>{items.join(" · ")}</p>;
}

export function Avatar({ size }: { size: number }) {
  if (headshotSrc) {
    return (
      <Image
        src={headshotSrc}
        alt={profile.name}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full bg-accent text-bg"
      style={{ width: size, height: size }}
    >
      <Logo style={{ width: size * 0.5 }} strokeWidth={2.8} />
    </span>
  );
}

// Company icon on a light tile, so marks of different colours sit together evenly.
export function CompanyLogo({ src, size }: { src: string; size: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-lg border border-line bg-[#fbf8f2]"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, decorative icon */}
      <img src={src} alt="" width={size * 0.55} height={size * 0.55} />
    </span>
  );
}

export const linkClass = "ink-link";
