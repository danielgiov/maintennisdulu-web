import { socials } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Main Tennis Dulu",
    slogan: "Enjoy Kemudian",
    description:
      "Komunitas tennis untuk semua level: main bareng, event, turnamen, dan coaching.",
    sport: "Tennis",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-dark.png`,
    areaServed: "Jakarta, Indonesia",
    // hanya link yang sudah diisi URL asli yang ikut
    sameAs: socials.map((s) => s.href).filter((h) => h.startsWith("http")),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}