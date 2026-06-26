// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gilang Septia F | Full Stack Developer",
  description: "Portfolio of Gilang Septia, a Full Stack Developer.",
  metadataBase: new URL("https://gilangjeylz.my.id"),
  openGraph: {
    title: "Gilang Septia | Portfolio",
    description: "Full Stack Web Developer Portfolio",
    url: "https://gilangjeylz.my.id",
    siteName: "Gilang Septia Portfolio",
    type: "website",
  },
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