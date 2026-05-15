"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const categories = ["Wszystkie", "Strony korporacyjne", "E-commerce", "Portfolio artystyczne"];

const mockupColors: Record<string, { bg: string; accent: string; bars: string[] }> = {
  "alinahus-art":       { bg: "#f5f0e8", accent: "#c9a96e", bars: ["#e8d5b0", "#d4b87a", "#c9a96e"] },
  "pismoprocesowe-pl":  { bg: "#1a1a2e", accent: "#b8860b", bars: ["#2a2a4e", "#3a3a5e", "#b8860b"] },
  "durres-pl":          { bg: "#0a4f7a", accent: "#38bdf8", bars: ["#0c6090", "#0e70a8", "#38bdf8"] },
  "secondlifeit-pl":    { bg: "#0f0f23", accent: "#6366f1", bars: ["#1a1a3e", "#252550", "#6366f1"] },
  "inard-eu":           { bg: "#f8f4ee", accent: "#4a2c17", bars: ["#e8ddd0", "#d4c4b0", "#4a2c17"] },
  "buildlab-pl":        { bg: "#0d0d1f", accent: "#8b5cf6", bars: ["#151530", "#1e1e48", "#8b5cf6"] },
};

function BrowserMockup({ slug }: { slug: string }) {
  const c = mockupColors[slug] ?? { bg: "#0f172a", accent: "#3b82f6", bars: ["#1e293b", "#334155", "#3b82f6"] };
  const isDark = c.bg < "#888";

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" style={{ aspectRatio: "16/10" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 h-7 bg-[#1a1a2e] border-b border-white/10 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <div className="flex-1 mx-3 rounded bg-white/10 h-3.5 flex items-center px-2">
          <span className="text-[7px] text-white/30 font-mono truncate">{slug.replace(/-/g, ".")}.pl</span>
        </div>
      </div>
      {/* Page sim */}
      <div className="relative overflow-hidden" style={{ background: c.bg, height: "calc(100% - 28px)" }}>
        {/* Nav */}
        <div className="h-5 flex items-center px-3 gap-2 border-b" style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)", background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)" }}>
          <div className="w-8 h-1.5 rounded-sm" style={{ background: c.accent, opacity: 0.8 }} />
          <div className="flex-1" />
          {[1,2,3].map(i => <div key={i} className="w-5 h-1 rounded-sm" style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)" }} />)}
          <div className="w-12 h-3 rounded-full" style={{ background: c.accent, opacity: 0.7 }} />
        </div>
        {/* Hero */}
        <div className="px-4 pt-4 pb-2">
          <div className="h-2 w-2/3 rounded mb-1.5" style={{ background: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }} />
          <div className="h-1.5 w-1/2 rounded mb-1" style={{ background: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)" }} />
          <div className="h-1.5 w-5/12 rounded mb-3" style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)" }} />
          <div className="h-4 w-16 rounded-full" style={{ background: c.accent }} />
        </div>
        {/* Cards */}
        <div className="px-4 grid grid-cols-3 gap-2 mt-1">
          {c.bars.map((b, i) => (
            <div key={i} className="rounded-lg" style={{ background: b, height: 32, opacity: 0.55 }} />
          ))}
        </div>
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.accent}22 0%, transparent 60%)` }} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function RealizacjePage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen text-white">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">Realizacje</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Live wdrożenia —{" "}
            <span className="grad-text">projekty dla klientów</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl reveal">
            Strony, sklepy i aplikacje — zrealizowane, opublikowane, działające na produkcji.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white/[0.04] border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <a
                key={project.slug}
                href={`/realizacje/${project.slug}`}
                className="group flex flex-col reveal hover:no-underline"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Mockup */}
                <div className="mb-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)]">
                  <BrowserMockup slug={project.slug} />
                </div>

                {/* Info */}
                <div className="glass rounded-xl p-4 group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500">{project.year}</span>
                  </div>
                  <h2 className="font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{project.name}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{project.shortDesc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-slate-500 font-mono">{project.stack}</span>
                    <span className="text-xs text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Case study
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-slate-500 text-center py-16">Brak realizacji w tej kategorii.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Masz projekt?</h2>
          <p className="text-slate-400 mb-8 reveal">Wyceń bezpłatnie — odpowiemy w jeden dzień roboczy.</p>
          <a
            href="/wycen-projekt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all reveal"
          >
            Wyceń projekt bezpłatnie
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
