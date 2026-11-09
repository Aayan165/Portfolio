const expertiseAreas = [
  "Agentic AI & Multi-Agent Systems",
  "AI Engineering & LLM Applications",
  "Backend Engineering & API Development",
  "Database Engineering & Data Architecture",
  "Full-Stack AI Application Development",
  "LLM Evaluation & AI Workflow Orchestration",
];

export const ExpertiseTicker = () => (
  <div className="marquee mt-16 box-border flex h-[61px] items-center overflow-hidden border-y-[3px] border-zinc-900 bg-yellow-300 py-3 md:mt-24">
    <div className="marquee-track inline-flex min-w-full gap-8 whitespace-nowrap">
      {[...expertiseAreas, ...expertiseAreas].map((area, index) => (
        <span
          key={`${area}-${index}`}
          className="mr-8 block text-nowrap font-ibm_plex_mono text-[13.6px] font-semibold leading-[30.72px] opacity-80"
        >
          ★ {area}
        </span>
      ))}
    </div>
  </div>
);
