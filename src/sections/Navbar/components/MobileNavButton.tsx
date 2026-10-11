export const MobileNavButton = () => {
  return (
    <button
      aria-label="Toggle menu"
      className="bg-yellow-300 shadow-[rgb(26,26,26)_4px_4px_0px_0px] caret-transparent gap-x-[5px] flex flex-col min-h-[auto] min-w-[auto]   gap-y-[5px] text-center border-zinc-900 px-[9.6px] py-[6.4px] rounded-[3px] border-[3px] transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-[rgb(26,26,26)_4px_6px_0px_0px] active:translate-x-1 active:translate-y-1 active:shadow-none md:hidden md:min-h-0 md:min-w-0"
    >
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto]   w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto]   w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-[2.5px] min-h-[auto] min-w-[auto]   w-[22px] rounded-[1px] md:min-h-0 md:min-w-0"></span>
    </button>
  );
};
