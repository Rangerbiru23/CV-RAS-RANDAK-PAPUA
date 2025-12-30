import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV RAS RANDAK PAPUA - Konstruksi Gedung Pendidikan Profesional",
  description: "CV RAS RANDAK PAPUA adalah perusahaan konstruksi terkemuka yang berspesialisasi dalam pembangunan gedung pendidikan di Jayapura, Papua. Kami menyediakan layanan konstruksi profesional dengan kualitas terbaik.",
  keywords: ["CV RAS RANDAK PAPUA", "konstruksi", "gedung pendidikan", "konstruksi Jayapura", "bangunan sekolah", "konstruksi Papua", "building construction", "educational buildings"],
  authors: [{ name: "CV RAS RANDAK PAPUA" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "CV RAS RANDAK PAPUA - Konstruksi Gedung Pendidikan",
    description: "Perusahaan konstruksi terkemuka di Papua yang berspesialisasi dalam pembangunan gedung pendidikan berkualitas tinggi",
    url: "https://rasrandakpapua.com",
    siteName: "CV RAS RANDAK PAPUA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV RAS RANDAK PAPUA - Konstruksi Gedung Pendidikan",
    description: "Perusahaan konstruksi terkemuka di Papua yang berspesialisasi dalam pembangunan gedung pendidikan berkualitas tinggi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="0tnayv1301sefkt5moulki73734ags" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
