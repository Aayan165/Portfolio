export type ExpertiseCardProps = {
  cardClassName: string;
  visualClassName: string;
  visualContent: React.ReactNode;
  title: string;
  titleClassName: string;
  description: string;
};

export const ExpertiseCard = (props: ExpertiseCardProps) => {
  return (
    <article
      className={`group bg-white shadow-[black_4px_4px_0px_0px] box-border caret-transparent flex flex-col min-h-[390px] min-w-[auto] w-full px-5 py-6 rounded border-[3px] border-solid transition-transform duration-200 hover:-translate-y-1 hover:shadow-[black_6px_6px_0px_0px] md:px-6 md:py-7 md:shadow-[black_5px_5px_0px_0px] ${props.cardClassName}`}
    >
      <div className="relative h-[165px] w-full overflow-hidden rounded border-[3px] border-zinc-900 bg-white after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.16)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.012),rgba(0,0,255,0.03))] after:bg-size-[100%_3px,3px_100%]">
        <div
          className={`bg-black box-border caret-transparent h-full   w-full border border-solid ${props.visualClassName}`}
        >
          {props.visualContent}
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]   w-full mt-2 mb-4">
        <span
          className={`text-neutral-900 text-[10.88px] font-extrabold items-center shadow-[black_2px_2px_0px_0px] box-border caret-transparent flex justify-center tracking-[0.544px] leading-[13.056px] max-w-full min-h-[auto] min-w-[auto] text-center uppercase border-zinc-900 px-3.5 py-1.5 rounded-[999px] border-2 border-solid ${props.titleClassName}`}
        >
          {props.title}
        </span>
      </div>
      <p className="text-zinc-800 text-[14.72px] font-medium box-border caret-transparent grow leading-[23.92px] min-h-[auto] min-w-[auto]   text-left">
        {props.description}
      </p>
    </article>
  );
};
