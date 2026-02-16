
import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: "Ashwani Singh",
  title: "Front-end Developer | React.js",
  email: "ashwanisingh638796@gmail.com",
  phone: "+91 6387964069",
  linkedin: "https://www.linkedin.com/in/ashwani-singh-b32a67267",
  summary: "Front-End Developer with a year of hands-on experience, currently pursuing an fulltime job at 1GEN. Skilled in building responsive, scalable, and user-friendly web applications using HTML, CSS, JavaScript, Tailwind CSS, and React.js. Strong understanding of component-based architecture, state management, API integration, and modern UI/UX patterns.",
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    category: "Programming",
    skills: ["C", "C++", "JavaScript"]
  },
  {
    category: "Tools & Concepts",
    skills: ["Git", "REST APIs", "Responsive Design", "Component Architecture", "State Management"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "1GEN",
    role: "AI Engineer specialised in Front-End Developer ",
    period: "Jan 2025 - Present",
    description: [
      "Contributed to the development of scalable front-end systems across multiple internal projects.",
      "Worked closely with the design, product, and backend teams to deliver responsive and optimized UI.",
      "Participated in agile team discussions, requirement analysis, and deployment cycles."
    ],
    projects: [
      {
        id: 1,
        title: "MDCS (Modular Digital Classroom System)",
        role: "Frontend Developer (Admin & User Modules)",
        description: [
          "Built and optimized Admin-side features including Assessment Management (Create, edit, publish assessments).",
          "Developed Batch Management, Module Management, and Dynamic Mapping systems.",
          "On User-side, developed responsive Assessment Quiz system and Pre-assessment questionnaire module.",
          "Improved UI consistency, optimized render performance, and ensured scalability."
        ],
        tags: ["React.js", "State Management", "Admin Dashboard", "UI Optimization"]
      },
      {
        id: 2,
        title: "1GEN Impact Cloud",
        role: "Frontend Developer (CMS & Pitch Creation)",
        description: [
          "Integrated UI components for content management workflows.",
          "Developed user-friendly and intuitive interfaces for Pitch creation modules.",
          "Built content templates and dynamic text fields.",
          "Enhanced UX by implementing clean layouts, modular components, and reusable UI elements."
        ],
        tags: ["CMS", "UX Design", "Modular Components", "Internal Tooling"]
      }
    ]
  }
];

export const EDUCATION = [
  {
    institution: "IK Gujral Punjab Technical University",
    degree: "B.Tech in Computer Science",
    period: "2021–2025",
    description: "CGPA: 7.98"
  },
  {
    institution: "BNS English School (CBSE)",
    degree: "Class XII",
    period: "2018–2020",
    description: "Percentage: 81.6%"
  }
];

export const INTERPERSONAL_SKILLS = [
  "Time Management", 
  "Adaptability",
  "Critical Thinking",
  "Collaborative Problem-Solving",
];
