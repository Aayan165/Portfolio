import { useEffect, useState } from "react";
import { HeroActions } from "@/sections/Hero/components/HeroActions";
import { MobileSocialLinks } from "@/sections/Hero/components/MobileSocialLinks";

export const HeroContent = () => {
  const roles = ["AI Engineer", "Agentic AI Developer", "Backend Engineer", "Software Developer"];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1200);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.substring(0, text.length + 1);
          setText(nextText);

          if (nextText === currentRole) {
            setIsWaiting(true);
          }
        } else {
          const nextText = currentRole.substring(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, roleIndex]);

  return (
    <div className="relative box-border caret-transparent max-w-[900px] min-h-[auto] min-w-[auto] text-center w-full z-[3]">
      <div className="items-center box-border caret-transparent gap-x-2 inline-flex gap-y-2 mb-6">
        <span className="bg-lime-300 box-border caret-transparent block h-2.5 min-h-[auto] min-w-[auto] w-2.5 border-zinc-900 rounded-[50%] border-2 border-solid"></span>
        <span className="text-neutral-600 text-[11.2px] font-semibold bg-stone-100 box-border caret-transparent block tracking-[1.344px] leading-[17.92px] min-h-[auto] min-w-[auto] uppercase border-zinc-900 px-3 py-1 border-2 border-solid font-ibm_plex_mono md:text-[12.8px] md:tracking-[1.536px] md:leading-[20.48px]">
          Hello World 👋
        </span>
      </div>

      <h1 className="text-5xl box-border caret-transparent tracking-[2.4px] leading-[48px] mb-2 font-bebas_neue md:text-9xl md:tracking-[6.4px] md:leading-[128px]">
        <b>AAYAN</b>
        <br className="text-5xl box-border caret-transparent tracking-[2.4px] leading-[48px] md:text-9xl md:tracking-[6.4px] md:leading-[128px]" />
        <span className="text-5xl bg-yellow-300 shadow-[rgb(26,26,26)_6px_6px_0px_0px] box-border caret-transparent inline-block tracking-[2.4px] leading-[48px] rotate-[-0.9999993263990709deg] border-zinc-900 px-[14.4px] border-4 border-solid md:text-9xl md:tracking-[6.4px] md:leading-[128px] md:px-[38.4px]">
          <strong>MAHMOOD</strong>
        </span>
      </h1>

      <div className="box-border caret-transparent mt-6 mb-8">
        <span className="text-[12.8px] font-semibold bg-white shadow-[rgb(26,26,26)_4px_4px_0px_0px] box-border caret-transparent inline-block leading-[20.48px] max-w-full border-zinc-900 px-4 py-[6.4px] border-[3px] border-solid font-ibm_plex_mono md:text-2xl md:leading-[38.4px]">
          &gt;{" "}
          <span className="text-[12.8px] box-border caret-transparent leading-[20.48px] md:text-2xl md:leading-[38.4px]">
            {text}
            <span className="animate-pulse">_</span>
          </span>
        </span>
      </div>

      <HeroActions />
      <MobileSocialLinks />
    </div>
  );
};