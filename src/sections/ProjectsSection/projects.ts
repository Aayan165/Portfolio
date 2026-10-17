export type ProjectKind = "verdict" | "aureon" | "pdf" | "map" | "saathi";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  kind: ProjectKind;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Verdict AI",
    category: "AI Evaluation / Multi-Agent Systems",
    description:
      "An LLM evaluation platform that uses specialized agents to assess accuracy, logic, and completeness before an adjudicator produces a final verdict.",
    technologies: ["Python", "FastAPI", "LangGraph", "React", "PostgreSQL", "Supabase", "Gemini"],
    kind: "verdict",
  },
  {
    number: "02",
    title: "Aureon",
    category: "Agentic AI / Workflow Orchestration",
    description:
      "A multi-agent AI orchestration platform designed to coordinate task execution, manage workflow state, and support human-in-the-loop approvals.",
    technologies: ["Python", "FastAPI", "LangGraph", "PostgreSQL"],
    kind: "aureon",
  },
  {
    number: "03",
    title: "AI PDF Chatbot",
    category: "RAG / Document Intelligence",
    description:
      "A document question-answering application that combines PDF ingestion, retrieval-augmented generation, vector search, and an LLM to answer questions about uploaded documents.",
    technologies: ["Python", "FastAPI", "Gemini", "Qdrant"],
    kind: "pdf",
  },
  {
    number: "04",
    title: "Mini Map",
    category: "Algorithms / Mapping",
    description:
      "A mapping and route-finding project using OpenStreetMap data and graph-search algorithms to calculate routes.",
    technologies: ["C++", "OpenStreetMap", "Dijkstra's Algorithm", "A* Search"],
    kind: "map",
  },
  {
    number: "05",
    title: "SaathiSync",
    category: "Full-Stack Development / Student Collaboration",
    description:
      "A study-partner application designed to help students connect and find compatible study partners.",
    technologies: ["Flask", "PostgreSQL"],
    kind: "saathi",
  },
];
