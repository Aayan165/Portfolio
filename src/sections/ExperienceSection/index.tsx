import { ExperienceHeader } from "@/sections/ExperienceSection/components/ExperienceHeader";
import { ExperienceTimeline } from "@/sections/ExperienceSection/components/ExperienceTimeline";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative scroll-mt-24 text-white bg-zinc-900 box-border caret-transparent   overflow-hidden px-6 py-20">
      <div className="absolute bg-[linear-gradient(rgba(255,255,255,0.04)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,rgba(0,0,0,0)_1px)] bg-size-[40px_40px,40px_40px] box-border caret-transparent   pointer-events-none bg-[position:0%,0%_0%,0%] inset-0"></div>
      <div className="relative box-border caret-transparent max-w-[1200px]   w-full z-[1] mx-auto px-4 md:px-6">
        <ExperienceHeader />
        <ExperienceTimeline />
      </div>
    </section>
  );
};
