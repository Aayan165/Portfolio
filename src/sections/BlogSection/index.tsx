import { BlogMarquee } from "@/sections/BlogSection/components/BlocgMarquee";
import { BlogHeader } from "@/sections/BlogSection/components/BlogHeader";
import { BlogGrid } from "@/sections/BlogSection/components/BlogGrid";

export const BlogSection = () => {
  return (
    <section id="blogs" className="relative scroll-mt-24 bg-stone-100 box-border caret-transparent   overflow-hidden px-6 py-20">
      <BlogMarquee />
      <div className="box-border caret-transparent max-w-[1200px]   w-full mx-auto px-4 md:px-6">
        <BlogHeader />
        <BlogGrid />
      </div>
    </section>
  );
};
