import type { Metadata } from "next";
import { IoArrowDownOutline } from "react-icons/io5";


const heroImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600";
const lowerImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600";

const valueCards = [
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

const extraValueCards = [
  {
    title: "İnovasyon ve süreklilik",
    subtitle:
      "Gelişen teknoloji ve yönetmeliklere uyum sağlayarak projelerimizi güncel yöntemlerle planlar, sürdürülebilir ve verimli uygulamalar öneririz.",
  },
  {
    title: "Şeffaflık ve iletişim",
    subtitle:
      "İlerleme, maliyet ve riskleri düzenli paylaşır; yatırımcı ve paydaşlarla açık iletişimle karar süreçlerini birlikte yürütürüz.",
  },
];

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Start Yapı Endüstrisi A.Ş. — Giresun Bulancak’ta konut ve inşaat; deneyim, kalite ve güven odaklı çalışma anlayışımız.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section
        className="px-4 md:px-10 pt-18 md:pt-25 pb-6 md:pb-10 lg:h-screen"
        aria-labelledby="about-page-hero-heading"
      >
        <div className="grid lg:grid-cols-2 lg:items-start gap-12 lg:gap-4 h-full">
          <div className="flex flex-col justify-between order-2 lg:order-1 h-full">
            <div className="flex flex-col justify-between gap-4">
              <h1
                id="about-page-hero-heading"
                className="text-3xl tracking-tight text-black md:text-[40px] lg:text-5xl"
              >
                Start Yapı
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#616161] max-w-xl">
                <p>
                  Start Yapı Endüstrisi Anonim Şirketi olarak, faaliyet gösterdiğimiz bölgede, insanların kendilerini güvende ve huzurlu hissedecekleri yaşam alanları oluşturmayı temel görevimiz olarak görüyoruz. Yerel mimari dokuya, kültürel değerlere ve çevresel hassasiyetlere saygılı bir anlayışla; sağlam, kaliteli ve estetik konut projeleri geliştiriyoruz.
                </p>
                <p>
                  Tüm projelerimizde mühendislik disiplinlerinden ödün vermeden, yürürlükteki mevzuatlara ve deprem yönetmeliklerine tam uyum sağlayarak, uzun ömürlü ve güvenilir yapılar inşa etmeyi ilke ediniyoruz. İnşaat sürecinin her aşamasında şeffaflık, dürüstlük ve etik değerleri esas alarak müşterilerimizle güvene dayalı ilişkiler kuruyoruz.
                  <br /><br />
                  Amacımız; kaliteli yaşam standartlarını yükselten, ailelerin mutlu ve güvenli bir şekilde yaşayabileceği konutlar üreterek, bulunduğumuz şehirde güvenilen ve tercih edilen bir marka olmaktır.
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <IoArrowDownOutline className="w-6 h-6" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[70vh] w-full overflow-hidden rounded-2xl lg:h-full">
            <img
              src={heroImage}
              alt="İnşaat sahası ve yapı çalışması"
              className="lazy object-cover w-full h-full rounded-4xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section
        className="px-4 md:px-10 py-10 md:py-25"
        aria-labelledby="about-values-heading"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pb-12">
          <h2 id="about-values-heading" className="text-3xl md:text-4xl tracking-tight text-black">
            Bizim Önceliklerimiz
          </h2>
          <p className="text-[#616161] max-w-xl">
            Türkiye’nin yapı sektöründe güvenin simgesi haline gelmek ve &quot;Start Yapı&quot; imzasını taşıyan her yapıda insanların huzurla yaşayacağı bir gelecek tasarlamak.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="relative order-2 w-full overflow-hidden rounded-2xl h-full">
            <img
              src={lowerImage}
              alt="Mimari detay ve yapı cephesi"
              className="lazy object-cover w-full h-full rounded-4xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:order-2">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl bg-[#f5f5f5] p-6 md:p-8"
              >
                <p
                  className="text-3xl"
                  aria-hidden
                >
                  *
                </p>
                <h3 className="mt-4 text-2xl tracking-tight text-black sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#616161]">
                  {card.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
          {extraValueCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-[#f5f5f5] p-6 md:p-8"
            >
              <p className="text-3xl" aria-hidden>
                *
              </p>
              <h3 className="mt-4 text-2xl tracking-tight text-black sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#616161]">{card.subtitle}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
