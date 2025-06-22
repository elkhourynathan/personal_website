export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  skills?: string; // Skills section for sidebar
}

export const aboutMe: AboutMe = {
  name: "Nathan El-Khoury",
  title: "Honours BCS. of Computer Science; AI & ML Stream",
  institution: "Carleton University",
  description:
    `I'm a focused software engineer with a passion for AI, machine learning, and building technology that solves real-world problems. My skills have been shaped by impactful projects and internships across ML and full-stack development. Outside of tech, I'm interested in finance, reading, Muay Thai, and lifting weights.`,
  email: "elkhourynathan@gmail.com",
  imageUrl: "/personal_website/1696050411991.jpeg", // Uses the provided image in public/
  githubUsername: "elkhourynathan",
  linkedinUsername: "nathanelkhoury",
  // blogUrl: "", // Optionally add a blog URL
  cvUrl: "/personal_website/nelkhoury_resume_2025.pdf", // Link to uploaded CV
  // googleScholarUrl: "", // Optionally add Google Scholar if desired
  // twitterUsername: "", // Optionally add Twitter if desired
  // institutionUrl: "https://carleton.ca",
  // altName: "",
  // secretDescription: "I like dogs.",
  // website: "https://nathanelkhoury.vercel.app/", // Uncomment to show website
  skills: `<b>Languages:</b> Python, TypeScript, C++, C#, Java, JavaScript, SQL, Bash, HTML, CSS<br/>
<b>Technologies:</b> PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, ReactJS, NestJS, Next.js, Flask, .NET, Blazor, Node.js<br/>
<b>Databases/Tools:</b> MySQL, MongoDB, FAISS, Chroma, PostgreSQL, Git, AWS, Azure, Docker, Kubernetes, Linux, Unix`,
};
