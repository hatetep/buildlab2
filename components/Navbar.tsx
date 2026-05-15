"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Usługi",    href: "/uslugi" },
  { label: "Realizacje",href: "/realizacje" },
  { label: "Cennik",    href: "/cennik" },
  { label: "Blog",      href: "/blog" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#040913]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#040913]/70 backdrop-blur-md border-b border-white/5"
      }`}
      aria-label="Nawigacja główna"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-xl" aria-label="BuildLab — strona główna">
          <span
            className="inline-flex w-8 h-8 rounded-lg bg-blue-600 items-center justify-center text-white text-sm font-black"
            style={{ boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
          >
            BL
          </span>
          <span className="text-white">Build<span className="grad-text-blue">Lab</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-400" role="list">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/wycen-projekt"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          Wycena projektu
        </a>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-white p-2"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/5 bg-[#040913]/95 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white py-1 transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/wycen-projekt" className="mt-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white text-center" onClick={() => setOpen(false)}>
            Wycena projektu
          </a>
        </div>
      )}
    </nav>
  );
}
