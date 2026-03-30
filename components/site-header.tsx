"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/projects", label: "Projeler" },
  { href: "/contact", label: "İletişim" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="relative mx-auto flex w-full items-center px-4 py-5 md:px-8">
        <Link
          href="/"
          className="relative z-60 shrink-0"
        >
          <img
            src="/images/logo.png"
            alt="Start Yapı"
            width={180}
            height={48}
            className="h-9 md:h-14 w-auto"
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-10"
          aria-label="Ana menü"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative inline-block py-2 text-base text-black"
            >
              {item.label}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-black opacity-0 transition-[width,opacity] duration-300 ease-out group-hover:w-full group-hover:opacity-100"
              />
            </Link>
          ))}
        </nav>

        <div className="relative z-60 ml-auto hidden shrink-0 md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-black px-6 py-4 text-base transition-all duration-300 hover:bg-black hover:text-white"
          >
            İletişime Geç
          </Link>
        </div>

        <button
          type="button"
          className="relative z-60 ml-auto flex h-8 w-8 shrink-0 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="relative block h-2.5 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 block h-px w-full origin-center rounded-full bg-black transition-all duration-300 ease-out ${
                menuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-px w-full origin-center rounded-full bg-black transition-all duration-300 ease-out ${
                menuOpen
                  ? "bottom-1/2 translate-y-1/2 -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </span>
        </button>

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          className={`absolute left-0 right-0 top-full z-40 overflow-hidden bg-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] md:hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
            menuOpen
              ? "pointer-events-auto max-h-128 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col gap-12 px-4 py-6"
            aria-label="Mobil ana menü"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-center"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-black bg-black px-6 py-4 text-center text-base text-white transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              İletişime Geç
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

