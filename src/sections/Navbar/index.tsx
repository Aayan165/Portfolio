import { useState, useEffect } from 'react';
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { MobileNavButton } from "@/sections/Navbar/components/MobileNavButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed bg-[#F5EFE8] box-border caret-transparent   z-[100]  top-0 inset-x-0 ${isScrolled ? "border-zinc-900  border-b-[3px] border-solid" : ""}`}>
      <div className="items-center box-border caret-transparent flex justify-between max-w-[1200px]   w-full mx-auto px-6 py-4">
        <NavbarLogo />
        <DesktopNav />
        <MobileNavButton />
      </div>
    </nav>
  );
};
