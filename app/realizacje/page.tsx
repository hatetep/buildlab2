"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const categories = ["Wszystkie", "Strony korporacyjne", "E-commerce", "Portfolio artystyczne"];

type MockupDef = { bg: string; nav: string; hero: string; accent: string; blocks: string[]; light: boolean };

const MOCKUPS: Record<string, MockupDef> = {
  "alinahus-art": {
    bg: "#f5f0e8", nav: "#ece7db", hero: "#e8e0d0", accent: "#c9a96e",
    blocks: ["#d4b87a", "#c9a96e", "#b8976a"], light: true,
  },
  "pismoprocesowe-pl": {
    bg: "#16172a", nav: "#1e2040", hero: "#1e2040", accent: "#d4a017",
    blocks: ["#2a2d52", "#343870", "#d4a017"], light: false,
  },
  "durres-pl": {
    bg: "#0b4e7a", nav: "#0d5f94", hero: "#0d5f94", accent: "#38bdf8",
    blocks: ["#0e6fa8", "#1480bc", "#38bdf8"], light: false,
  },
  "secondlifeit-pl": {
    bg: "#0e0f1e", nav: "#161828", hero: "#161828", accent: "#6366f1",
    blocks: ["#1e2040", "#252855", "#6366f1"], light: false,
  },
  "inard-eu": {
    bg: "#f8f4ee", nav: "#f0ebe2", hero: "#f0ebe2", accent: "#4a2c17",
    blocks: ["#e8ddd0", "#d9ccbf", "#4a2c17"], light: true,
  },
  "buildlab-pl": {
    bg: "#0c0d1e", nav: "#141530", hero: "#141530", accent: "#7c3aed",
    blocks: ["#1a1c38", "#22254a", "#7c3aed"], light: false,
  },
};

function BrowserMockup({ slug }: { slug: string }) {
  const m = MOCKUPS[slug] ?? {
    bg: "#0f172a", nav: "#1e293b", hero: "#1e293b", accent: "#3b82f6",
    blocks: ["#1e293b", "#334155", "#3b82f6"], light: false,
  };
  const txt = m.light ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.45)";
  const txtFaint = m.light ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.2)";

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.6)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 bg-[#18192c] border-b border-white/10" style={{ height: 28 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} aria-hidden="true" />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} aria-hidden="true" />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} aria-hidden="true" />
        <div style={{ flex: 1, marginLeft: 8, marginRight: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 14, display: "flex", alignItems: "center", paddingLeft: 8, overflow: "hidden" }}>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", fontFamily: "monospace", whiteSpace: "nowrap" }}>
            {slug.replace(/-/g, ".")}.pl
          </span>
        </div>
      </div>

      {/* Page body */}
      <div style={{ background: m.bg, height: 180 }}>
        {/* Simulated navbar */}
        <div style={{ background: m.nav, height: 22, display: "flex", alignItems: "center", paddingLeft: 12, paddingRight: 12, gap: 8, borderBottom: `1px solid ${txtFaint}` }}>
          <div style={{ width: 32, height: 6, borderRadius: 3, background: m.accent, opacity: 0.9 }} />
          <div style={{ flex: 1 }} />
          <div style={{ width: 28, height: 5, borderRadius: 2, background: txt }} />
          <div style={{ width: 28, height: 5, borderRadius: 2, background: txt }} />
          <div style={{ width: 28, height: 5, borderRadius: 2, background: txt }} />
          <div style={{ width: 50, height: 14, borderRadius: 7, background: m.accent, opacity: 0.85 }} />
        </div>

        {/* Hero area */}
        <div style={{ padding: "16px 16px 8px" }}>
          <div style={{ height: 8, width: "60%", borderRadius: 4, background: txt, marginBottom: 6 }} />
          <div style={{ height: 6, width: "45%", borderRadius: 3, background: txtFaint, marginBottom: 4 }} />
          <div style={{ height: 5, width: "35%", borderRadius: 3, background: txtFaint, marginBottom: 10 }} />
          <div style={{ height: 16, width: 72, borderRadius: 8, background: m.accent }} />
        </div>

        {/* Content blocks */}
        <div style={{ padding: "0 14px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {m.blocks.map((b, i) => (
            <div key={i} style={{ height: 40, borderRadius: 8, background: b, opacity: i === 2 ? 0.7 : 0.55 }} />
          ))}
        </div>

        {/* Accent glow */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 100%, ${m.accent}18 0%, transparent 70%)`, pointerEvents: "none" }} aria-hidden="true" />
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
            Strony, sklepy i aplikacje zrealizowane dla klientów — działające na produkcji.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="pb-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white/[0.04] border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <a
                key={project.slug}
                href={`/realizacje/${project.slug}`}
                className="group flex flex-col reveal"
                style={{ transitionDelay: `${i * 80}ms`, textDecoration: "none" }}
              >
                {/* Mockup with hover lift */}
                <div
                  className="relative mb-4 transition-all duration-300 group-hover:-translate-y-1"
                  style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))" }}
                >
                  <BrowserMockup slug={project.slug} />
                </div>

                {/* Card metadata */}
                <div className="glass rounded-xl p-4 group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{project.year}</span>
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
          <a href="/wycen-projekt" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all reveal">
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
