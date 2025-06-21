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
    // projectUrl: "https://ufc-fight-pred-00326a93d210.herokuapp.com/",
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
  {
    title: "Health and Fitness Club Management System",
    description:
      "Designed a web application that facilitates interaction among various user categories including members, trainers, and administrators. This platform replicates essential functions needed to manage a fitness club, like personal logging, scheduling member and trainer sessions, organizing classes, and maintaining equipment.",
    technologies: ["Python", "PostgreSQL", "Flask"],
    codeUrl: "https://github.com/elkhourynathan/comp3005_project_v2",
  },
  {
    title: "Workout Tracker",
    description:
      "Created a web application that enables users to register or log in and monitor intricate workout routines, encompassing varied exercise plans, specific sets, repetitions, and weights. This application helps users precisely track their fitness journey and observe their progress over time.",
    technologies: ["MongoDB", "Expressjs", "ReactJS", "NodeJS"],
    codeUrl: "https://github.com/elkhourynathan/workouttracker_wrkpr",
  },
  {
    title: "Real Time Chat Application",
    description:
      "Developed a real time chat application which allows users to create an account and chat with each other.",
    technologies: ["Python", "PostgreSQL", "Flask", "Socket.io"],
    codeUrl: "https://github.com/elkhourynathan/chat_app",
  },
  {
    title: "Algorithmic Infared Image Detection",
    description:
      "Created a python application which takes in infared image frames and detects heat signatures.",
    technologies: ["Python", "Pygame"],
    codeUrl: "https://github.com/elkhourynathan/python-detectheat",
  },
];
