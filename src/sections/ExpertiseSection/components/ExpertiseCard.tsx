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
    <div
      className={`bg-white shadow-[rgb(26,26,26)_4px_4px_0px_0px] box-border caret-transparent flex flex-col min-h-[390px] min-w-[auto]   w-full px-6 py-7 rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid md:shadow-[rgb(26,26,26)_5px_5px_0px_0px] ${props.cardClassName}`}
    >
      <div className="relative bg-white box-border caret-transparent h-[165px] min-h-[auto] min-w-[auto]   w-full border-zinc-900 overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid after:accent-auto after:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.22)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.016),rgba(0,0,255,0.04))] after:bg-[position:0px_0px,0px_0px] after:bg-size-[100%_3px,3px_100%] after:box-border after:caret-transparent after:text-zinc-900 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:  after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-10 after:border-separate after:inset-0 after:font-space_grotesk">
        <div
          className={`bg-black box-border caret-transparent h-full   w-full border border-solid ${props.visualClassName}`}
        >
          {props.visualContent}
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]   w-full mt-2 mb-4">
        <span
          className={`text-neutral-900 text-[10.88px] font-extrabold items-center shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border caret-transparent flex justify-center tracking-[0.544px] leading-[13.056px] max-w-full min-h-[auto] min-w-[auto]   text-center uppercase border-zinc-900 px-3.5 py-1.5 rounded-[999px] border-2 border-solid ${props.titleClassName}`}
        >
          {props.title}
        </span>
      </div>
      <p className="text-zinc-800 text-[14.72px] font-medium box-border caret-transparent grow leading-[23.92px] min-h-[auto] min-w-[auto]   text-left">
        {props.description}
      </p>
    </div>
  );
};
