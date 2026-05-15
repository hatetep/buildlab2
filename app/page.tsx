"use client";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: "⚡",
    title: "Nowoczesny Web Development",
    desc: "Strony i aplikacje zbudowane na Next.js, React i Astro. Ładują się w 1–2 sekundy, działają bez zarzutu.",
    tags: ["Next.js", "React", "TypeScript"],
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: "📈",
    title: "SEO & Analityka",
    desc: "Audyty techniczne, optymalizacja Core Web Vitals, Schema.org i Google Analytics 4. Widoczność, która przekłada się na klientów.",
    tags: ["Core Web Vitals", "Schema.org", "GA4"],
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Projekty interfejsów w Figma — od design systemu po gotowy prototype. Estetyka i funkcjonalność w jednym.",
    tags: ["Figma", "Design System", "Prototype"],
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: "🤖",
    title: "Technologia Przyszłości",
    desc: "Integracje AI, chatboty, automatyzacje i API. Dodajemy inteligentne funkcje, które oszczędzają czas.",
    tags: ["AI", "API", "Automatyzacja"],
    color: "from-pink-500/20 to-pink-600/5",
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
  { slug: "pismo-procesowe", title: "PismoProcesowe.pl", tag: "Prawo / Landing page", year: "2025", accent: "59,130,246" },
  { slug: "second-life-it", title: "SecondLifeIT.pl", tag: "Technologia / Strona firmowa", year: "2025", accent: "99,102,241" },
  { slug: "durres-pl", title: "Durres.pl", tag: "Nieruchomości / Strona firmowa", year: "2025", accent: "16,185,129" },
  { slug: "inard-eu", title: "Inard.eu", tag: "E-commerce / Biżuteria", year: "2024", accent: "245,158,11" },
];

const stats = [
  { val: 40, suffix: "+", label: "projektów" },
  { val: 96, suffix: "/100", label: "PSI score" },
  { val: 3, suffix: " lata", label: "na rynku" },
  { val: 100, suffix: "%", label: "satysfakcji" },
];

/* ─── Intersection Observer hook ─────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ─── Animated counter ───────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{value}{suffix}</div>;
}

/* ─── Floating particles ─────────────────────────────── */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 4.7) % 90}%`,
  top: `${10 + (i * 7.3) % 80}%`,
  size: 1.5 + (i % 3) * 1.5,
  delay: `${(i * 0.4) % 5}s`,
  duration: `${4 + (i % 3) * 2}s`,
  opacity: 0.15 + (i % 4) * 0.1,
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-drift ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Orb ────────────────────────────────────────────── */
function HeroOrb() {
  return (
    <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none orb-float" aria-hidden="true">
      {/* outer ring spinning */}
      <div className="absolute inset-0 rounded-full orb-spin" style={{ background: "conic-gradient(from 0deg, rgba(59,130,246,0.15), transparent 40%, rgba(139,92,246,0.12), transparent 80%)" }} />
      {/* glow core pulsing */}
      <div className="absolute inset-12 rounded-full orb-pulse" style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.18) 40%, transparent 70%)" }} />
      {/* ring 1 */}
      <div className="absolute inset-8 rounded-full border border-blue-500/20" />
      {/* ring 2 */}
      <div className="absolute inset-20 rounded-full border border-violet-400/15" />
      {/* ring 3 — counter-spin */}
      <div className="absolute inset-28 rounded-full border border-blue-300/10" style={{ animation: "orb-spin 14s linear infinite reverse" }} />
      {/* center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400/60" style={{ boxShadow: "0 0 30px 10px rgba(59,130,246,0.3)" }} />
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-[#040913]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "border-b border-transparent bg-transparent"}`}
      aria-label="Nawigacja główna"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl" aria-label="BuildLab — strona główna">
          <span className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">BL</span>
          <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-400" role="list">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map(l => (
            <li key={l}>
              <a href={`/${l.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <a href="/wycen-projekt" className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          Wycena projektu
        </a>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-white p-2"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/5 bg-[#040913]/95 px-6 py-4 flex flex-col gap-4">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map(l => (
            <a key={l} href={`/${l.toLowerCase()}`} className="text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="/wycen-projekt" className="mt-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white text-center">Wycena projektu</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Main page ──────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesRef = useReveal(0.1);
  const processRef = useReveal(0.1);
  const realizacjeRef = useReveal(0.1);
  const faqRef = useReveal(0.1);
  const ctaRef = useReveal(0.1);

  return (
    <div className="relative z-10">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Particles />
        <HeroOrb />

        {/* radial spotlight behind headline */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "20%", left: "-10%", width: "60%", height: "60%", background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 relative z-10">
          {/* badge */}
          <div className="hero-animate hero-animate-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8 badge-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" aria-hidden="true" />
              Agencja cyfrowa z doświadczeniem
            </p>
          </div>

          {/* headline */}
          <div className="hero-animate hero-animate-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Twoja Cyfrowa<br />
              <span className="grad-text">Przyszłość:</span><br />
              Strony, SEO i Kod.<br />
              <span className="text-slate-300">Szybciej. Lepiej.</span>
            </h1>
          </div>

          {/* subline */}
          <div className="hero-animate hero-animate-3">
            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
              Budujemy strony internetowe i aplikacje webowe, które działają błyskawicznie, wyglądają świetnie i generują wyniki. Od projektu do wdrożenia — w rękach jednego zespołu.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4">
            <a
              href="/wycen-projekt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 glow-btn"
            >
              Wycena projektu — bezpłatnie
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a
              href="/realizacje"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-200"
            >
              Nasze realizacje
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>

          {/* stats with animated counters */}
          <div className="hero-animate hero-animate-5 mt-16 flex flex-wrap gap-8 items-center">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold grad-text-blue">
                  <Counter target={s.val} suffix={s.suffix} />
                </p>
                <p className="text-sm text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-animate hero-animate-5" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent" style={{ animation: "float 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section id="uslugi" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div ref={servicesRef} className="reveal">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Co robimy</p>
              <h2 className="text-4xl font-extrabold text-white mb-4">Nasze usługi —<br className="sm:hidden" /> <span className="grad-text">Technologia | Design</span></h2>
              <p className="text-slate-400 max-w-xl mx-auto">Kompleksowa obsługa cyfrowa — od pierwszego szkicu do działającego produktu.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className="reveal glass rounded-2xl p-6 group relative overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* gradient accent top */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.color}`} aria-hidden="true" />
                  <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-bold text-white mb-3 text-lg">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300">{t}</span>
                    ))}
                  </div>
                  {/* shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(59,130,246,0.06) 50%, transparent 60%)", backgroundSize: "200% 100%", animation: "shimmer 2s ease-in-out infinite" }}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section id="proces" className="py-24 relative z-10">
        {/* decorative line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.08), transparent)" }} />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div ref={processRef} className="reveal">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Jak pracujemy</p>
              <h2 className="text-4xl font-extrabold text-white">Proces w <span className="grad-text">4 krokach</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.num} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px z-10" aria-hidden="true">
                      <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(59,130,246,0.4), rgba(99,102,241,0.1))" }} />
                    </div>
                  )}
                  <div className="glass rounded-2xl p-6 h-full hover:border-blue-500/30 transition-colors group">
                    <div className="text-5xl font-black grad-text-blue mb-4 group-hover:scale-110 transition-transform inline-block" aria-hidden="true">{s.num}</div>
                    <h3 className="font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Realizacje ────────────────────────────────── */}
      <section id="realizacje" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div ref={realizacjeRef} className="reveal">
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
              {projects.map((p, i) => (
                <a
                  key={p.slug}
                  href={`/realizacje/${p.slug}`}
                  className="reveal glass rounded-2xl overflow-hidden group hover:no-underline"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="aspect-[16/9] flex items-center justify-center relative overflow-hidden"
                    style={{ background: `radial-gradient(ellipse at 30% 50%, rgba(${p.accent},0.18) 0%, rgba(6,13,26,1) 70%)` }}
                  >
                    {/* animated grid pattern */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                      aria-hidden="true"
                    />
                    {/* glowing center dot */}
                    <div
                      className="w-16 h-16 rounded-full opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:scale-150"
                      style={{ background: `radial-gradient(circle, rgba(${p.accent},0.6) 0%, transparent 70%)` }}
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-3 right-3 text-slate-600 text-xs font-mono opacity-50">{p.slug}</span>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">{p.tag}</p>
                      <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500">{p.year}</span>
                      <svg className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6">
          <div ref={faqRef} className="reveal">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Pytania</p>
              <h2 className="text-4xl font-extrabold text-white">FAQ</h2>
            </div>
            <dl className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
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
                        className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
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
                    className="px-6 pb-5 text-slate-400 leading-relaxed text-sm border-t border-white/5"
                  >
                    <div className="pt-4">{f.a}</div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div ref={ctaRef} className="reveal">
            <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* animated background glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)", animation: "orb-pulse 5s ease-in-out infinite" }}
                aria-hidden="true"
              />
              {/* decorative dots */}
              <div className="absolute top-4 right-6 flex gap-1.5" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-blue-500/40" />
                <div className="w-2 h-2 rounded-full bg-violet-500/40" />
                <div className="w-2 h-2 rounded-full bg-pink-500/40" />
              </div>
              <div className="relative z-10">
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Zacznijmy razem</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Kontakt w sprawie<br /><span className="grad-text">nowego projektu</span>
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">Powiedz nam o swoim projekcie — odezwiemy się w ciągu 24 godzin z bezpłatną wyceną.</p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-10 py-4 text-base font-bold text-white transition-all duration-200 glow-btn"
                >
                  Napisz do nas
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
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
                    <ul className="space-y-2" role="list">
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
