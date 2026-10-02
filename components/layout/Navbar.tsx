"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { KUYY_URL, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <Container className="flex items-center justify-between py-4">
        <Link href="#beranda" aria-label="Main Tennis Dulu, ke beranda">
          <Image
            src="/images/logo.png"
            alt="Main Tennis Dulu"
            width={110}
            height={72}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`border-b-2 pb-1 transition-colors hover:text-lime-soft ${
                    i === 0 ? "border-gold text-gold" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button href={KUYY_URL} variant="dark" className="hidden lg:inline-flex">
          Booking di Kuyy.id
        </Button>

        <button
          type="button"
          className="rounded-full p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navigasi mobile"
          className="bg-forest-950/95 backdrop-blur lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Button href={KUYY_URL} className="mt-3">
              Booking di Kuyy.id
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
