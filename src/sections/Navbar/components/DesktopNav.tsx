const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Expertise", sectionId: "expertise" },
  { label: "Projects", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
  { label: "Blogs", sectionId: "blogs" },
  { label: "Contact", sectionId: "contact" },
];

export const DesktopNav = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0   gap-y-2 md:flex md:min-h-[auto] md:min-w-[auto]">
      {navItems.map(({ label, sectionId }) => (
        <button
          key={sectionId}
          type="button"
          onClick={() =>
            document
              .getElementById(sectionId)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="text-[14.4px] font-bold bg-transparent shadow-[rgb(26,26,26)_3px_3px_0px_0px] caret-transparent inline-block leading-[23.04px] min-h-0 min-w-0   text-center border-zinc-900 px-4 py-[6.4px] rounded-[3px] border-2 md:block md:min-h-[auto] md:min-w-[auto]"
        >
          {label}
        </button>
      ))}
    </div>
  );
};
