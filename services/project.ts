/* eslint-disable @typescript-eslint/no-unused-vars */
import { supabase } from "@/lib/supabase";
import { Project } from "@/types"; // Nanti kita buat types-nya

export const ProjectService = {
  // Mengambil project yang di-highlight (Featured)
  getFeaturedProjects: async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured", true)
      .order("created_at", { ascending: false })
      .limit(4);

    if (error) {
      console.error("Error fetching featured projects:", error);
      return [];
    }
    return data;
  },

  // Mengambil semua project untuk halaman /projects
  getAllProjects: async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching all projects:", error);
      return [];
    }
    return data;
  },
};