import {
  Code,
  Server,
  Terminal,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export interface SkillCategory {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Angular",
      "Tailwind CSS",
      "Next.js",
      "HTML5",
      "CSS3",
      "TypeScript",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
    ],
    icon: Code,
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Python",
      "FastAPI",
    ],
    icon: Server,
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "Figma", "CI/CD", "Linux", "Nginx"],
    icon: Terminal,
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Agile Methodologies",
      "Technical Writing",
    ],
    icon: UserRound,
  },
];
