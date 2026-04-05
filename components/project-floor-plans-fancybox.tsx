"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect, useRef } from "react";
import type { ProjectImage } from "@/data/projects";

const SELECTOR = '[data-fancybox="kat-planlari"]';

type Props = {
  plans: ProjectImage[];
};

export function ProjectFloorPlansFancybox({ plans }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    Fancybox.bind(root, SELECTOR, {
      Carousel: {
        transition: "fade",
      },
      dragToClose: true,
      hideScrollbar: true,
    });

    return () => {
      Fancybox.unbind(root, SELECTOR);
      Fancybox.close();
    };
  }, [plans]);

  return (
    <div ref={rootRef} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {plans.map((plan) => (
        <a
          key={plan.src}
          href={plan.src}
          data-fancybox="kat-planlari"
          data-caption={plan.alt}
          className="relative block aspect-3/4 cursor-pointer overflow-hidden rounded-xl bg-[#f5f5f5] outline-none transition-opacity hover:opacity-95 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <img
            src={plan.src}
            alt={plan.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
