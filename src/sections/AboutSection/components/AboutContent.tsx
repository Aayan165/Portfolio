export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1200px]   w-full mx-auto px-4 md:px-6">
      <div className="box-border caret-transparent   mb-12">
        <span className="text-neutral-600 text-[11.2px] font-semibold bg-stone-100 box-border caret-transparent inline-block tracking-[1.344px] leading-[17.92px]   uppercase border-zinc-900 px-3 py-1 border-2 border-solid font-ibm_plex_mono md:text-[12.8px] md:tracking-[1.536px] md:leading-[20.48px]">
          [ 01 — ABOUT ]
        </span>
        <h2 className="text-[33.75px] box-border caret-transparent tracking-[1.6875px] leading-[33.75px]   mt-2 font-bebas_neue md:text-[76.8px] md:tracking-[3.84px] md:leading-[76.8px]">
          Who Am I?
        </h2>
      </div>
      <div className="bg-white border-b-zinc-900 border-l-yellow-300 border-r-zinc-900 border-t-zinc-900 shadow-[rgb(26,26,26)_4px_4px_0px_0px] box-border caret-transparent gap-x-6 flex flex-col   gap-y-6 p-9 rounded-bl rounded-br rounded-tl rounded-tr border-l-[6px] border-r-[3px] border-y-[3px] border-solid md:shadow-[rgb(26,26,26)_5px_5px_0px_0px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]  ">
          <p className="text-zinc-800 box-border caret-transparent leading-[29.6px]   text-justify mb-5">
            A Computer Science undergraduate at FAST NUCES Karachi, focused on Artificial Intelligence, backend engineering, and intelligent software systems. I build AI-powered applications and agentic workflows designed to solve real-world problems through automation, reliable architecture, and scalable engineering.
          </p>
          <p className="text-zinc-800 box-border caret-transparent leading-[29.6px]   text-justify">
            I work with technologies like Python, FastAPI, PostgreSQL, and LangGraph to develop backend systems, multi-agent applications, and AI-driven products. I focus on turning ideas into functional, well-engineered solutions while continuously exploring new approaches to building intelligent software.
          </p>
        </div>
        <a
          href="#"
          className="text-white text-[15.2px] font-bold items-center self-start bg-zinc-900 shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border caret-transparent gap-x-2 flex tracking-[0.304px] leading-[24.32px] min-h-[auto] min-w-[auto]   gap-y-2 border-zinc-900 px-7 py-[12.8px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid md:shadow-[rgb(26,26,26)_3px_3px_0px_0px] hover:shadow-none"
        >
          <img
            src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/icon-9.svg"
            alt="Icon"
            className="box-border caret-transparent h-3.5   w-3.5"
          />
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]  ">
            CV
          </span>
        </a>
      </div>
    </div>
  );
};
