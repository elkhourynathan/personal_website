const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "languages",
    items: ["Python", "TypeScript", "C++", "C#", "Java", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    label: "ai · ml",
    items: [
      "LangGraph", "LangChain", "PyTorch", "TensorFlow", "Scikit-learn",
      "OpenAI API", "MCP", "Pydantic", "Pandas", "NumPy",
    ],
  },
  {
    label: "frameworks · infra",
    items: [
      "FastAPI", "Flask", "NestJS", "Next.js", "Node.js", ".NET",
      "PostgreSQL", "MongoDB", "FAISS", "Docker", "Kubernetes", "AWS", "Linux",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="stack" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
        <SectionHeading n="02" label="stack" />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-6">
          {GROUPS.map((g) => (
            <div key={g.label} className="col-span-12 md:col-span-4 data-row" style={{ borderTop: 0, padding: 0 }}>
              <div className="text-[12px] text-muted">{g.label}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ n, label }: { n: string; label: string }) {
  return (
    <div
      className="flex items-baseline gap-3 pb-3 border-b mb-6"
      style={{ borderColor: "var(--line)" }}
    >
      <span className="text-accent text-[12px]">§ {n}</span>
      <h2 className="text-[15px] text-foreground">{label}</h2>
      <span className="flex-1 rule" />
    </div>
  );
}
