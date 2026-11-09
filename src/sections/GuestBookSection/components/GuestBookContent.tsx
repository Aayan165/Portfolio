import { ContactSocialPanel } from "@/sections/GuestBookSection/components/ContactSocialPanel";
import { GuestbookFormPanel } from "@/sections/GuestBookSection/components/GuestBookFormPanel";

export const GuestbookContent = () => {
  return (
    <div className="mx-auto grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
      <ContactSocialPanel />
      <GuestbookFormPanel />
    </div>
  );
};
