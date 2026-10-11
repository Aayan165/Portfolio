import { ExperienceItem } from "@/sections/ExperienceSection/components/ExperienceItem";

export const ExperienceTimeline = () => {
  return (
    <div className="relative box-border caret-transparent  ">
      <div className="absolute bg-yellow-300 box-border caret-transparent   w-[3px] left-4 inset-y-0"></div>
      <div className="box-border caret-transparent gap-x-6 flex flex-col   gap-y-6 pl-12">
        <ExperienceItem />
      </div>
    </div>
  );
};
