// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative w-full">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)' }} />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">

        {/* Section heading */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00e5ff]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00e5ff]">Who I Am</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00e5ff]"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Me</span>
          </h2>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Profile image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #ff2d78, #8b2cff, #00e5ff)' }} />
              <div className="relative rounded-2xl border border-[#1a1a3e] overflow-hidden p-1"
                style={{ background: 'linear-gradient(135deg, #ff2d78, #8b2cff, #00e5ff)' }}>
                <Image
                  src={personalData.profile}
                  width={300}
                  height={300}
                  alt="Sabbir Ahmed"
                  className="rounded-xl transition-all duration-700 grayscale hover:grayscale-0 cursor-pointer block"
                />
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="order-2 lg:order-1">

            {/* Small code-style name card */}
            <div className="rounded-xl border border-[#1a1a3e] overflow-hidden mb-6"
              style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #0e0e1f 100%)' }}>
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-[#00e5ff]"></div>
              </div>
              <div className="px-4 py-3 font-mono text-xs">
                <span className="code-keyword">const </span>
                <span className="code-var">sabbir</span>
                <span className="code-punct"> = </span>
                <span className="code-string">&apos;WordPress &amp; Web Application Developer&apos;</span>
                <span className="code-punct">;</span>
              </div>
            </div>

            <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed mb-6">
              {personalData.description}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Years Experience', value: '10+', color: '#ff2d78' },
                { label: 'Projects Delivered', value: '100+', color: '#8b2cff' },
                { label: 'WordPress Expertise', value: 'Expert', color: '#00e5ff' },
                { label: 'Availability', value: 'Remote', color: '#ff2d78' },
              ].map(({ label, value, color }) => (
                <div key={label}
                  className="flex flex-col p-3 rounded-xl border border-[#1a1a3e] bg-[#0e0e1f]/60 backdrop-blur-sm hover:border-[#1a1a3e80] transition-all duration-300">
                  <span className="font-bold text-base" style={{ color }}>{value}</span>
                  <span className="text-[#a1a1aa] text-xs mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;