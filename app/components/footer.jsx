import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const LINKS = [
  { href: personalData.github, label: "GitHub" },
  { href: personalData.linkedIn, label: "LinkedIn" },
  { href: personalData.facebook, label: "Facebook" },
  { href: personalData.twitter, label: "X" },
];

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-low">
          © {new Date().getFullYear()} Sabbir Ahmed
        </p>
        <div className="flex items-center gap-6">
          {LINKS.filter((l) => l.href).map(({ href, label }) => (
            <Link
              key={href}
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
    </footer>
  );
}

export default Footer;
