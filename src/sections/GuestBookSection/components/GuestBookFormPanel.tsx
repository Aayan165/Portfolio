export const GuestbookFormPanel = () => {
  return (
    <div className="bg-white shadow-[rgb(26,26,26)_4px_4px_0px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border-zinc-900 overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid md:shadow-[rgb(26,26,26)_5px_5px_0px_0px]">
      <div className="box-border caret-transparent flex outline-[3px] border-zinc-900 border-b-[3px] border-solid">
        <button className="text-[11.2px] font-bold bg-yellow-300 caret-transparent block basis-[0%] grow tracking-[0.784px] leading-[17.92px] min-h-[auto] min-w-[auto] outline-[3px] text-center border-zinc-900 px-2 py-[13.6px] border-r-[3px] font-ibm_plex_mono">
          ✍️ Leave a Note
          <div className="bg-zinc-900 box-border caret-transparent h-[3px] outline-[3px] mt-[6.4px] rounded-sm"></div>
        </button>
        <button className="text-[11.2px] font-bold bg-stone-100 caret-transparent block basis-[0%] grow tracking-[0.784px] leading-[17.92px] min-h-[auto] min-w-[auto] outline-[3px] text-center px-2 py-[13.6px] font-ibm_plex_mono">
          📬 Direct Inbox
        </button>
      </div>
      <div className="box-border caret-transparent outline-[3px] p-7">
        <div className="box-border caret-transparent outline-[3px]">
          <form className="box-border caret-transparent gap-x-4 flex flex-col outline-[3px] gap-y-4">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <label className="text-[11.52px] font-bold box-border caret-transparent block tracking-[0.6912px] leading-[18.432px] outline-[3px] mb-[6.4px] font-ibm_plex_mono">
                YOUR NAME *
              </label>
              <input
                required={true}
                placeholder="e.g. Alex Rivera"
                defaultValue=""
                className="shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border caret-transparent outline-[3px] w-full border-zinc-900 px-4 py-[13.6px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid md:shadow-[rgb(26,26,26)_3px_3px_0px_0px]"
              />
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <label className="text-[11.52px] font-bold box-border caret-transparent block tracking-[0.6912px] leading-[18.432px] outline-[3px] mb-[6.4px] font-ibm_plex_mono">
                YOUR NOTE *
              </label>
              <textarea
                required={true}
                placeholder="Say something nice... or roast me 😄"
                rows={4}
                className="shadow-[rgb(26,26,26)_2px_2px_0px_0px] box-border caret-transparent outline-[3px] resize-y w-full border-zinc-900 px-4 py-[13.6px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] md:shadow-[rgb(26,26,26)_3px_3px_0px_0px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white font-bold items-center bg-zinc-900 shadow-[rgb(26,26,26)_2px_2px_0px_0px] caret-transparent gap-x-2 flex justify-center tracking-[0.32px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center w-full border-zinc-900 p-[14.4px] rounded-bl rounded-br rounded-tl rounded-tr border-[3px] md:shadow-[rgb(26,26,26)_3px_3px_0px_0px] hover:shadow-none"
            >
              🫧 Post Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
