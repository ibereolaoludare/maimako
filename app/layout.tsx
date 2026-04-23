import type { Metadata } from "next";
<<<<<<< Updated upstream
import {  Poppins, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import LoadingOverlay from "@/components/LoadingOverlay";

// Removed unknown `Geist` font (not available via next/font/google)

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Add specific weights as strings
  variable: '--font-poppins', // Useful for Tailwind or CSS variables
});

const spaceGrotesk = Space_Grotesk({
=======
import {Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const mono = Roboto_Mono({
  variable: "--font-mono",
>>>>>>> Stashed changes
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
<<<<<<< Updated upstream
  title: "Maimako2026 | NUASA Campaign",
  description: "Your Vote. Our Future. NUASA 2026.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-icon.png",
    other: [
      { rel: "manifest", url: "/favicon/manifest.json" },
      { rel: "msapplication-TileImage", url: "/favicon/ms-icon-144x144.png" }
    ]
  }
=======
  title: "Maimako",
  description: "Maimako for NUASA 2026",
>>>>>>> Stashed changes
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< Updated upstream
    <html lang="en" className={cn("font-sans")}>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-[var(--font-poppins)]`}>
        <LoadingOverlay />
        {children}
      </body>
=======
    <html
      lang="en"
      className={`${poppins.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
>>>>>>> Stashed changes
    </html>
  );
}