export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  type?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "Carleton University — COMP 4900 (GenAI)",
    title:
      "Empirical Evaluation of LLM Pipeline Architectures and Output Formats for Automated Candidate Screening",
    authors: "Nathan El-Khoury",
    paperUrl: "/personal_website/llm_pipeline_screening_2026.pdf",
    type: "Course Project",
    tldr:
      "Controlled comparison of four LLM pipeline architectures (single-pass, multistage fusion, multi-agent debate, hybrid retrieval) for ranking 100 production resumes with GPT-4.1. Multistage fusion wins (F1 = 0.800, Spearman ρ = 0.896); multi-agent debate underperforms the single-pass baseline. Also first empirical evaluation of TOON vs. JSON for structured output — 73% token savings at a 0.067 F1 cost with 100% parse reliability.",
  },
];
