"use client";
import { useState } from "react";

const faqs = [
  { q: "Ile trwa wykonanie strony WWW?", a: "Strona wizytówka (do 5 podstron) — 3–7 dni samej pracy, 1–2 tygodnie z akceptacjami. Większa strona firmowa (8–15 podstron, blog, integracje) — 2–4 tygodnie. Sklep internetowy — 1–2 tygodnie pracy, 3–4 tygodnie z testami. Landing page — 1–5 dni. Dokładny termin podajemy po briefie." },
  { q: "Czy mogę sam edytować treści po publikacji?", a: "Tak. Każda strona ma CMS — przy WordPress to klasyczny edytor, przy Next.js używamy Sanity lub Strapi. Drobne zmiany (literówka, zamiana zdjęcia, dodanie podstrony) robisz sam w 30 sekund. Po publikacji organizujemy szkolenie i przekazujemy dokumentację PDF." },
  { q: "Next.js czy WordPress — co wybrać dla mojej firmy?", a: "Next.js gdy zależy Ci na maksymalnej szybkości, nowoczesnym wyglądzie i dobrym SEO bez kompromisów. WordPress gdy chcesz móc swobodnie dodawać dziesiątki podstron, masz redaktorów, którzy nie znają HTML, albo planujesz blog z bogatą strukturą kategorii. Decydujemy razem podczas briefu." },
  { q: "Czy strona będzie działać dobrze na telefonie?", a: "Tak — projektujemy z myślą o mobile od pierwszego ekranu. Większość ruchu (60–80%) pochodzi z telefonów, więc tam zaczynamy. Każdy ekran sprawdzamy najpierw na mobile, dopiero potem na desktopie. Optymalizujemy Core Web Vitals (LCP, INP, CLS) na realnych urządzeniach." },
  { q: "Co się dzieje po publikacji?", a: "3 miesiące gwarancji — naprawiamy bezpłatnie wszelkie błędy techniczne. Możesz też wejść w abonament utrzymania (od 199 zł/mies.): hosting, aktualizacje, kopie zapasowe, monitorowanie dostępności, drobne zmiany w treści. Albo abonament SEO (od 999 zł/mies.) — pozycjonowanie organiczne." },
  { q: "Czy zachowamy pozycje w Google przy modernizacji starej strony?", a: "Tak, jeśli to dobrze zaplanujemy. Zachowujemy stare adresy URL gdzie się da, a tam gdzie zmieniamy — robimy przekierowania 301. Strukturę treści (nagłówki H1/H2, meta tagi, słowa kluczowe) zostawiamy. Po publikacji monitorujemy Search Console przez 4 tygodnie. Dobrze zaplanowana migracja często daje +5–15% ruchu." },
  { q: "Czy obsługujecie klientów spoza Warszawy?", a: "Tak, pracujemy zdalnie z całej Polski. 80% naszych projektów to klienci spoza Warszawy. Komunikacja przez email, Slack, telefon, wideokonferencje. Spotkanie offline w Warszawie opcjonalnie — bez kosztów dojazdu." },
];

export default function FAQAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal text-center mb-12">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Pytania</p>
          <h2 className="text-4xl font-extrabold text-white">FAQ</h2>
        </div>
        <dl className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="reveal glass rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              <dt>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-blue-300 transition-colors"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  {f.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              </dt>
              <dd id={`faq-answer-${i}`}
                hidden={openFaq !== i}
                className="px-6 pb-5 text-slate-400 leading-relaxed text-sm border-t border-white/5">
                <div className="pt-4">{f.a}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
