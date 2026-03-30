"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    headline: "12+",
    sub: "Yıllık Tecrübe",
    span: "half" as const,
  },
  {
    headline: "60+",
    sub: "Tamamlanmış Proje",
    span: "half" as const,
  },
  {
    headline: "100%",
    sub: "Müşteri Memnuniyeti",
    span: "full" as const,
  },
];

export function HomeStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 md:px-10 py-10 md:py-25"
      aria-labelledby="stats-heading"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="stats-heading"
            className="text-[26px] max-w-md leading-tight text-black md:text-[33px]"
          >
            Profesyonel müteahhitlik çözümleriyle hayallerinizi gerçeğe
            dönüştürüyoruz.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {cards.map((card, index) => {
            const delayMs = index * 130;
            const isWide = card.span === "full";

            return (
              <div
                key={card.sub}
                className={`flex flex-col justify-center items-center bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out ${
                  isWide ? "col-span-2 min-h-[160px] sm:min-h-[180px]" : "min-h-[140px] sm:min-h-[160px]"
                } ${
                  inView
                    ? "translate-y-0 opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                    : "translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                }`}
                style={
                  inView
                    ? { transitionDelay: `${delayMs}ms` }
                    : { transitionDelay: "0ms" }
                }
              >
                <p
                  className={`tracking-tight text-black ${
                    isWide
                      ? "text-4xl sm:text-5xl md:text-5xl"
                      : "text-4xl sm:text-5xl md:text-5xl"
                  }`}
                >
                  {card.headline}
                </p>
                <p className="mt-4 text-[#616161] text-base text-center">
                  {card.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
