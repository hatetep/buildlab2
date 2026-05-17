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
  description: "Tworzymy strony internetowe, sklepy online i aplikacje webowe dla firm. Szybko, solidnie, z dbałością o wyniki SEO i Core Web Vitals.",
  metadataBase: new URL("https://buildlab2.pages.dev"),
  alternates: { canonical: "https://buildlab2.pages.dev/" },
  openGraph: {
    locale: "pl_PL",
    type: "website",
    images: [{
      url: "https://buildlab2.pages.dev/realizacje/buildlab-pl.webp",
      width: 1280,
      height: 960,
      alt: "BuildLab — Agencja WWW Warszawa",
    }],
  },
};

const jsonLd = '{"@context":"https://schema.org","@type":"Organization","name":"BuildLab","url":"https://buildlab2.pages.dev","logo":"https://buildlab2.pages.dev/favicon.ico","description":"Polska agencja webowa — strony WWW, sklepy online, aplikacje webowe. Warszawa.","address":{"@type":"PostalAddress","addressLocality":"Warszawa","addressCountry":"PL"},"sameAs":["https://buildlab.pl"]}';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${font.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full mesh-bg grid-lines antialiased" style={{ fontFamily: "var(--font-jakarta), sans-serif" }} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold focus:outline-none">
          Przejdź do treści
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
