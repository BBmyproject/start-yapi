import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { projects } from "@/data/projects";

type ProjectsGridSectionProps = {
  heading: string;
  /** Projeler listesi sayfasında h1, anasayfada h2 */
  headingLevel?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function ProjectsGridSection({
  heading,
  headingLevel = "h2",
  id = "projects-grid-heading",
  className = "px-4 md:px-10 pt-19 md:pt-25 pb-16 md:pb-20",
}: ProjectsGridSectionProps) {
  const HeadingTag = headingLevel;

  return (
    <section className={className} aria-labelledby={id}>
      <HeadingTag
        id={id}
        className="text-3xl tracking-tight text-black md:text-[40px] lg:text-5xl"
      >
        {heading}
      </HeadingTag>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#f5f5f5]">
              <img
                src={project.image}
                alt={project.imageAlt}
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-[80vh] object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]"
                aria-hidden
              />

              <div className="pointer-events-none absolute inset-x-4 bottom-4 flex max-sm:opacity-100 items-end justify-between gap-4 rounded-2xl bg-white px-5 py-6 opacity-0 transition-opacity duration-300 ease-out motion-safe:group-hover:opacity-100 motion-reduce:opacity-100 group-focus-visible:opacity-100">
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
  );
}
