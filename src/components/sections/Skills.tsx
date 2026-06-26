"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiMysql, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiPostman, SiFigma, SiEspressif
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "group-hover:text-orange-600" },
      { name: "CSS", icon: SiCss, color: "group-hover:text-blue-500" },
      { name: "JS", icon: SiJavascript, color: "group-hover:text-yellow-400" },
      { name: "TS", icon: SiTypescript, color: "group-hover:text-blue-600" },
      { name: "React", icon: SiReact, color: "group-hover:text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "group-hover:text-teal-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-green-500" },
      { name: "Express", icon: SiExpress, color: "group-hover:text-white" },
      { name: "Laravel", icon: SiLaravel, color: "group-hover:text-red-600" },
      { name: "PHP", icon: SiPhp, color: "group-hover:text-blue-400" },
    ],
  },
  {
    title: "Database & Services",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "group-hover:text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-blue-700" },
      { name: "Supabase", icon: SiSupabase, color: "group-hover:text-emerald-400" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "group-hover:text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "group-hover:text-white" },
      { name: "Postman", icon: SiPostman, color: "group-hover:text-orange-600" },
      { name: "Figma", icon: SiFigma, color: "group-hover:text-pink-500" },
      { name: "IoT", icon: SiEspressif, color: "group-hover:text-red-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tech Stack</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="bg-card/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.15 }}
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                      title={skill.name}
                    >
                      <div className="p-2 bg-secondary/50 rounded-lg group-hover:bg-secondary transition-colors duration-300">
                        {/* Menambahkan class warna dinamis di sini */}
                        <Icon className={`w-7 h-7 text-muted-foreground transition-colors duration-300 ${skill.color}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}