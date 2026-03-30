import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Start Yapı tamamlanan ve yürüttüğü konut, rezidans ve ticari projeler.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section
        className="px-4 md:px-10 pt-19 md:pt-25 pb-16 md:pb-20"
        aria-labelledby="projects-heading"
      >
        <h1
          id="projects-heading"
          className="text-3xl tracking-tight text-black md:text-[40px] lg:text-5xl"
        >
          Projelerimiz
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-[#f5f5f5] h-full">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={1920}
                  height={1080}
                  className="lazy object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.06] motion-reduce:group-hover:scale-100 h-[80vh]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]"
                  aria-hidden
                />

                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-2xl bg-white px-5 py-6 opacity-0 transition-opacity duration-300 ease-out motion-safe:group-hover:opacity-100 motion-reduce:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-100">
                  <span className="text-3xl tracking-tight text-black md:text-4xl">
                    {project.title}
                  </span>
                  <span
                    className="grid size-10 shrink-0 place-items-center backdrop-blur-sm transition-colors duration-300"
                    aria-hidden
                  >
                    <IoArrowForwardOutline className="size-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
