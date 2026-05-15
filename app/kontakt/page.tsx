"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4.5C2 3.67 2.67 3 3.5 3h2.382c.37 0 .694.24.801.595l1.2 4.2a.833.833 0 01-.238.857L6.38 9.714c1.096 2.07 2.835 3.81 4.905 4.905l1.062-1.265a.833.833 0 01.857-.238l4.2 1.2c.354.107.595.43.595.801V16.5c0 .828-.671 1.5-1.5 1.5C7.685 18 2 12.315 2 5.5v-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Telefon",
    value: "+48 792 350 450",
    href: "tel:+48792350450",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-9z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Email",
    value: "kontakt@buildlab.pl",
    href: "mailto:kontakt@buildlab.pl",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Lokalizacja",
    value: "Warszawa / zdalnie",
    href: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Godziny pracy",
    value: "Pon–Pt 9:00–17:00",
    href: null,
  },
];

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY_HERE",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#040913] text-white">

      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 reveal">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Porozmawiajmy{" "}
            <span className="grad-text">o Twoim projekcie</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl reveal">
            Opisz projekt — odpowiemy w jeden dzień roboczy z wyceną lub pytaniami, które pomogą nam dobrze wycenić.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-4 reveal">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-semibold hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 reveal">
              <h3 className="font-semibold mb-3">Czas odpowiedzi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Odpowiadamy na każde zapytanie w ciągu jednego dnia roboczego. Jeśli projekt wymaga wyceny — wrócimy z pytaniami lub gotową wyceną widełkową.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-8 reveal">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L11 19L22 9" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Wiadomość wysłana</h3>
                <p className="text-slate-400 text-sm">
                  Odpowiemy w ciągu jednego dnia roboczego.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">
                    Imię i nazwisko <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jan Kowalski"
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jan@firma.pl"
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-slate-400 mb-1.5">
                    Telefon{" "}
                    <span className="text-slate-600">(opcjonalnie)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+48 500 000 000"
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
                    Wiadomość <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Opisz projekt — rodzaj strony, branża, szacowany zakres..."
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na kontakt@buildlab.pl.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 px-8 py-4 text-base font-semibold text-white transition-all duration-200"
                >
                  {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
