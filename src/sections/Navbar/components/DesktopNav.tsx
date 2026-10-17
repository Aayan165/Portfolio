const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Expertise", sectionId: "expertise" },
  { label: "Projects", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
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
          className="text-[14.4px] font-bold bg-stone-100 shadow-[4px_4px_0_#000] caret-transparent inline-block leading-[23.04px] min-h-0 min-w-0   text-center border-zinc-900 px-4 py-[6.4px] rounded-[3px] border-2 transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-[4px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none md:block md:min-h-[auto] md:min-w-[auto]"
        >
          {label}
        </button>
      ))}
    </div>
  );
};
