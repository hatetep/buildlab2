"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const categories = ["Wszystkie", "Portfolio artystyczne", "Strony korporacyjne", "E-commerce"];

export default function RealizacjePage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
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
                {/* Screenshot with hover lift */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-4 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <img
                    src={`/realizacje/${project.slug}-thumb.webp`}
                    alt={`Przykładowa strona — ${project.name}`}
                    loading="lazy"
                    decoding="async"
                    width={820}
                    height={615}
                    className="w-full h-full object-cover object-top"
                  />
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
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
