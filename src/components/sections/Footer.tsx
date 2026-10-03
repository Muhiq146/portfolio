import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-[11px] text-faint sm:flex-row sm:justify-between sm:px-6">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
