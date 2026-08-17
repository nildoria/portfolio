import { projectsData } from "@/utils/data/projects-data";
import SectionHeader from "../../helper/section-header";
import SingleProject from "./single-project";

function Projects() {
  return (
    <section id="projects" className="bg-sunken section-pad">
      <div className="container-page">
        <SectionHeader
          index="03"
          label="Projects"
          title="Selected work"
        />

        <ul className="border-t border-line">
          {projectsData.map((project, i) => (
            <SingleProject key={project.id} project={project} index={i + 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
