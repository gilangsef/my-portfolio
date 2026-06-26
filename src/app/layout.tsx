// src/app/layout.tsx
import type { Metadata } from "next";
// Kita tidak perlu import font lagi jika sudah menggunakan preset Geist dari Shadcn
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gilang Septia | Full Stack Developer",
  description: "Portfolio of Gilang Septia, a Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning sangat penting untuk next-themes
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <Toaster />
  </ThemeProvider>
</body>
    </html>
  );
}