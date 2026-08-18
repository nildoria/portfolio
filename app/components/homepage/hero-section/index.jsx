import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import StackDiagram from "./stack-diagram";

const SOCIALS = [
  { href: personalData.github, label: "GitHub" },
  { href: personalData.linkedIn, label: "LinkedIn" },
  { href: personalData.facebook, label: "Facebook" },
  { href: personalData.twitter, label: "X" },
];

function HeroSection() {
  return (
    <section className="container-page grid min-h-[80vh] items-center gap-16 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <p className="text-xs uppercase tracking-[0.12em] text-low">
          Available for remote work
        </p>

        <h1 className="mt-6 text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-hi lg:text-[3.75rem]">
          {personalData.name
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>

        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-mid">
          {personalData.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/#projects"
            className="rounded-md border border-transparent bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-hover"
          >
            View work
          </Link>
          {personalData.resume ? (
            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors duration-150 hover:bg-accent hover:text-bg"
            >
              Download resume
            </Link>
          ) : null}
        </div>

        <div className="mt-16 flex items-center gap-6">
          {SOCIALS.filter((s) => s.href).map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mid transition-colors duration-150 hover:text-hi"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hidden below lg — the mobile hero is single-column, and section 02
          carries the full skills list for those readers. */}
      <div className="hidden lg:block">
        <StackDiagram />
      </div>
    </section>
  );
}

export default HeroSection;
