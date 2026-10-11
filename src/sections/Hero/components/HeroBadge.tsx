export type HeroBadgeProps = {
  variantClassName: string;
  children: React.ReactNode;
  showIndicator?: boolean;
};

export const HeroBadge = (props: HeroBadgeProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent hidden   transform-none z-[2] border-zinc-900 border-[3px] border-solid font-ibm_plex_mono ${props.variantClassName}`}
    >
      {props.showIndicator ? (
        <div className="bg-stone-100 box-border caret-transparent shrink-0 h-2 min-h-0 min-w-0   w-2 border-zinc-900 rounded-[50%] border-2 border-solid md:min-h-[auto] md:min-w-[auto]"></div>
      ) : null}
      {props.showIndicator ? (
        <span className="box-border caret-transparent inline min-h-0 min-w-0   md:block md:min-h-[auto] md:min-w-[auto]">
          {props.children}
        </span>
      ) : (
        props.children
      )}
    </div>
  );
};
