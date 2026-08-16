import Link from "next/link";

const LINKS = [
  { href: "https://github.com/nildoria", label: "GitHub" },
  { href: "https://www.linkedin.com/in/sabbir-ahmed-pix", label: "LinkedIn" },
  { href: "https://x.com/SabbirPixiefy", label: "X" },
];

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-low">
          © {new Date().getFullYear()} Sabbir Ahmed
        </p>
        <div className="flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
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
