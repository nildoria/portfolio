'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Escape closes the panel. Only bound while it is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full border-b border-line bg-bg/95">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-hi"
          onClick={() => setOpen(false)}
        >
          Sabbir Ahmed
        </Link>

        {/* Desktop links */}
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

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden rounded-md border border-line px-4 py-2 text-sm text-mid transition-colors duration-150 hover:border-line-strong hover:text-hi md:inline-flex"
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-mid transition-colors duration-150 hover:text-hi md:hidden"
        >
          {open ? <FaXmark size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-mid transition-colors duration-150 hover:text-hi"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md border border-line px-4 py-3 text-center text-base text-mid transition-colors duration-150 hover:border-line-strong hover:text-hi"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
