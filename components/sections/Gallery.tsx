"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("Semua");
  const items =
    active === "Semua"
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="pb-16">
      <Container>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <h2 className="font-serif text-3xl font-bold italic sm:text-4xl">
            Gallery Komunitas
          </h2>
          <div className="flex flex-wrap gap-1" role="group" aria-label="Filter gallery">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === cat
                    ? "bg-lime-soft font-semibold"
                    : "hover:bg-sand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {items.length === 0 ? (
          <p className="mt-8 text-sm text-forest-900/70">
            Belum ada foto {active}. Coba kategori lain.
          </p>
        ) : (
          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {items.map((g) => (
              <li
                key={g.src}
                className="relative aspect-[6/5] overflow-hidden rounded-xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
