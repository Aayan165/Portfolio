import type { ProjectKind } from "@/sections/ProjectsSection/projects";

type ProjectPreviewProps = {
  kind: ProjectKind;
};

const previewContent: Record<ProjectKind, { label: string; theme: string }> = {
  verdict: {
    label: "Verdict AI / project preview",
    theme: "bg-[#e4572e] text-[#fffaf4]",
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
  },
  saathi: {
    label: "SaathiSync / project preview",
    theme: "bg-[#c86447] text-[#fffaf4]",
  },
};

export const ProjectPreview = ({ kind }: ProjectPreviewProps) => {
  const { label, theme } = previewContent[kind];

  return (
    <div
      role="img"
      aria-label={label}
      className={`preview-surface flex min-h-[190px] items-end justify-between overflow-hidden border-2 border-zinc-900 p-4 md:min-h-[220px] md:p-5 ${theme}`}
    >
      <span className="max-w-[180px] font-ibm_plex_mono text-[10px] font-semibold uppercase leading-4 tracking-[1px]">
        Image placeholder
      </span>
      <span className="font-bebas_neue text-6xl leading-none opacity-30 md:text-8xl">
        {kind === "verdict" ? "01" : kind === "aureon" ? "02" : kind === "pdf" ? "03" : kind === "map" ? "04" : "05"}
      </span>
    </div>
  );
};
