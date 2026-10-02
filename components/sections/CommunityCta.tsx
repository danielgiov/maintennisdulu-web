import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { JOIN_URL } from "@/lib/data";

export default function CommunityCta() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-12 text-white">
      {/* siluet bola tennis sebagai dekorasi */}
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 size-80 rounded-full bg-forest-800"
      />
      <Container className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-bold italic leading-tight sm:text-4xl">
            <span className="text-gold">Let’s Grow</span>
            <br />
            This Community Together
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/80">
            Ikuti keseruan kami di media sosial dan jadi bagian dari
            perjalanan Main Tennis Dulu.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <SocialLinks />
          <Button href={JOIN_URL} variant="outline" className="px-7 py-3">
            Gabung komunitas
          </Button>
        </div>
      </Container>
    </section>
  );
}
