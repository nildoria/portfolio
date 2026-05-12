// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const skillBadges = ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'JavaScript', 'GSAP', 'REST API', 'Docker'];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Websites Built' },
  { value: 'WP & WC', label: 'Expert' },
  { value: 'Remote', label: 'Available' },
];

function HeroSection() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-between py-8 lg:py-16 overflow-hidden">

      {/* Background glows */}
      <div className="hero-glow-left absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,42,131,0.12) 0%, transparent 70%)' }} />
      <div className="hero-glow-right absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,44,255,0.06) 0%, transparent 70%)' }} />

      {/* Hero SVG background */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-30"
        priority
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 w-full">

        {/* ── LEFT SIDE ── */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 lg:pt-10">

          {/* Availability badge */}
          <div className="hero-fade-up hero-delay-0 mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a3e] bg-[#0e0e1f]/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">Available for Remote Work</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-fade-up hero-delay-1 text-4xl font-bold leading-tight text-white md:font-extrabold lg:text-5xl lg:leading-[1.15] mb-3">
            Hi, I&apos;m{' '}
            <span className="hero-name-gradient">Sabbir Ahmed</span>
          </h1>

          <h2 className="hero-fade-up hero-delay-2 text-xl lg:text-2xl font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">
            WordPress Developer &amp; Frontend Engineer
          </h2>

          {/* Subtitle */}
          <p className="hero-fade-up hero-delay-3 text-[#a1a1aa] text-sm lg:text-base leading-relaxed max-w-lg mb-8">
            I build custom WordPress themes, Elementor widgets, WooCommerce systems, API integrations, and interactive frontend experiences with clean, scalable code.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-up hero-delay-4 flex items-center gap-4 mb-8 flex-wrap">
            <Link href="#projects"
              className="hero-btn-primary group relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <RiContactsFill size={16} />
                View My Work
              </span>
            </Link>

            <Link href={personalData.resume || '#'} target="_blank"
              className="hero-btn-secondary group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300">
              <MdDownload size={16} />
              Download Resume
            </Link>
          </div>

          {/* Skill Badges */}
          <div className="hero-fade-up hero-delay-5 flex flex-wrap gap-2 mb-8">
            {skillBadges.map((badge) => (
              <span key={badge} className="hero-badge text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300">
                {badge}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hero-fade-up hero-delay-5 flex items-center gap-3">
            {[
              { href: personalData.github, icon: <BsGithub size={18} />, label: 'GitHub' },
              { href: personalData.linkedIn, icon: <BsLinkedin size={18} />, label: 'LinkedIn' },
              { href: personalData.facebook, icon: <FaFacebook size={18} />, label: 'Facebook' },
              { href: personalData.twitter, icon: <FaTwitterSquare size={18} />, label: 'Twitter' },
            ].map(({ href, icon, label }) => (
              <Link key={label} href={href} target="_blank" aria-label={label}
                className="hero-social-icon flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300">
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE — Code Card ── */}
        <div className="order-1 lg:order-2 hero-fade-right">
          <div className="hero-code-card relative rounded-xl border border-[#1a1a3e] overflow-hidden">

            {/* Glow behind card */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

            {/* Card top bar */}
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-transparent"></div>
            </div>

            {/* Mac dots */}
            <div className="flex items-center gap-2 px-4 lg:px-6 py-4 border-b border-[#1a1a3e]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              <span className="ml-3 text-xs text-[#a1a1aa] font-mono">developer.js</span>
            </div>

            {/* Code block */}
            <div className="px-4 lg:px-8 py-6">
              <code className="font-mono text-xs md:text-sm lg:text-[0.85rem] leading-relaxed block">

                <div className="code-line">
                  <span className="code-keyword">const </span>
                  <span className="code-var">developer</span>
                  <span className="code-punct"> = </span>
                  <span className="code-punct">{'{'}</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">name</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">&apos;Sabbir Ahmed&apos;</span>
                  <span className="code-punct">,</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">role</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">&apos;Web Application Developer&apos;</span>
                  <span className="code-punct">,</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">focus</span>
                  <span className="code-punct">: </span>
                  <span className="code-punct">[</span>
                  <span className="code-string">&apos;WordPress&apos;</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">&apos;ReactJS&apos;</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">&apos;NextJS&apos;</span>
                  <span className="code-punct">,</span>
                </div>

                <div className="code-line pl-10">
                  <span className="code-string">&apos;NodeJS&apos;</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">&apos;Supabase&apos;</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">&apos;WooCommerce&apos;</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">&apos;GSAP&apos;</span>
                  <span className="code-punct">],</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">experience</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">&apos;10+ years&apos;</span>
                  <span className="code-punct">,</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">availableForWork</span>
                  <span className="code-punct">: </span>
                  <span className="code-bool">true</span>
                  <span className="code-punct">,</span>
                </div>

                <div className="code-line pl-6">
                  <span className="code-key">build</span>
                  <span className="code-punct">: </span>
                  <span className="code-keyword">() </span>
                  <span className="code-punct">{'=> '}</span>
                  <span className="code-string">&apos;Fast &amp; scalable websites&apos;</span>
                </div>

                <div className="code-line">
                  <span className="code-punct">{'};'}</span>
                </div>

                {/* blinking cursor */}
                <div className="code-line mt-2">
                  <span className="code-comment">{'// '}</span>
                  <span className="code-comment">Currently building something awesome</span>
                  <span className="hero-cursor">|</span>
                </div>

              </code>
            </div>
          </div>

          {/* Stats row below code card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {stats.map(({ value, label }) => (
              <div key={label}
                className="hero-stat-card flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-[#1a1a3e] bg-[#0e0e1f]/60 backdrop-blur-sm text-center">
                <span className="text-[#00f0ff] font-bold text-sm lg:text-base">{value}</span>
                <span className="text-[#a1a1aa] text-[10px] lg:text-xs mt-0.5 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;