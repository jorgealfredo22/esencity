import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { FeaturedServicesSlider } from "@/components/home/FeaturedServicesSlider";
import { StaticGallery } from "@/components/home/StaticGallery";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactSection } from "@/components/home/ContactSection";
import { getServices } from "@/lib/appsScriptApi-server";

export default async function Home() {
  let featuredImages: Record<string, string> | null = null;

  try {
    const response = await getServices();
    if (response.status === "success" && Array.isArray(response.data)) {
      const categoryImages: Record<string, string> = {};
      const categoryMap: Record<string, string> = {
        corte: "corte-styling",
        color: "coloracion",
        tratamientos: "tratamientos",
        peinados: "peinados",
      };
      for (const category of response.data) {
        const featId = categoryMap[category.id];
        if (!featId) continue;
        for (const s of category.services) {
          if (s.image) {
            categoryImages[featId] = s.image.replace(
              /https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)&sz=w(\d+)/,
              "/api/apps-script/image?id=$1&sz=w$2"
            );
            break;
          }
        }
      }
      featuredImages = categoryImages;
    }
  } catch {}

  return (
    <>
      <Hero />
      <About />
      <FeaturedServicesSlider featuredImages={featuredImages} />
      <StaticGallery />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
