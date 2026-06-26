"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, GitBranch } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
// import Lanyard from "./Lanyard";

import dynamic from "next/dynamic";
const Lanyard = dynamic(() => import("./Lanyard"), { 
  ssr: false,
  loading: () => <div className="animate-pulse w-full h-full bg-muted/50 rounded-2xl flex items-center justify-center text-muted-foreground text-sm">Loading 3D...</div>
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-16 lg:pb-0">
      {/* Background Gradient Premium - Vercel / Linear SaaS Style */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/20 via-background to-background pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Mengubah gap dan menyamakan proporsi grid menjadi 6-6 (50:50) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* KOLOM KIRI: Teks Utama & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md text-sm text-muted-foreground font-medium">
              🚀 Available for Projects & Freelance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">Gilang Septia F</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Web Developer
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mahasiswa Teknik Komputer yang berfokus membangun aplikasi web modern berskala penuh. Berpengalaman dalam ekosistem Next.js, Laravel, hingga integrasi solusi cerdas IoT & AI.
            </p>
            
            {/* Group Button Responsive */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-blue-500/20 w-full sm:w-auto">
                <Link href="/projects">
                  Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full backdrop-blur-md w-full sm:w-auto">
                <a href="/cv.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Tautan Sosial */}
            <div className="flex items-center gap-4 pt-4 text-muted-foreground justify-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Connect:</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-foreground transition-colors p-1.5 bg-muted/40 rounded-full hover:bg-muted"
              >
                <GitBranch className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Tempat Render Lanyard 3D Interaktif (DIBESARKAN) */}
          <div className="lg:col-span-6 flex justify-center items-center relative w-full h-112.5 md:h-137.5 lg:h-150 order-1 lg:order-2">
            {/* Glow Aura Efek di belakang tumpukan 3D Canvas */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            {/* Render Komponen Lanyard dengan Kamera yang Diperdekat */}
            <Lanyard 
              position={[0, 0, 13]}     // Diubah dari [0, 0, 20] ke [0, 0, 13] agar kamera maju dan objek terlihat lebih besar
              gravity={[0, -40, 0]} 
              fov={24}                   // Field of View disesuaikan proporsional dengan jarak baru
              frontImage="/jelzz-anime.png" 
              backImage="/jelzz-anime.png"
              imageFit="cover"
              lanyardWidth={1}         // Sedikit mempertebal tali lanyard agar terlihat seimbang
            />
          </div>

        </div>
      </div>
    </section>
  );
}