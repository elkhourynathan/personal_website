export interface Experience {
  date: string;
  title: string;
  company: string;
  technologies?: string;
  bulletPoints?: string[];
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2026 - Present",
    title: "AI Engineer",
    company: "J-Squared Technologies - FALC AI Team",
    technologies: "Python, LangGraph, FastAPI, Next.js, Postgres",
    bulletPoints: [
      "Built and shipped an internal agentic platform used across teams to run complex multi-agent workflows, with typed agent contracts, per-agent MCP scope enforcement, budget + access guardrails, and a two-tier kill switch",
      "Eliminated data loss on mid-run failures by designing durable workflow orchestration with crash-safe checkpointing and human-in-the-loop interrupts, so runs resume exactly where they left off after hub restarts",
      "Cut candidate screening from days to minutes and saved recruiters hours per role with a production AI system that has ranked 2000+ resumes via a novel two-track engine combining LLM keyword confidence scoring with qualitative evaluation"
    ],
  },
  {
    date: "May 2025 - August 2025",
    title: "Software Engineer Intern",
    company: "Trend AI - Reports Team",
    technologies: "Python, FastAPI, LangGraph, MCP",
    bulletPoints: [
      "Led development of a multi-agent LLM compliance system converting natural language queries into on-demand visual reports for enterprise customers, cutting delivery time from weeks to under 30s",
      "Autonomously resolved 90% of user queries by orchestrating a LangGraph workflow spanning NLP, MCP-based data retrieval across 4 servers and 60 APIs, and LLM-driven visualization with auto-generated PDF output",
      "Ingested raw JSON into an in-memory relational database with Pandas and SQL, enabling an LLM-SQL agent to fetch visualization data in under 4s and reduce context windows by 80%"
    ],
  },
  {
    date: "May 2024 - May 2025",
    title: "Machine Learning Engineer Intern",
    company: "J-Squared Technologies - FALC AI Team",
    technologies: "Python, PyTorch, TypeScript, Next.js, NestJS",
    bulletPoints: [
      "Secured $100k+ in contracts through live conference demos of a CNN-LSTM rockfall classification system achieving 92% accuracy under varying environmental conditions, built end-to-end from ETL pipeline to deployed model",
      "Boosted model accuracy 25% and cut false positives 30% by building a Python synthetic data generation framework that expanded training data variety for the computer vision team"
    ],
  },
  {
    date: "Sept 2023 - Dec 2023",
    title: "Software Engineer Intern",
    company: "Apption Software - Datahunter AI Team",
    technologies: "C#, Python, Blazor",
    bulletPoints: [
      "Architected the Datahunter Query Language using a command-pattern backend integrated into the Blazor frontend, accelerating user query resolution time by 200%",
      "Boosted enterprise document processing throughput 5x by implementing NLP-driven keyword extraction with TF-IDF and word co-occurrence analysis"
    ],
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Software Engineer Intern",
    company: "Starvoy Technologies - Hardware Team",
    technologies: "Python, C++, TypeScript",
    bulletPoints: [
      "Achieved 98% accuracy and cut manual QA time 30% by developing an SVM-based anomaly detection system with k-fold cross-validation for optical transceiver testing",
      "Saved 15 engineering hours/week by automating optical transceiver report generation with LLM pipelines, replacing a manual reporting workflow"
    ],
  },
];
