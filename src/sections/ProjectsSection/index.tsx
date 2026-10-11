import { ProjectsHeader } from "@/sections/ProjectsSection/components/ProjectsHeader";
import { ProjectsNotice } from "@/sections/ProjectsSection/components/ProjectsNotice";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-white box-border caret-transparent   overflow-hidden px-6 py-20">
      <div className="absolute text-black/0 text-8xl box-border caret-transparent tracking-[4.8px] leading-[96px]   pointer-events-none -right-4 -bottom-8 font-bebas_neue md:text-[192px] md:tracking-[9.6px] md:leading-[192px]">
        PROJECTS
      </div>
      <div className="relative box-border caret-transparent max-w-[1200px]   w-full z-[1] mx-auto px-4 md:px-6">
        <ProjectsHeader />
        <ProjectsNotice />
      </div>
    </section>
  );
};
