import { AboutMarquee } from "@/sections/AboutSection/components/AboutMarquee";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section id="about" className="relative scroll-mt-24 box-border caret-transparent   overflow-hidden px-6 py-20">
      <AboutMarquee />
      <AboutContent />
    </section>
  );
};
