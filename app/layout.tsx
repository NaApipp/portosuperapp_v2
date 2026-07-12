import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "aos/dist/aos.css";
import AOSInit from "./components/AOSInit";
import ScrollAnimation from "./components/ScrollAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ✅ Basic
  title: {
    default: "AppsPorto",
    template: "%s | AppsPorto",
  },
  description:
    "AppsPorto adalah platform sistem manajemen parkir yang modern, efisien, dan mudah digunakan.",
  applicationName: "AppsPorto",
  authors: [{ name: "Nabil Arif", url: "https://appsporto.vercel.app" }],

  // ✅ Robots — izinkan semua crawler
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical URL — penting untuk SEO
  alternates: {
    canonical: "https://appsporto.vercel.app",
  },

  // ✅ Icons / Favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/asset/image/logo/logo_apip_white.png",
    apple: "/asset/image/logo/logo_apip_white.png",
  },

  // ✅ Metadata base
  metadataBase: new URL("https://appsporto.vercel.app"),

  // ✅ Open Graph — lengkap
  openGraph: {
    title: "AppsPorto", // Judul saat di-share
    description: "Portofolio Site By Nabil Arif", // Deskripsi saat di-share
    url: "https://appsporto.vercel.app", // URL utama
    siteName: "AppsPorto",
    images: [
      {
        url: "https://appsporto.vercel.app/asset/og-image/og-Image.png", // Gambar preview
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    locale: "id_ID", // Bahasa / region
    type: "website",
  },

  // Twitter Card (untuk share ke Twitter/X)
  twitter: {
    card: "summary_large_image", // tipe card
    title: "AppsPorto",
    description: "Portofolio Site By Nabil Arif",
    images: ["https://appsporto.vercel.app/asset/og-image/og-Image.png"],
    creator: "@n_apipppp",
  },

  // 🆕 Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-gray-50/50 dark:bg-[#08152F]">
          {/* <Sidebar /> */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Navbar hanya mobile & tablet */}
            {/* <Navbar /> */}

            <main className="flex-1 overflow-y-auto">
              <ScrollAnimation />
              <AOSInit />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
