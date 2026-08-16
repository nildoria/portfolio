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

          <p className="mt-6 text-[1.0625rem] leading-[1.65] text-mid">
            {personalData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
