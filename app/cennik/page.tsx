"use client";

import { useState } from "react";

function SubNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#040913]/90 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl">
          <span
            className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black"
            style={{ boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
          >
            BL
          </span>
          <span className="text-white">
            Build<span className="text-blue-400">Lab</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map((l) => (
            <li key={l}>
              <a
                href={`/${l.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/wycen-projekt"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all"
        >
          Wycena projektu
        </a>
      </div>
    </nav>
  );
}

const sitePackages = [
  {
    name: "Wizytówka",
    price: "od 1 599 zł",
    desc: "Do 5 podstron, projekt + kod, techniczne SEO",
    features: [
      "Do 5 podstron",
      "Indywidualny projekt graficzny",
      "Next.js lub WordPress",
      "Techniczne SEO",
      "CMS do edycji treści",
      "Hosting + SSL rok gratis",
      "3 miesiące gwarancji",
    ],
    cta: "Wyceń wizytówkę",
    highlight: false,
  },
  {
    name: "Strona firmowa",
    price: "od 3 999 zł",
    desc: "6–15 podstron, blog, formularz, CMS",
    features: [
      "6–15 podstron",
      "Blog z CMS",
      "Formularz kontaktowy",
      "Integracja z analityką",
      "Schema.org + sitemap",
      "Projekt Figma do wglądu",
      "Szkolenie z obsługi",
      "3 miesiące gwarancji",
    ],
    cta: "Wyceń stronę firmową",
    highlight: true,
  },
  {
    name: "Strona korporacyjna",
    price: "od 7 999 zł",
    desc: "Powyżej 15 podstron, integracje, dedykowany CMS",
    features: [
      "Powyżej 15 podstron",
      "Wielojęzyczność",
      "Dedykowany CMS (Sanity/Strapi)",
      "Integracje API",
      "Zaawansowane SEO",
      "Testy wydajnościowe",
      "Dokumentacja techniczna",
      "6 miesięcy gwarancji",
    ],
    cta: "Wyceń korporacyjną",
    highlight: false,
  },
  {
    name: "Landing page",
    price: "od 999 zł",
    desc: "Jedna strona pod kampanię reklamową",
    features: [
      "Jedna kampanijna strona",
      "Testy A/B nagłówków",
      "Piksele GA4, Meta, Google",
      "Mapy ciepła (Hotjar)",
      "Integracja CRM",
      "4 tygodnie iteracji",
    ],
    cta: "Wyceń landing",
    highlight: false,
  },
];

const ecommercePackages = [
  {
    name: "Sklep Start",
    price: "od 7 999 zł",
    desc: "Do 50 produktów, Shopify lub WooCommerce",
    features: [
      "Do 50 produktów",
      "Shopify lub WooCommerce",
      "Płatności: Stripe, Przelewy24, BLIK",
      "Logistyka: InPost, DHL",
      "Szkolenie z obsługi",
      "GA4 + Meta Pixel",
    ],
    cta: "Wyceń sklep Start",
    highlight: false,
  },
  {
    name: "Sklep Pro",
    price: "od 15 999 zł",
    desc: "Do 500 produktów, integracja ERP, marketplace",
    features: [
      "Do 500 produktów",
      "Integracja ERP (Subiekt, Comarch)",
      "BaseLinker — Allegro, eBay, Amazon",
      "Konfiguratory i warianty",
      "Automatyzacje e-mail",
      "Dedykowany projekt UX",
      "6 miesięcy gwarancji",
    ],
    cta: "Wyceń sklep Pro",
    highlight: true,
  },
];

const subscriptions = [
  {
    name: "Light",
    price: "199 zł / mies.",
    features: [
      "Aktualizacje raz w miesiącu",
      "1h zmian w treści / mies.",
      "Backup codziennie (30 dni)",
      "Monitoring 24/7",
      "Czas reakcji: 24h",
      "Kontakt: email",
    ],
    cta: "Wybierz Light",
    highlight: false,
  },
  {
    name: "Pro",
    price: "449 zł / mies.",
    features: [
      "Aktualizacje co tydzień",
      "2h zmian w treści / mies.",
      "Backup codziennie (30 dni)",
      "Monitoring 24/7 + SMS alerty",
      "Czas reakcji: 4h",
      "Kontakt: email + telefon",
    ],
    cta: "Wybierz Pro",
    highlight: true,
  },
  {
    name: "SEO Starter",
    price: "999 zł / mies.",
    features: [
      "Techniczne SEO",
      "2 artykuły / mies.",
      "Raport miesięczny",
      "Analiza słów kluczowych",
      "Monitorowanie pozycji",
    ],
    cta: "Zacznij SEO",
    highlight: false,
  },
  {
    name: "SEO Pro",
    price: "2 499 zł / mies.",
    features: [
      "Techniczne SEO + link building",
      "5 artykułów / mies.",
      "Raport + spotkanie co tydzień",
      "Pozyskiwanie linków",
      "Local SEO",
      "Meta Ads opcja",
    ],
    cta: "Zacznij SEO Pro",
    highlight: false,
  },
];

const cennikFaq = [
  {
    q: "Czy ceny są negocjowalne?",
    a: "Ceny startowe to minimalna wartość projektu — rzeczywisty budżet ustalamy po briefie i zależy od zakresu, liczby podstron, integracji i treści. Przy dużych projektach lub stałej współpracy stosujemy rabaty.",
  },
  {
    q: "Jak wygląda płatność?",
    a: "Standardowo: 50% zaliczki przed startem, 50% po publikacji. Przy projektach powyżej 5 000 zł możliwa płatność w trzech ratach: 40% start, 40% po projekcie graficznym, 20% po publikacji.",
  },
  {
    q: "Czy ceny zawierają VAT?",
    a: "Podane ceny są cenami netto. Do kwoty należy doliczyć VAT 23%. Wystawiamy faktury VAT.",
  },
  {
    q: "Co jeśli projekt rozrośnie się po podpisaniu umowy?",
    a: "Zmiany zakresu wyceniamy osobno i transparentnie — przed wykonaniem, nie po. Nie 'dokładamy' kosztów bez Twojej wiedzy i akceptacji.",
  },
  {
    q: "Czy abonament SEO lub opieki można anulować?",
    a: "Tak — wystarczy mail na 7 dni przed końcem okresu rozliczeniowego. Bez kar, bez minimalnego okresu.",
  },
  {
    q: "Czy mogę kupić tylko audyt bez dalszej współpracy?",
    a: "Tak — audyt to niezależna usługa od 399 zł. Jeśli po audycie zdecydujesz się na naprawę lub nową stronę, koszt audytu zaliczamy na poczet projektu.",
  },
];

export default function CennikPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#040913] text-white">
      <SubNavbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            Cennik
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Przejrzyste pakiety{" "}
            <span className="grad-text">i ceny</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto reveal">
            Wybierz pakiet pasujący do skali biznesu. Bez ukrytych kosztów — ceny podane z góry, zakres ustalany razem po briefie.
          </p>
        </div>
      </section>

      {/* Site packages */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Strony internetowe
          </p>
          <h2 className="text-3xl font-bold mb-12 reveal">Pakiety stron WWW</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sitePackages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`glass rounded-2xl p-6 flex flex-col reveal transition-all duration-300 ${
                  pkg.highlight ? "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : ""
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.highlight && (
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1 w-fit">
                    Najpopularniejszy
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</p>
                <p className="text-sm text-slate-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt"
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold text-center transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "border border-white/10 hover:border-blue-500/40 text-white"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce packages */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            E-commerce
          </p>
          <h2 className="text-3xl font-bold mb-12 reveal">Sklepy internetowe</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {ecommercePackages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`glass rounded-2xl p-8 flex flex-col reveal ${
                  pkg.highlight ? "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : ""
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.highlight && (
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1 w-fit">
                    Rekomendowany
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</p>
                <p className="text-sm text-slate-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt"
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold text-center transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "border border-white/10 hover:border-blue-500/40 text-white"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Abonamenty
          </p>
          <h2 className="text-3xl font-bold mb-4 reveal">Opieka i SEO</h2>
          <p className="text-slate-400 mb-12 reveal">
            Stała współpraca — bez umów długoterminowych, rezygnacja na 7 dni przed końcem okresu.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptions.map((plan, i) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-6 flex flex-col reveal ${
                  plan.highlight ? "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : ""
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.highlight && (
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1 w-fit">
                    Popularny
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-xl font-bold text-blue-400 mb-6">{plan.price}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt"
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold text-center transition-all duration-200 ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "border border-white/10 hover:border-blue-500/40 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            FAQ
          </p>
          <h2 className="text-3xl font-bold mb-12 reveal">Pytania o ceny</h2>
          <div className="space-y-3">
            {cennikFaq.map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl overflow-hidden reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`shrink-0 text-blue-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Nie wiesz który pakiet wybrać?
          </h2>
          <p className="text-slate-400 mb-8 reveal">
            Wypełnij krótki brief — wrócimy z indywidualną wyceną w jeden dzień roboczy.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 reveal"
          >
            Wyceń projekt bezpłatnie
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
