// Semua konten halaman ada di sini supaya komponen tetap bersih.
// Nanti tinggal diganti dengan fetch dari API/CMS.

export const KUYY_URL = "https://kuyy.id/users/maintenisdulu"; // TODO: ganti dengan link booking sebenarnya
export const JOIN_URL = "https://chat.whatsapp.com/CdaxTOIkU1k5KcFmHhB2B2?s=cl&p=i&mlu=4&ilr=4"; // TODO: link grup WhatsApp komunitas

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Komunitas", href: "#komunitas" },
  { label: "Event", href: "#event" },
  { label: "Coaching", href: "#komunitas" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tentang Kami", href: "#tentang" },
];

export const socials = [
  { name: "instagram", href: "https://www.instagram.com/maintenisdulu2026/" },
  // { name: "tiktok", href: "#" },
  // { name: "youtube", href: "#" },
  { name: "whatsapp", href: "https://chat.whatsapp.com/CdaxTOIkU1k5KcFmHhB2B2?s=cl&p=i&mlu=4&ilr=4" },
] as const;

export type FeatureIcon = "users" | "racket" | "calendar" | "cap" | "image";

export const features: {
  icon: FeatureIcon;
  title: string;
  short: string;
  desc: string;
  image: string;
  cta: string;
  href: string;
}[] = [
  {
    icon: "users",
    title: "Tennis Host",
    short: "Main bareng host berpengalaman",
    desc: "Main bareng host berpengalaman, cocok untuk semua level.",
    image: "/images/discover-host.jpg",
    cta: "Lihat jadwal",
    href: KUYY_URL,
  },
  {
    icon: "racket",
    title: "Rally",
    short: "Latihan rutin & friendly match",
    desc: "Latihan rutin dan friendly match untuk meningkatkan permainan.",
    image: "/images/discover-rally.jpg",
    cta: "Lihat jadwal",
    href: KUYY_URL,
  },
  {
    icon: "calendar",
    title: "Event Tennis",
    short: "Turnamen, fun match, & special event",
    desc: "Turnamen, fun match, dan special event seru untuk komunitas.",
    image: "/images/discover-event.jpg",
    cta: "Lihat event",
    href: "#event",
  },
  {
    icon: "cap",
    title: "Coaching",
    short: "Kelas tennis untuk semua level",
    desc: "Kelas tennis dengan coach berpengalaman untuk semua level.",
    image: "/images/discover-coaching.jpg",
    cta: "Lihat kelas",
    href: KUYY_URL,
  },
  {
    icon: "image",
    title: "Gallery",
    short: "Cerita & momen komunitas kami",
    desc: "Lihat keseruan dan momen terbaik dari komunitas kami.",
    image: "/images/discover-gallery.jpg",
    cta: "Lihat gallery",
    href: "#gallery",
  },
];

export const aboutPoints = [
  "Komunitas positif",
  "Terbuka untuk semua",
  "Konsisten mengadakan event",
  "Bertumbuh bersama",
];

export const events = [
  {
    day: "21",
    month: "Jun",
    title: "Fun Tennis Morning",
    place: "Tennis Court XYZ, Jakarta",
    type: "Mabar",
    level: "Semua level",
    image: "/images/event-1.jpg",
  },
  {
    day: "28",
    month: "Jun",
    title: "Main Tennis Dulu Cup",
    place: "Green Court, Bintaro",
    type: "Turnamen",
    level: "Double",
    image: "/images/event-2.jpg",
  },
  {
    day: "05",
    month: "Jul",
    title: "Coaching Clinic",
    place: "Tennis Hub, Jakarta",
    type: "Coaching",
    level: "Semua level",
    image: "/images/event-3.jpg",
  },
];

export const galleryCategories = [
  "Semua",
  "Event",
  "Mabar",
  "Coaching",
  "Lifestyle",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Semua">;
}[] = [
  { src: "/images/gallery-1.jpg", alt: "Foto bersama peserta event", category: "Event" },
  { src: "/images/gallery-2.jpg", alt: "Pemain memukul bola saat mabar", category: "Mabar" },
  { src: "/images/gallery-3.jpg", alt: "Tiga anggota komunitas tertawa", category: "Lifestyle" },
  { src: "/images/gallery-4.jpg", alt: "Sesi coaching di lapangan", category: "Coaching" },
  { src: "/images/gallery-5.jpg", alt: "Bola tennis di garis lapangan", category: "Lifestyle" },
];
