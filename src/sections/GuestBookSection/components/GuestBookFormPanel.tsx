import { useState, type FormEvent } from "react";

const recipient = "ayanmahmood2006@gmail.com";

export const GuestbookFormPanel = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const openGmailComposer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", recipient);
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", message);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex min-h-[620px] flex-col border-[3px] border-zinc-900 bg-white shadow-[rgb(26,26,26)_5px_5px_0px_0px] md:min-h-[692px]">
      <div className="border-b-[3px] border-zinc-900 bg-yellow-300 px-5 py-4 font-ibm_plex_mono text-[11.2px] font-bold uppercase tracking-[.784px]">
        📬 Direct Inbox
      </div>
      <form className="flex flex-1 flex-col justify-center space-y-5 p-6 md:p-8" onSubmit={openGmailComposer}>
        <div className="border-[3px] border-zinc-900 bg-[#fffaf4] p-4 shadow-[3px_3px_0_#181818]">
          <p className="font-ibm_plex_mono text-xs font-bold">Direct to My Inbox</p>
          <p className="mt-2 max-w-[560px] font-ibm_plex_mono text-[11px] leading-5 text-zinc-600">
            For serious inquiries, collaborations, or job offers — reach me directly on Gmail.
            I usually reply within 24 hours! ⚡
          </p>
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block font-ibm_plex_mono text-[10px] font-bold uppercase tracking-[.8px]"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="Project collaboration"
            className="w-full border-[3px] border-zinc-900 bg-white px-3 py-3 font-ibm_plex_mono text-sm shadow-[3px_3px_0_#181818] outline-none focus-visible:ring-2 focus-visible:ring-[#e4572e] focus-visible:ring-offset-2"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block font-ibm_plex_mono text-[10px] font-bold uppercase tracking-[.8px]"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me a little about your idea..."
            rows={5}
            className="w-full resize-y border-[3px] border-zinc-900 bg-white px-3 py-3 font-ibm_plex_mono text-sm shadow-[3px_3px_0_#181818] outline-none focus-visible:ring-2 focus-visible:ring-[#e4572e] focus-visible:ring-offset-2"
          />
        </div>
        <div className="border-[3px] border-zinc-900 bg-[#fffaf4] px-3 py-3 font-ibm_plex_mono text-[10px] text-zinc-600 shadow-[2px_2px_0_#181818]">
          💌 Will open Gmail compose → <u>{recipient}</u>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 border-[3px] border-zinc-900 bg-[#ff5c93] p-4 font-ibm_plex_mono text-xs font-bold uppercase tracking-[.8px] text-white shadow-[3px_3px_0_#181818] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4572e]"
        >
          📬 Open Gmail &amp; Send <span aria-hidden="true">-&gt;</span>
        </button>
      </form>
    </div>
  );
};
