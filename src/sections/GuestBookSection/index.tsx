import { GuestbookMarquee } from "@/sections/GuestBookSection/components/GuestBookMarquee";
import { GuestbookHeader } from "@/sections/GuestBookSection/components/GuestBookHeader";
import { GuestbookContent } from "@/sections/GuestBookSection/components/GuestBookContent";

export const GuestbookSection = () => {
  return (
    <section className="relative bg-stone-100 box-border caret-transparent outline-[3px] overflow-hidden px-6 py-20">
      <GuestbookMarquee />
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] w-full mx-auto px-4 md:px-6">
        <GuestbookHeader />
        <GuestbookContent />
      </div>
    </section>
  );
};