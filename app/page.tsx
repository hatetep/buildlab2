"use client";
import { useState, useEffect, useRef } from "react";

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

const faqs = [
  { q: "Ile kosztuje strona internetowa?", a: "Cena zależy od zakresu projektu. Prosta strona wizytówkowa to koszt od 2 500 zł, sklep internetowy od 6 000 zł. Zawsze wyceniamy indywidualnie po krótkim wywiadzie — wycena jest bezpłatna." },
  { q: "Jak długo trwa realizacja projektu?", a: "Strona firmowa: 2–3 tygodnie. Sklep online lub rozbudowany portal: 4–8 tygodni. Terminy ustalamy na etapie umowy i ich dotrzymujemy." },
  { q: "Czy BuildLab zajmuje się hostingiem?", a: "Tak. Stawiamy strony na Cloudflare Pages — ultra-szybki hosting, odporny na ruch, bezpłatny w planie podstawowym." },
  { q: "Czy mogę samodzielnie edytować treści?", a: "Tak. Integrujemy CMS (Sanity, Contentful lub własny panel). Edycja treści nie wymaga wiedzy technicznej." },
];

const projects = [
  { slug: "pismo-procesowe", title: "PismoProcesowe.pl", tag: "Prawo / Landing page", year: "2025", accent: "59,130,246" },
  { slug: "second-life-it", title: "SecondLifeIT.pl", tag: "Technologia / Strona firmowa", year: "2025", accent: "139,92,246" },
  { slug: "durres-pl", title: "Durres.pl", tag: "Nieruchomości / Strona firmowa", year: "2025", accent: "16,185,129" },
  { slug: "inard-eu", title: "Inard.eu", tag: "E-commerce / Biżuteria", year: "2024", accent: "245,158,11" },
  { slug: "buildlab-pl", title: "Buildlab.pl", tag: "Agencja / Strona firmowa", year: "2024", accent: "244,63,94" },
];

const stats = [
  { val: 40, suffix: "+", label: "projektów" },
  { val: 96, suffix: "/100", label: "PSI score" },
  { val: 3, suffix: " lata", label: "na rynku" },
  { val: 100, suffix: "%", label: "satysfakcji" },
];

/* ─── IntersectionObserver reveal hook ──────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800, t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <div ref={ref}>{value}{suffix}</div>;
}

/* ─── Hero: Canvas 3D rotating sphere network ────────────────────
   60fps requestAnimationFrame, Fibonacci sphere distribution,
   perspective projection, depth-sorted rendering, shadowBlur glow.
   Matches the Stitch "Ultra-Modern Digital Agency" node-network.
──────────────────────────────────────────────────────────────── */
function HeroSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const S = 480;
    canvas.width  = S * DPR;
    canvas.height = S * DPR;
    ctx.scale(DPR, DPR);
    const cx = S / 2, cy = S / 2, R = 168;

    /* Fibonacci sphere — 52 nodes evenly distributed */
    const N = 52;
    const φ = Math.PI * (3 - Math.sqrt(5));
    const base = Array.from({ length: N }, (_, i) => {
      const y  = 1 - (i / (N - 1)) * 2;
      const r  = Math.sqrt(Math.max(0, 1 - y * y));
      const th = φ * i;
      return { x: Math.cos(th) * r, y, z: Math.sin(th) * r };
    });

    /* Pre-compute connections — nodes within arc-distance threshold */
    const THR = 0.60;
    const conns: [number, number][] = [];
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++) {
        const a = base[i], b = base[j];
        if (Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < THR)
          conns.push([i, j]);
      }

    /* Perspective projection helper */
    const project = (x: number, y: number, z: number) => {
      const fov = 4.2;
      const sc  = fov / (fov + z * 0.75);
      return { px: cx + x * R * sc, py: cy + y * R * sc, sc, z };
    };

    let angle = 0;
    let tiltY  = 0.18; // slight Y tilt for 3-D feel

    const draw = () => {
      ctx.clearRect(0, 0, S, S);

      /* Slow Y rotation */
      angle += 0.0025;

      /* Rotate nodes */
      const ca = Math.cos(angle), sa = Math.sin(angle);
      const ct = Math.cos(tiltY),  st = Math.sin(tiltY);
      const rot = base.map(n => {
        // Y-axis rotation
        const x1 =  n.x * ca + n.z * sa;
        const z1 = -n.x * sa + n.z * ca;
        // slight X-axis tilt
        const y2 =  n.y * ct - z1 * st;
        const z2 =  n.y * st + z1 * ct;
        return { x: x1, y: y2, z: z2 };
      });

      const proj = rot.map(n => project(n.x, n.y, n.z));

      /* ── 1. Central radial glow ── */
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 210);
      bgGlow.addColorStop(0,   "rgba(59,130,246,0.10)");
      bgGlow.addColorStop(0.4, "rgba(99,102,241,0.06)");
      bgGlow.addColorStop(1,   "transparent");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, S, S);

      /* ── 2. Outer violet bloom ── */
      const bloom = ctx.createRadialGradient(cx + 30, cy - 30, 0, cx, cy, 260);
      bloom.addColorStop(0,   "rgba(139,92,246,0.07)");
      bloom.addColorStop(1,   "transparent");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, S, S);

      /* ── 3. Edges (back to front by avg Z) ── */
      const connsSorted = [...conns].sort(([i, j], [k, l]) =>
        (rot[i].z + rot[j].z) - (rot[k].z + rot[l].z)
      );

      connsSorted.forEach(([i, j]) => {
        const a = proj[i], b = proj[j];
        const avgZ = (rot[i].z + rot[j].z) / 2;
        const vis  = Math.max(0, (avgZ + 1) / 2);
        if (vis < 0.05) return;

        const g = ctx.createLinearGradient(a.px, a.py, b.px, b.py);
        const blue   = `rgba(59,130,246,${vis * 0.75})`;
        const violet = `rgba(139,92,246,${vis * 0.55})`;
        g.addColorStop(0,   violet);
        g.addColorStop(0.5, blue);
        g.addColorStop(1,   violet);

        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = g;
        ctx.lineWidth   = vis * 1.4;
        ctx.stroke();
      });

      /* ── 4. Nodes (depth sorted, back to front) ── */
      const order = rot.map((_, i) => i).sort((a, b) => rot[a].z - rot[b].z);

      order.forEach(i => {
        const p  = proj[i];
        const d  = Math.max(0, (rot[i].z + 1) / 2); // 0=back, 1=front
        const nr = p.sc * 7 + 2;

        /* Color: front=blue, mid=indigo, back=violet */
        const col = d > 0.65
          ? [59, 130, 246]
          : d > 0.35
          ? [99, 102, 241]
          : [139, 92, 246];
        const [cr, cg, cb] = col;

        const opacity = d * 0.55 + 0.38;

        /* Outer glow ring */
        ctx.save();
        ctx.shadowBlur  = d * 24 + 6;
        ctx.shadowColor = `rgba(${cr},${cg},${cb},0.9)`;

        ctx.beginPath();
        ctx.arc(p.px, p.py, nr * 1.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${d * 0.08})`;
        ctx.fill();

        /* Core sphere */
        ctx.beginPath();
        ctx.arc(p.px, p.py, nr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${opacity})`;
        ctx.fill();
        ctx.restore();

        /* Specular highlight */
        ctx.beginPath();
        ctx.arc(p.px - nr * 0.28, p.py - nr * 0.3, nr * 0.34, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d * 0.5})`;
        ctx.fill();
      });

      /* ── 5. Centre bright core ── */
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      core.addColorStop(0,   "rgba(120,160,255,0.18)");
      core.addColorStop(1,   "transparent");
      ctx.fillStyle = core;
      ctx.fillRect(0, 0, S, S);

      /* ── 6. Platform glow bottom ── */
      const plat = ctx.createRadialGradient(cx, cy + R * 0.85, 0, cx, cy + R * 0.85, 130);
      plat.addColorStop(0,   "rgba(59,130,246,0.35)");
      plat.addColorStop(0.5, "rgba(99,102,241,0.12)");
      plat.addColorStop(1,   "transparent");
      ctx.fillStyle = plat;
      ctx.fillRect(0, 0, S, S);

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative" style={{ width: 480, height: 480, maxWidth: "100%" }} aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ width: 480, height: 480, display: "block" }}
      />

      {/* Floating UI badges — CSS-positioned over canvas */}
      <div style={{ position:"absolute", top:"6%", right:"4%", animation:"float 5s ease-in-out 0.4s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(59,130,246,0.55)", borderRadius:10, padding:"8px 14px", backdropFilter:"blur(14px)", boxShadow:"0 8px 32px rgba(0,0,0,0.55), 0 0 14px rgba(59,130,246,0.18)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.55)", marginBottom:4, fontFamily:"monospace" }}>PageSpeed Insights</div>
          <div style={{ display:"flex", alignItems:"baseline", gap:4 }}>
            <span style={{ fontSize:22, fontWeight:800, color:"#22c55e", fontFamily:"monospace", lineHeight:1 }}>96</span>
            <span style={{ fontSize:9, color:"rgba(74,222,128,0.7)" }}>/100</span>
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:"22%", left:"0%", animation:"float 6.5s ease-in-out 1.2s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(139,92,246,0.45)", borderRadius:10, padding:"9px 13px", backdropFilter:"blur(14px)", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.5)", marginBottom:5, fontFamily:"monospace" }}>Tech Stack</div>
          {[["Next.js","#93c5fd"],["TypeScript","#a78bfa"],["Tailwind","#67e8f9"]].map(([t,c]) => (
            <div key={t} style={{ fontSize:9, color:c, fontFamily:"monospace", lineHeight:1.9 }}>▸ {t}</div>
          ))}
        </div>
      </div>

      <div style={{ position:"absolute", top:"38%", right:"-2%", animation:"float 4.8s ease-in-out 2s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(34,197,94,0.4)", borderRadius:8, padding:"6px 11px", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", gap:7 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px rgba(34,197,94,0.8)" }} />
          <span style={{ fontSize:10, color:"#4ade80", fontFamily:"monospace", fontWeight:600 }}>Live deploy</span>
        </div>
      </div>

      <div style={{ position:"absolute", top:"16%", left:"3%", animation:"float 5.8s ease-in-out 0.8s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(99,102,241,0.4)", borderRadius:8, padding:"6px 11px", backdropFilter:"blur(12px)" }}>
          <span style={{ fontSize:9, color:"#818cf8", fontFamily:"monospace", fontWeight:600 }}>SEO ✦ Core Web Vitals</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Floating background particles ─────────────────────────── */
const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${3 + (i * 3.9) % 94}%`,
  top: `${8 + (i * 6.1) % 84}%`,
  size: 1 + (i % 3),
  delay: `${(i * 0.35) % 5}s`,
  dur: `${5 + (i % 4) * 1.5}s`,
  op: 0.12 + (i % 5) * 0.06,
}));

/* ─── Navbar ─────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-[#040913]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}
      aria-label="Nawigacja główna"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl" aria-label="BuildLab — strona główna">
          <span className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black" style={{ boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}>BL</span>
          <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-400" role="list">
          {["Usługi", "Realizacje", "Cennik", "Blog", "Kontakt"].map(l => (
            <li key={l}><a href={`/${l.toLowerCase()}`} className="hover:text-white transition-colors relative group">{l}<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" aria-hidden="true" /></a></li>
          ))}
        </ul>
        <a href="/wycen-projekt" className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          Wycena projektu
        </a>
        <button onClick={() => setOpen(o => !o)} className="md:hidden text-white p-2" aria-label={open ? "Zamknij menu" : "Otwórz menu"} aria-expanded={open} aria-controls="mobile-menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
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

/* ─── Main page ──────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const servicesRef = useReveal(0.08);
  const processRef  = useReveal(0.08);
  const realizRef   = useReveal(0.08);
  const faqRef      = useReveal(0.08);
  const ctaRef      = useReveal(0.08);

  return (
    <div className="relative z-10">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* background particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {PARTICLES.map(p => (
            <div key={p.id} className="absolute rounded-full bg-blue-400"
              style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.op, animation: `particle-drift ${p.dur} ease-in-out ${p.delay} infinite` }} />
          ))}
        </div>

        {/* large ambient blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — copy */}
            <div>
              <div className="hero-animate hero-animate-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8 badge-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" aria-hidden="true" />
                  Agencja cyfrowa z doświadczeniem
                </span>
              </div>
              <div className="hero-animate hero-animate-2">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Twoja Cyfrowa<br />
                  <span className="grad-text">Przyszłość:</span><br />
                  Strony, SEO<br />
                  <span className="text-slate-300">i Kod.</span>
                </h1>
              </div>
              <div className="hero-animate hero-animate-3">
                <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                  Budujemy strony i aplikacje webowe, które działają błyskawicznie, wyglądają świetnie i generują wyniki. Od projektu do wdrożenia w jednym zespole.
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
              {/* animated stats */}
              <div className="hero-animate hero-animate-5 mt-12 flex flex-wrap gap-8">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold grad-text-blue"><Counter target={s.val} suffix={s.suffix} /></p>
                    <p className="text-sm text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — 3D tech visual */}
            <div className="hidden lg:flex relative h-[480px] items-center justify-center hero-animate hero-animate-3">
              <HeroSphere />
            </div>
          </div>
        </div>

        {/* scroll arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.6), transparent)", animation: "float 2s ease-in-out infinite", margin: "0 auto" }} />
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════ */}
      <section id="uslugi" className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div ref={servicesRef} className="reveal">
            <div className="text-center mb-16">
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
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════ */}
      <section id="proces" className="py-24 relative z-10">
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
        </div>
      </section>

      {/* ══ REALIZACJE — horizontal scroll ════════════════════ */}
      <section id="realizacje" className="py-24 relative z-10 overflow-hidden">
        <div ref={realizRef} className="reveal">
          <div className="mx-auto max-w-6xl px-6 mb-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Portfolio</p>
                <h2 className="text-4xl font-extrabold text-white">Realizacje</h2>
              </div>
              <a href="/realizacje" className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                Wszystkie projekty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          </div>

          {/* horizontal scroll container */}
          <div className="flex gap-5 overflow-x-auto pb-4 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style>{`.no-scroll::-webkit-scrollbar { display: none; }`}</style>
            {projects.map((p, i) => (
              <a key={p.slug} href={`/realizacje/${p.slug}`}
                className="reveal flex-none w-[300px] md:w-[360px] glass rounded-2xl overflow-hidden group snap-start hover:no-underline"
                style={{ transitionDelay: `${i * 70}ms` }}>
                {/* thumbnail with animated glow */}
                <div className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at 40% 40%, rgba(${p.accent},0.22) 0%, rgba(6,13,26,1) 75%)` }}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
                    aria-hidden="true" />
                  <div className="w-20 h-20 rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-700"
                    style={{ background: `radial-gradient(circle, rgba(${p.accent},0.7) 0%, transparent 70%)` }} aria-hidden="true" />
                  <div className="absolute top-3 right-3 text-xs text-slate-600 font-mono opacity-40">{p.year}</div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500 mb-1">{p.tag}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{p.title}</h3>
                    <svg className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              </a>
            ))}
            {/* all projects card */}
            <a href="/realizacje" className="flex-none w-[200px] glass rounded-2xl flex flex-col items-center justify-center gap-4 p-6 hover:no-underline group snap-start">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors text-center">Wszystkie realizacje</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section id="faq" className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6">
          <div ref={faqRef} className="reveal">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Pytania</p>
              <h2 className="text-4xl font-extrabold text-white">FAQ</h2>
            </div>
            <dl className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden">
                  <dt>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-white hover:text-blue-300 transition-colors"
                      aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`}>
                      {f.q}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                  </dt>
                  <dd id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}
                    hidden={openFaq !== i} className="px-6 pb-5 text-slate-400 leading-relaxed text-sm border-t border-white/5">
                    <div className="pt-4">{f.a}</div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div ref={ctaRef} className="reveal">
            <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
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
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
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
                      {col.links.map(l => <li key={l}><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l}</a></li>)}
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
