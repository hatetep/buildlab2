"use client";
import { useState, FormEvent } from "react";

export default function WycenProjektPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    type: "", budget: "", deadline: "", description: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "YOUR_WEB3FORMS_KEY_HERE", ...form, subject: `Brief: ${form.type} — ${form.name}` }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/60 focus:outline-none px-4 py-3 text-white placeholder:text-slate-600 text-sm transition-colors";
  const labelCls = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <div className="relative z-10 min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Wyceń projekt</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Brief online —<br />
            <span className="grad-text">wycena w jeden dzień roboczy</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            Opowiedz nam o swoim pomyśle. Wrócimy z propozycją, wyceną i terminem realizacji. Bezpłatnie, bez zobowiązań.
          </p>
        </div>
      </section>

      {/* Promise strip */}
      <section className="border-y border-white/5 py-10 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🕐", v: "1 dzień roboczy", l: "wracamy z odpowiedzią" },
              { icon: "🎁", v: "Bezpłatnie", l: "wycena bez zobowiązań" },
              { icon: "💡", v: "Propozycja", l: "koncepcja + plan działań" },
            ].map(item => (
              <div key={item.v} className="flex flex-col items-center gap-2">
                <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                <p className="font-bold text-white">{item.v}</p>
                <p className="text-slate-500 text-sm">{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Brief form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-extrabold text-white mb-1">Brief projektu</h2>
                <p className="text-slate-500 text-sm mb-8">Wypełnienie zajmuje ~3 minuty.</p>

                {status === "ok" ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4" aria-hidden="true">✅</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dziękujemy!</h3>
                    <p className="text-slate-400">Odpiszemy w ciągu jednego dnia roboczego.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="bf-name" className={labelCls}>Imię i nazwisko <span className="text-red-400" aria-hidden="true">*</span></label>
                        <input id="bf-name" type="text" required placeholder="Jan Kowalski" value={form.name} onChange={set("name")} className={inputCls} autoComplete="name" />
                      </div>
                      <div>
                        <label htmlFor="bf-email" className={labelCls}>E-mail <span className="text-red-400" aria-hidden="true">*</span></label>
                        <input id="bf-email" type="email" required placeholder="jan@firma.pl" value={form.email} onChange={set("email")} className={inputCls} autoComplete="email" />
                      </div>
                      <div>
                        <label htmlFor="bf-phone" className={labelCls}>Telefon</label>
                        <input id="bf-phone" type="tel" placeholder="+48 600 000 000" value={form.phone} onChange={set("phone")} className={inputCls} autoComplete="tel" />
                      </div>
                      <div>
                        <label htmlFor="bf-company" className={labelCls}>Firma / marka</label>
                        <input id="bf-company" type="text" placeholder="Nazwa firmy" value={form.company} onChange={set("company")} className={inputCls} autoComplete="organization" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="bf-type" className={labelCls}>Rodzaj projektu <span className="text-red-400" aria-hidden="true">*</span></label>
                        <select id="bf-type" required value={form.type} onChange={set("type")}
                          className={inputCls + " appearance-none cursor-pointer"} aria-required="true">
                          <option value="">Wybierz...</option>
                          <option>Nowa strona WWW</option>
                          <option>Sklep internetowy</option>
                          <option>Landing page</option>
                          <option>Modernizacja strony</option>
                          <option>Audyt strony</option>
                          <option>SEO / Pozycjonowanie</option>
                          <option>Branding / Logo</option>
                          <option>Inne</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="bf-budget" className={labelCls}>Budżet</label>
                        <select id="bf-budget" value={form.budget} onChange={set("budget")}
                          className={inputCls + " appearance-none cursor-pointer"}>
                          <option value="">Wybierz...</option>
                          <option>do 3 000 zł</option>
                          <option>3 000 – 7 000 zł</option>
                          <option>7 000 – 15 000 zł</option>
                          <option>15 000 – 30 000 zł</option>
                          <option>powyżej 30 000 zł</option>
                          <option>Nie wiem / do ustalenia</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="bf-deadline" className={labelCls}>Kiedy potrzebujesz gotowej strony?</label>
                      <input id="bf-deadline" type="text" placeholder="np. koniec czerwca 2025, ASAP, nie ma presji" value={form.deadline} onChange={set("deadline")} className={inputCls} />
                    </div>

                    <div className="mb-8">
                      <label htmlFor="bf-desc" className={labelCls}>Opisz projekt <span className="text-red-400" aria-hidden="true">*</span></label>
                      <textarea id="bf-desc" required rows={5} placeholder="Czym zajmuje się Twoja firma? Dla kogo jest strona? Co chcesz osiągnąć? Im więcej szczegółów, tym trafniejsza wycena."
                        value={form.description} onChange={set("description")} className={inputCls + " resize-none"} />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm mb-4" role="alert">Coś poszło nie tak. Spróbuj ponownie lub napisz na kontakt@buildlab.pl.</p>
                    )}

                    <button type="submit" disabled={status === "sending"}
                      className="w-full rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-base font-semibold text-white transition-all glow-btn flex items-center justify-center gap-2">
                      {status === "sending" ? "Wysyłanie…" : "Wyślij brief — bezpłatnie"}
                      {status !== "sending" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="glass rounded-3xl p-6 sticky top-28">
                <h3 className="font-bold text-white text-lg mb-5">Co dalej?</h3>
                <div className="space-y-5">
                  {[
                    { n: "1.", t: "Otrzymujemy Twój brief", d: "Analizujemy wszystkie szczegóły." },
                    { n: "2.", t: "Wracamy w jeden dzień roboczy", d: "Wstępna wycena + propozycja koncepcji." },
                    { n: "3.", t: "Spotkanie online", d: "30 min — odpowiadamy na pytania." },
                    { n: "4.", t: "Podpisujemy umowę", d: "Stała stawka, jasny harmonogram." },
                  ].map(step => (
                    <div key={step.t} className="flex gap-3">
                      <span className="text-2xl font-black grad-text-blue leading-none flex-shrink-0">{step.n}</span>
                      <div>
                        <p className="font-semibold text-white text-sm mb-0.5">{step.t}</p>
                        <p className="text-slate-500 text-xs">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs text-slate-500 mb-2">Wolisz porozmawiać?</p>
                  <a href="tel:+48792350450" className="font-bold text-white text-xl hover:text-blue-300 transition-colors block">+48 792 350 450</a>
                  <p className="text-xs text-slate-500 mt-3">lub <a href="mailto:kontakt@buildlab.pl" className="text-blue-400 hover:text-blue-300 transition-colors">kontakt@buildlab.pl</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
