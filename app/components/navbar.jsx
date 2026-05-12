'use client';
// @flow strict
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about",      label: "ABOUT"      },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#skills",     label: "SKILLS"     },
  { href: "/#projects",   label: "PROJECTS"   },
  { href: "/blog",        label: "BLOGS"      },
];

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-[100]"
      style={{ background: "rgba(7,7,15,0.75)", backdropFilter: "blur(16px)", borderBottom: "1px solid #1a1a3e" }}>
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-wide font-mono"
            style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff,#00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            SABBIR
          </span>
          <span className="text-2xl font-extrabold tracking-wide text-white font-mono">AHMED</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
            style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff,#00e5ff)" }}/>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}
                className="relative group px-4 py-2 text-xs font-semibold tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 font-mono">
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg,#ff2d78,#00e5ff)" }}/>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono tracking-wider text-white border transition-all duration-300 hover:shadow-lg"
          style={{ borderColor: "#ff2d78", background: "rgba(255,45,120,0.08)" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,45,120,0.18)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,45,120,0.08)"}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;