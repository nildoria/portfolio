'use client';
// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Icons that are dark-coloured and need brightening on the dark background
const DARK_ICONS = ['nextjs', 'php', 'git'];

function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg,#0a0a18 0%,#07070f 100%)" }}>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(139,44,255,.12) 0%,transparent 70%)" }}/>

      {/* Section heading */}
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] mb-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "#ff2d78" }}>// expertise</span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-center">
            My{' '}
            <span style={{ background: "linear-gradient(90deg,#ff2d78,#8b2cff,#00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Tech Stack
            </span>
          </h2>

          <div className="h-[1px] w-24 rounded-full"
            style={{ background: "linear-gradient(90deg,transparent,#8b2cff,transparent)" }}/>
        </div>
      </div>

      {/* Marquee — capped at site max-width so ultra-wide displays don't split it */}
      <div className="mx-auto w-full py-6 overflow-x-hidden" style={{ maxWidth: "2400px" }}>
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover
        pauseOnClick
        delay={0}
        play
        direction="left"
        style={{ overflowY: "visible" }}
      >
        {skillsData.map((skill, id) => (
          <div key={id}
            className="group relative mx-3 sm:mx-5 cursor-pointer transition-all duration-300 hover:scale-110"
            style={{ width: 120, minWidth: 120 }}>

            {/* Card */}
            <div className="h-full w-full rounded-xl flex flex-col items-center justify-center gap-3 p-5 transition-all duration-300"
              style={{
                background: "rgba(14,14,31,0.9)",
                border: "1px solid #1a1a3e",
                boxShadow: "0 0 0 0 transparent"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = "1px solid #ff2d78";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,45,120,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = "1px solid #1a1a3e";
                e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
              }}>

              {/* Top gradient line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 rounded-full"
                style={{ background: "linear-gradient(90deg,transparent,#ff2d78,transparent)" }}/>

              {/* Icon */}
              <div className="h-9 w-9 flex items-center justify-center">
                {skillsImage(skill)?.src ? (
                  <Image
                    src={skillsImage(skill).src}
                    alt={skill}
                    width={36}
                    height={36}
                    className={`h-full w-auto object-contain${DARK_ICONS.includes(skill.toLowerCase()) ? ' icon-on-dark' : ''}`}
                  />
                ) : (
                  <span className="flex items-center justify-center h-full w-full text-[#00e5ff] text-xs font-bold font-mono rounded-md"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}>
                    {skill.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="text-white text-xs font-mono text-center leading-tight">{skill}</p>
            </div>
          </div>
        ))}
      </Marquee>
      </div>
    </section>
  );
}

export default Skills;