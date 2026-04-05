import { HeroBanner } from "@/components/hero-banner";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeServicesSection } from "@/components/home-services-section";
import { HomeStatsSection } from "@/components/home-stats-section";
import { ProjectsGridSection } from "@/components/projects-grid-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <HeroBanner />
      <HomeStatsSection />
      <HomeServicesSection />
      <HomeAboutSection />
      <ProjectsGridSection
        heading="Projelerimiz"
        headingLevel="h2"
        id="home-projects-heading"
        className="px-4 md:px-10 pt-12 pb-16 md:pt-16 md:pb-25"
      />
    </div>
  );
}
