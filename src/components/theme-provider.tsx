"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Gunakan 'use client' dan pastikan tidak ada element <script> yang tidak sengaja
  // disisipkan oleh middleware atau library pihak ketiga di sini.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}