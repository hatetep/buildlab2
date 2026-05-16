export type ProjectMetric = { value: string; label: string };
export type ProjectFeature = { t: string; d: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  stack: string;
  shortDesc: string;
  url?: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; accent: string; description: string };
  challenge: string;
  approach: string;
  features: ProjectFeature[];
  results: ProjectMetric[];
  techStack: string[];
  timeline: string;
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "pisquare-pl",
    name: "Pi Square — portfolio malarki",
    category: "Portfolio artystyczne",
    year: "2026",
    stack: "Astro 6 · CSS · TypeScript",
    shortDesc: "Dwujęzyczne portfolio współczesnej malarki — galeria z AVIF/WebP, lightbox, trzy cykle twórcze, migracja z WordPress.",
    url: "https://pisquare.pages.dev",
    meta: {
      title: "Pi Square — Astro 6 portfolio malarki (case study)",
      description: "Case study pisquare.pages.dev — Astro 6 static site z AVIF picture elements, self-hosted fontem, lightboxem i pełnym bilingual EN/PL. PSI Mobile 95+, Desktop 99-100.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Portfolio dla",
      accent: "współczesnej malarki",
      description: "Pi Square tworzy malarstwo olejne i akrylowe w trzech cyklach twórczych. Strona miała przenieść siłę płótna do sieci — bez WordPressa, bez bloatu, z prawdziwą szybkością.",
    },
    challenge: "Malarka Pi Square miała istniejącą stronę na WordPress z ciężkimi JPEG-ami i wynikiem PSI Mobile poniżej 50. Galeria na 30+ obrazów ładowała się po 8 sekundach — w segmencie sztuki, gdzie pierwsze wrażenie wizualne decyduje o tym, czy kolekcjoner wróci. Dodatkowo: dwie wersje językowe (PL/EN) dla rynku polskiego i zagranicznego, lightbox do oglądania detalów obrazów w pełnej rozdzielczości, czytelna biografia artystki bez korporacyjnego tonu. Migracja z WordPressa bez straty URL-i.",
    approach: "Astro 6 z pełnym static outputem — zero runtime JS po stronie serwera, HTML serwowany bezpośrednio z Cloudflare Pages CDN. Strategia obrazów: AVIF primary + WebP fallback przez picture element, dwa srcset (1240px desktop + 640px mobile), media query blokuje PSI DPR-trap. Self-hosted Inter via @fontsource (brak round-tripu do Google Fonts). CSS inlineowany — 0 render-blocking requestów. Dwujęzyczność: EN w src/pages/, PL w src/pages/pl/ — manual mirror bez i18n pluginu.",
    features: [
      { t: "AVIF + WebP picture elements", d: "Każdy obraz jako picture z AVIF primary i WebP fallback. Dwa srcset: 1240px desktop + 640px mobile. Oszczędność 50-70% vs JPEG." },
      { t: "DPR-trap fix via source media", d: "source media='(max-width: 620px)' wymusza 640px na mobile niezależnie od DPR urządzenia. PSI nie wyświetla błędu 'oversized images'." },
      { t: "Self-hosted font, zero FOUT", d: "@fontsource/inter — pliki woff2 w public/assets/fonts/. Preload w head, font-display: swap. Brak round-tripu do Google." },
      { t: "CSS inlineowany w head", d: "Astro inlineStylesheets: 'always' — cały CSS wbudowany w HTML. 0 render-blocking stylesheet requestów, LCP widzi tekst natychmiast." },
      { t: "Lightbox vanilla JS", d: "30+ obrazów z możliwością oglądania w pełnej rozdzielczości (do 1920px). Klawiatura (Esc, strzałki), swipe mobile, focus trap, reduced-motion." },
      { t: "Bilingual EN/PL bez pluginu i18n", d: "EN w src/pages/, PL w src/pages/pl/ — ręczny mirror. Przewidywalne URL-e, pełna kontrola nad SEO per język, zero zależności od pluginu." },
      { t: "Migracja z WordPress", d: "Przeniesienie treści, obrazów i struktury z WP. Nowe AVIF generowane z oryginałów 1920px z lokalnego WP." },
      { t: "PSI Mobile 95+, Desktop 99-100", d: "All audit-doctor checks pass. Speed Index < 2s na Slow 4G dzięki inlined CSS, self-hosted font i Cloudflare Pages anycast." },
    ],
    results: [
      { value: "95+", label: "PSI Mobile (migracja z WP < 50)" },
      { value: "AVIF", label: "primary format — 60% lżejszy niż JPEG" },
      { value: "0", label: "render-blocking requestów" },
      { value: "EN + PL", label: "pełna dwujęzyczność bez i18n pluginu" },
    ],
    techStack: ["Astro 6.3", "TypeScript", "CSS3 (inlined)", "Cloudflare Pages", "AVIF + WebP picture", "@fontsource/inter", "Vanilla JS lightbox"],
    timeline: "niecałe 3 tygodnie",
    related: ["pismoprocesowe-pl", "inard-eu", "alinahus-art"],
  },

  {
    slug: "alinahus-art",
    name: "Alina Hus — portfolio malarki olejnej",
    category: "Portfolio artystyczne",
    year: "2026",
    stack: "Next.js 16 · Tailwind v4 · WebP",
    shortDesc:
      "Minimalistyczne portfolio malarki z Warszawy — galeria z lightboxem, trzy cykle twórcze, bio artystki i pełna optymalizacja PSI.",
    url: "https://alinahus.art",
    meta: {
      title: "Alina Hus — portfolio malarki olejnej (case study)",
      description:
        "Case study alinahus.art — statyczne portfolio artystyczne na Next.js 16 z PSI ≥ 91 mobile.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Portfolio dla",
      accent: "malarki olejnej",
      description: "Minimalistyczna przestrzeń, gdzie obrazy mówią same za siebie.",
    },
    challenge:
      "Portfolio miało oddać poetykę malarstwa: przestrzeń, spokój, skupienie na obrazie. Bez generycznych szablonów — tylko czyste, szybkie, artystyczne.",
    approach:
      "Next.js 16 z static exportem, Tailwind v4, yet-another-react-lightbox z białym motywem, obrazy WebP przetworzone przez Pillow (srcset 28KB mobile).",
    features: [
      {
        t: "Galeria z lightboxem + zoom",
        d: "yet-another-react-lightbox z Zoom + Captions. Biały motyw. Tytuł, rok, technika pod każdym obrazem.",
      },
      {
        t: "Responsywne obrazy WebP",
        d: "Hero z srcset 28 KB / 101 KB — mobile pobiera 3.5× mniej.",
      },
      {
        t: "Trzy cykle twórcze",
        d: "Pejzaże polskie / Tożsamość / Varia — każdy z własną podstroną.",
      },
      {
        t: "SEO full stack",
        d: "Canonical, sitemap.xml, robots.txt, Schema.org Person.",
      },
    ],
    results: [
      { value: "PSI 91", label: "mobile" },
      { value: "28 KB", label: "hero image na mobile" },
      { value: "CLS 0", label: "zero przesunięć layoutu" },
      { value: "TBT 30ms", label: "Total Blocking Time" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "yet-another-react-lightbox",
      "Cloudflare Pages",
    ],
    timeline: "ok. tydzień",
    related: ["secondlifeit-pl", "buildlab-pl", "inard-eu"],
  },
  {
    slug: "pismoprocesowe-pl",
    name: "PismoProcesowe — serwis pism prawnych",
    category: "Strony korporacyjne",
    year: "2026",
    stack: "React · Vite · CSS",
    shortDesc:
      "Serwis przygotowania pism procesowych — 4 typy usług, blog prawny z 9 artykułami, formularz z załącznikami.",
    url: "https://pismoprocesowe.pl",
    meta: {
      title: "PismoProcesowe — React SPA dla serwisu pism prawnych",
      description:
        "React + Vite SPA z dynamicznym routingiem, ciemnym motywem, formularzem z uploadem, Web3Forms.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Serwis pism",
      accent: "procesowych",
      description:
        "Platforma dla osób szukających pomocy w przygotowaniu pism sądowych — bez kancelarii.",
    },
    challenge:
      "Rynek prawny w Polsce jest konserwatywny wizualnie. Wyzwanie: zbudować serwis profesjonalny, ale przystępny dla klienta bez wiedzy prawnej.",
    approach:
      "React + Vite, React Router v6, CSS custom properties — ciemny motyw slate-900 + złoty akcent. Formularz z upload pliku, blog z filtrem kategorii.",
    features: [
      {
        t: "8 tras React Router v6",
        d: "SPA z dynamicznym routingiem: /oferta/:slug, /blog/:slug.",
      },
      {
        t: "Formularz z przesyłaniem pliku",
        d: "Web3Forms + input type=file + walidacja po polsku + RODO checkbox.",
      },
      {
        t: "Blog z filtrem kategorii",
        d: "9 artykułów prawnych z filtrem po 8 kategoriach.",
      },
      {
        t: "Production build < 100 KB gzip",
        d: "308 KB raw, 95 KB gzip — Vite tree-shaking.",
      },
    ],
    results: [
      { value: "8", label: "tras React Router + dynamiczne podstrony" },
      { value: "9", label: "artykułów blogowych" },
      { value: "95 KB", label: "gzip — pełna SPA" },
      { value: "Web3Forms", label: "formularz z uploadem" },
    ],
    techStack: [
      "React 18",
      "Vite 5",
      "React Router v6",
      "CSS3",
      "Web3Forms",
      "Cloudflare Pages",
    ],
    timeline: "2 tygodnie",
    related: ["durres-pl", "secondlifeit-pl", "buildlab-pl"],
  },
  {
    slug: "durres-pl",
    name: "Durres.pl — apartament w Albanii",
    category: "Strony korporacyjne",
    year: "2026",
    stack: "HTML · GSAP · Swiper",
    shortDesc:
      "Wielostronicowa wizytówka apartamentu wakacyjnego — blog, galeria, formularz Web3Forms.",
    url: "https://durres.pl",
    meta: {
      title: "Durres.pl — strona apartamentu wakacyjnego",
      description:
        "Vanilla HTML/CSS/JS z GSAP i Swiperem, blog SEO, formularz Web3Forms, schema.org LodgingBusiness.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Strona prelaunch dla",
      accent: "apartamentu w Durrësie",
      description:
        "Wielostronicowa wizytówka nieruchomości jeszcze w budowie. Cel: zbudować obecność w Google przed otwarciem.",
    },
    challenge:
      "Klient buduje apartament w Albanii. Strona musiała budować obecność w sieci przed otwarciem, zbierać kontakty i dostarczać treści SEO.",
    approach:
      "Vanilla HTML/CSS/JS, GSAP scroll reveal, Swiper hero slider, blog 5 artykułów, Web3Forms kontakt, schema.org LodgingBusiness.",
    features: [
      {
        t: "Hero slider z 4 slajdami",
        d: "Swiper z fade'em i autoplay. Każdy slajd osobny CTA.",
      },
      {
        t: "Blog SEO po polsku",
        d: "5 długich artykułów (~700 słów) z schema.org Article.",
      },
      {
        t: "Formularz Web3Forms",
        d: "Bez backendu — honeypot + RODO checkbox + walidacja.",
      },
      {
        t: "Schema.org LodgingBusiness",
        d: "Pełne oznaczenie nieruchomości — Google rozumie typ obiektu.",
      },
    ],
    results: [
      { value: "6", label: "podstron + 5 artykułów" },
      { value: "100%", label: "vanilla — 0 frameworków JS" },
      { value: "Web3Forms", label: "kontakt bez serwera" },
      { value: "schema.org", label: "LodgingBusiness + Article" },
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "Vanilla JS",
      "GSAP 3",
      "Swiper.js",
      "Web3Forms",
      "Cloudflare Pages",
    ],
    timeline: "ok. 2 tygodnie",
    related: ["secondlifeit-pl", "inard-eu", "buildlab-pl"],
  },
  {
    slug: "secondlifeit-pl",
    name: "Second Life IT — outsourcing IT dla firm",
    category: "Strony korporacyjne",
    year: "2026",
    stack: "Next.js 14 · Tailwind · GSAP",
    shortDesc:
      "Strona dla firmy outsourcingowej IT z kalkulatorem pakietu, formularzem audytu i blogiem eksperckim.",
    url: "https://secondlifeit.pl",
    meta: {
      title: "Second Life IT — outsourcing IT dla SMB",
      description:
        "Next.js 14, PSI ≥ 97 mobile, kalkulator IT, formularz audytu, blog ekspercki, schema.org Organization.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Strona dla firmy",
      accent: "outsourcingu IT",
      description:
        "Stabilne IT w abonamencie dla SMB — strona, która sama jest dowodem kompetencji technicznych.",
    },
    challenge:
      "Klient chciał strony tłumaczącej ofertę abonamentową, pokazującej konkretny czas reakcji i będącej dowodem na kompetencje techniczne.",
    approach:
      "Next.js 14 static export, GSAP dynamic import, kalkulator pakietu IT, formularz audytu Web3Forms, PSI ≥ 97 mobile.",
    features: [
      {
        t: "Kalkulator pakietu IT",
        d: "Suwak liczby stanowisk × godziny reakcji × pakiet → szacunkowy koszt.",
      },
      {
        t: "PSI mobile ≥ 97",
        d: "Font preload, polyfill stripping, inline CSS, GSAP dynamic import.",
      },
      {
        t: "Blog ekspercki B2B",
        d: "Artykuły o NIS2, backup M365 — long-tail SEO dla outsourcingu IT.",
      },
      {
        t: "WCAG AA + skip-links",
        d: "Kontrasty 4.5:1+, focus-visible, hierarchia H1-H4.",
      },
    ],
    results: [
      { value: "≥ 97", label: "PSI mobile" },
      { value: "< 2h", label: "deklarowany czas reakcji" },
      { value: "0 ms", label: "zimnej kolejki — CF Worker" },
      { value: "WCAG AA", label: "pełna zgodność" },
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "GSAP 3",
      "Web3Forms",
      "Cloudflare Workers",
    ],
    timeline: "niecałe 3 tygodnie",
    related: ["buildlab-pl", "durres-pl", "inard-eu"],
  },
  {
    slug: "inard-eu",
    name: "INARD — luxury hand-woven bags",
    category: "E-commerce",
    year: "2026",
    stack: "Vanilla HTML · CSS · JS",
    shortDesc:
      "Butikowy sklep e-commerce z hand-woven torebkami z naturalnych włókien — editorial design bez frameworków.",
    url: "https://inard.eu",
    meta: {
      title: "INARD — vanilla e-commerce dla luxury fashion",
      description:
        "Butikowy sklep online z hand-woven torebkami. Vanilla HTML/CSS/JS, editorial design, Cloudflare Pages.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Butikowy e-commerce dla",
      accent: "luxury hand-craft",
      description:
        "Marka INARD tka torebki z naturalnych włókien w warsztacie w Prizren. Sklep miał oddać charakter rzemiosła.",
    },
    challenge:
      "Standardowy template Shopify by tę markę zabił. E-commerce, który czyta się jak butikowy magazyn modowy — bez frameworków.",
    approach:
      "Vanilla HTML, CSS custom properties, JS. Snipcart checkout. Editorial typografia: serif heading + sans-serif body. Top bar z USP rotacją.",
    features: [
      {
        t: "Editorial design bez frameworków",
        d: "Serif heading + sans-serif body, paleta off-white/gold/espresso.",
      },
      {
        t: "Cart drawer + localStorage",
        d: "Koszyk wjeżdża z prawej, stan trzymany w localStorage.",
      },
      {
        t: "Snipcart checkout",
        d: "Vendor-locked tylko w koszyku — reszta vanilla. Stripe + Klarna.",
      },
      {
        t: "Schema.org Product",
        d: "Produkty z ceną i oceną w Google — klikalność +20% vs bez schema.",
      },
    ],
    results: [
      { value: "0", label: "frameworków JS — pure vanilla" },
      { value: "Cloudflare", label: "Pages + R2 dla obrazów" },
      { value: "Snipcart", label: "checkout bez backendu" },
      { value: "schema.org", label: "Product + AggregateRating" },
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "Vanilla JS",
      "Snipcart",
      "Cloudflare Pages",
      "Cloudflare R2",
    ],
    timeline: "2–3 tygodnie",
    related: ["durres-pl", "buildlab-pl", "secondlifeit-pl"],
  },
  {
    slug: "buildlab-pl",
    name: "BuildLab — strona własnej agencji",
    category: "Strony korporacyjne",
    year: "2026",
    stack: "Next.js 14 · Tailwind · GSAP",
    shortDesc:
      "Strona własnej agencji web — pełen lejek od strategii po wdrożenie, cennik widełkowy, kalkulator brief.",
    url: "https://buildlab.pl",
    meta: {
      title: "BuildLab — strona własnej agencji web",
      description:
        "Next.js 14 + Tailwind, cennik widełkowy, kalkulator briefu, blog ekspercki, 6 case studies.",
    },
    hero: {
      eyebrow: "Case study",
      title: "Strona dla",
      accent: "własnej agencji",
      description:
        "Strona BuildLab miała być dowodem na to, że potrafimy zbudować to, co sprzedajemy.",
    },
    challenge:
      "Agencje web w Polsce mówią wszystkie tym samym głosem. Strona BuildLab miała przeciąć: konkretne ceny widełkowo, konkretny proces, konkretne realizacje.",
    approach:
      "Next.js 14 + App Router + static export, cennik widełkowy, kalkulator briefu, 12 stron, 6 case studies, blog ekspercki.",
    features: [
      {
        t: "Cennik widełkowy + kalkulator",
        d: "Trzy pakiety z konkretnymi widełkami. Kalkulator briefu liczy szacunek przed kontaktem.",
      },
      {
        t: "12-stronicowa architektura",
        d: "Każdy aspekt oferty ma swoją podstronę — bez ukrywania informacji.",
      },
      {
        t: "Realizacje z filtrem i case study",
        d: "Filtr po kategorii, każdy projekt to pełna podstrona z problem/approach/results.",
      },
      {
        t: "PSI 96",
        d: "Max dla architektury Next.js + GSAP. GSAP dynamic import + reduced-motion.",
      },
    ],
    results: [
      { value: "12", label: "stron + 6 case studies + blog" },
      { value: "PSI 96", label: "max dla Next.js + GSAP" },
      { value: "3 → 1", label: "domeny aliasy → canonical" },
      { value: "Cennik", label: "widełkowy zamiast 'wyceniamy'" },
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "GSAP 3",
      "Cloudflare Pages",
      "Mailchimp",
    ],
    timeline: "3 tygodnie",
    related: ["secondlifeit-pl", "durres-pl", "inard-eu"],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const allProjectSlugs = () => projects.map((p) => p.slug);
