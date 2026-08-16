import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-[100] w-full border-b border-line bg-bg/95">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-hi">
          Sabbir Ahmed
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-mid transition-colors duration-150 hover:text-hi"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden rounded-md border border-line px-4 py-2 text-sm text-mid transition-colors duration-150 hover:border-line-strong hover:text-hi md:inline-flex"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
