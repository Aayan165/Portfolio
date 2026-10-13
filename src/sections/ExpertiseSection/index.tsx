import { ExpertiseHeader } from "@/sections/ExpertiseSection/components/ExpertiseHeader";
import { ExpertiseGrid } from "@/sections/ExpertiseSection/components/ExpertiseGrid";
import { ExpertiseTicker } from "@/sections/ExpertiseSection/components/ExpertiseTicker";

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="relative scroll-mt-24 overflow-hidden bg-[#F5EFE8] px-6 py-20">
      <div className="box-border caret-transparent max-w-[1200px]   w-full mx-auto px-4 md:px-6">
        <ExpertiseHeader />
        <ExpertiseGrid />
        <ExpertiseTicker />
      </div>
    </section>
  );
};
