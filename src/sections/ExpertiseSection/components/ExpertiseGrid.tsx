import { ExpertiseCard } from "@/sections/ExpertiseSection/components/ExpertiseCard";

export const ExpertiseGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-7 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-7 w-full md:gap-x-8 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-8">
      <ExpertiseCard
        cardClassName="border-rose-400"
        visualClassName="text-[7px] gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] leading-[11.2px] gap-y-1.5 border-zinc-900 font-ui_monospace"
        visualContent={
          <>
            <div className="box-border caret-transparent flex flex-col col-end-[span_3] col-start-[span_3] justify-between min-h-[auto] min-w-[auto] outline-[3px] border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden border-r border-solid">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent gap-x-1 flex opacity-60 outline-[3px] gap-y-1 border-[lab(16.1051_-1.18239_-11.7533)] border-b border-solid">
                  <div className="bg-[lab(55.4814_75.0732_48.8528)] box-border caret-transparent h-1.5 min-h-[auto] min-w-[auto] outline-[3px] w-1.5 rounded-[3.35544e+07px]"></div>
                  <div className="bg-[lab(76.3898_14.5258_98.4589)] box-border caret-transparent h-1.5 min-h-[auto] min-w-[auto] outline-[3px] w-1.5 rounded-[3.35544e+07px]"></div>
                  <div className="bg-[lab(70.5521_-66.5147_45.8073)] box-border caret-transparent h-1.5 min-h-[auto] min-w-[auto] outline-[3px] w-1.5 rounded-[3.35544e+07px]"></div>
                  <span className="text-[lab(65.9269_-0.832707_-8.17473)] text-[6.5px] font-bold box-border caret-transparent block leading-[10.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                    workspace/parser_agent.py
                  </span>
                </div>
                <div className="box-border caret-transparent gap-x-0.5 flex flex-col leading-[11.375px] min-h-[70px] outline-[3px] gap-y-0.5">
                  <div className="box-content caret-black block min-h-0 min-w-0 outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="text-black box-content caret-black inline min-h-0 min-w-0 outline-0 text-start w-auto md:text-[lab(35.6337_-1.58697_-10.8425)] md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      1
                    </span>
                    <span className="text-black font-normal box-content caret-black inline min-h-0 min-w-0 outline-0 md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      def run(self, issue):
                    </span>
                  </div>
                  <div className="box-content caret-black block min-h-0 min-w-0 outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="text-black box-content caret-black inline min-h-0 min-w-0 outline-0 text-start w-auto md:text-[lab(35.6337_-1.58697_-10.8425)] md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      2
                    </span>
                    <span className="text-black font-normal box-content caret-black inline min-h-0 min-w-0 outline-0 md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      {"    res = issue.parse()"}
                    </span>
                  </div>
                  <div className="box-content caret-black block min-h-0 min-w-0 outline-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <span className="text-black box-content caret-black inline min-h-0 min-w-0 outline-0 text-start w-auto md:text-[lab(35.6337_-1.58697_-10.8425)] md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      3
                    </span>
                    <span className="text-black font-normal box-content caret-black inline min-h-0 min-w-0 outline-0 md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      {"    return res"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[6px] items-center box-border caret-transparent flex justify-between leading-[9.6px] min-h-[auto] min-w-[auto] outline-[3px] border-[lab(16.1051_-1.18239_-11.7533)] border-t border-solid">
                <span className="text-[lab(47.7841_-0.393182_-10.0268)] box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  Lines: 3
                </span>
                <span className="text-black font-black box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] rounded-bl rounded-br rounded-tl rounded-tr">
                  MERGING
                </span>
              </div>
            </div>
            <div className="text-[lab(85.1236_-0.612259_-3.7138)] bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent flex flex-col col-end-[span_2] col-start-[span_2] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="font-extrabold box-border caret-transparent opacity-60 outline-[3px] uppercase border-[lab(16.1051_-1.18239_-11.7533)] border-b border-solid">
                  Telemetry Logs
                </div>
                <div className="box-border caret-transparent gap-x-1 flex flex-col leading-[10.5px] max-h-[85px] outline-[3px] gap-y-1 overflow-hidden">
                  <div className="text-[lab(65.9269_-0.832707_-8.17473)] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-all">
                    [SYSTEM] Re-running pytest...
                  </div>
                  <div className="text-[lab(65.9269_-0.832707_-8.17473)] font-normal box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-all md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold">
                    ✓ test_ast: PASSED
                  </div>
                  <div className="text-black font-normal box-content caret-black min-h-0 min-w-0 outline-0 break-normal md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:break-all md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    ✓ test_codegen: PASSED
                  </div>
                  <div className="text-black font-normal box-content caret-black min-h-0 min-w-0 outline-0 break-normal md:text-[lab(78.503_-64.9265_39.7492)] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:break-all md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    [✓] ALL TESTS PASSED
                  </div>
                  <div className="text-black box-content caret-black min-h-0 min-w-0 outline-0 break-normal md:text-[lab(65.9269_-0.832707_-8.17473)] md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:break-all md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    [SYSTEM] Creating Pull Request...
                  </div>
                  <div className="text-black box-content caret-black min-h-0 min-w-0 outline-0 break-normal md:text-[lab(65.9269_-0.832707_-8.17473)] md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:break-all md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    [SYSTEM] Auto-merging to main branch...
                  </div>
                </div>
              </div>
              <div className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 outline-0 text-start rounded-none md:text-[6px] md:font-black md:aspect-auto md:box-border md:caret-transparent md:leading-[9.6px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr">
                ✓ PR #142 MERGED
              </div>
            </div>
          </>
        }
              title="Agentic Coding & Multi-Agent Systems"
        titleClassName="bg-rose-400"
        description="Engineering autonomous software agents that can read codebases, write code, run test suites, and self-correct using LLM reasoning loops."
      />
      <ExpertiseCard
        cardClassName="border-blue-500"
        visualClassName="relative items-center flex justify-center border-zinc-900 overflow-hidden"
        visualContent={
          <img
            src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/image-1.png"
            className="aspect-[auto_303_/_159] box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
          />
        }
        title="AI Workflows & LLM Orchestration"
        titleClassName="bg-blue-500"
        description="Designing intelligent, multi-step workflows that string together LLMs, vector search, and API integrations to automate complex business processes."
      />
      <ExpertiseCard
        cardClassName="border-lime-300"
        visualClassName="text-white text-[7.2px] gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] leading-[11.52px] gap-y-1.5 border-white font-ui_monospace"
        visualContent={
          <div className="box-border caret-transparent flex flex-col col-end-[span_3] col-start-[span_3] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
            <div className="relative items-center bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent flex h-[46px] justify-center min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <img
                src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/image-2.png"
                className="aspect-[auto_178_/_46] box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
              />
              <span className="absolute text-[lab(76.6045_-40.9406_-29.6231)] text-[5px] font-extrabold box-border caret-transparent block tracking-[0.5px] leading-[8px] outline-[3px] uppercase left-1 top-0.5">
                Websocket Stream
              </span>
            </div>
            <div className="text-black text-[7px] font-black box-border caret-transparent leading-[11.2px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              🤖 AI: Thinking...
            </div>
          </div>
        }
        title="Full-Stack AI Application Development"
        titleClassName="bg-lime-300"
        description="Building clean, highly interactive web applications that connect deep learning models and data dashboards to end-users."
      />
      <ExpertiseCard
        cardClassName="border-yellow-300"
        visualClassName="text-white text-[7.2px] gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] leading-[11.52px] gap-y-1.5 border-white font-ui_monospace"
        visualContent={
          <>
            <div className="box-border caret-transparent flex flex-col col-end-[span_3] col-start-[span_3] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
              <div className="relative bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent h-[46px] min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                <img
                  src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/image-3.png"
                  className="aspect-[auto_178_/_46] box-border caret-transparent h-full max-w-full outline-[3px] w-full"
                />
                <span className="absolute text-[5px] font-extrabold box-border caret-transparent block tracking-[0.5px] leading-[8px] outline-[3px] uppercase left-1 top-0.5">
                  Conversion Analytics
                </span>
              </div>
              <div className="font-bold bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent gap-x-0.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 border border-[lab(16.1051_-1.18239_-11.7533)] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                <div className="text-[lab(76.6045_-40.9406_-29.6231)] text-[6px] box-border caret-transparent leading-[9.6px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                  [HUBSPOT] Sync: deal updated
                </div>
                <div className="text-[lab(76.6045_-40.9406_-29.6231)] text-[6px] box-border caret-transparent leading-[9.6px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                  [STRIPE] Charge $49 paid
                </div>
                <div className="text-[lab(76.6045_-40.9406_-29.6231)] text-[6px] box-border caret-transparent leading-[9.6px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                  [STRIPE] Charge $199 paid
                </div>
              </div>
            </div>
            <div className="bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent flex flex-col col-end-[span_2] col-start-[span_2] justify-between min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(16.1051_-1.18239_-11.7533)] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center">
                <div className="text-[7px] font-extrabold box-border caret-transparent leading-[11.2px] opacity-60 outline-[3px] uppercase border-[lab(16.1051_-1.18239_-11.7533)] border-b border-solid">
                  GROWTH Telemetry
                </div>
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="text-[5.8px] box-border caret-transparent leading-[9.28px] opacity-80 outline-[3px]">
                    LTV: $14,920
                  </div>
                  <div className="text-[5.8px] box-border caret-transparent leading-[9.28px] opacity-80 outline-[3px]">
                    CAC: $18.40
                  </div>
                </div>
                <div className="box-border caret-transparent outline-[3px] border-[lab(8.11897_0.811279_-12.254)] border-t border-solid">
                  <div className="text-[5.5px] box-border caret-transparent leading-[8.8px] opacity-70 outline-[3px]">
                    CONVERSIONS
                  </div>
                  <div className="text-xs font-black box-border caret-transparent leading-4 outline-[3px]">
                    1847
                  </div>
                </div>
              </div>
            </div>
          </>  }
        title="GTM Tech Stack & Growth Engineering"
        titleClassName="bg-yellow-300"
        description="Architecting growth infrastructure — CRM integrations, conversion funnels, analytics pipelines, and marketing automation systems."
      />
      <ExpertiseCard
        cardClassName="border-orange-500"
        visualClassName="text-white text-[7.2px] gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] leading-[11.52px] gap-y-1.5 border-white font-ui_monospace"
        visualContent={
          <div className="box-border caret-transparent flex flex-col col-end-[span_3] col-start-[span_3] justify-between min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
            <div className="text-black font-bold items-center bg-white box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 text-ellipsis text-nowrap border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <span className="text-[6.5px] box-border caret-transparent block leading-[10.4px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                🔗
              </span>
              <span className="text-[6px] box-border caret-transparent block leading-[9.6px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden"></span>
              <span className="bg-black box-border caret-transparent block h-2 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-0.5"></span>
            </div>
            <div className="items-center bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent gap-x-1 grid grid-cols-[repeat(5,minmax(0px,1fr))] min-h-[35px] min-w-[auto] outline-[3px] gap-y-1 border border-[lab(16.1051_-1.18239_-11.7533)] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(149,224,108)_0px_0px_4px_0px] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white"></div>
              <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(149,224,108)_0px_0px_4px_0px] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white"></div>
              <div className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(149,224,108)_0px_0px_4px_0px] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white md:bg-[lab(16.1051_-1.18239_-11.7533)] md:shadow-none md:border-[lab(8.11897_0.811279_-12.254)]"></div>
              <div className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(149,224,108)_0px_0px_4px_0px] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white md:bg-[lab(16.1051_-1.18239_-11.7533)] md:shadow-none md:border-[lab(8.11897_0.811279_-12.254)]"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
              <div className="bg-[lab(16.1051_-1.18239_-11.7533)] box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(8.11897_0.811279_-12.254)] rounded-bl rounded-br rounded-tl rounded-tr border-solid"></div>
            </div>
            <div className="relative bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent flex flex-col col-end-[span_2] col-start-[span_2] justify-between min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <div className="relative box-border caret-transparent h-[34px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <img
                  src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/image-4.png"
                  className="aspect-[auto_115_/_34] box-border caret-transparent h-full max-w-full outline-[3px] w-full"
                />
              </div>
              <div className="text-[5.5px] font-bold box-border caret-transparent flex justify-between leading-[8.8px] min-h-[auto] min-w-[auto] outline-[3px] text-center border-[lab(8.11897_0.811279_-12.254)] border-t border-solid">
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  TRAFFIC INDEX
                </span>
                <span className="text-[lab(70.5521_-66.5147_45.8073)] font-extrabold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  +184%
                </span>
              </div>
            </div>
          </div>
        }
        title="Programmatic SEO & Content Engines"
        titleClassName="bg-orange-500"
        description="Building systems that generate, optimize, and deploy content at scale using templating engines, NLP, and search intelligence."
      />
      <ExpertiseCard
        cardClassName="border-purple-400"
        visualClassName="text-white text-[7.2px] gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] leading-[11.52px] gap-y-1.5 border-white font-ui_monospace"
        visualContent={
          <div className="text-white text-[7.2px] bg-black box-border caret-transparent gap-x-1.5 grid grid-cols-[repeat(5,minmax(0px,1fr))] h-full leading-[11.52px] outline-[3px] gap-y-1.5 w-full border border-solid border-white font-ui_monospace">
            <div className="relative items-center box-border caret-transparent flex flex-col col-end-[span_2] col-start-[span_2] justify-center min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
              <img
                src="https://c.animaapp.com/92AUW9xMRuI43dKiSnbfRA/assets/image-5.png"
                className="aspect-[auto_117_/_157] box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
              />
            </div>
            <div className="text-[lab(85.1236_-0.612259_-3.7138)] text-[6.5px] font-bold bg-[lab(1.90334_0.278696_-5.48866)] box-border caret-transparent flex flex-col col-end-[span_3] col-start-[span_3] justify-between leading-[10.5625px] min-h-[auto] min-w-[auto] outline-[3px] border border-[lab(16.1051_-1.18239_-11.7533)] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="text-[7px] font-extrabold box-border caret-transparent leading-[11.375px] opacity-60 outline-[3px] uppercase border-[lab(16.1051_-1.18239_-11.7533)] border-b border-solid">
                  Cognitive Parser
                </div>
                <div className="box-border caret-transparent outline-[3px]">
                  {"{"}
                </div>
                <div className="box-border caret-transparent outline-[3px]">
                  {"}"}
                </div>
              </div>
              <div className="text-[lab(47.7841_-0.393182_-10.0268)] text-[5.5px] items-center box-border caret-transparent flex justify-between leading-[8.9375px] min-h-[auto] min-w-[auto] outline-[3px] border-[lab(8.11897_0.811279_-12.254)] border-t border-solid">
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  Confidence
                </span>
                <span className="font-black box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  98.38%
                </span>
              </div>
            </div>
          </div>
        }
        title="Intelligent Automation & Cognitive AI"
        titleClassName="bg-purple-400"
        description="Automating document parsing, data extraction, and decision-making workflows with cognitive AI pipelines and intelligent routing."
      />
    </div>
  );
};
