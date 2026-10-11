export type BlogPostCardProps = {
  articleVariant: string;
  categories: string[];
  date: string;
  readTime: string;
  href: string;
  title: string;
  description: string;
  buttonVariant: string;
};

export const BlogPostCard = (props: BlogPostCardProps) => {
  return (
    <article
      className={`bg-white border-b-zinc-900 border-r-zinc-900 border-t-zinc-900 shadow-[rgb(26,26,26)_5px_5px_0px_0px] box-border caret-transparent flex flex-col justify-between min-h-[275px] min-w-[auto]   p-6 rounded-bl rounded-br rounded-tl rounded-tr border-l-[6px] border-r-[3px] border-y-[3px] border-solid ${props.articleVariant}`}
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]  ">
        <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-between   gap-y-2 mb-4">
          <div className="items-center box-border caret-transparent gap-x-[5.6px] flex flex-wrap min-h-[auto] min-w-[auto]   gap-y-[5.6px]">
            {props.categories.map((category) => (
              <span
                key={category}
                className="text-[9.92px] font-bold bg-orange-50 box-border caret-transparent block leading-[15.872px] min-h-[auto] min-w-[auto]   text-nowrap border border-zinc-900 px-[7.2px] py-[2.4px] rounded-sm border-solid font-ibm_plex_mono"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="items-center box-border caret-transparent gap-x-[6.4px] flex min-h-[auto] min-w-[auto]   gap-y-[6.4px]">
            <span className="text-neutral-500 text-[10.4px] font-bold box-border caret-transparent block leading-[16.64px] min-h-[auto] min-w-[auto]   font-ibm_plex_mono">
              {props.date}
            </span>
            <span className="text-stone-300 text-[10.4px] box-border caret-transparent block leading-[16.64px] min-h-[auto] min-w-[auto]  ">
              ✦
            </span>
            <span className="text-neutral-500 text-[10.4px] font-bold box-border caret-transparent block leading-[16.64px] min-h-[auto] min-w-[auto]   font-ibm_plex_mono">
              {props.readTime}
            </span>
          </div>
        </div>
        <a
          href={props.href}
          className="box-border caret-transparent  "
        >
          <h3 className="text-xl font-extrabold box-border caret-transparent leading-[26px]   mb-3">
            {props.title}
          </h3>
        </a>
        <p className="text-neutral-700 text-[14.08px] box-border caret-transparent leading-[23.232px]   mb-6">
          {props.description}
        </p>
      </div>
      <div className="items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto]   mt-auto pt-2">
        <a
          href={props.href}
          className="box-border caret-transparent block min-h-[auto] min-w-[auto]  "
        >
          <div
            className={`text-[11.52px] font-extrabold items-center shadow-[rgb(26,26,26)_2.5px_2.5px_0px_0px] box-border caret-transparent gap-x-[6.4px] inline-flex tracking-[0.4608px] leading-[18.432px]   gap-y-[6.4px] text-nowrap border-zinc-900 px-[12.8px] py-[5.6px] rounded-[3px] border-2 border-solid font-ibm_plex_mono ${props.buttonVariant}`}
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]   text-nowrap">
              READ ARTICLE
            </span>
            <span className="text-[13.6px] font-black box-border caret-transparent block leading-[13.6px] min-h-[auto] min-w-[auto]   text-nowrap">
              →
            </span>
          </div>
        </a>
      </div>
    </article>
  );
};