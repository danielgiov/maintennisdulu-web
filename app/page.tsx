import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import About from "@/components/sections/About";
import Discover from "@/components/sections/Discover";
import BookingCta from "@/components/sections/BookingCta";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import CommunityCta from "@/components/sections/CommunityCta";
import JsonLd from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <FeatureStrip />
      <About />
      <Discover />
      <BookingCta />
      {/* <Events />
      <Gallery /> */}
      <CommunityCta />
    </>
  );
}
