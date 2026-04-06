import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteContact } from "@/data/site-contact";

const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Start Yapı iletişim bilgileri, adres, telefon ve mesaj formu. Bulancak / Giresun.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section
        className="px-4 md:px-10 pt-25 pb-12 md:pb-16"
        aria-labelledby="contact-heading"
      >
        <h1
          id="contact-heading"
          className="text-3xl tracking-tight text-black md:text-[40px] lg:text-5xl"
        >
          İletişim
        </h1>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-4 lg:items-start">
          <div className="order-2 md:order-1">
            <div className="max-w-md space-y-8 text-base text-[#616161]">

              <address className="space-y-8 not-italic">
                <div>
                  <h2 className="text-lg font-medium tracking-tight text-black">
                    {siteContact.headquarters.label}
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    {siteContact.headquarters.name}
                    <br />
                    {siteContact.headquarters.line1}
                    <br />
                    {siteContact.headquarters.line2}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-medium tracking-tight text-black">
                    {siteContact.branch.label}
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    {siteContact.branch.line1}
                    <br />
                    {siteContact.branch.line2}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-medium tracking-tight text-black">
                    {siteContact.salesOffice.label}
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    {siteContact.salesOffice.line1}
                    <br />
                    {siteContact.salesOffice.line2}
                  </p>
                </div>
              </address>

              <div className="space-y-1">
                <a
                  href={siteContact.phoneHref}
                  className="inline-block transition-colors hover:text-black"
                >
                  {siteContact.phoneDisplay}
                </a>
                <br />
                <a
                  href={siteContact.emailHref}
                  className="inline-block transition-colors hover:text-black"
                >
                  {siteContact.email}
                </a>
                <br />
                <a
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-colors hover:text-black"
                >
                  WhatsApp ile yazın
                </a>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-[#f5f5f5] lg:sticky lg:top-(--site-header-offset) order-1 md:order-2">
            <img
              src={heroImage}
              alt="Ofis ve iletişim"
              width={1920}
              height={1080}
              className="object-cover lazy w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section
        className="px-4 md:px-10 pb-20 md:pb-25"
        aria-labelledby="contact-map-heading"
      >
        <h2 id="contact-map-heading" className="sr-only">
          Konum haritası
        </h2>
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f5]">
          <iframe
            title="Start Yapı konumu — Google Haritalar"
            src={siteContact.mapsEmbedUrl}
            className="h-[min(70vh,520px)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
