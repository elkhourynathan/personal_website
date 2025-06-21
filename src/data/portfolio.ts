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
    title: "Machine Learning UFC Predictor",
    description:
      "Engineered features and developed an ensemble ML model (XGBoost + Logistic Regression) on historical fight data, achieving 86% accuracy in winner prediction, deployed with a ReactJS frontend and Flask backend for real-time predictions.",
    technologies: ["Pandas", "Scikit-learn", "SQL", "Flask", "ReactJS"],
    projectUrl: "https://ufc-fight-pred-00326a93d210.herokuapp.com/",
    codeUrl: "https://github.com/elkhourynathan/fight_predictor",
  },
  {
    title: "Computer Vision Poker Game Theory Optimizer",
    description:
      "Built YOLOv8+ByteTrack card tracking pipeline that streams detections into Monte Carlo simulations to compute win odds and optimal next move (fold / call / raise).",
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
