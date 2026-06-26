"use client";

import * as React from "react";
import { ArrowUpRight, GitBranch, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Project } from "@/types";

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const [search, setSearch] = React.useState("");

  const filteredProjects = initialProjects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="flex flex-col mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-8">
          Eksplorasi seluruh karya dan eksperimen yang telah saya bangun.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari proyek berdasarkan nama..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center text-muted-foreground py-24 bg-card/20 rounded-2xl border border-border/50 border-dashed">
          {`Tidak ada proyek dengan nama "${search}"`}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-3 mb-4 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech_stack?.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0 flex gap-3 w-full">
                {project.github_url && (
                  <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
                    <Link href={project.github_url} target="_blank"><GitBranch className="w-3.5 h-3.5 mr-1.5" /> Code</Link>
                  </Button>
                )}
                {project.live_url && (
                  <Button asChild size="sm" className="flex-1 text-xs">
                    <Link href={project.live_url} target="_blank"><ArrowUpRight className="w-3.5 h-3.5 mr-1.5" /> Demo</Link>
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