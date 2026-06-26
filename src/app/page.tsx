import { supabase } from "@/lib/supabase";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects"; 
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal mengambil data proyek:", error);
  }

  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <About />
      <Skills />
      
      {/* Panggil secara normal */}
      <FeaturedProjects projects={projects || []} /> 
      
      <Experience />
      <section id="contact" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">Punya ide proyek atau tawaran kerja? Jangan ragu untuk menghubungi saya.</p>
        </div>
        <Contact />
      </section>
    </div>
  );
}