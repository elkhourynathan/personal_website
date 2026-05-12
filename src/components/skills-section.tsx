import { Code2, Brain, Layers, Database, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillGroup {
  label: string;
  icon: LucideIcon;
  items: string[];
}

const GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "C++", "C#", "Java", "SQL", "Bash"],
  },
  {
    label: "AI / ML",
    icon: Brain,
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "MCP",
      "Pandas",
      "NumPy",
      "Pydantic",
    ],
  },
  {
    label: "Frameworks",
    icon: Layers,
    items: ["FastAPI", "Flask", "NestJS", "Next.js", "Node.js", ".NET", "React"],
  },
  {
    label: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "Neo4j", "FAISS"],
  },
  {
    label: "Cloud / DevOps",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "AWS", "Linux", "Git", "GitLab CI"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
        <SectionHeading label="skills" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {GROUPS.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.label}
                className="relative p-5 md:p-6 transition-colors border hover:border-muted"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                }}
              >
                <div
                  className="flex items-center gap-3 mb-4 pb-3 border-b"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent) 14%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[14px] tracking-[-0.005em] text-foreground font-medium">
                    {g.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ label }: { label: string }) {
  return (
    <div
      className="flex items-baseline gap-3 pb-3 border-b mb-6"
      style={{ borderColor: "var(--line)" }}
    >
      <span
        className="inline-block h-[1px] w-6"
        style={{ background: "var(--accent)" }}
      />
      <h2 className="text-[15px] text-foreground">{label}</h2>
      <span className="flex-1 rule" />
    </div>
  );
}
