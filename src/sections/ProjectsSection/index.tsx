import { ProjectsHeader } from "@/sections/ProjectsSection/components/ProjectsHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import {
  projects,
  type Project,
} from "@/sections/ProjectsSection/projects";

export const ProjectsSection = () => {
  const [verdict, aureon, pdfChatbot, miniMap, mediprocure] = projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F5EFE8] px-6 py-20 scroll-mt-24 md:py-28"
    >
      <div className="pointer-events-none absolute -bottom-8 -right-4 font-bebas_neue text-8xl leading-none tracking-[4.8px] text-black/[0.035] md:text-[192px] md:tracking-[9.6px]">
        PROJECTS
      </div>
      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-0 md:px-6">
        <ProjectsHeader />
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-12">
          <ProjectCard project={verdict} className="lg:col-span-7" />
          <ProjectCard project={aureon} className="lg:col-span-5" />
          <ProjectCard project={mediprocure} className="lg:col-span-5" />
          <ProjectCard project={miniMap} className="lg:col-span-4" />
          <ProjectCard project={pdfChatbot} className="lg:col-span-3" />
        </div>
        <GithubRow />
      </div>
    </section>
  );
};

const GithubRow = () => (
  <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t-2 border-zinc-900 pt-5 sm:flex-row sm:items-center">
    <p className="font-ibm_plex_mono text-[11px] font-semibold uppercase tracking-[1.2px] text-zinc-600">
      More experiments, in progress and in public
    </p>
    <a
      href="https://github.com/Aayan165"
      target="_blank"
      rel="noreferrer"
      className="text-[14px] font-bold bg-yellow-300 shadow-[4px_4px_0_#000] inline-block leading-[23px] text-center border-zinc-900 px-4 py-2 rounded-[3px] border-2 transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-[4px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      Visit GitHub
    </a>
  </div>
);

export type { Project };
