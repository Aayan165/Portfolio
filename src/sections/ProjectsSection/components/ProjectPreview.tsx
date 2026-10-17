import type { ProjectKind } from "@/sections/ProjectsSection/projects";

type ProjectPreviewProps = {
  kind: ProjectKind;
};

const PipelineNode = ({ children, active = false }: { children: string; active?: boolean }) => (
  <span
    className={`rounded-sm border px-2 py-2 text-center font-ibm_plex_mono text-[9px] font-semibold uppercase tracking-[.5px] ${
      active ? "border-[#e4572e] bg-[#e4572e] text-white" : "border-zinc-400 bg-[#f8f3ed]"
    }`}
  >
    {children}
  </span>
);

export const ProjectPreview = ({ kind }: ProjectPreviewProps) => {
  if (kind === "verdict") {
    return (
      <div className="preview-surface min-h-[190px] border border-zinc-300 bg-[#eee7df] p-4 md:min-h-[220px]">
        <div className="mb-5 flex items-center justify-between font-ibm_plex_mono text-[9px] uppercase tracking-[1px] text-zinc-500">
          <span>evaluation / run_042</span><span className="text-[#e4572e]">live</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <PipelineNode>LLM output</PipelineNode><i className="h-px flex-1 bg-zinc-400" />
          <PipelineNode active>agents</PipelineNode><i className="h-px flex-1 bg-zinc-400" />
          <PipelineNode>adjudicator</PipelineNode>
        </div>
        <div className="mt-6 ml-auto w-32 border-2 border-zinc-900 bg-[#f8f3ed] p-3 shadow-[3px_3px_0_#e4572e]">
          <p className="font-ibm_plex_mono text-[8px] uppercase tracking-[1px] text-zinc-500">final verdict</p>
          <p className="mt-1 font-bebas_neue text-2xl tracking-[1px]">ACCURATE</p>
          <div className="mt-2 h-1 bg-[#e4572e]" />
        </div>
      </div>
    );
  }

  if (kind === "aureon") {
    return (
      <div className="preview-surface min-h-[190px] border border-zinc-300 bg-[#e9e4dd] p-4 md:min-h-[220px]">
        <div className="flex items-center justify-between font-ibm_plex_mono text-[9px] uppercase tracking-[1px] text-zinc-500">
          <span>workflow / orchestration</span><span>01:24:08</span>
        </div>
        <div className="relative mt-6 grid grid-cols-2 gap-3">
          <span className="border border-zinc-900 bg-[#f8f3ed] p-3 font-ibm_plex_mono text-[9px] uppercase">planner <b className="float-right text-[#e4572e]">OK</b></span>
          <span className="border border-zinc-900 bg-[#f8f3ed] p-3 font-ibm_plex_mono text-[9px] uppercase">researcher <b className="float-right text-[#e4572e]">OK</b></span>
          <span className="col-span-2 mx-auto w-3/4 border-2 border-[#e4572e] bg-[#f8f3ed] p-3 text-center font-ibm_plex_mono text-[9px] uppercase shadow-[3px_3px_0_#181818]">human approval / pending</span>
        </div>
      </div>
    );
  }

  if (kind === "pdf") {
    return (
      <div className="preview-surface min-h-[170px] border border-zinc-300 bg-[#e9e4dd] p-3 md:min-h-[190px]">
        <div className="grid h-full grid-cols-[.8fr_1.2fr] gap-3">
          <div className="border border-zinc-400 bg-[#f8f3ed] p-3">
            <span className="font-ibm_plex_mono text-[8px] uppercase text-zinc-500">document.pdf</span>
            <div className="mt-5 space-y-2">{[1, 2, 3, 4].map((line) => <i key={line} className="block h-1 bg-zinc-300" />)}</div>
            <span className="mt-5 block w-16 bg-[#e4572e] px-1 py-1 font-ibm_plex_mono text-[7px] text-white">source p.12</span>
          </div>
          <div className="flex flex-col justify-end gap-2 font-ibm_plex_mono text-[9px]">
            <p className="self-end border border-zinc-400 bg-[#f8f3ed] p-2">What is the key finding?</p>
            <p className="border border-zinc-900 bg-zinc-900 p-2 text-white">The report identifies three key factors...</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "map") {
    return (
      <div className="preview-surface relative min-h-[170px] overflow-hidden border border-zinc-300 bg-[#dfe2dc] p-3 md:min-h-[190px]">
        <svg viewBox="0 0 400 180" className="h-full w-full" aria-label="A route traced across a map grid" role="img">
          <path d="M-10 140 C 60 80, 80 170, 145 100 S 250 20, 410 90" fill="none" stroke="#b4bbb1" strokeWidth="22" />
          <path d="M-10 140 C 60 80, 80 170, 145 100 S 250 20, 410 90" fill="none" stroke="#e4572e" strokeDasharray="8 6" strokeWidth="3" />
          <path d="M20 10 L70 180 M170 0 L120 180 M300 0 L260 180 M0 70 L400 40 M0 145 L400 125" stroke="#c9cec7" strokeWidth="2" />
          <circle cx="28" cy="133" r="6" fill="#181818" /><circle cx="357" cy="77" r="6" fill="#e4572e" />
        </svg>
        <span className="absolute left-4 top-4 font-ibm_plex_mono text-[9px] uppercase tracking-[1px] text-zinc-600">A* route / 4.82 km</span>
      </div>
    );
  }

  return (
    <div className="preview-surface min-h-[170px] border border-zinc-300 bg-[#e9e4dd] p-4 md:min-h-[190px]">
      <span className="font-ibm_plex_mono text-[9px] uppercase tracking-[1px] text-zinc-500">find your study match</span>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-zinc-900 bg-[#f8f3ed] font-bebas_neue text-2xl">A</div>
        <div className="flex-1"><div className="h-2 w-3/4 bg-zinc-900" /><div className="mt-2 h-2 w-1/2 bg-zinc-400" /></div>
        <span className="border border-[#e4572e] px-2 py-1 font-ibm_plex_mono text-[9px] text-[#e4572e]">MATCH</span>
      </div>
      <div className="mt-5 border-t border-zinc-300 pt-3 font-ibm_plex_mono text-[9px] uppercase text-zinc-500">computer science / available</div>
    </div>
  );
};
