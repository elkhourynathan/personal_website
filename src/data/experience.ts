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
    date: "May 2025 - Present",
    title: "Machine Learning Engineer Intern",
    company: "Trend Micro - Reports Team",
    technologies: "Python, FastAPI, Flask, LangGraph",
    bulletPoints: [
      "Led development of a multi-agent LLM compliance system converting natural language queries into on-demand visual reports for 10,000+ customers, cutting delivery time from weeks to under 30s",
      "Built MCP servers and a multi-server router mapping intents to 4+ MCP servers and 60+ APIs with 95% accuracy",
      "Orchestrated a LangGraph flow spanning NLP, data retrieval, and visualization,  autonomously resolving 90% of user queries"
    ],
    companyUrl: undefined,
  },
  {
    date: "Sept 2024 - May 2025",
    title: "Machine Learning Engineer Intern",
    company: "J-Squared Technologies - FALC AI Team",
    technologies: "Python, PyTorch",
    bulletPoints: [
      "Built Python synthetic data framework, boosting data variety, raising model accuracy 25% and cutting false positives 30%",
      "Engineered a multi-object tracking evaluation pipeline with dynamic ReID, enabling thorough performance analysis",
      "Developed a CNN-LSTM rock fall classifier in Pytorch, achieving 92% accuracy under varying environmental conditions"
    ],
    companyUrl: undefined,
  },
  {
    date: "May 2024 - Sept 2024",
    title: "Software Engineer Intern",
    company: "J-Squared Technologies - FALC AI Team",
    technologies: "Python, Typescript, NextJS, NestJS",
    bulletPoints: [
      "Optimized computer vision pipelines for edge devices by introducing parallel computing, increasing FPS by 30%",
      "Developed a real-time video analytics interface in NestJS/Next.js with AWS S3 integration for ML-powered security systems",
      "Led development of a rockfall classification system and ETL pipeline, securing $500k+ in contracts from conferences"
    ],
    companyUrl: undefined,
  },
  {
    date: "Sept 2023 - Dec 2023",
    title: "Software Engineer Intern",
    company: "Apption Software - Datahunter AI Team",
    technologies: "C#, Python",
    bulletPoints: [
      "Created an NLP-driven keyword extraction using TF-IDF and word co-occurrence, boosting enterprise processing 5×",
      "Architected the Datahunter Query Language using a customized command-pattern backend and integrated it into the Blazor frontend, enabling complex user queries while accelerating query resolution time by 200%",
      "Overhauled the data catalog pipeline in Databricks, resulting in secure and automated data exports to Azure storage"
    ],
    companyUrl: undefined,
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Software Engineer Intern",
    company: "Starvoy Technologies - Hardware Team",
    technologies: "Python, C++, Typescript",
    bulletPoints: [
      "Developed an SVM-based anomaly detection system using k-fold cross-validation, achieving 98% accuracy and reducing manual testing time by 30% in optical transceiver quality assurance",
      "Engineered LLM pipelines to automate optical transceiver report generation, cutting manual effort by 15 hours/week",
      "Built a ReactJS/Flask dashboard for hardware control, real-time diagnostics, and automated reports to unify workflows"
    ],
    companyUrl: undefined,
  },
];
