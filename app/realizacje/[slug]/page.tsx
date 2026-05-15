import { projects, getProjectBySlug, allProjectSlugs } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.meta.title,
    description: project.meta.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const relatedProjects = project.related
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#040913] text-white">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            {project.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal max-w-4xl">
            {project.hero.title}{" "}
            <span className="grad-text">{project.hero.accent}</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mb-8 reveal">
            {project.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8 reveal">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/8 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 reveal">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
              >
                Odwiedź stronę
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            <a
              href="/realizacje"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-blue-500/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
            >
              ← Wszystkie realizacje
            </a>
          </div>
        </div>
      </section>

      {/* Meta row */}
      <section className="py-12 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-5 reveal">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Kategoria</p>
            <p className="font-semibold text-white">{project.category}</p>
          </div>
          <div className="glass rounded-2xl p-5 reveal" style={{ transitionDelay: "80ms" }}>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Rok</p>
            <p className="font-semibold text-white">{project.year}</p>
          </div>
          <div className="glass rounded-2xl p-5 reveal" style={{ transitionDelay: "160ms" }}>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Czas realizacji</p>
            <p className="font-semibold text-white">{project.timeline}</p>
          </div>
          <div className="glass rounded-2xl p-5 reveal" style={{ transitionDelay: "240ms" }}>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Stack</p>
            <p className="font-semibold text-white text-sm">{project.stack}</p>
          </div>
        </div>
      </section>

      {/* Challenge + approach */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Wyzwanie
            </p>
            <h2 className="text-2xl font-bold mb-4">Problem klienta</h2>
            <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Podejście
            </p>
            <h2 className="text-2xl font-bold mb-4">Nasze rozwiązanie</h2>
            <p className="text-slate-300 leading-relaxed">{project.approach}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Funkcje
          </p>
          <h2 className="text-3xl font-bold mb-10 reveal">Kluczowe elementy projektu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-bold text-white mb-2">{feature.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2 reveal">
            Wyniki
          </p>
          <h2 className="text-3xl font-bold mb-10 reveal">Efekty projektu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl font-bold text-blue-400 mb-2">{result.value}</p>
                <p className="text-sm text-slate-400 leading-tight">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 border-t border-white/8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 reveal">Inne realizacje</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((p, i) =>
                p ? (
                  <a
                    key={p.slug}
                    href={`/realizacje/${p.slug}`}
                    className="glass rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-300 reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1 mb-3 inline-block">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{p.stack}</p>
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
