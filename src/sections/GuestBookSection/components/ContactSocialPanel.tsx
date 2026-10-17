const socialLinks = [
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/syed-aayan-mahmood-465316251/",
    icon: "in",
    className: "bg-sky-500",
  },
  {
    label: "WhatsApp Me",
    detail: "Start a conversation",
    href: "https://wa.me/923333406016",
    icon: "wa",
    className: "bg-emerald-500",
  },
];

export const ContactSocialPanel = () => {
  return (
    <div className="flex min-h-[620px] flex-col border-[3px] border-zinc-900 bg-[#fffaf4] shadow-[rgb(26,26,26)_5px_5px_0px_0px] md:min-h-[692px]">
      <div className="flex items-center justify-between border-b-[3px] border-zinc-900 bg-zinc-900 px-5 py-4 font-ibm_plex_mono text-[11.2px] font-bold uppercase tracking-[.784px] text-white">
        <span>✦ Let&apos;s connect</span>
        <span className="h-2 w-2 rounded-full border border-white bg-lime-300" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-10 p-6 md:p-8">
        <div>
          <span className="font-ibm_plex_mono text-[10px] font-semibold uppercase tracking-[1px] text-[#e4572e]">
            Find me online
          </span>
          <h3 className="mt-3 max-w-[320px] font-bebas_neue text-5xl leading-[.9] tracking-[2px] md:text-6xl">
            Let&apos;s build something useful.
          </h3>
          <p className="mt-5 max-w-[340px] font-ibm_plex_mono text-xs leading-6 text-zinc-600">
            Open a conversation on the platform that works best for you.
          </p>
        </div>
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`contact-social-link group flex items-center gap-4 border-[3px] border-zinc-900 p-4 text-white shadow-[4px_4px_0_#181818] transition-[transform,box-shadow] duration-200 hover:-translate-y-2 hover:shadow-[5px_8px_0_#181818] focus-visible:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4572e] ${link.className}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-900 bg-white font-ibm_plex_mono text-sm font-bold uppercase text-zinc-900 transition-transform duration-200 group-hover:scale-110">
                {link.icon}
              </span>
              <span>
                <strong className="block font-ibm_plex_mono text-sm uppercase tracking-[.6px]">
                  {link.label}
                </strong>
                <span className="mt-1 block font-ibm_plex_mono text-[10px] opacity-80">
                  {link.detail}
                </span>
              </span>
              <span className="ml-auto font-ibm_plex_mono text-xl transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
