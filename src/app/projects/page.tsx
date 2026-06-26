import { supabase } from "@/lib/supabase";
import ProjectsClient from "./projects-client";

export const revalidate = 60;

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error("Error:", error);

  return <ProjectsClient initialProjects={projects || []} />;
}