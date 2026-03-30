import Link from "next/link";

const cards = [
  {
    title: "Kalite ve Dayanıklılık",
    subtitle:
      "Malzeme ve işçilikte kaliteyi esas alır, sağlam ve uzun ömürlü yapılar üretiriz.",
  },
  {
    title: "Yerel Değerlere Saygı",
    subtitle:
      "Bölgenin kültürel ve mimari yapısına uygun projeler geliştirir, yerel istihdamı destekleriz.",
  },
  {
    title: "Sorumluluk ve Etik",
    subtitle:
      "İş sağlığı ve güvenliği önceliğimizdir; tüm süreçleri etik şekilde yürütürüz.",
  },
  {
    title: "Müşteri odaklılık",
    subtitle:
      "İhtiyaçları doğru analiz eder, satış öncesi ve sonrası çözüm odaklı ilerleriz.",
  },
];

export function HomeAboutSection() {
  return (
    <section
      className="bg-white px-4 md:px-10 py-10 md:py-25"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
        <div className="lg:sticky lg:top-(--site-header-offset) lg:self-start">
          <h2
            id="about-heading"
            className="text-3xl tracking-tight text-black md:text-[40px]"
          >
            Biz kimiz ?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#616161] sm:text-lg">
            Giresun ve çevresinde konut ile ticari yapı projelerinde; keşiften teslimata
            kadar tüm aşamaları planlı ve şeffaf biçimde yönetiyoruz. Deneyimli saha
            ekibimiz ve güçlü tedarik ağımızla, söz verdiğimiz kaliteyi ve takvimi
            sahada karşılamayı hedefliyoruz. Her projede güven, ölçülebilir süreçler ve
            uzun vadeli iş birliği anlayışıyla çalışıyoruz.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-black bg-white px-6 py-4 text-center text-base text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Hakkımızda
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          {cards.map((card, index) => {
            const step = index + 1;
            const z = step * 10;
            return (
              <div
                key={card.title}
                className="sticky top-(--site-header-offset) mb-4 last:mb-0"
                style={{ zIndex: z }}
              >
                <article className="rounded-2xl bg-[#f5f5f5] p-6 md:p-8">
                  <p
                    className="w-8 h-8 ro rounded-full flex items-center justify-center bg-black tabular-nums tracking-tight text-white"
                    aria-hidden
                  >
                    {step}
                  </p>
                  <h3 className="mt-6 text-xl tracking-tight text-medium text-black sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#616161] sm:text-base">
                    {card.subtitle}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
