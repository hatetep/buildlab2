"use client";
import { useState } from "react";

const portfolioProjects = [
  { slug: "pisquare-pl",       title: "Pi Square",           tag: "Portfolio artystyczne",          year: "2026", thumb: "thumb" },
  { slug: "alinahus-art",      title: "Alina Hus",            tag: "Portfolio artystyczne",          year: "2026", thumb: "thumb-sm" },
  { slug: "pismoprocesowe-pl", title: "PismoProcesowe.pl",    tag: "Prawo / Landing page",           year: "2025", thumb: "thumb-sm" },
  { slug: "secondlifeit-pl",   title: "SecondLifeIT.pl",      tag: "Technologia / Strona firmowa",   year: "2025", thumb: "thumb-sm" },
  { slug: "durres-pl",         title: "Durres.pl",            tag: "Nieruchomości / Strona firmowa", year: "2025", thumb: "thumb-sm" },
  { slug: "inard-eu",          title: "Inard.eu",             tag: "E-commerce / Biżuteria",         year: "2024", thumb: "thumb-sm" },
  { slug: "buildlab-pl",       title: "Buildlab.pl",          tag: "Agencja / Strona firmowa",       year: "2024", thumb: "thumb-sm" },
];

export default function PortfolioMarquee() {
  const [marquePaused, setMarquePaused] = useState(false);

  return (
    <section id="realizacje" className="py-24 relative z-10 overflow-hidden">
      <div>
        <div className="reveal mx-auto max-w-6xl px-6 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="text-4xl font-extrabold text-white">Realizacje</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMarquePaused(p => !p)}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-blue-500/40 px-4 py-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                aria-label={marquePaused ? "Wznów przewijanie portfolio" : "Pauza — zatrzymaj przewijanie portfolio"}
              >
                {marquePaused
                  ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>Wznów</>
                  : <><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>Pauza</>
                }
              </button>
              <a href="/realizacje" className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                Wszystkie projekty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden" role="region" aria-label="Realizacje — przewijanie automatyczne">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, #040913, transparent)" }} aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, #040913, transparent)" }} aria-hidden="true" />

          <div
            className="flex gap-5 w-max pb-4"
            style={{ animation: "marquee 40s linear infinite", animationPlayState: marquePaused ? "paused" : "running", paddingLeft: "20px" }}
            onMouseEnter={e => { if (!marquePaused) (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
            onMouseLeave={e => { if (!marquePaused) (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
          >
            {[...portfolioProjects, ...portfolioProjects].map((p, i) => (
              <a
                key={i}
                href={`/realizacje/${p.slug}`}
                aria-hidden={i >= portfolioProjects.length ? "true" : undefined}
                tabIndex={i >= portfolioProjects.length ? -1 : undefined}
                className="flex-none w-[300px] glass rounded-2xl overflow-hidden group hover:no-underline hover:border-blue-500/30 transition-colors"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={`/realizacje/${p.slug}-${p.thumb}.webp`}
                    alt={i < portfolioProjects.length ? `Realizacja — ${p.title}` : ""}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-400 mb-1">{p.tag}</p>
                  <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors text-sm">{p.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
