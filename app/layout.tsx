import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildLab — Twoja Cyfrowa Przyszłość",
  description: "Tworzymy strony internetowe, sklepy online i aplikacje webowe. Szybko, solidnie, z dbałością o wyniki SEO i wydajność.",
  metadataBase: new URL("https://buildlab2.pages.dev"),
  openGraph: { locale: "pl_PL", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${font.variable} h-full`}>
      <body className="min-h-full mesh-bg grid-lines antialiased" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
