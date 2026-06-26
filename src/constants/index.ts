import { Code2, Database, LayoutTemplate, Server } from "lucide-react";

export const TIMELINE_DATA = [
  {
    year: "2024",
    title: "Computer Engineering Student",
    description: "Mendalami dasar-dasar teknik komputer, algoritma, dan arsitektur sistem di Universitas.",
  },
  {
    year: "2025",
    title: "Full Stack Developer Projects",
    description: "Mengembangkan aplikasi real-world seperti sistem reservasi, marketplace, dan sistem IoT/Smart Garden menggunakan Laravel, PHP Native, Tailwind, dan Next.js.",
  },
  {
    year: "2026",
    title: "AI & Computer Vision Projects",
    description: "Fokus pada integrasi Machine Learning dan Computer Vision (XGBoost, MediaPipe) ke dalam ekosistem web modern.",
  },
];

export const SKILLS = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Laravel", "PHP"],
  database: ["MySQL", "PostgreSQL", "Supabase"],
  tools: ["Git", "GitHub", "Postman", "Figma", "WSL/Ubuntu"],
};

export const SERVICES = [
  { title: "Web Development", icon: Code2, desc: "Membangun aplikasi web responsif dan cepat." },
  { title: "API Development", icon: Server, desc: "Mendesain RESTful API yang aman dan scalable." },
  { title: "UI Implementation", icon: LayoutTemplate, desc: "Menerjemahkan desain Figma ke kode pixel-perfect." },
  { title: "Database Design", icon: Database, desc: "Arsitektur database yang efisien dan terstruktur." },
];