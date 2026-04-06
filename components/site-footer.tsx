import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { PiLinkedinLogo } from "react-icons/pi";
import { siteContact } from "@/data/site-contact";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/projects", label: "Projeler" },
  { href: "/contact", label: "İletişim" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/startyapiend.as/",
    icon: (
      <PiInstagramLogo className="w-6 h-6" />
    ),
  }
];

export function SiteFooter() {
  return (
    <footer className="px-4 md:px-10 py-5 md:py-10">
      <div className="bg-[#f5f5f5] p-8 rounded-4xl grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="w-fit"
          >
            <img
              src="/images/logo.png"
              alt="Start Yapı"
              width={200}
              height={56}
              className="h-10 w-auto"
            />
          </Link>

          <p className="max-w-md leading-snug tracking-tight text-black">
            Start Yapı Endüstrisi Anonim Şirketi
          </p>

          <div className="max-w-md space-y-4 leading-relaxed text-[#616161]">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-black/70">
                {siteContact.branch.label}
              </p>
              <p className="mt-1">
                {siteContact.branch.line1}
                <br />
                {siteContact.branch.line2}
              </p>
            </div>
            <p>
              <a
                href={siteContact.phoneHref}
                className="text-[#616161] transition-colors hover:text-black"
              >
                {siteContact.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={siteContact.emailHref}
                className="text-[#616161] transition-colors hover:text-black"
              >
                {siteContact.email}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-black transition-colors duration-300 hover:border-black"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col justify-end lg:min-h-px">
          <nav
            className="flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-3"
            aria-label="Alt bilgi menüsü"
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
        </div>
      </div>
    </footer>
  );
}

