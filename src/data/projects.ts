export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  category: string;
  github?: string;
  live?: string;
  featured: boolean;
  slug: string;
}

export const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Education",
  "Freelance",
];

export const projects: Project[] = [
  {
    title: "Termi",
    description:
      "A multilingual web application for expanding professional terminology with AI-powered content generation and interactive learning games.",
    longDescription:
      "Led development of a comprehensive terminology learning platform that helps users expand their professional vocabulary. Implemented features including a powerful search engine with detailed term explanations, AI-generated content for missing terms, and 4+ interactive learning games. The platform includes a ranking system and achievement rewards, all within an engaging and intuitive UI. Successfully piloted and deployed the application.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
    image: "/projects/termi.png",
    category: "Full Stack",
    github: "https://github.com/",
    live: "https://termi.majdassad.dev",
    featured: true,
    slug: "termi-platform",
  },
  {
    title: "Haus Design Culture Management System",
    description:
      "A comprehensive management software for tracking product pipelines, orders, transactions, and employee productivity.",
    longDescription:
      "Co-developed a robust management system for Haus Design Culture that streamlines business operations. The software handles product pipeline tracking, order management, transaction monitoring, and employee productivity assessment. Successfully deployed and actively used by the company to optimize their workflow and improve operational efficiency.",
    technologies: [
      "C#",
      "WPF",
      "Python",
      "SQLAlchemy",
      "FastAPI",
      "HTTP",
      "SQL",
    ],
    image: "/projects/haus-design-culture-management-app.png",
    category: "Frontend",
    github: "https://github.com/noxi-tech/haus-app",
    featured: true,
    slug: "haus-design-system",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with a focus on user experience.",
    longDescription:
      "Designed and developed a personal portfolio website to showcase my projects and skills. Implemented features including dark mode, responsive design, smooth animations, and an interactive project showcase. The site demonstrates proficiency in modern web development technologies and best practices.",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/portfolio.png",
    category: "Frontend",
    github: "https://github.com/MajdAssad22/majd-assad-website",
    live: "https://majdassad.dev",
    featured: false,
    slug: "portfolio-website",
  },
  {
    title: "Haus Design Culture Website",
    description: "A website for Haus Design Culture, a company that.",
    longDescription:
      "developed a custom WordPress website for a curtain manufacturing company to attract new customers. The site includes a modern design, service highlights, and an inquiry form to streamline lead generation. It’s optimized for performance, mobile responsiveness, and search engines — providing the company with a professional digital presence to support their sales and branding goals.",
    technologies: ["Wordpress", "Design"],
    image: "/projects/haus-design-culture-website.png",
    category: "Freelance",
    live: "https://hausdesignculture.com/en/",
    featured: false,
    slug: "haus-design-culture-website",
  },
  {
    title: "C&A Renovations Website",
    description: "A website.",
    longDescription:
      "Designed and developed a responsive WordPress website for a local renovation company to help boost their online presence and generate more customer leads. The site features a clean layout, service pages, contact forms, and project galleries — all optimized for SEO and mobile devices. My goal was to create a professional platform that clearly showcases the company’s expertise while making it easy for potential clients to get in touch.",
    technologies: ["Wordpress", "Design"],
    image: "/projects/ca-renovation.png",
    category: "Freelance",
    live: "https://ca-renovations.ca",
    featured: false,
    slug: "ca-renovations",
  },
];
