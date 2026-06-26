import { ArrowUpRight, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

export const revalidate = 60; // Revalidate data setiap 60 detik (ISR)

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  github_url: string;
  live_url: string;
  tech_stack: string[];
}

export default async function ProjectsPage() {
  // Fetch SEMUA data dari Supabase
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching all projects:", error);
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="flex flex-col items-start mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Eksplorasi seluruh karya dan eksperimen yang telah saya bangun. Dari aplikasi berskala penuh hingga eksperimen kecil.
        </p>
      </div>

      {(!projects || projects.length === 0) ? (
        <div className="text-center text-muted-foreground py-24 bg-card/20 rounded-2xl border border-border/50 border-dashed">
          Proyek sedang dimuat atau belum tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project) => (
            <Card key={project.id} className="group flex flex-col overflow-hidden bg-card/40 border-border hover:border-primary/30 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.thumbnail || "/placeholder-project.jpg"} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <CardContent className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 mb-4 text-sm flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech_stack?.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack?.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech_stack.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="px-5 pb-5 pt-0 flex gap-3">
                {project.github_url && (
                  <Button asChild variant="outline" size="sm" className="w-full text-xs">
                    <Link href={project.github_url} target="_blank">
                      <GitBranch className="w-3.5 h-3.5 mr-1.5" /> Code
                    </Link>
                  </Button>
                )}
                {project.live_url && (
                  <Button asChild size="sm" className="w-full text-xs">
                    <Link href={project.live_url} target="_blank">
                      <ArrowUpRight className="w-3.5 h-3.5 mr-1.5" /> Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}