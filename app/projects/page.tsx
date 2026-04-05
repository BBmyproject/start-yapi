import type { Metadata } from "next";
import { ProjectsGridSection } from "@/components/projects-grid-section";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Start Yapı tamamlanan ve yürüttüğü konut, rezidans ve ticari projeler.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <ProjectsGridSection
        heading="Projelerimiz"
        headingLevel="h1"
        id="projects-heading"
      />
    </main>
  );
}
