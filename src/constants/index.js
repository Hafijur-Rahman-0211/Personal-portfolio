import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png"; 

export const HERO_CONTENT = `I am a dedicated frontend developer with a passion for creating engaging and user-friendly web interfaces. With 1 year of practical experience, I have developed proficiency in modern frontend technologies like React, Next.js, HTML, CSS, and JavaScript. My objective is to utilize my skills to develop visually appealing and high-performance applications that enhance user satisfaction and contribute to the overall success of projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1 year of self-taught experience, I have expertise in technologies such as React, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. My journey into web development began after a year of apprenticeship training in civil engineering, followed by comprehensive training in full stack development. However, I quickly discovered my true passion lies in frontend development.

Throughout my career, I have continuously strived to learn and adapt to new challenges, thriving in collaborative environments and enjoying the process of solving complex problems to deliver high-quality solutions. Outside of coding, I stay active and explore new technologies, maintaining a balanced and engaged approach to both my professional and personal life.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Present",
    role: "Full Stack Developer Trainee",
    company: "AlmaBetter",
    description: `Gained proficiency in full-stack web development, specializing in React.js for frontend and Node.js for backend. Developed robust, dynamic, and responsive web applications, utilizing Redux for efficient state management. Focused on creating secure, scalable applications with best practices in user authentication and data security. Contributed to various projects, demonstrating the ability to work collaboratively in a remote setting and effectively troubleshoot and optimize code for performance.`,
    technologies: ["HTML", " CSS", "Javascript", "React.js"],
  },
  {
    year: "Feb 2022 - Feb 2023",
    role: "Civil Site Engineer Trainee",
    company: "CCL",
    description: `Assisted in estimating project costs and timelines, ensuring accurate budgeting and efficient scheduling. Actively engaged in site engineering activities, providing critical on-ground support and technical expertise to facilitate smooth operations. Contributed significantly to project planning, construction, and drafting, ensuring detailed and precise documentation. Played a key role in the successful execution of projects by collaborating with team members to streamline processes, resolve challenges, and enhance overall project efficiency and quality.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Cryptocurrency Price Tracking App", 
    image: project1,
    github: "https://github.com/Hafijur0211/Cryptoplace",
    live: "https://cryptoplace-delta.vercel.app/",
    description:
      "A cryptocurrency price tracking app built using ReactJS and the CoinGecko API. The app provides real-time data on cryptocurrency prices, market cap, and historical price charts.",
    technologies: ["CoinGecko API", "React", "CSS"],
  },
  {
    title: "Resume-builder",
    image: project2,
    github: "https://github.com/Hafijur0211/resume-builder",
    live: "https://resume-builder002.netlify.app/",
    description:
      "Resume-builder is a web application where anyone can create resume with ease and choose from different available templates.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7903080849 ",
  email: "hafijur021998@gmail.com",
};
