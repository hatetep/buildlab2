import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas – agencja WWW z pasją do dobrego designu | BuildLab",
  description: "buildlab.pl to zespół projektantów i deweloperów z doświadczeniem. Tworzymy strony, które działają i sprzedają.",
  alternates: { canonical: "https://buildlab2.pages.dev/o-nas/" },
};

const values = [
  { icon: "❤️", t: "Robimy to, co lubimy", d: "Każdą stronę traktujemy jak własną. Bez kompromisów na jakość, bez kopiowania szablonów." },
  { icon: "⚡", t: "Szybkość i przejrzystość", d: "Regularne pokazy postępów, jasna komunikacja, brak ukrytych kosztów. Wiesz, co się dzieje na każdym etapie." },
  { icon: "🤝", t: "Partnerstwo, nie zlecenie", d: "Pomagamy myśleć strategicznie — nie tylko realizujemy. Twój wynik biznesowy jest miarą naszej pracy." },
  { icon: "📊", t: "Mierzymy rezultaty", d: "Strona to nie cel sam w sobie. Liczy się ruch, konwersja i zwrot z inwestycji — to monitorujemy." },
];

const capabilities = [
  { t: "UX i design", d: "Projekty interfejsów w Figma — od design systemu po gotowy prototype. Estetyka i funkcjonalność w jednym." },
  { t: "Programowanie", d: "Warstwa front-end (React / Next.js), warstwa serwerowa (Node.js, sklepy headless), integracje API i CMS." },
  { t: "SEO i treści", d: "Strategia słów kluczowych, audyty techniczne, redakcja tekstów pod wyszukiwarki i konwersję." },
  { t: "Hosting i infrastruktura", d: "Cloudflare, Vercel, AWS — dobór infrastruktury pod skalę projektu, monitoring i kopie zapasowe." },
];

const stats = [
  { v: "40+", l: "zrealizowanych projektów" },
  { v: "96/100", l: "PSI score" },
  { v: "3 lata", l: "na rynku" },
  { v: "100%", l: "satysfakcji klientów" },
];

export default function ONasPage() {
  return (
    <div className="relative z-10 min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">O nas</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Agencja WWW z zespołem,<br />
            <span className="grad-text">który dowozi</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Mały zespół, duże doświadczenie. Tworzymy strony i sklepy, które klienci pokazują znajomym.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-white/5 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(s => (
              <div key={s.l}>
                <p className="text-4xl font-extrabold grad-text-blue mb-2">{s.v}</p>
                <p className="text-sm text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Nasza historia</p>
          <h2 className="text-4xl font-extrabold text-white mb-8">
            Od pierwszego projektu do <span className="grad-text">zaufanego partnera</span>
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              buildlab.pl wyrósł z pasji do tworzenia stron internetowych. Zaczynaliśmy od prostych projektów dla lokalnych firm —
              dziś realizujemy strony, sklepy i aplikacje dla klientów z całej Polski.
            </p>
            <p>
              Jesteśmy częścią{" "}
              <a href="https://secondlifeit.pl" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors" target="_blank" rel="noopener">Second Life IT</a>
              {" "}— firmy zajmującej się obsługą informatyczną małych i średnich przedsiębiorstw. Dzięki temu nasi klienci dostają coś więcej niż tylko stronę: pełne wsparcie technologiczne pod jednym dachem.
            </p>
            <p>
              Wierzymy, że dobra strona to nie tylko ładny design. To narzędzie biznesowe — które ma sprzedawać, budować markę,
              pozyskiwać klientów. Dlatego każdy projekt zaczynamy od pytań o cele, a nie o kolory i fonty.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Wartości</p>
            <h2 className="text-4xl font-extrabold text-white">Co nas <span className="grad-text">wyróżnia</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.t} className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{v.icon}</div>
                <h3 className="font-bold text-white mb-3">{v.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Kompetencje</p>
            <h2 className="text-4xl font-extrabold text-white">
              Mały zespół, <span className="grad-text">szeroka siatka kompetencji</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Sercem buildlab.pl jest doświadczony zespół. Do każdego projektu dobieramy zaufanych specjalistów z naszej sieci — pracujemy z nimi od lat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map(c => (
              <div key={c.t} className="glass rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">{c.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister company CTA */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)" }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase mb-3 text-blue-400">Z grupy</p>
                <h3 className="text-3xl font-extrabold text-white mb-3">Second Life IT</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Potrzebujesz obsługi informatycznej swojej firmy? Helpdesk, Microsoft 365, bezpieczeństwo danych, audyty IT —
                  wszystko pod jednym dachem.
                </p>
                <a href="https://secondlifeit.pl" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-blue-500/40 hover:bg-blue-500/5 px-6 py-3 text-sm font-semibold text-white transition-all">
                  secondlifeit.pl
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>
              <div className="space-y-3">
                {["Helpdesk i wsparcie IT", "Microsoft 365 / Google Workspace", "Bezpieczeństwo i backup", "Audyty i optymalizacja IT"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Zróbmy coś razem</h2>
          <p className="text-slate-400 mb-8">Bezpłatna wycena w jeden dzień roboczy. Bez zobowiązań.</p>
          <a href="/wycen-projekt"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all glow-btn">
            Wyceń projekt
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>

    </div>
  );
}
