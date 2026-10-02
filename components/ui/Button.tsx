import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "lime" | "dark" | "outline";

const styles: Record<Variant, string> = {
  lime: "bg-lime-soft text-forest-900 hover:bg-lime-deep",
  dark: "bg-forest-900 text-white hover:bg-forest-800",
  outline: "border border-white/70 text-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "lime",
  arrow = true,
  icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {icon}
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
