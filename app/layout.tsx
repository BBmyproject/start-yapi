import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-urbanist",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Start Yapı",
    template: "%s | Start Yapı",
  },
  description:
    "Start Yapı Endüstrisi A.Ş. — Giresun Bulancak’ta konut ve inşaat projeleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${urbanist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-black">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
