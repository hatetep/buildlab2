import { services } from "@/data/services";

export const metadata = {
  title: "Usługi — strony, sklepy, SEO i opieka techniczna | BuildLab",
  description:
    "Strona WWW, sklep internetowy, landing page, modernizacja, audyt, SEO, branding i stała opieka techniczna. Wszystko w jednym miejscu.",
};

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
              <a
                href={`/${l.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
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

export default function UslugiPage() {
  return (
    <main className="min-h-screen bg-[#040913] text-white">
      <SubNavbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            Usługi
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Strona, sklep, SEO i opieka{" "}
            <span className="grad-text">w jednym miejscu</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl reveal">
            Kompleksowa obsługa — od pierwszego projektu po długoterminowe utrzymanie i pozycjonowanie.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-8 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                className="glass rounded-2xl p-6 flex flex-col group reveal transition-all duration-300 hover:border-blue-500/30"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-2">
                  {service.hero.eyebrow}
                </p>
                <h2 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {service.hero.title}{" "}
                  {service.hero.accent && (
                    <span className="text-blue-400">{service.hero.accent}</span>
                  )}
                </h2>
                <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">
                  {service.hero.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                  <span className="text-sm font-semibold text-blue-400">
                    {service.pricing.from}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-slate-500 group-hover:text-blue-400 transition-colors"
                  >
                    <path
                      d="M3 8H13M9 4L13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Nie wiesz od czego zacząć?
          </h2>
          <p className="text-slate-400 mb-8 reveal">
            Opisz projekt — dobierzemy odpowiednie usługi i wrócimy z wyceną.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 reveal"
          >
            Wyceń projekt bezpłatnie
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
