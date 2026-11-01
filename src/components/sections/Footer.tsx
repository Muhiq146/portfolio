import Logo from "@/components/Logo";
import { profile } from "@/content/site";

const links = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
      />
    ),
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.82-.26.82-.57v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"
      />
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </g>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-8 text-sm text-faint sm:px-8">
        <span className="flex items-center gap-3">
          <Logo className="h-3.5 w-auto text-accent" />
          © {new Date().getFullYear()} {profile.name}
        </span>
        <ul className="flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={l.label}
                title={l.label}
                className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface hover:text-accent"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]">
                  {l.icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
