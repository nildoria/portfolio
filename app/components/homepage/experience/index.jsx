// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import ExperienceIllustration from "./experience-illustration";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#1a1a3e] w-full">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-20"
      />

      {/* Background glows */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,44,255,0.07) 0%, transparent 70%)' }} />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">

        {/* Section heading */}
        <div className="flex flex-col items-center mb-12 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8b2cff]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8b2cff]">Career</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8b2cff]"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Experience</span>
          </h2>
          <p className="text-[#a1a1aa] text-sm lg:text-base max-w-xl text-center">
            10+ years of building digital experiences — from small business sites to large-scale WooCommerce platforms.
          </p>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#8b2cff] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-center">
            <ExperienceIllustration />
          </div>

          <div className="flex flex-col gap-5">
            {experiences.map(exp => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-4 relative">
                  <Image
                    src="/blur-23.svg"
                    alt="blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-40"
                  />
                  {/* Top gradient line */}
                  <div className="flex flex-row mb-3">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#1a1a3e] bg-[#0e0e1f] text-[#7000ff] flex-shrink-0 transition-all duration-300 hover:scale-110 hover:border-[#7000ff]">
                      <BsPersonWorkspace size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">
                          {exp.title}
                        </p>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#1a1a3e] text-[#00f0ff] bg-[#00f0ff]/5 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;