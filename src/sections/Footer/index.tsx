import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterSocialLinks } from "@/sections/Footer/components/FooterSocialLinks";

export const Footer = () => {
  return (
    <footer className="text-white bg-zinc-900 border-t-yellow-300 box-border caret-transparent   px-6 py-10 border-t-4 border-b-white border-x-white border-solid">
      <div className="items-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between max-w-[1200px]   gap-y-5 w-full mx-auto px-4 md:items-center md:gap-x-6 md:flex-row md:gap-y-6 md:px-6">
        <FooterBrand />
        <FooterSocialLinks />
        <div className="box-border caret-transparent basis-[200px] grow min-h-[auto] min-w-[auto]  "></div>
      </div>
    </footer>
  );
};
