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
};

export const projects: Project[] = [
  {
    slug: "bulancak-park-evleri",
    title: "Bulancak Park Evleri",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "Bulancak konut projesi cephe görünümü",
    summary:
      "Yeşil alan odaklı düşük katlı konut bloğu; sosyal donatılar ve otopark planlamasıyla tamamlanmış teslim.",
    stats: [
      { label: "Başlangıç Tarihi:", value: "10 Haziran 2021" },
      { label: "Bitiş Tarihi:", value: "20 Nisan 2023" },
      { label: "Daire Sayısı:", value: "28" },
      { label: "Daire Türleri:", value: "3+1 ve 2+1" },
    ],
    body:
      "Bulancak Park Evleri, yeşil peyzaj ve yaya öncelikli iç yollarıyla konforlu bir site deneyimi sunacak şekilde konumlandırıldı. Taşıyıcı sistemde betonarme karkas tercih edildi; cephelerde ısı yalıtımlı dış cephe sistemi ve yağmur suyu yönetimi entegre edildi. Ortak alanlarda çocuk oyun grubu, açık oturma üniteleri ve bisiklet parkları yer alıyor.\n\nTeslim öncesi tüm dairelerde nem, sıva ve zemin kontrolleri yapıldı; mekanik tesisat testleri tutanaklı şekilde tamamlandı. Yatırımcılara anahtar teslim sürecinde teknik dosya ve garanti belgeleri teslim edilirken, satış sonrası ilk yıl içinde oluşan ayıplar için destek hattı aktif tutuldu.",
    floorPlans: [
      {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
        alt: "Bulancak Park Evleri A tipi kat planı şeması",
      },
      {
        src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200",
        alt: "Bulancak Park Evleri B tipi kat planı şeması",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
        alt: "Bulancak Park Evleri ortak alan kat planı",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600566753090-83e48ab243b8?auto=format&fit=crop&q=80&w=1600",
        alt: "Proje cephe ve çevre düzenlemesi",
      },
      {
        src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=1600",
        alt: "Bahçe ve peyzaj görünümü",
      },
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1600",
        alt: "Bina giriş ve otopark kotu",
      },
    ],
  },
  {
    slug: "giresun-sahil-rezidans",
    title: "Giresun Sahil Rezidans",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "Sahil hattında modern rezidans",
    summary:
      "Deniz manzaralı daire tipleri, güçlü yalıtım ve deprem yönetmeliğine uygun taşıyıcı sistem.",
    stats: [
      { label: "Başlangıç Tarihi:", value: "3 Mart 2020" },
      { label: "Bitiş Tarihi:", value: "18 Ocak 2022" },
      { label: "Daire Sayısı:", value: "36" },
      { label: "Daire Türleri:", value: "4+1, 3+1 ve dubleks" },
    ],
    body:
      "Giresun Sahil Rezidans, sahil şeridine paralel konumuyla güneş alan cephe düzenine sahiptir. Daire içlerinde geniş balkonlar, ankastre beyaz eşya altyapısı ve yerden ısıtma opsiyonu sunulmuştur. Binada jeneratör ve asansör hatları yönetmelik gerekliliklerine göre projelendirildi.\n\nCephede cam sistemleri ve doğal havalandırma menfezleri ile enerji verimliliği hedeflenmiş; su yalıtımı ve çatı dere suyu hatları ömür boyu bakım planıyla tanımlanmıştır. Teslim sonrası site yönetimi devri ve güvenlik sistemlerinin devreye alınması teknik ekibimiz gözetiminde gerçekleştirilmiştir.",
    floorPlans: [
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200",
        alt: "Sahil Rezidans standart kat planı",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
        alt: "Sahil Rezidans dubleks alt kat planı",
      },
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200",
        alt: "Sahil Rezidans dubleks üst kat planı",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dceabfe24?auto=format&fit=crop&q=80&w=1600",
        alt: "Rezidans dış cephe",
      },
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600",
        alt: "Lobi ve giriş alanı",
      },
    ],
  },
  {
    slug: "kemaliye-is-hanlari",
    title: "Kemaliye İş Hanları",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "Ticari yapı ve ofis cephesi",
    summary:
      "Bölgesel ticaret merkezi ihtiyacına yönelik mağaza ve ofis birimleri; esnek planlama ve erişilebilirlik.",
    stats: [
      { label: "Başlangıç Tarihi:", value: "1 Eylül 2019" },
      { label: "Bitiş Tarihi:", value: "12 Mayıs 2021" },
      { label: "Birim Sayısı:", value: "42 mağaza & ofis" },
      { label: "Tip:", value: "Depo üstü mağaza ve ofis" },
    ],
    body:
      "Kemaliye İş Hanları, yaya yoğunluğunun yüksek olduğu aks üzerinde mağaza geniş cephelerle kurgulandı. Üst katta ofis modülleri bölünebilir duvar sistemiyle esnek kiralama opsiyonu sunuyor. Yangın merdivenleri, sprink altyapısı ve yangın dedektör ağı projede standart olarak yer aldı.\n\nYükleme alanları ve servis koridorları trafiği ayıran ayrı bir hat üzerinden planlandı. Enerji tüketimini izlemek için ortak alan aydınlatmasında led armatürler ve hareket sensörleri kullanıldı.",
    floorPlans: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        alt: "İş hanı zemin kat ticari planı",
      },
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
        alt: "İş hanı ofis katı planı",
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
        alt: "İş hanı çatı kotu teknik alan",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
        alt: "Ticari cephe tamamlandığında görünüm",
      },
      {
        src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1600",
        alt: "Mağaza içi teslim görünümü",
      },
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
        alt: "Ortak otopark ve servis girişi",
      },
    ],
  },
  {
    slug: "yavuzkemal-kentsel-donusum",
    title: "Yavuzkemal Kentsel Dönüşüm",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "İnşaat sahası ve yenileme çalışması",
    summary:
      "Hak sahipleriyle koordineli sözleşme ve inşaat programı; geçici konut sürecinde şeffaf raporlama.",
    stats: [
      { label: "Başlangıç Tarihi:", value: "15 Kasım 2020" },
      { label: "Bitiş Tarihi:", value: "8 Ağustos 2024" },
      { label: "Yeni Konut Sayısı:", value: "64" },
      { label: "Daire Türleri:", value: "2+1 ve 3+1" },
    ],
    body:
      "Yavuzkemal kentsel dönüşüm projesi, hak sahipleriyle imzalanan revocable olmayan sözleşme çerçevesinde ilerletildi. Geçici konut ve kira yardımı süreçleri aylık brifinglerle paylaşıldı. Parselde blok yerleşimleri güneş, rüzgâr ve mahremiyet analizleriyle optimize edildi.\n\nStatik güçlendirme kararları bağımsız denetim kuruluşu raporlarıyla uyumlu biçimde hayata geçirildi. Teslimde hak sahiplerine kat irtifakı ve tapu süreçlerine yönelik danışmanlık paketi sunuldu.",
    floorPlans: [
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
        alt: "Kentsel dönüşüm tip A blok kat planı",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
        alt: "Kentsel dönüşüm tip B blok kat planı",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&q=80&w=1200",
        alt: "Yeşil alan ve otopark kotu yerleşim planı",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600",
        alt: "Şantiye ilerleme görüntüsü",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600",
        alt: "Betonarme karkas aşaması",
      },
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
        alt: "Teslime yakın iç mekân örnek daire",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
