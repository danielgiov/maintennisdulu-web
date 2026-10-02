import { Users, CalendarDays, GraduationCap, Image as ImageIcon } from "lucide-react";
import type { FeatureIcon as IconName } from "@/lib/data";

// Lucide tidak punya ikon raket, jadi digambar sendiri.
function Racket({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <ellipse cx="14.5" cy="9.5" rx="6" ry="7.5" transform="rotate(40 14.5 9.5)" />
      <path d="M9.5 14.5 3 21" />
      <path d="m11 6 7 7M9 9.5l5.5 5.5M14.5 4.5 19.5 9.5" strokeWidth="1" />
    </svg>
  );
}

export default function FeatureIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "users":
      return <Users className={className} aria-hidden />;
    case "racket":
      return <Racket className={className} />;
    case "calendar":
      return <CalendarDays className={className} aria-hidden />;
    case "cap":
      return <GraduationCap className={className} aria-hidden />;
    case "image":
      return <ImageIcon className={className} aria-hidden />;
  }
}
