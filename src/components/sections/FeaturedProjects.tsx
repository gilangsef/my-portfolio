"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Import tipe data dari index.ts
import { type Project } from "@/types"; 

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1 
  });

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Fallback jika tidak ada data dari database
  if (!projects || projects.length === 0) {
    return (
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground">Belum ada proyek yang ditampilkan saat ini.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="container mx-auto px-4 py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Tombol Navigasi Slider */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 rounded-full z-10 bg-background/80 backdrop-blur" 
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 rounded-full z-10 bg-background/80 backdrop-blur" 
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Carousel Container */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <Card className="h-full group overflow-hidden bg-card/40 border-border hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    <Image
                      src={project.thumbnail || "/placeholder-project.webp"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack?.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
                      <Link href={project.github_url || "#"} target="_blank">
                        <GitBranch className="w-4 h-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 rounded-full">
                      <Link href={project.live_url || "#"} target="_blank">
                        <ArrowUpRight className="w-4 h-4 mr-2" /> Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tombol View All Projects */}
      <div className="mt-12 text-center">
        <Button asChild variant="ghost" className="hover:bg-primary/10">
          <Link href="/projects">View All Projects <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  );
}