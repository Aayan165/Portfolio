export const ScrollIndicator = () => {
  return (
    <div className="absolute items-center box-border caret-transparent gap-x-[6.4px] flex flex-col   gap-y-[6.4px] translate-x-[-50.0%] left-2/4 bottom-8">
      <span className="text-[11.2px] font-semibold box-border caret-transparent block tracking-[1.12px] leading-[17.92px] min-h-[auto] min-w-[auto]   font-ibm_plex_mono">
        SCROLL
      </span>
      <div className="shadow-[rgb(26,26,26)_3px_3px_0px_0px] box-border caret-transparent flex h-11 justify-center min-h-[auto] min-w-[auto]   translate-y-[2.57253px] w-7 border-zinc-900 pt-1.5 rounded-[14px] border-[3px] border-solid md:translate-y-[7.22019px]">
        <div className="bg-zinc-900 box-border caret-transparent h-1.5 min-h-[auto] min-w-[auto] opacity-[0.632868]   translate-y-[4.24342px] w-1.5 rounded-[50%] md:opacity-[0.0713875] md:translate-y-[10.8303px]"></div>
      </div>
    </div>
  );
};
