import { blogPosts, getBlogPostBySlug, allBlogSlugs } from "@/data/blog-posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | BuildLab Blog`,
    description: post.excerpt,
  };
}

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) notFound();

  const relatedPosts = post.related
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#040913] text-white">

      {/* Article hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1">
              {post.category}
            </span>
            {post.hot && (
              <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 rounded-full px-3 py-1">
                Hot
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-white/8 pt-6">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.time} czytania</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl space-y-6">
          {post.body.map((section, i) => {
            if (section.type === "p") {
              return (
                <p key={i} className="text-slate-300 leading-relaxed text-base">
                  {section.text}
                </p>
              );
            }
            if (section.type === "h2") {
              return (
                <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-2">
                  {section.text}
                </h2>
              );
            }
            if (section.type === "h3") {
              return (
                <h3 key={i} className="text-xl font-bold text-white mt-8 mb-2">
                  {section.text}
                </h3>
              );
            }
            if (section.type === "ul" && section.items) {
              return (
                <ul key={i} className="space-y-2 pl-0">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-blue-400 mt-1 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{renderBold(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === "quote") {
              return (
                <blockquote key={i} className="border-l-2 border-blue-500 pl-5 text-slate-400 italic">
                  {section.text}
                </blockquote>
              );
            }
            return null;
          })}
        </div>
      </article>

      {/* Takeaways */}
      <section className="py-16 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-blue-400">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              Kluczowe wnioski
            </h2>
            <ul className="space-y-3">
              {post.takeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-blue-400 mt-0.5 font-bold shrink-0">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 px-6 border-t border-white/8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((p, i) =>
                p ? (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="glass rounded-2xl p-5 group hover:border-blue-500/30 transition-all duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-2.5 py-0.5 mb-3 inline-block">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <span className="text-xs text-slate-500">{p.time} czytania</span>
                  </a>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="py-12 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Powrót do bloga
          </a>
        </div>
      </section>
    </main>
  );
}
