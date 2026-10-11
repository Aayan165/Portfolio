import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { MobileNavButton } from "@/sections/Navbar/components/MobileNavButton";

export const Navbar = () => {
  return (
    <nav className="fixed border-l-zinc-900 border-r-zinc-900 border-t-zinc-900 box-border caret-transparent   z-[100] border-b-transparent border-b-[3px] border-solid top-0 inset-x-0">
      <div className="items-center box-border caret-transparent flex justify-between max-w-[1200px]   w-full mx-auto px-6 py-4">
        <NavbarLogo />
        <DesktopNav />
        <MobileNavButton />
      </div>
    </nav>
  );
};
