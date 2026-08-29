import { ExpertiseHeader } from "@/sections/ExpertiseSection/components/ExpertiseHeader";
import { ExpertiseGrid } from "@/sections/ExpertiseSection/components/ExpertiseGrid";
import { ExpertiseTicker } from "@/sections/ExpertiseSection/components/ExpertiseTicker";

export const ExpertiseSection = () => {
  return (
    <section className="relative bg-stone-100 box-border caret-transparent outline-[3px] overflow-hidden px-6 py-20">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] w-full mx-auto px-4 md:px-6">
        <ExpertiseHeader />
        <ExpertiseGrid />
        <ExpertiseTicker />
      </div>
    </section>
  );
};
