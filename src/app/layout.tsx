import type React from "react";
import { AuthHydration } from "@/lib/auth-hydration";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
// Zustand stores no requieren providers

export const metadata: Metadata = {
  title: "Linkly - Acortador de Enlaces",
  description: "Acorta y gestiona tus enlaces de forma simple y elegante",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <AuthHydration />
        {children}
      </body>
    </html>
  );
}
