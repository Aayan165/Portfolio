import { ProjectPreview } from "@/sections/ProjectsSection/components/ProjectPreview";
import type { Project } from "@/sections/ProjectsSection/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard = ({ project, className = "" }: ProjectCardProps) => (
  <article
    className={`project-card group flex flex-col border-2 border-zinc-900 bg-[#f8f3ed] p-4 shadow-[5px_5px_0_#181818] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-1 hover:bg-[#fffaf4] hover:shadow-[7px_8px_0_#181818] focus-within:-translate-y-1 focus-within:shadow-[7px_8px_0_#181818] md:p-5 ${className}`}
  >
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <span className="font-ibm_plex_mono text-[10px] font-semibold tracking-[1.5px] text-[#e4572e]">
          {project.number} / {project.category}
        </span>
        <h3 className="mt-2 font-bebas_neue text-4xl leading-none tracking-[1.5px] md:text-5xl">
          {project.title}
        </h3>
      </div>
      <span className="font-ibm_plex_mono text-xl leading-none text-zinc-400 transition-transform duration-200 group-hover:translate-x-1">
        +
      </span>
    </div>
    <ProjectPreview kind={project.kind} />
    <div className="mt-5 flex flex-1 flex-col">
      <p className="max-w-[650px] text-sm leading-6 text-zinc-700">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-300 pt-4">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="border border-zinc-400 px-2 py-1 font-ibm_plex_mono text-[10px] font-medium tracking-[.3px] text-zinc-600"
          >
            {technology}
          </span>
        ))}
      </div>
      {(project.githubUrl || project.liveDemoUrl) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white text-[11px] font-bold items-center self-start bg-zinc-900 shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border inline-flex tracking-[0.3px] leading-[18px] border-zinc-900 px-4 py-2 rounded border-[3px] border-solid hover:shadow-none"
            >
              View on GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white text-[11px] font-bold items-center self-start bg-zinc-900 shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border inline-flex tracking-[0.3px] leading-[18px] border-zinc-900 px-4 py-2 rounded border-[3px] border-solid hover:shadow-none"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);
