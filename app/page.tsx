import { HeroBanner } from "@/components/hero-banner";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeServicesSection } from "@/components/home-services-section";
import { HomeStatsSection } from "@/components/home-stats-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <HeroBanner />
      <HomeStatsSection />
      <HomeServicesSection />
      <HomeAboutSection />
    </div>
  );
}
