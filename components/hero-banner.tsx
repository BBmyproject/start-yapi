
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000";

export function HeroBanner() {
  return (
    <section className="relative md:h-screen w-full overflow-hidden pt-19 md:pt-25 px-4 md:px-10 pb-10 ">
      <div className="relative z-10 flex md:flex-row flex-col h-full w-full rounded-2xl">
        <img
          src={heroImage}
          alt="İnşaat ve konut projesi görseli"
          width={1920}
          height={1080}
          className="object-cover lazy w-full h-full rounded-2xl"
        />
        <div className="animate-hero-fade-up md:absolute md:bottom-5 md:left-5 md:max-w-[50%] rounded-xl bg-white md:px-8 py-8 pb-0 md:pb-8">
          <h1 className="leading-tight tracking-tight text-black text-3xl md:text-4xl lg:text-5xl lg:leading-[1.25]">
            Start Yapı<br /> Endüstrisi<br /> Anonim Şirketi
          </h1>
          <p className="mt-4 text-[#616161] text-base">
            Güçlü referansları ve deneyimli kadrosuyla<br /> inşaat sektöründe fark yaratıyor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-black bg-black px-6 py-4 text-center text-base text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Projelerimiz
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-black bg-white px-6 py-4 text-center text-base text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Daha fazla
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
