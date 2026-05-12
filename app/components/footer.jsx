// @flow strict
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative w-full text-white"
      style={{ background: "#07070f", borderTop: "1px solid #1a1a3e" }}>

      {/* Gradient top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2"
        style={{ background: "linear-gradient(90deg,transparent,#8b2cff,transparent)" }}/>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-extrabold font-mono tracking-wide"
              style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff,#00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              SABBIR AHMED
            </span>
            <p className="text-xs text-zinc-500 font-mono">
              WordPress &amp; Web Developer
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
            Built with <FaHeart className="text-[#ff2d78] text-[10px]"/> by{' '}
            <Link href="https://www.linkedin.com/in/sabbir-ahmed-pix" target="_blank"
              className="text-[#00e5ff] hover:text-[#ff2d78] transition-colors duration-300 ml-1">
              Sabbir Ahmed
            </Link>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Link href="https://github.com/nildoria" target="_blank"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
              <FaGithub className="text-lg group-hover:text-[#00e5ff] transition-colors duration-300"/>
              <span className="text-xs font-mono tracking-wider hidden sm:inline">GITHUB</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sabbir-ahmed-pix" target="_blank"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-lg group-hover:text-[#00e5ff] transition-colors duration-300"/>
              <span className="text-xs font-mono tracking-wider hidden sm:inline">LINKEDIN</span>
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-6 pt-4 text-center"
          style={{ borderTop: "1px solid #1a1a3e" }}>
          <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;