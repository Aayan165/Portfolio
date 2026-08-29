import { GuestbookMessages } from "@/sections/GuestBookSection/components/GuestBookMessages";
import { GuestbookFormPanel } from "@/sections/GuestBookSection/components/GuestBookFormPanel";

export const GuestbookContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 grid grid-cols-[1fr] outline-[3px] gap-y-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <GuestbookMessages />
      <GuestbookFormPanel />
    </div>
  );
};
