import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-cream text-forest-900">
      <Container className="flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
        <Image
          src="/images/logo-dark.png"
          alt="Main Tennis Dulu"
          width={110}
          height={72}
          className="h-14 w-auto"
        />
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </Container>
      <Container className="flex flex-col gap-1 border-t border-forest-900/10 py-5 text-xs sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Main Tennis Dulu. All rights reserved.</p>
        <p className="italic">More People. More Tennis. More Stories.</p>
      </Container>
    </footer>
  );
}
