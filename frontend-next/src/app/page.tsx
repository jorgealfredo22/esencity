import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { FeaturedServicesSlider } from "@/components/home/FeaturedServicesSlider";
import { StaticGallery } from "@/components/home/StaticGallery";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedServicesSlider />
      <StaticGallery />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
