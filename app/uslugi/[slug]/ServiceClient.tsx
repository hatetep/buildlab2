"use client";

import { useState } from "react";
import { services, type Service } from "@/data/services";

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
              <a href={`/${l.toLowerCase()}`} className="hover:text-white transition-colors">
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

export default function ServiceClient({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const relatedServices = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#040913] text-white">
      <SubNavbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            {service.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal max-w-4xl">
            {service.hero.title}{" "}
            <span className="grad-text">{service.hero.accent}</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mb-8 reveal">
            {service.hero.description}
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 reveal"
          >
            {service.ctaLabel}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl">
          <p className="text-slate-300 text-lg leading-relaxed reveal">{service.intro}</p>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Dla kogo
          </p>
          <h2 className="text-3xl font-bold mb-10 reveal">Dla kogo ta usługa?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.forWhom.map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 flex items-start gap-3 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-blue-400 mt-0.5 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 8L7.5 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Zakres
          </p>
          <h2 className="text-3xl font-bold mb-10 reveal">Co dostajesz?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whatYouGet.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-blue-400 mt-1 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Proces
          </p>
          <h2 className="text-3xl font-bold mb-10 reveal">Jak pracujemy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2 text-white">{step.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Wycena
          </p>
          <h2 className="text-3xl font-bold mb-8 reveal">Koszt i czas realizacji</h2>
          <div className="glass rounded-2xl p-8 reveal">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Cena startowa</p>
                <p className="text-2xl font-bold text-blue-400">{service.pricing.from}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  {service.pricing.timelineFastLabel ?? "Szybka realizacja"}
                </p>
                <p className="text-xl font-bold text-white">{service.pricing.timelineFast}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  {service.pricing.timelineFullLabel ?? "Pełna realizacja"}
                </p>
                <p className="text-xl font-bold text-white">{service.pricing.timelineFull}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed border-t border-white/8 pt-6">
              {service.pricing.note}
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200"
            >
              {service.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-slate-500 text-sm mb-4 reveal">Technologie:</p>
          <div className="flex flex-wrap gap-2 reveal">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/8 rounded-full"
              >
                {tech}
              </span>
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
          <h2 className="text-3xl font-bold mb-10 reveal">Najczęstsze pytania</h2>
          <div className="space-y-3">
            {service.faq.map((item, i) => (
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

      {/* Related */}
      {relatedServices.length > 0 && (
        <section className="py-24 px-6 border-t border-white/8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 reveal">Powiązane usługi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((s, i) =>
                s ? (
                  <a
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="glass rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-300 reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-2xl mb-3 block">{s.icon}</span>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {s.hero.title}
                    </h3>
                    <p className="text-sm text-blue-400 mb-2">{s.pricing.from}</p>
                    <p className="text-xs text-slate-500">{s.hero.eyebrow}</p>
                  </a>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
