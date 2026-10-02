import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { features } from "@/lib/data";

export default function Discover() {
  return (
    <section id="komunitas" className="bg-forest-900 py-14 text-white">
      <Container>
        <h2 className="flex items-center gap-4 font-serif text-3xl italic sm:text-4xl">
          Apa yang Bisa Kamu Temukan?
          <span className="hidden h-0.5 w-16 bg-gold sm:block" />
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex flex-col overflow-hidden rounded-xl bg-cream text-forest-900"
            >
              {/* <div className="relative aspect-[5/4]">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div> */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="flex items-center gap-2 font-bold">
                  <FeatureIcon name={f.icon} className="size-5" />
                  {f.title}
                </h3>
                <p className="mb-4 mt-2 text-xs leading-relaxed text-forest-900/75">
                  {f.desc}
                </p>
                <Button href={f.href} className="mt-auto w-full py-2 text-xs">
                  {f.cta}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
