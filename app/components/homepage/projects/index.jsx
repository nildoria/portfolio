import { projectsData } from '@/utils/data/projects-data';
import SingleProject from './single-project';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24 w-full">

      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">

        {/* Section heading */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff2d78]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff2d78]">Portfolio</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff2d78]"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Projects</span>
          </h2>
          <p className="text-[#a1a1aa] text-sm lg:text-base max-w-xl text-center">
            A selection of real-world builds — WordPress, WooCommerce, automation, and full-stack web applications.
          </p>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#8b2cff] to-transparent"></div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.slice(0, 4).map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;