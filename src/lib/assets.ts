import { existsSync } from "node:fs";
import path from "node:path";

// Checked at build time, so dropping a file into public/ is all it takes to switch it on.
const hasPublicFile = (name: string) => existsSync(path.join(process.cwd(), "public", name));

export const headshotSrc = hasPublicFile("headshot.jpg") ? "/headshot.jpg" : null;
export const resumeHref = hasPublicFile("resume.pdf") ? "/resume.pdf" : null;
