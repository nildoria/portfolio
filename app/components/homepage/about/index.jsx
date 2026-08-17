import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import SectionHeader from "../../helper/section-header";

function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeader index="04" label="About" />

        <div className="mx-auto flex max-w-[60ch] flex-col items-center text-center">
          <Image
            src={personalData.profile}
            alt={personalData.name}
            width={160}
            height={160}
            className="h-40 w-40 rounded-lg border border-line object-cover"
          />

          <h2 className="mt-8 text-[2rem] leading-[1.15] tracking-[-0.01em] text-hi">
            {personalData.designation}
          </h2>

          {/* Prose is left-aligned inside the centred column. Centring reads
              fine for two or three lines, but not for three paragraphs — the
              ragged left edge makes each line harder to find. */}
          <div className="mt-8 space-y-4 text-left">
            {personalData.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[1.0625rem] leading-[1.65] text-mid"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
