import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { events } from "@/lib/data";

export default function Events() {
  return (
    <section id="event" className="border-t border-forest-900/10 py-14">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-bold italic sm:text-4xl">
            Event & Kegiatan Terbaru
          </h2>
          <Link
            href="#event"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold hover:underline sm:inline-flex"
          >
            Lihat semua event <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-7 grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <li
              key={e.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-forest-900/5"
            >
              <div className="relative aspect-[2/1]">
                <Image
                  src={e.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <p className="absolute left-3 top-3 rounded-lg bg-white px-3 py-1.5 text-center leading-none">
                  <span className="block text-xl font-extrabold">{e.day}</span>
                  <span className="text-[10px] font-semibold uppercase">
                    {e.month}
                  </span>
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{e.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-forest-900/70">
                  <MapPin className="size-3.5" aria-hidden />
                  {e.place}
                </p>
                <p className="mt-2 text-xs font-medium">
                  {e.type}
                  <span className="mx-2 text-gold">|</span>
                  {e.level}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
