import type { Metadata } from "next";
import { ProjectFloorPlansFancybox } from "@/components/project-floor-plans-fancybox";
import { IoChevronDownOutline } from "react-icons/io5";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const bodyParagraphs = project.body.split(/\n\n+/).filter(Boolean);

  return (
    <main className="bg-white">
      <div className="px-4 md:px-10 pt-19 md:pt-25 pb-10 md:pb-16 h-screen">
        <div className="relative w-full overflow-hidden rounded-2xl h-full">
          <img
            src={project.image}
            alt={project.imageAlt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className={
              slug === "lotus-evleri"
                ? "h-full w-full object-cover object-top"
                : "h-full w-full object-cover"
            }
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 gap-4 rounded-2xl bg-white px-5 py-6">
            <h1 className="text-3xl tracking-tight text-black sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="px-4 md:px-10 pb-10 md:pb-20 md:pb-25">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-24 lg:z-10 lg:self-start">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.stats.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl bg-[#f5f5f5] p-6 md:p-8"
                >
                  <p className="text-sm leading-snug text-[#616161]">{row.label}</p>
                  <p className="mt-3 text-lg font-medium leading-snug tracking-tight text-black md:text-xl">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-4 leading-relaxed text-[#616161]">
              {bodyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {project.floorPlans.length > 0 ? (
              <details className="group mt-10 rounded-2xl border border-black/10 bg-white open:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-medium text-black outline-none transition-colors marker:content-none [&::-webkit-details-marker]:hidden md:text-lg">
                  Kat planları
                  <IoChevronDownOutline
                    className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-black/10 px-6 pb-6 pt-4">
                  <ProjectFloorPlansFancybox plans={project.floorPlans} />
                </div>
              </details>
            ) : null}
          </div>
        </div>

        {project.gallery.length > 0 ? (
          <div className="mt-8 md:mt-12">
            <h2 className="sr-only">Proje görselleri</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {project.gallery.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#f5f5f5]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {project.portraitGallery && project.portraitGallery.length > 0 ? (
          <div className="mt-8 md:mt-12">
            <h2 className="sr-only">Proje dikey görselleri</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {project.portraitGallery.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f5f5f5]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </main>
  );
}
