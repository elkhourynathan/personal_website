export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Retail Trading Journaling Platform",
    description:
      "Full-stack trading journal built for data-driven retail traders — customizable dashboards, granular trade tagging, and analytics aimed at helping traders refine their edge. Extended with agentic daily market debriefs and a personalized AI coach that analyzes user trade history to surface behavioral patterns and actionable feedback. Currently serving a small private user base.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "LangGraph"],
  },
  {
    title: "Librarian — Personal Agentic Knowledge System",
    description:
      "Obsidian-style web client paired with a Librarian agent that reads, organizes, and surfaces notes on demand, with Speechify for text-to-speech playback.",
    technologies: ["LangGraph", "Next.js", "TypeScript", "Speechify"],
  },
  {
    title: "Machine Learning UFC Predictor",
    description:
      "Engineered features and trained an ensemble ML model (XGBoost + Logistic Regression) on historical fight data, deployed via ReactJS + Flask for real-time predictions at 86% accuracy",
    technologies: ["Pandas", "Scikit-learn", "SQL", "Flask", "ReactJS"],
    codeUrl: "https://github.com/elkhourynathan/fight_predictor",
  },
  {
    title: "Computer Vision Poker Game Theory Optimizer",
    description:
      "Built a YOLOv8 + ByteTrack card tracking pipeline streaming detections into Monte Carlo simulations to compute win odds and recommend optimal moves (fold / call / raise)",
    technologies: ["Python", "Ultralytics", "Supervision", "OpenCV"],
    codeUrl: "https://github.com/elkhourynathan/poker_game_theory_optimizer",
  },
  {
    title: "MRI Brain Tumor Detection",
    description:
      "Developed a CNN-based tumor detection system matching DenseNet’s 86% accuracy at 1/3 the computational cost.",
    technologies: ["Python", "Ultralytics", "Optuna", "Scikit-learn"],
    codeUrl: "https://github.com/elkhourynathan/tumor-detection",
  },
];
