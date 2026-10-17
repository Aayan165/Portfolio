export const ProjectsHeader = () => {
  return (
    <div className="mb-10 max-w-[780px]">
      <span className="inline-block border-2 border-zinc-900 bg-stone-100 px-3 py-1 font-ibm_plex_mono text-[11.2px] font-semibold uppercase leading-[17.92px] tracking-[1.344px] text-neutral-600 md:text-[12.8px] md:leading-[20.48px]">
        [ 03 — SELECTED WORK ]
      </span>
      <h2 className="mt-3 font-bebas_neue text-[56px] leading-[.9] tracking-[2px] md:text-[96px] md:tracking-[4px]">
        Things I <span className="text-[#e4572e]">Built.</span>
      </h2>
      <div className="mt-5 flex flex-col justify-between gap-4 border-t-2 border-zinc-900 pt-4 sm:flex-row sm:items-start">
        <p className="max-w-[520px] font-ibm_plex_mono text-sm leading-6 text-zinc-700">
          Experiments in intelligence, automation, and software engineering.
        </p>
        <span className="font-ibm_plex_mono text-[10px] font-semibold uppercase tracking-[1.2px] text-zinc-500">
          05 projects / 2023—24
        </span>
      </div>
    </div>
  );
};
