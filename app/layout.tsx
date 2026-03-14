import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    title: "AppsPorto",
    description:
      "AppsPorto adalah Portfolio Nabil Arif",
    url: "https://appsporto.vercel.app",
    siteName: "AppsPorto",
    locale: "id_ID",         // 🆕 locale Indonesia
    type: "website",         // 🆕 type konten
    images: [
      {
        url: "/asset/image/logo/logo_apip_white.png",
        width: 1200,
        height: 630,
        alt: "AppsPorto — Portfolio Nabil Arif",
      },
    ],
  },

  // 🆕 Twitter / X Card — sebelumnya tidak ada sama sekali
  twitter: {
    card: "summary_large_image",
    title: "AppsPorto",
    description:
      "AppsPorto adalah Portfolio Nabil Arif.",
    images: ["/asset/image/logo/logo_apip_white.png"],
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
        {children}
      </body>
    </html>
  );
}
