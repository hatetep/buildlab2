"use client";
import { useState } from "react";

const services = [
  {
    icon: "⚡",
    title: "Nowoczesny Web Development",
    desc: "Strony i aplikacje zbudowane na Next.js, React i Astro. Ładują się w 1–2 sekundy, działają bez zarzutu.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "📈",
    title: "SEO & Analityka",
    desc: "Audyty techniczne, optymalizacja Core Web Vitals, Schema.org i Google Analytics 4. Widoczność, która przekłada się na klientów.",
    tags: ["Core Web Vitals", "Schema.org", "GA4"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Projekty interfejsów w Figma — od design systemu po gotowy prototype. Estetyka i funkcjonalność w jednym.",
    tags: ["Figma", "Design System", "Prototype"],
  },
  {
    icon: "🤖",
    title: "Technologia Przyszłości",
    desc: "Integracje AI, chatboty, automatyzacje i API. Dodajemy inteligentne funkcje, które oszczędzają czas.",
    tags: ["AI", "API", "Automatyzacja"],
  },
];

const steps = [
  { num: "01", title: "Analiza & Strategia", desc: "Rozmawiamy o Twoich celach, badamy konkurencję i ustalamy zakres projektu." },
  { num: "02", title: "Design & Prototyp", desc: "Tworzymy projekt w Figma. Zatwierdzasz wygląd zanim napiszemy linijkę kodu." },
  { num: "03", title: "Rozwój & Kod", desc: "Implementujemy projekt. Czysty kod, testy, responsywność na każdym urządzeniu." },
  { num: "04", title: "Wdrożenie & Optymalizacja", desc: "Publikacja, szkolenie, SEO i monitoring. Nie zostawiamy Cię samego po starcie." },
];

const faqs = [
  { q: "Ile kosztuje strona internetowa?", a: "Cena zależy od zakresu projektu. Prosta strona wizytówkowa to koszt od 2 500 zł, sklep internetowy od 6 000 zł. Zawsze wyceniamy indywidualnie po krótkim wywiadzie — wycena jest bezpłatna." },
  { q: "Jak długo trwa realizacja projektu?", a: "Strona firmowa: 2–3 tygodnie. Sklep online lub rozbudowany portal: 4–8 tygodni. Terminy ustalamy na etapie umowy i ich dotrzymujemy." },
  { q: "Czy BuildLab zajmuje się hostingiem?", a: "Tak. Stawiamy strony na Cloudflare Pages — hosting jest bezpłatny w planie podstawowym, ultra-szybki i odporny na ruch. Możemy też skonfigurować serwer dedykowany lub VPS." },
  { q: "Czy mogę samodzielnie edytować treści?", a: "Tak. Integrujemy CMS (Sanity, Contentful lub własny panel) dopasowany do Twoich potrzeb. Edycja treści nie wymaga wiedzy technicznej." },
];

const projects = [
  { slug: "pismo-procesowe", title: "PismoProcesowe.pl", tag: "Prawo / Landing page", year: "2025" },
  { slug: "second-life-it", title: "SecondLifeIT.pl", tag: "Technologia / Strona firmowa", year: "2025" },
  { slug: "durres-pl", title: "Durres.pl", tag: "Nieruchomości / Strona firmowa", year: "2025" },
  { slug: "inard-eu", title: "Inard.eu", tag: "E-commerce / Biżuteria", year: "2024" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#040913]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl" aria-label="BuildLab — strona główna">
          <span className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black shadow-[0_0_20px_rgba(59,130,246,0.4)]">BL</span>
          <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map(l => (
            <li key={l}><a href={`/${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
          ))}
        </ul>
        <a href="/wycen-projekt" className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-colors">
          Wycena projektu
        </a>
        <button onClick={() => setOpen(o => !o)} className="md:hidden text-white p-2" aria-label={open ? "Zamknij menu" : "Otwórz menu"} aria-expanded={open}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#040913]/95 px-6 py-4 flex flex-col gap-4">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map(l => (
            <a key={l} href={`/${l.toLowerCase()}`} className="text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="/wycen-projekt" className="mt-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white text-center">Wycena projektu</a>
        </div>
      )}
    </nav>
  );
}

function HeroOrb() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)" }} />
      <div className="absolute inset-8 rounded-full border border-blue-500/20" />
      <div className="absolute inset-16 rounded-full border border-blue-400/10" />
      <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, rgba(59,130,246,0.1), transparent 40%, rgba(139,92,246,0.1), transparent 80%)" }} />
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative z-10">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroOrb />
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" aria-hidden="true" />
            Agencja cyfrowa z doświadczeniem
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Twoja Cyfrowa<br />
            <span className="grad-text">Przyszłość:</span><br />
            Strony, SEO i Kod.<br />
            <span className="text-slate-300">Szybciej. Lepiej.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Budujemy strony internetowe i aplikacje webowe, które działają błyskawicznie, wyglądają świetnie i generują wyniki. Od projektu do wdrożenia — w rękach jednego zespołu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/wycen-projekt" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-colors shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              Wycena projektu — bezpłatnie
            </a>
            <a href="/realizacje" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors">
              Nasze realizacje
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 items-center">
            {[["40+", "projektów"], ["96/100", "PSI score"], ["3 lata", "na rynku"], ["100%", "satysfakcji"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold grad-text-blue">{val}</p>
                <p className="text-sm text-slate-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Co robimy</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Nasze usługi —<br className="sm:hidden" /> <span className="grad-text">Technologia | Design</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Kompleksowa obsługa cyfrowa — od pierwszego szkicu do działającego produktu.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <article key={s.title} className="glass rounded-2xl p-6 group">
                <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                <h3 className="font-bold text-white mb-3 text-lg">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Jak pracujemy</p>
            <h2 className="text-4xl font-extrabold text-white">Proces</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent z-10" aria-hidden="true" />
                )}
                <div className="glass rounded-2xl p-6">
                  <div className="text-4xl font-black grad-text-blue mb-4" aria-hidden="true">{s.num}</div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizacje */}
      <section id="realizacje" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="text-4xl font-extrabold text-white">Realizacje</h2>
            </div>
            <a href="/realizacje" className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
              Wszystkie projekty
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => (
              <a key={p.slug} href={`/realizacje/${p.slug}`} className="glass rounded-2xl overflow-hidden group hover:no-underline">
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
                  <span className="text-slate-600 text-sm font-mono">{p.slug}.webp</span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">{p.tag}</p>
                    <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{p.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{p.year}</span>
                    <svg className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Pytania</p>
            <h2 className="text-4xl font-extrabold text-white">FAQ</h2>
          </div>
          <dl className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-blue-300 transition-colors"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {f.q}
                    <svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={openFaq !== i}
                  className="px-6 pb-5 text-slate-400 leading-relaxed text-sm"
                >
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Kontakt w sprawie<br /><span className="grad-text">nowego projektu</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">Powiedz nam o swoim projekcie — odezwiemy się w ciągu 24 godzin z bezpłatną wyceną.</p>
              <a href="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-10 py-4 text-base font-bold text-white transition-colors shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                Napisz do nas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 font-bold text-xl mb-3">
                <span className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black">BL</span>
                <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">Agencja cyfrowa tworząca strony, sklepy i aplikacje webowe. Szybko, solidnie, z wynikami.</p>
            </div>
            <nav aria-label="Linki stopki">
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {[
                  { title: "Usługi", links: ["Strony WWW", "Sklepy online", "SEO & Analityka", "UI/UX Design"] },
                  { title: "Firma", links: ["O nas", "Realizacje", "Cennik", "Blog"] },
                  { title: "Kontakt", links: ["Wycena projektu", "kontakt@buildlab.pl"] },
                ].map(col => (
                  <div key={col.title}>
                    <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
                    <ul className="space-y-2">
                      {col.links.map(l => (
                        <li key={l}><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 text-xs text-slate-600 flex flex-col sm:flex-row justify-between gap-2">
            <p>© 2025 BuildLab. Wszelkie prawa zastrzeżone.</p>
            <p>NIP: — | REGON: — | KRS: —</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
