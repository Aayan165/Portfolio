import { HeroBadge } from "@/sections/Hero/components/HeroBadge";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { DesktopSocialLinks } from "@/sections/Hero/components/DesktopSocialLinks";
import { ScrollIndicator } from "@/sections/Hero/components/ScrollIndicator";

export const Hero = () => {
  return (
    <section className="relative items-center bg-[linear-gradient(rgba(26,26,26,0.06)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(26,26,26,0.06)_1px,rgba(0,0,0,0)_1px)] bg-size-[40px_40px,40px_40px] box-border caret-transparent flex flex-col justify-center min-h-[1000px] outline-[3px] overflow-hidden bg-[position:0%,0%_0%,0%] pt-24 pb-16 px-6">
      <HeroBadge
        variantClassName="text-xs font-extrabold items-center bg-rose-400 shadow-[rgb(26,26,26)_6px_6px_0px_0px] gap-x-2 tracking-[0.96px] leading-[19.2px] gap-y-2 uppercase pl-[9.6px] pr-[12.8px] py-2 rounded-sm right-[8%] top-[17%] md:flex md:rotate-[5.978371181039654deg]"
        showIndicator={true}
      >
        Open to Work
      </HeroBadge>
      <HeroBadge
        variantClassName="text-[12.8px] font-semibold bg-teal-400 shadow-[rgb(26,26,26)_4px_4px_0px_0px] leading-[20.48px] px-[12.8px] py-[6.4px] rounded-[3px] left-[5%] top-[20%] md:block md:rotate-[2.630422948223178deg]"
        showIndicator={false}
      >
        🚀 2026
      </HeroBadge>
      <HeroBadge variantClassName="text-[12.8px] font-semibold bg-lime-300 shadow-[rgb(26,26,26)_4px_4px_0px_0px] leading-[20.48px] px-[12.8px] py-[6.4px] rounded-[3px] left-[7%] bottom-1/4 md:block md:translate-y-[-5.28916px]">
        ⚡ ML Systems
      </HeroBadge>
      <HeroBadge variantClassName="text-[12.8px] font-semibold bg-purple-400 shadow-[rgb(26,26,26)_4px_4px_0px_0px] leading-[20.48px] px-[12.8px] py-[6.4px] rounded-[3px] right-[7%] bottom-[28%] md:block md:translate-y-[0.302629px]">
        🧠 LLMs
      </HeroBadge>
      <HeroContent />
      <DesktopSocialLinks />
      <ScrollIndicator />
    </section>
  );
};
