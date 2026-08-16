import { skillGroups } from "@/utils/data/skills";
import SectionHeader from "../../helper/section-header";

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="02"
          label="Skills"
          title="What I build with"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs uppercase tracking-[0.12em] text-low">
                {group.name}
              </h3>
              <div className="mt-4 h-px bg-line" aria-hidden="true" />
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.9375rem] text-mid">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
