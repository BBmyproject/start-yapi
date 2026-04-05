"use client";

import Image from "next/image";
import { useId, useState } from "react";

type ServiceTab = "alt-yapi" | "ust-yapi" | "gorsel";

const tabs: { id: ServiceTab; label: string }[] = [
  { id: "alt-yapi", label: "Alt Yapı" },
  { id: "ust-yapi", label: "Üst Yapı" },
  { id: "gorsel", label: "3D Görselleştirme" },
];

const panels: Record<
  ServiceTab,
  {
    image: string;
    imageAlt: string;
    cardTitle: string;
    cardBody: string;
  }
> = {
  "alt-yapi": {
    image:
      "images/alt-yapi.jpg",
    imageAlt: "Şantiyede temel ve betonarme çalışması",
    cardTitle: "Sağlam temel, güvenli ilerleyiş",
    cardBody:
      "Kazı, temel, perde beton ve drenaj hatlarını zemin koşullarına ve projeye özel olarak planlıyoruz. Altyapı tesisatlarını üst yapıyla uyumlu şekilde koordine ederek sahada aksama yaşanmamasını hedefliyoruz.",
  },
  "ust-yapi": {
    image:
      "images/lotus-1.jpeg",
    imageAlt: "Üst yapı inşaatı ve iskele görünümü",
    cardTitle: "Taşıyıcı sistemden cepheye kadar",
    cardBody:
      "Betonarme karkas, örme duvarlar, çatı ve cephe katmanlarını program ve kalite kontrol adımlarıyla yürütüyoruz. İş güvenliği ve malzeme standartlarına uygun, denetlenebilir bir üretim süreci sunuyoruz.",
  },
  gorsel: {
    image:
      "images/3d.jpg",
    imageAlt: "Modern iç mekan ve mimari görselleştirme",
    cardTitle: "Fikrinizi net ve ikna edici görsellere dönüştürün",
    cardBody:
      "Mimari ve iç mekân görselleri, malzeme–ışık alternatifleri ve sunum paketleriyle projenizi henüz yapım aşamasındayken paydaşlarınıza anlaşılır şekilde aktarmanızı sağlıyoruz.",
  },
};

export function HomeServicesSection() {
  const [active, setActive] = useState<ServiceTab>("alt-yapi");
  const baseId = useId();
  const content = panels[active];

  return (
    <section
      className="bg-white px-4 md:px-10 py-10"
      aria-labelledby={`${baseId}-heading`}
    >
      <div>
        <h2
          id={`${baseId}-heading`}
          className="text-3xl md:text-[40px] tracking-tight"
        >
          Hizmetlerimiz
        </h2>

        <div
          className="mt-10 flex md:flex-row flex-col gap-4 sm:mt-12"
          role="tablist"
          aria-label="Hizmet kategorileri"
        >
          {tabs.map((tab) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={`relative flex-1 text-center text-xl md:text-[33px] p-8 rounded-2xl md:rounded-4xl tracking-wide cursor-pointer transition-[background-color,color,transform,box-shadow] duration-300 ease-out hover:brightness-[1.02] active:scale-[0.99] ${
                  selected ? "bg-black text-white shadow-md" : "bg-[#f5f5f5]"
                }`}
              >
                {tab.label}

              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-4"
        >
          <div
            key={active}
            className="animate-services-panel relative aspect-3/6 w-full overflow-hidden rounded-2xl md:aspect-21/9"
          >
            <img
              src={content.image}
              alt={content.imageAlt}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover lazy w-full h-full"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_55%)] md:bg-[linear-gradient(to_right,transparent_40%,rgba(0,0,0,0.2))]"
              aria-hidden
            />
            <div className="absolute left-4 top-4 right-4 md:right-0 md:max-w-[min(100%,22rem)] rounded-xl bg-[#f5f5f5] p-5 sm:left-6 sm:top-6 sm:p-6 md:left-8 md:top-8 md:p-8">
              <h3 className="text-lg font-semibold leading-snug text-black sm:text-xl">
                {content.cardTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base">
                {content.cardBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
