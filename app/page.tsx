import HeroSphere from "@/components/home/HeroSphere";
import Counter from "@/components/home/Counter";
import PortfolioMarquee from "@/components/home/PortfolioMarquee";
import FAQAccordion from "@/components/home/FAQAccordion";

const services = [
  { icon: "⚡", title: "Nowoczesny Web Development", desc: "Strony i aplikacje zbudowane na Next.js, React i Astro. Ładują się w 1–2 sekundy, działają bez zarzutu.", tags: ["Next.js", "React", "TypeScript"], color: "from-blue-500/20 to-blue-600/5" },
  { icon: "📈", title: "SEO & Analityka", desc: "Audyty techniczne, optymalizacja Core Web Vitals, Schema.org i GA4. Widoczność, która przekłada się na klientów.", tags: ["Core Web Vitals", "Schema.org", "GA4"], color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: "🎨", title: "UI/UX Design", desc: "Projekty interfejsów w Figma — od design systemu po gotowy prototype. Estetyka i funkcjonalność w jednym.", tags: ["Figma", "Design System", "Prototype"], color: "from-violet-500/20 to-violet-600/5" },
  { icon: "🤖", title: "Technologia Przyszłości", desc: "Integracje AI, chatboty, automatyzacje i API. Dodajemy inteligentne funkcje, które oszczędzają czas.", tags: ["AI", "API", "Automatyzacja"], color: "from-pink-500/20 to-pink-600/5" },
];

const steps = [
  { num: "01", title: "Analiza & Strategia", desc: "Rozmawiamy o Twoich celach, badamy konkurencję i ustalamy zakres projektu." },
  { num: "02", title: "Design & Prototyp", desc: "Tworzymy projekt w Figma. Zatwierdzasz wygląd zanim napiszemy linijkę kodu." },
  { num: "03", title: "Rozwój & Kod", desc: "Implementujemy projekt. Czysty kod, testy, responsywność na każdym urządzeniu." },
  { num: "04", title: "Wdrożenie & Optymalizacja", desc: "Publikacja, szkolenie, SEO i monitoring. Nie zostawiamy Cię samego po starcie." },
];

const stats = [
  { val: 120, suffix: "+",    label: "projektów" },
  { val: 96,  suffix: "/100", label: "PSI score" },
  { val: 12,  suffix: " lat", label: "na rynku" },
  { val: 100, suffix: "%",    label: "satysfakcji" },
];

const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${3 + (i * 3.9) % 94}%`,
  top:  `${8 + (i * 6.1) % 84}%`,
  size: 1 + (i % 3),
  delay: `${(i * 0.35) % 5}s`,
  dur:   `${5 + (i % 4) * 1.5}s`,
  op:    0.12 + (i % 5) * 0.06,
}));

export default function Home() {
  return (
    <div className="relative z-10">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {PARTICLES.map(p => (
            <div key={p.id} className="absolute rounded-full bg-blue-400"
              style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.op, animation: `particle-drift ${p.dur} ease-in-out ${p.delay} infinite` }} />
          ))}
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="hero-animate hero-animate-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8 badge-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" aria-hidden="true" />
                  Agencja WWW · Warszawa
                </span>
              </div>
              <div className="hero-animate hero-animate-2">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Strony i sklepy,<br />
                  które <span className="grad-text">szybciej</span><br />
                  <span className="text-slate-300">zdobywają klientów</span>
                </h1>
              </div>
              <div className="hero-animate hero-animate-3">
                <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                  Od strategii i projektu UX po kod, SEO, hosting i dalsze wsparcie. Jeden zespół odpowiada za stronę od briefu po rozwój.
                </p>
              </div>
              <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4">
                <a href="/wycen-projekt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 glow-btn">
                  Wycena projektu — bezpłatnie
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="/realizacje"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 px-8 py-4 text-base font-semibold text-white transition-all duration-200">
                  Nasze realizacje
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>
              <div className="hero-animate hero-animate-5 mt-12 flex flex-wrap gap-8 justify-center sm:justify-start">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold grad-text-blue"><Counter target={s.val} suffix={s.suffix} /></p>
                    <p className="text-sm text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex relative h-[480px] items-center justify-center hero-animate hero-animate-3">
              <HeroSphere />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), transparent)", animation: "float 2s ease-in-out infinite", margin: "0 auto" }} />
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════ */}
      <section id="uslugi" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Co robimy</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">Nasze usługi — <span className="grad-text">Technologia | Design</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Kompleksowa obsługa cyfrowa — od pierwszego szkicu do działającego produktu.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <article key={s.title} className="reveal glass rounded-2xl p-6 group relative overflow-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.color}`} aria-hidden="true" />
                <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                <h3 className="font-bold text-white mb-3 text-lg">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => <span key={t} className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300">{t}</span>)}
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: "linear-gradient(105deg,transparent 40%,rgba(59,130,246,0.05) 50%,transparent 60%)", backgroundSize: "200% 100%", animation: "shimmer 2s ease-in-out infinite" }} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════ */}
      <section id="proces" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Jak pracujemy</p>
            <h2 className="text-4xl font-extrabold text-white">Proces w <span className="grad-text">4 krokach</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px z-10" aria-hidden="true"
                    style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.4), rgba(99,102,241,0.08))" }} />
                )}
                <div className="glass rounded-2xl p-6 h-full group">
                  <div className="text-5xl font-black grad-text-blue mb-4 inline-block group-hover:scale-110 transition-transform" aria-hidden="true">{s.num}</div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REALIZACJE — marquee (client island) ══════════════ */}
      <PortfolioMarquee />

      {/* ══ FAQ (client island) ═══════════════════════════════ */}
      <FAQAccordion />

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="reveal glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 65%)", animation: "orb-pulse 5s ease-in-out infinite" }} />
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
              <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                Powiedz nam o swoim projekcie — odezwiemy się w ciągu 24 godzin z bezpłatną wyceną.
              </p>
              <a href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-10 py-4 text-base font-bold text-white transition-all duration-200 glow-btn">
                Napisz do nas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
