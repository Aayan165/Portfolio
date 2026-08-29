import { AboutMarquee } from "@/sections/AboutSection/components/AboutMarquee";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] overflow-hidden px-6 py-20">
      <AboutMarquee />
      <AboutContent />
    </section>
  );
};
