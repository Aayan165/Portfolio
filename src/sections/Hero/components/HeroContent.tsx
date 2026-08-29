import { HeroActions } from "@/sections/Hero/components/HeroActions";
import { MobileSocialLinks } from "@/sections/Hero/components/MobileSocialLinks";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[900px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full z-[3]">
      <div className="items-center box-border caret-transparent gap-x-2 inline-flex outline-[3px] gap-y-2 mb-6">
        <span className="bg-lime-300 box-border caret-transparent block h-2.5 min-h-[auto] min-w-[auto] outline-[3px] w-2.5 border-zinc-900 rounded-[50%] border-2 border-solid"></span>
        <span className="text-neutral-600 text-[11.2px] font-semibold bg-stone-100 box-border caret-transparent block tracking-[1.344px] leading-[17.92px] min-h-[auto] min-w-[auto] outline-[3px] uppercase border-zinc-900 px-3 py-1 border-2 border-solid font-ibm_plex_mono md:text-[12.8px] md:tracking-[1.536px] md:leading-[20.48px]">
          Hello World 👋
        </span>
      </div>
      <h1 className="text-5xl box-border caret-transparent tracking-[2.4px] leading-[48px] outline-[3px] mb-2 font-bebas_neue md:text-9xl md:tracking-[6.4px] md:leading-[128px]">
        Aman
        <br className="text-5xl box-border caret-transparent tracking-[2.4px] leading-[48px] outline-[3px] md:text-9xl md:tracking-[6.4px] md:leading-[128px]" />
        <span className="text-5xl bg-yellow-300 shadow-[rgb(26,26,26)_6px_6px_0px_0px] box-border caret-transparent inline-block tracking-[2.4px] leading-[48px] outline-[3px] rotate-[-0.9999993263990709deg] border-zinc-900 px-[14.4px] border-4 border-solid md:text-9xl md:tracking-[6.4px] md:leading-[128px] md:px-[38.4px]">
          Kumar Jha
        </span>
      </h1>
      <div className="box-border caret-transparent outline-[3px] mt-6 mb-8">
        <span className="text-[12.8px] font-semibold bg-white shadow-[rgb(26,26,26)_4px_4px_0px_0px] box-border caret-transparent inline-block leading-[20.48px] max-w-full outline-[3px] border-zinc-900 px-4 py-[6.4px] border-[3px] border-solid font-ibm_plex_mono md:text-2xl md:leading-[38.4px]">
          &gt;{" "}
          <span className="text-[12.8px] box-border caret-transparent leading-[20.48px] outline-[3px] md:text-2xl md:leading-[38.4px]">
            ML Systems Builder
            <span className="text-[12.8px] box-border caret-transparent leading-[20.48px] outline-[3px] md:text-2xl md:leading-[38.4px]">
              _
            </span>
          </span>
        </span>
      </div>
      <HeroActions />
      <MobileSocialLinks />
    </div>
  );
};
