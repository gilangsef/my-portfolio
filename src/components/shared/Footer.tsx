import Link from "next/link";
import { GitBranch, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            JeylzzzDev<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Membangun pengalaman web digital modern, cepat, dan scalable.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted">
            <GitBranch className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted">
            <Briefcase className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:email@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <div className="border-t border-border/40 mt-8 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Gilang Septia F. All rights reserved.</p>
      </div>
    </footer>
  );
}