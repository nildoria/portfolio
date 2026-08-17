import { experiences } from "@/utils/data/experience";
import SectionHeader from "../../helper/section-header";

function Experience() {
  return (
    <section id="experience" className="bg-sunken section-pad">
      <div className="container-page">
        <SectionHeader
          index="01"
          label="Experience"
          title="Building for agencies and direct clients"
        />

        <ul className="border-t border-line">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="w-40 shrink-0 text-sm text-low">
                {exp.duration}
              </span>
              <span className="flex-1 text-hi">{exp.title}</span>
              <span className="text-sm text-mid sm:text-right">
                {exp.company}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
