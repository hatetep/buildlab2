"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blog-posts";

const allCategories = ["Wszystkie", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered =
    activeCategory === "Wszystkie"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#040913] text-white">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Wiedza techniczna{" "}
            <span className="grad-text">i praktyczne porady</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl reveal">
            Artykuły o wydajności, SEO, e-commerce i projektowaniu stron — z perspektywy agencji, która to wdraża.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-8 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            {allCategories.map((cat) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass rounded-2xl p-6 flex flex-col group hover:border-blue-500/30 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                  {post.hot && (
                    <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 rounded-full px-3 py-1 badge-pulse">
                      Hot
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-500">{post.time} czytania</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
