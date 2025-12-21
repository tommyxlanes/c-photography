import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import the variable version of Bodoni Moda, not the small caps version
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Use specific weights or a range
  display: "swap",
});

// Use the variable version of Playfair Display
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Weights should match what is available in the variable font
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chroma Pix | Capturing Timeless Love Stories",
  description:
    "Explore a curated portfolio of elegant wedding photography—romantic portraits, candid moments, and emotional celebrations preserved with artistry and style.",
  keywords: [
    "wedding photography",
    "wedding photographer",
    "wedding portfolio",
    "engagement photography",
    "bridal portraits",
    "romantic photography",
    "timeless wedding photos",
  ],
  openGraph: {
    title: "Chroma Pix",
    description:
      "A curated collection of romantic, elegant, and timeless wedding photography.",
    url: "https://yourwebsite.com",
    siteName: "Your Photography Studio",
    images: [
      {
        url: "/images/icon.png",
        width: 512,
        height: 512,
        alt: "Chroma Pix",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  metadataBase: new URL("https://yourwebsite.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${bodoni.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
