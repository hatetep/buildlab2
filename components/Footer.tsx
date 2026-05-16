const footerCols = [
  {
    title: "Usługi",
    links: [
      { label: "Strony WWW", href: "/uslugi/nowa-strona-www" },
      { label: "Sklepy online", href: "/uslugi/sklep-internetowy" },
      { label: "SEO & Pozycjonowanie", href: "/uslugi/seo-pozycjonowanie" },
      { label: "Landing page", href: "/uslugi/landing-page" },
      { label: "Stała opieka", href: "/uslugi/stala-opieka" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "O nas", href: "/o-nas" },
      { label: "Realizacje", href: "/realizacje" },
      { label: "Cennik", href: "/cennik" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Wycena projektu", href: "/wycen-projekt" },
      { label: "kontakt@buildlab.pl", href: "mailto:kontakt@buildlab.pl" },
      { label: "+48 792 350 450", href: "tel:+48792350450" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-[#040913]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2.5 font-bold text-xl mb-3" aria-label="BuildLab — strona główna">
              <span className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black">BL</span>
              <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agencja WWW tworząca strony, sklepy i aplikacje. Od briefu po wdrożenie i dalszy rozwój.
            </p>
          </div>

          <nav aria-label="Linki stopki">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {footerCols.map(col => (
                <div key={col.title}>
                  <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
                  <ul className="space-y-2" role="list">
                    {col.links.map(l => (
                      <li key={l.label}>
                        <a href={l.href} className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Second Life IT Sp. z o.o. · buildlab.pl jest marką Second Life IT Sp. z o.o.</p>
          <p>NIP: 5252714316 · REGON: 367524546 · KRS: 0000682194</p>
        </div>
      </div>
    </footer>
  );
}
