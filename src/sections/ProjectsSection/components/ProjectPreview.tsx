import type { ProjectKind } from "@/sections/ProjectsSection/projects";

type ProjectPreviewProps = {
  kind: ProjectKind;
};

const previewContent: Record<ProjectKind, { label: string; theme: string; image?: string }> = {
  verdict: {
    label: "Verdict AI / project preview",
    theme: "bg-[#e4572e] text-[#fffaf4]",
    image: "/projects/verdit-ai.png",
  },
  aureon: {
    label: "Aureon / project preview",
    theme: "bg-[#f4c430] text-zinc-900",
  },
  pdf: {
    label: "AI PDF Chatbot / project preview",
    theme: "bg-[#1f5f74] text-[#fffaf4]",
  },
  map: {
    label: "Mini Map / project preview",
    theme: "bg-[#7b8f68] text-[#fffaf4]",
    image: "/projects/mini-map.png",
  },
  mediprocure: {
    label: "MediProcure AI / project preview",
    theme: "bg-[#EAF0D5] text-[#3F4930]",
    image: "/projects/mediprocure-ai.jpg",
  },
};

export const ProjectPreview = ({ kind }: ProjectPreviewProps) => {
  const { label, theme } = previewContent[kind];

  return (
    <div
      role="img"
      aria-label={label}
      className={`preview-surface relative flex min-h-[190px] items-end justify-between overflow-hidden border-2 border-zinc-900 p-4 md:min-h-[220px] md:p-5 ${theme}`}
    >
      {previewContent[kind].image ? (
        <img
          src={previewContent[kind].image}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      ) : (
        <span className="max-w-[180px] font-ibm_plex_mono text-[10px] font-semibold uppercase leading-4 tracking-[1px]">
          Image placeholder
        </span>
      )}
      <span className="relative z-[1] font-bebas_neue text-6xl leading-none opacity-30 md:text-8xl">
        {kind === "verdict" ? "01" : kind === "aureon" ? "02" : kind === "pdf" ? "03" : kind === "map" ? "04" : "05"}
      </span>
    </div>
  );
};
