import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { features } from "@/lib/data";

export default function FeatureStrip() {
  return (
    <Container className="relative z-10 -mt-24">
      <ul className="grid grid-cols-2 gap-3 rounded-3xl bg-cream p-4 shadow-xl shadow-forest-950/10 sm:grid-cols-3 sm:p-5 lg:grid-cols-5">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex flex-col items-center rounded-2xl bg-sand px-3 py-6 text-center"
          >
            <FeatureIcon name={f.icon} className="size-9 text-forest-900" />
            <h2 className="mt-3 text-sm font-bold">{f.title}</h2>
            <p className="mt-1 max-w-[16ch] text-xs text-forest-900/70">
              {f.short}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
