export const site = {
  name: "Rohit Verma",
  shortName: "Rohit Verma",
  role: "BTech CSE '30 at YCCE Nagpur",
  location: "Nagpur, India",
  tagline: "I build web apps and learn by shipping.",
  bio: "First-year BTech CSE student at YCCE Nagpur. Currently exploring full-stack development with Next.js, TypeScript and Astro, learning in public, one project at a time.",
  email: "rohit.p.verma.1406@gmail.com",
  github: "https://github.com/iamrohitv",
  githubHandle: "iamrohitv",
  avatar: "https://avatars.githubusercontent.com/u/285469976?v=4",
  linkedin: "#",
  twitter: "#",
  youtube: "#",
  instagram: "#",
  resume: "#",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  liveLabel: string;
  badge?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Skarm",
    description:
      "Production-ready issue tracking platform for modern teams, featuring real-time Kanban boards, AI-powered triage, multi-team workspaces, cycles, and keyboard-first workflows.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    github: "https://github.com/iamrohitv/skarm",
    live: "https://skarm.vercel.app/",
    liveLabel: "skarm.vercel.app",
    badge: "Major Project",
    featured: true,
  },
  {
    title: "Hexlab",
    description:
      "Modern SaaS landing page built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion + Lenis. Hero, Features, Testimonials, Pricing, FAQ, CTA with buttery animations. Docker-ready.",
    tech: ["Next.js 15", "React 19", "Tailwind v4", "Framer Motion"],
    github: "https://github.com/iamrohitv/Hexlab",
    live: "https://hexlab-five.vercel.app",
    liveLabel: "hexlab-five.vercel.app",
    badge: "Landing Page",
  },
  {
    title: "Vetra",
    description:
      "AI-powered marketing automation platform for real-time analytics, audience insights, and dynamic campaign optimization.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/iamrohitv/Vetra",
    live: "https://vetra-pink.vercel.app",
    liveLabel: "vetra-pink.vercel.app",
  },
];

export const education = [
  {
    school: "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
    degree: "BTech, Computer Science and Engineering",
    period: "2026 - 2030",
    detail: "First-year undergraduate. Focus: DSA, web development, open source.",
    current: true,
  },
  {
    school: "St. Paul Jr. College",
    degree: "Class 12th (HSC)",
    period: "2024 - 2026",
    detail: "72.5%",
    current: false,
  },
  {
    school: "Carmel Academy",
    degree: "Class 10th",
    period: "2024",
    detail: "86.5%",
    current: false,
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Astro",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Vercel",
  "Docker",
  "Framer Motion",
  "Java",
];

export const stats = [
  { value: "3+", label: "projects shipped" },
  { value: "2026-30", label: "BTech CSE, YCCE" },
];
