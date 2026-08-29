export const MobileNavButton = () => {
  return (
    <button
      aria-label="Toggle menu"
      className="bg-yellow-300 shadow-[rgb(26,26,26)_3px_3px_0px_0px] caret-transparent gap-x-[5px] flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] text-center border-zinc-900 px-[9.6px] py-[6.4px] rounded-[3px] border-[3px] md:hidden md:min-h-0 md:min-w-0"
    >
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto] outline-[3px] w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto] outline-[3px] w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto] outline-[3px] w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
    </button>
  );
};
