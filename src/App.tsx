import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { AboutSection } from "@/sections/AboutSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { BlogSection } from "@/sections/BlogSection";
import { GuestbookSection } from "@/sections/GuestBookSection";
import { Footer } from "@/sections/Footer";

const App = () => {
  return (
    <div className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-stone-100 box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-space_grotesk before:accent-auto before:bg-[url(data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noise%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url%28%23noise)] before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[25.6px] before:list-outside before:list-disc before:opacity-40 before:outline-[3px] before:pointer-events-none before:fixed before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[1000] before:border-separate before:inset-0 before:font-space_grotesk">
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent min-h-[1000px] outline-[3px] overflow-x-hidden overflow-y-auto">
        <Navbar />
        <main className="box-border caret-transparent outline-[3px]">
          <Hero />
          <AboutSection />
          <ExpertiseSection />
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <GuestbookSection />
        </main>
        <Footer />
      </div>
      <div className="absolute box-border caret-transparent block outline-[3px]"></div>
    </div>
  );
};

export default App;