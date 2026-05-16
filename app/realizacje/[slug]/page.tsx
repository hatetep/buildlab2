import { projects, getProjectBySlug, allProjectSlugs } from "@/data/projects";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return {
    title: p.meta.title,
    description: p.meta.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);

  if (!p) notFound();

  const relatedProjects = p.related
    .map((s) => projects.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#040913] text-white">

      {/* Hero */}
      <section className="pt-40 pb-10 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            {p.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal max-w-4xl">
            {p.hero.title}{" "}
            <span className="grad-text">{p.hero.accent}</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl reveal">{p.hero.description}</p>
        </div>
      </section>

      {/* Breadcrumb + meta row */}
      <section className="py-4 px-6 border-b border-white/8">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3">
          <a
            href="/realizacje"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors py-2"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Wszystkie realizacje
          </a>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="text-blue-400 font-semibold">{p.category}</span>
            <span>{p.year}</span>
            <span className="font-mono">{p.stack}</span>
          </div>
        </div>
      </section>

      {/* Full screenshot */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-6xl reveal">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
            <img
              src={`/realizacje/${p.slug}.webp`}
              alt={`Realizacja — ${p.name}`}
              width={1280}
              height={960}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {p.url && (
            <div className="flex justify-center mt-6">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
              >
                Otwórz stronę na żywo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Wyzwanie</p>
            <h2 className="text-2xl font-bold mb-5">Z czym przyszedł klient</h2>
            <div className="w-8 h-0.5 bg-blue-600 mb-6" />
            <p className="text-slate-300 leading-relaxed">{p.challenge}</p>
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Podejście</p>
            <h2 className="text-2xl font-bold mb-5">Jak to rozwiązaliśmy</h2>
            <div className="w-8 h-0.5 bg-blue-600 mb-6" />
            <p className="text-slate-300 leading-relaxed">{p.approach}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      {p.results && p.results.length > 0 && (
        <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1e40af 0%, #6d28d9 100%)" }}>
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12 reveal">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">Rezultaty</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Co udało się osiągnąć</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {p.results.map((r, i) => (
                <div
                  key={i}
                  className="text-center reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{r.value}</p>
                  <p className="text-sm text-white/80 leading-relaxed">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">Zakres prac</p>
          <h2 className="text-3xl font-bold mb-10 reveal">Co zbudowaliśmy</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl">
            {p.features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-blue-400" aria-hidden="true">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{f.t}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack + Timeline */}
      <section className="py-24 px-6 border-t border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 reveal">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Stack technologiczny</p>
            <h2 className="text-2xl font-bold mb-5">Z czego jest zbudowane</h2>
            <div className="w-8 h-0.5 bg-blue-600 mb-6" />
            <div className="flex flex-wrap gap-2 mt-2">
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/10 text-slate-300 bg-white/[0.04]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "100ms" }}>
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-400">Czas realizacji</p>
              <p className="text-4xl font-bold text-white mb-5">{p.timeline}</p>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Twój projekt może być następny. Wyślij brief — przygotujemy konkretną propozycję w jeden dzień roboczy.
              </p>
              <a
                href="/wycen-projekt"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all w-full justify-center"
              >
                Wyceń podobny projekt
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 border-t border-white/8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 reveal">Inne realizacje</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((r, i) =>
                r ? (
                  <a
                    key={r.slug}
                    href={`/realizacje/${r.slug}`}
                    className="group flex flex-col reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-4 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                      <img
                        src={`/realizacje/${r.slug}.webp`}
                        alt={`Wizualizacja — ${r.name}`}
                        loading="lazy"
                        decoding="async"
                        width={1280}
                        height={960}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">{r.shortDesc}</p>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{r.name}</h3>
                    <span className="text-xs font-mono text-slate-500 mt-1">{r.stack}</span>
                  </a>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 reveal">Twój projekt może być następny</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Masz pomysł? <span className="grad-text">Zrealizujemy go.</span>
          </h2>
          <p className="text-slate-400 mb-8 reveal max-w-xl mx-auto">
            Niezależnie czy potrzebujesz nowej strony, sklepu czy modernizacji — wyślij brief i porozmawiajmy.
          </p>
          <div className="flex flex-wrap gap-3 justify-center reveal">
            <a
              href="/wycen-projekt"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all"
            >
              Opisz projekt w 3 minuty
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-blue-500/40 px-8 py-4 text-base font-semibold text-white transition-all"
            >
              Napisz do nas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
