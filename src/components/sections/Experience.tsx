"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2026",
    title: "Internship - Unit IT",
    company: "Universitas Muhammadiyah Lamongan",
    description: "Mengembangkan SIM CLASS UMLA (sistem reservasi kelas & Zoom dengan QR Code), marketplace DapMotor, dan sistem Arsip Digital menggunakan Laravel dan Filament.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2025 - 2026",
    title: "AI & IoT Developer",
    company: "Personal & Campus Projects",
    description: "Membangun sistem Smart Garden berbasis ESP32 dan mengembangkan Barber-AI (deteksi bentuk wajah untuk rekomendasi gaya rambut menggunakan MediaPipe).",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "Present",
    title: "Computer Engineering Student",
    company: "Universitas Muhammadiyah Lamongan",
    description: "Fokus pada rekayasa perangkat lunak, sistem cerdas, dan arsitektur database.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience & Journey</h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-5.5 md:-left-6.5 top-1 bg-background border-2 border-primary rounded-full p-2 text-primary shadow-sm">
              {exp.icon}
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <span className="text-sm font-medium text-primary tracking-wider">{exp.year}</span>
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <span className="text-md text-muted-foreground font-medium">{exp.company}</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mt-3 bg-card/30 p-4 rounded-xl border border-border/50">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}