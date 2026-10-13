import { ExpertiseCard } from "@/sections/ExpertiseSection/components/ExpertiseCard";

const TerminalLine = ({
  children,
  tone = "text-emerald-300",
}: {
  children: React.ReactNode;
  tone?: string;
}) => (
  <div className={`flex gap-2 truncate ${tone}`}>
    <span className="text-slate-500" aria-hidden="true">
      ›
    </span>
    <span className="truncate">{children}</span>
  </div>
);

const StatusDot = ({ color = "bg-emerald-400" }: { color?: string }) => (
  <span
    className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${color}`}
    aria-hidden="true"
  />
);

const AgentWorkflowPreview = () => (
  <div className="flex h-full flex-col gap-1.5 bg-slate-950 p-3 font-ibm_plex_mono text-[8px] leading-[1.35]">
    <div className="flex items-center gap-1.5 border-b border-slate-700 pb-2 text-slate-300">
      <StatusDot color="bg-rose-400" />
      <StatusDot color="bg-amber-300" />
      <StatusDot />
      <span className="ml-1 truncate text-[7px] text-slate-500">aureon / workflow.run</span>
    </div>
    <TerminalLine tone="text-cyan-300">[ORCHESTRATOR] Initializing workflow...</TerminalLine>
    <TerminalLine>[RESEARCHER] Task analysis complete</TerminalLine>
    <TerminalLine tone="text-yellow-200">[ANALYST] Findings processed</TerminalLine>
    <TerminalLine tone="text-violet-300">[EXECUTOR] Action completed</TerminalLine>
    <TerminalLine tone="text-amber-200">
      <span className="flex items-center gap-1">
        <StatusDot color="bg-amber-300" /> [APPROVAL] Awaiting human review
      </span>
    </TerminalLine>
    <div className="mt-auto flex items-center justify-between border-t border-slate-700 pt-1.5 text-[7px]">
      <span className="text-slate-500">RESEARCHER → ANALYST → EXECUTOR</span>
      <span className="font-bold text-emerald-300">WORKFLOW COMPLETED</span>
    </div>
  </div>
);

const LlmPipelinePreview = () => (
  <div className="flex h-full flex-col justify-between bg-[#101827] p-3 font-ibm_plex_mono text-[7px] text-slate-200">
    <div className="flex items-center justify-between border-b border-slate-600 pb-2">
      <span className="font-bold tracking-widest text-cyan-300">AI / RAG PIPELINE</span>
      <span className="flex items-center gap-1 text-emerald-300">
        <StatusDot /> LIVE
      </span>
    </div>
    <div className="grid grid-cols-5 items-center gap-1 text-center">
      {["USER QUERY", "RETRIEVAL", "CONTEXT", "LLM", "RESPONSE"].map((step, index) => (
        <div key={step} className="flex min-w-0 items-center gap-1">
          <div className="min-w-0 flex-1 rounded border border-cyan-400/60 px-1 py-2 text-[6px] text-cyan-100">
            {step}
          </div>
          {index < 4 && <span className="text-cyan-400">→</span>}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-1.5 text-[6px]">
      <div className="rounded border border-slate-600 p-1.5 text-slate-400">DOC_014.pdf<br /><span className="text-emerald-300">0.94 match</span></div>
      <div className="rounded border border-slate-600 p-1.5 text-slate-400">DOC_022.md<br /><span className="text-emerald-300">0.88 match</span></div>
      <div className="rounded border border-slate-600 p-1.5 text-slate-400">context.bin<br /><span className="text-amber-200">3 chunks</span></div>
    </div>
  </div>
);

const ApiPreview = () => (
  <div className="flex h-full flex-col bg-[#111827] p-3 font-ibm_plex_mono text-[8px] text-slate-200">
    <div className="mb-2 flex items-center justify-between border-b border-slate-700 pb-2">
      <span className="text-orange-300">FASTAPI / ROUTES</span>
      <span className="text-emerald-300">● ONLINE</span>
    </div>
    <div className="space-y-1.5">
      <div className="flex justify-between rounded bg-slate-800 px-2 py-1"><span><b className="text-emerald-300">POST</b> /api/evaluations</span><span className="text-emerald-300">201</span></div>
      <div className="flex justify-between rounded bg-slate-800 px-2 py-1"><span><b className="text-cyan-300">GET</b> /api/analytics</span><span className="text-emerald-300">200</span></div>
      <div className="flex justify-between rounded bg-slate-800 px-2 py-1"><span><b className="text-emerald-300">POST</b> /api/agents/run</span><span className="text-emerald-300">202</span></div>
    </div>
    <div className="mt-auto flex items-center justify-between border-t border-slate-700 pt-2 text-[7px] text-slate-400">
      <span>request_id: ag_8f21</span><span className="text-lime-300">response sent 42ms</span>
    </div>
  </div>
);

const DatabasePreview = () => (
  <div className="flex h-full flex-col bg-[#172019] p-3 font-ibm_plex_mono text-[7px] text-lime-100">
    <div className="mb-2 flex items-center justify-between border-b border-lime-900 pb-2">
      <span className="text-lime-300">POSTGRESQL / SCHEMA</span><span className="text-emerald-300">✓ COMMITTED</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {["USERS", "EVALUATIONS", "EXECUTIONS", "APPROVALS"].map((table, index) => (
        <div key={table} className="relative rounded border border-lime-700 bg-lime-950/60 p-2">
          <div className="font-bold text-lime-300">{table}</div>
          <div className="mt-1 text-lime-500">{index % 2 === 0 ? "id · created_at" : "id · status"}</div>
          {index < 2 && <span className="absolute -right-2 top-1/2 text-amber-300">→</span>}
        </div>
      ))}
    </div>
    <div className="mt-auto border-t border-lime-900 pt-1.5 text-lime-400">SELECT * FROM executions; <span className="text-lime-200">4 rows</span></div>
  </div>
);

const FullStackPreview = () => (
  <div className="flex h-full flex-col justify-between bg-[#1b1725] p-3 font-ibm_plex_mono text-[7px] text-fuchsia-100">
    <div className="flex items-center justify-between border-b border-fuchsia-900 pb-2">
      <span className="text-fuchsia-300">AUREON / SYSTEM MAP</span><span className="text-emerald-300">● CONNECTED</span>
    </div>
    <div className="flex items-center justify-between gap-1 text-center">
      {["REACT UI", "FASTAPI", "AI WORKFLOW", "POSTGRESQL"].map((label, index) => (
        <div key={label} className="flex items-center gap-1">
          <div className="rounded border border-fuchsia-500/70 px-1.5 py-2 text-[6px]">{label}</div>
          {index < 3 && <span className="text-fuchsia-400">→</span>}
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between rounded border border-fuchsia-900 bg-fuchsia-950/50 px-2 py-1.5 text-slate-300">
      <span>GET /dashboard</span><span className="text-emerald-300">200 OK</span>
    </div>
  </div>
);

const EvaluationPreview = () => (
  <div className="flex h-full flex-col bg-[#17151f] p-3 font-ibm_plex_mono text-[8px] text-slate-200">
    <div className="mb-1 flex items-center justify-between border-b border-violet-900 pb-2">
      <span className="text-violet-300">VERDICT AI / EVALUATION</span><span className="text-emerald-300">RUN #042</span>
    </div>
    <div className="space-y-1.5 py-1">
      {[
        ["ACCURACY", "0.91", "w-[91%]"],
        ["LOGIC", "0.87", "w-[87%]"],
        ["COMPLETENESS", "0.94", "w-[94%]"],
      ].map(([label, score, width]) => (
        <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-2">
          <div><div className="mb-0.5 flex justify-between text-[7px]"><span>{label}</span><span className="text-violet-300">{score}</span></div><div className="h-1 bg-slate-700"><div className={`h-full bg-violet-400 ${width}`} /></div></div>
        </div>
      ))}
    </div>
    <div className="mt-auto flex justify-between border-t border-violet-900 pt-2 text-[7px]"><span className="text-slate-400">[ADJUDICATOR]</span><span className="text-emerald-300">Final verdict generated</span></div>
  </div>
);

export const ExpertiseGrid = () => (
  <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
    <ExpertiseCard
      cardClassName="border-rose-400"
      visualClassName="border-slate-900"
      visualContent={<AgentWorkflowPreview />}
      title="Agentic AI & Multi-Agent Systems"
      titleClassName="bg-rose-400"
      description="Designing intelligent agents and orchestrated workflows that break complex tasks into smaller steps, coordinate specialized agents, use tools, and support human-in-the-loop decision-making."
    />
    <ExpertiseCard
      cardClassName="border-cyan-400"
      visualClassName="border-slate-900"
      visualContent={<LlmPipelinePreview />}
      title="AI Engineering & LLM Applications"
      titleClassName="bg-cyan-300"
      description="Building practical AI applications with large language models, prompt engineering, retrieval-augmented generation, and structured evaluation workflows."
    />
    <ExpertiseCard
      cardClassName="border-orange-400"
      visualClassName="border-slate-900"
      visualContent={<ApiPreview />}
      title="Backend Engineering & API Development"
      titleClassName="bg-orange-400"
      description="Developing reliable backend systems using Python, FastAPI, and REST APIs, with a focus on clean architecture, authentication, asynchronous execution, and dependable application logic."
    />
    <ExpertiseCard
      cardClassName="border-lime-500"
      visualClassName="border-slate-900"
      visualContent={<DatabasePreview />}
      title="Database Engineering & Data Architecture"
      titleClassName="bg-lime-300"
      description="Designing relational schemas, data models, and persistence layers using PostgreSQL and SQLAlchemy to manage application state, evaluation history, and structured data."
    />
    <ExpertiseCard
      cardClassName="border-fuchsia-400"
      visualClassName="border-slate-900"
      visualContent={<FullStackPreview />}
      title="Full-Stack AI Application Development"
      titleClassName="bg-fuchsia-300"
      description="Connecting AI-powered backends to interactive web interfaces, building end-to-end applications that combine frontend experiences, APIs, authentication, and intelligent features."
    />
    <ExpertiseCard
      cardClassName="border-violet-400"
      visualClassName="border-slate-900"
      visualContent={<EvaluationPreview />}
      title="LLM Evaluation & AI Workflow Orchestration"
      titleClassName="bg-violet-300"
      description="Building structured evaluation pipelines that compare AI outputs across accuracy, logic, and completeness, then combine specialized agent assessments into a final verdict."
    />
  </div>
);
