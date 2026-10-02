import Image from "next/image";
import { CircleCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { aboutPoints } from "@/lib/data";

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/image2.jpg"
            alt="Raket dan bola tennis di lapangan"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-cream px-5 py-3">
            <p className="text-xs text-forest-700">Lebih dari</p>
            <p className="text-2xl font-extrabold">500+</p>
            <p className="text-xs text-forest-700">Pemain aktif</p>
          </div>
        </div>

        <div>
          <p className="font-script text-2xl text-gold">Tentang Kami</p>
          <h2 className="mt-1 font-serif text-4xl font-bold italic leading-tight sm:text-5xl">
            Bukan Sekadar
            <br />
            Main Tennis
          </h2>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-forest-900/80 sm:text-base">
            Main Tennis Dulu adalah komunitas yang bergerak untuk mengajak
            lebih banyak orang menikmati tenis. Kami percaya tennis bukan
            hanya tentang menang, tapi tentang kesehatan, pertemanan, dan
            cerita yang tercipta di setiap pertandingan.
          </p>
          <ul className="mt-7 grid gap-3 border-t border-forest-900/10 pt-6 text-sm font-medium sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CircleCheck className="size-4 text-forest-700" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
