export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  /** Paragraflar; çift satır sonu ile ayrılır */
  body: string;
  stats: ProjectStat[];
  floorPlans: ProjectImage[];
  gallery: ProjectImage[];
  /** Dikey görseller; ana galerinin altında üç sütunlu grid */
  portraitGallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "bati-sitesi",
    title: "Batı Sitesi",
    image: "/images/bati-1.jpeg",
    imageAlt: "Batı Sitesi konut projesi görünümü",
    summary:
      "Güzelyalı’da A, B ve C bloklarıyla ölçülü bir site düzeni; 2018 döneminde tamamlanan sakin ve dengeli bir yaşam alanı.",
    stats: [
      { label: "Başlangıç / Bitiş:", value: "2018" },
      { label: "Konum:", value: "Güzelyalı Mah." },
      { label: "Bloklar:", value: "A, B ve C" },
      { label: "Tip:", value: "Konut sitesi" },
    ],
    body:
      "Batı Sitesi, mahallenin ritmine saygı duyan ama kendi sınırları içinde dingin bir dünya kurmayı hedefleyen bir yerleşim olarak tasarlandı. Üç bloklu yapı, birbirini gereksiz yere büyütmeden ortak bir avlunun etrafında toplanır; günün farklı saatlerinde gölge ve ışık, cepheler üzerinde yumuşak bir hareket oluşturur.\n\nBurada anlatılmak istenen şey fazla sözle değil, boşlukla: genişleyen nefes, tanıdık komşuluk, akşamüstü merdiven başlarında kısalan gölge çizgileri. Proje, belirli bir yılın içinde tamamlanmış olsa da bıraktığı iz, zamana yayılan sade bir mimari duruş; gerektiğinde görünür, çoğu zaman ise arka planda huzurlu bir çerçeve olarak kalır.",
    floorPlans: [
      { src: "/images/bati-kat-1.jpeg", alt: "Batı Sitesi kat planı 1" },
      { src: "/images/bati-kat-2.jpeg", alt: "Batı Sitesi kat planı 2" },
      { src: "/images/bati-kat-3.jpeg", alt: "Batı Sitesi kat planı 3" },
      { src: "/images/bati-kat-4.jpeg", alt: "Batı Sitesi kat planı 4" },
      { src: "/images/bati-kat-5.jpeg", alt: "Batı Sitesi kat planı 5" },
      { src: "/images/bati-kat-6.jpeg", alt: "Batı Sitesi kat planı 6" },
      { src: "/images/bati-kat-7.jpeg", alt: "Batı Sitesi kat planı 7" },
      { src: "/images/bati-kat-8.jpeg", alt: "Batı Sitesi kat planı 8" },
      { src: "/images/bati-kat-9.jpeg", alt: "Batı Sitesi kat planı 9" },
      { src: "/images/bati-kat-10.jpeg", alt: "Batı Sitesi kat planı 10" },
      { src: "/images/bati-kat-11.jpeg", alt: "Batı Sitesi kat planı 11" },
    ],
    gallery: [
      { src: "/images/bati-2.jpeg", alt: "Batı Sitesi proje görseli" },
      { src: "/images/bati-3.jpeg", alt: "Batı Sitesi cephe ve çevre" },
      { src: "/images/bati-4.jpeg", alt: "Batı Sitesi dış mekân" },
      { src: "/images/bati-5.jpeg", alt: "Batı Sitesi bina görünümü" },
      { src: "/images/bati-6.jpeg", alt: "Batı Sitesi genel görünüm" },
    ],
  },
  {
    slug: "lotus-evleri",
    title: "Lotus Evleri",
    image: "/images/lotus-1.jpeg",
    imageAlt: "Lotus Evleri konut projesi",
    summary:
      "2+1, 3+1 ve 4+1 seçenekleri; kapalı otopark ve su deposu ile desteklenen, ferah planlı ve aile yaşamına uygun lüks konut sitesi.",
    stats: [
      { label: "Daire tipleri:", value: "2+1, 3+1 ve 4+1" },
      { label: "Örnek alan (4+1):", value: "140 m²" },
      { label: "Otopark:", value: "Kapalı otopark" },
      { label: "Teknik:", value: "Su deposu" },
    ],
    body:
      "Lotus Evleri, seçkin ve sakin bir yaşam çevresinde konumlanan; geniş iç kullanım alanı, modern mimarisi ve özenli işçiliğiyle hem konforlu bir aile yuvası hem de güçlü bir yatırım seçeneği sunar. 4+1 dairelerde yaklaşık 140 m²’lik ferah planlar; aydınlık odalar, geniş salon, kullanışlı mutfak ve balkon / ebeveyn banyosu–giyinme alanı gibi detaylarla günlük yaşamı kolaylaştırır.\n\n2+1 ve 3+1 seçenekleri de aynı çizgide, ihtiyaca göre ölçeklenir. Site tarafında güvenlikli ve prestijli bir ortam, yeşil alanlar, sosyal donatılar ve kapalı otopark bir arada düşünülmüştür; su deposu ile kesintisiz kullanım desteklenir. Merkezi konumu sayesinde ulaşım, okul, market ve sosyal imkânlara erişim pratik kalır. Detaylı bilgi ve yerinde inceleme için iletişime geçebilirsiniz.",
    floorPlans: [],
    gallery: [
      { src: "/images/lotus-2.jpeg", alt: "Lotus Evleri görünüm" },
      { src: "/images/lotus-3.jpeg", alt: "Lotus Evleri cephe" },
      { src: "/images/lotus-4.jpeg", alt: "Lotus Evleri proje görseli" },
      { src: "/images/lotus-5.jpeg", alt: "Lotus Evleri dış mekân" },
      { src: "/images/lotus-6.jpeg", alt: "Lotus Evleri site görünümü" },
      { src: "/images/lotus-7.jpeg", alt: "Lotus Evleri genel görünüm" },
    ],
    portraitGallery: Array.from({ length: 14 }, (_, i) => ({
      src: `/images/lotus-h-${i + 1}.jpeg`,
      alt: `Lotus Evleri görsel ${i + 1}`,
    })),
  },
  {
    slug: "lotus-harman-evleri",
    title: "Lotus Harman Evleri",
    image: "/images/lotus-harman-1.jpeg",
    imageAlt: "Lotus Harman Evleri, Bulancak Pazarsuyu konut projesi",
    summary:
      "Giresun Bulancak Pazarsuyu’nda denize yakın konumda 2+1 ve 3+1 lüks daireler; modern iç mimari, açık–kapalı otopark ve güçlü yatırım potansiyeli.",
    stats: [
      { label: "Konum:", value: "Bulancak, Pazarsuyu" },
      { label: "Daire tipleri:", value: "2+1 ve 3+1" },
      { label: "Otopark:", value: "Açık ve kapalı" },
      {
        label: "İletişim:",
        value: "0545 505 00 55 · 0543 887 64 39",
      },
    ],
    body:
      "Giresun Bulancak’ta, hayalinizdeki deniz kenarı yaşamı Lotus Harman Evleri ile buluşuyor. Şehrin en prestijli bölgelerinden Pazarsuyu’nda konumlanan bu lüks daireler, eşsiz deniz manzarası ve çağdaş mimarisiyle hem yaşam kalitesi hem yatırım değeri sunuyor. Baştan sona modern ve kaliteli iç mimari, ferah ve aydınlık odalarla günlük konfor ön plandadır.\n\nSahile yürüme mesafesindeki konumu, market, okul ve günlük ihtiyaç noktalarına yakınlığı ile huzurlu bir yaşam alanı vaat eder. Prestijli bir yuva ve yüksek yatırım potansiyelini bir arada arayanlar için özel bir fırsat. Detaylı bilgi ve randevu için iletişime geçebilirsiniz: 0545 505 00 55 veya 0543 887 64 39.\n\nŞube: İhsaniye Mah. Uğur Mumcu Cad. No:44/A, Bulancak. Satış ofisi: Güzelyalı Mah. Turkuaz Sok. No:4.",
    floorPlans: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/lotus-harman-kat-${i + 1}.jpeg`,
      alt: `Lotus Harman Evleri kat planı ${i + 1}`,
    })),
    gallery: Array.from({ length: 10 }, (_, i) => ({
      src: `/images/lotus-harman-${i + 2}.jpeg`,
      alt: `Lotus Harman Evleri görsel ${i + 2}`,
    })),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
