import { PiWhatsappLogo } from "react-icons/pi";
import { siteContact } from "@/data/site-contact";

export function WhatsAppFloat() {
  return (
    <a
      href={siteContact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
      aria-label="WhatsApp ile yazın"
    >
      <PiWhatsappLogo className="h-8 w-8" aria-hidden />
    </a>
  );
}
