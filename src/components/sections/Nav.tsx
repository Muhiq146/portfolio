import Link from "next/link";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { profile } from "@/content/site";
import { resumeHref } from "@/lib/assets";

// Absolute paths so the links also work from article pages.
const links = [
  { href: "/#work", label: "Work" },
  { href: "/#aafiyat", label: "Aafiyat" },
  { href: "/#case-studies", label: "Case studies" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog/", label: "Blog" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3 font-medium tracking-tight">
          <Logo
            className="h-5 w-auto text-signal transition group-hover:brightness-125"
            title={profile.name}
          />
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {resumeHref && (
            <a
              href={resumeHref}
              className="hidden rounded-full px-3.5 py-1.5 text-sm text-muted transition hover:text-ink sm:inline-block"
            >
              Resume
            </a>
          )}
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-bg transition hover:bg-signal"
          >
            Contact
          </Link>
          <MobileMenu links={resumeHref ? [...links, { href: resumeHref, label: "Resume" }] : links} />
        </div>
      </div>
    </nav>
  );
}
