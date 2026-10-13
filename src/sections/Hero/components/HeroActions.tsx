export const HeroActions = () => {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-wrap justify-center   gap-y-4 mb-10">
      <button
        type="button"
        onClick={() => scrollToSection("projects")}
        className="hero-action text-white font-bold items-center bg-zinc-900 shadow-[4px_4px_0_#000] box-border caret-transparent gap-x-2 flex tracking-[0.32px] min-h-[auto] min-w-[auto]   gap-y-2 border-zinc-900 px-8 py-[14.4px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid"
      >
        🚀 View Projects
      </button>
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="hero-action font-bold items-center bg-yellow-300 shadow-[4px_4px_0_#000] box-border caret-transparent gap-x-2 flex tracking-[0.32px] min-h-[auto] min-w-[auto]   gap-y-2 border-zinc-900 px-8 py-[14.4px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid"
      >
        📬 Let&#39;s Talk
      </button>
    </div>
  );
};
