"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Completed Projects", value: 99, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Technologies Mastered", value: 10, suffix: "+" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="container mx-auto px-4 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Saya adalah mahasiswa Teknik Komputer di Universitas Muhammadiyah Lamongan yang memiliki passion kuat dalam pengembangan perangkat lunak modern. Saya menjembatani antara logika backend yang kompleks dengan antarmuka pengguna yang bersih dan interaktif.
            </p>
            <p>
              Selain pengembangan web Full Stack menggunakan Next.js dan Laravel, saya juga aktif mengeksplorasi ranah Internet of Things (IoT) dan integrasi Machine Learning/Computer Vision untuk menciptakan solusi cerdas yang aplikatif.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Universitas Muhammadiyah Lamongan</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Full Stack Development</h4>
                  <p className="text-sm text-muted-foreground">Laravel 12, Next.js, React</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">IoT & AI Enthusiast</h4>
                  <p className="text-sm text-muted-foreground">ESP32, Computer Vision</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Animated Stats */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/30 border-border text-center py-8 hover:bg-card/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}