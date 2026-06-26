export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  github_url: string;
  live_url: string;
  tech_stack: string[];
  featured: boolean;
  created_at: string;
}