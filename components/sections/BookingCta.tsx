import Image from "next/image";
import { Link2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { KUYY_URL } from "@/lib/data";

export default function BookingCta() {
  return (
    <section className="overflow-hidden py-14">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl font-bold italic leading-tight sm:text-5xl">
            Siap Main Tennis
            <br />
            Hari Ini?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-forest-900/80 sm:text-base">
            Untuk pemesanan slot lapangan, mabar, dan coaching sementara kami
            menggunakan <strong>Kuyy.id</strong>. Pilih jadwal yang kamu mau
            dan langsung booking dengan mudah.
          </p>
          <Button
            href={KUYY_URL}
            variant="dark"
            className="mt-7 px-7 py-3.5"
            icon={<Link2 className="size-4" aria-hidden />}
          >
            Booking sekarang di Kuyy.id
          </Button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/application.png"
            alt="Tampilan aplikasi Kuyy.id: slot lapangan, mabar komunitas, dan coaching"
            width={300}
            height={440}
            className="h-auto w-64 sm:w-72"
          />
        </div>
      </Container>
    </section>
  );
}
