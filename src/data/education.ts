export interface Education {
  year: string;
  institution: string;
  degree: string;
  gpa?: string;
  stream?: string;
  relevantCourses?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2022—2026",
    institution: "Carleton University",
    degree: "Honours BCS. of Computer Science; Math Minor",
    gpa: "3.97/4.0",
    stream: "AI & ML Stream",
    relevantCourses: "Artificial Intelligence, Machine Learning, Neural Networks, Database Management, Data Structures and Algorithms, Algorithm Analysis and Design, Operating Systems, Statistics, Linear Algebra",
  },
];
