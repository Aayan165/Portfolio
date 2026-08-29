import { BlogPostCard } from "@/sections/BlogSection/components/BlogPostCard";

export const BlogGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-7 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] outline-[3px] gap-y-7">
      <BlogPostCard
        articleVariant="border-l-yellow-300"
        categories={["AI Engineering", "Software Design"]}
        date="Jul 05, 2026"
        readTime="5 min read"
        href="/blogs/shift-to-ai-native-architectures"
        title="The Shift to AI-Native Software Architectures"
        description="How software design changes when autonomous AI agents are treated as core runtime components, not just optional API integration points."
        buttonVariant="bg-yellow-300"
      />
      <BlogPostCard
        articleVariant="border-l-rose-400"
        categories={["Agentic AI", "TDD"]}
        date="Jun 24, 2026"
        readTime="7 min read"
        href="/blogs/building-self-correcting-coding-agents"
        title="Building Self-Correcting Coding Loop Agents"
        description="A deep dive into the engineering loop that enables an AI agent to write code, parse compiler errors, execute tests, and repair its own mistakes."
        buttonVariant="bg-rose-400"
      />
      <BlogPostCard
        articleVariant="border-l-teal-400"
        categories={["UI/UX", "Design"]}
        date="Jun 12, 2026"
        readTime="4 min read"
        href="/blogs/designing-neobrutalist-ui"
        title="Designing Neobrutalist UI/UX for Tech Portfolios"
        description="Why the raw print-inspired aesthetic of neobrutalism makes developer portfolios stand out, and how to build it using vanilla CSS and Tailwind."
        buttonVariant="bg-teal-400"
      />
    </div>
  );
};
