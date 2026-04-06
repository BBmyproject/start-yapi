/** Merkezi iletişim bilgisi — footer, /contact ve WhatsApp */
export const siteContact = {
  companyLine: "Start Yapı Endüstrisi Anonim Şirketi",

  headquarters: {
    label: "Merkez",
    name: "Start Yapı Merkez",
    line1: "Şehit Mustafa Doğan Caddesi 29/C- 28",
    line2: "Çankaya, Ankara",
  },

  branch: {
    label: "Şube",
    line1: "İhsaniye Mahallesi, Uğur Mumcu Caddesi No:43/A",
    line2: "Bulancak, Giresun",
  },

  salesOffice: {
    label: "Satış Ofisi",
    line1: "Güzelyalı Mahallesi, Turkuaz Sokak No:1/1",
    line2: "Bulancak, Giresun",
  },

  /** Konut satışı yalnızca Giresun’da */
  salesRegionNote:
    "Konut satışlarımız yalnızca Giresun ilinde gerçekleştirilmektedir.",

  phoneDisplay: "0545 505 00 55",
  phoneHref: "tel:+905455050055",
  whatsappHref: "https://wa.me/905455050055",

  email: "info@startyapi.com",
  emailHref: "mailto:info@startyapi.com",

  /** Google Haritalar — satış ofisi yakını */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=G%C3%BCzelyal%C4%B1+Mah.+Turkuaz+Sok.+Bulancak+Giresun&z=16&hl=tr&output=embed",
} as const;
