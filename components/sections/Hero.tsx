import Image from "next/image";
import { CalendarDays, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { JOIN_URL, KUYY_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-forest-950 text-white"
    >
      <Image
        src="/images/bg_head.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-transparent" />

      <Container className="relative pb-40 pt-36 sm:pt-44">
        <h1 className="font-serif italic leading-none">
          <span className="block text-6xl font-bold sm:text-7xl lg:text-8xl">
            Main <span className="text-lime-soft">Tennis</span>
          </span>
          <span className="mt-4 flex max-w-md items-center gap-4 font-sans text-xl not-italic tracking-[0.6em] text-lime-soft sm:text-2xl">
            <span className="h-px flex-1 bg-lime-soft" />
            <span className="pl-[0.6em]">DULU</span>
            <span className="h-px flex-1 bg-lime-soft" />
          </span>
          <span className="mt-2 block max-w-md text-center font-script text-3xl not-italic text-gold sm:text-4xl">
            Enjoy Kemudian
          </span>
        </h1>

        <p className="mt-8 max-w-md text-sm leading-relaxed sm:text-base">
          <strong className="block font-semibold">
            Komunitas tennis untuk semua.
          </strong>
          Main bareng, ikutan event, dapat coaching, abadikan momen, dan
          nikmati sport lifestyle bersama.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            href={KUYY_URL}
            icon={<CalendarDays className="size-4" aria-hidden />}
          >
            Booking di Kuyy.id
          </Button>
          <Button
            href={JOIN_URL}
            variant="outline"
            arrow={false}
            icon={<Users className="size-4" aria-hidden />}
          >
            Gabung komunitas
          </Button>
        </div>

        {/* <p
          aria-hidden
          className="absolute right-8 top-44 hidden -rotate-6 font-script text-3xl leading-tight lg:block"
        >
          More People
          <br />
          More Tennis
          <br />
          More Stories
          <span className="mt-1 block h-0.5 w-32 -rotate-3 bg-gold" />
        </p> */}
      </Container>
    </section>
  );
}
