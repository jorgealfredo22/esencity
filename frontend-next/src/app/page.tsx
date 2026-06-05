import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { FeaturedServicesSlider } from "@/components/home/FeaturedServicesSlider";
import { StaticGallery } from "@/components/home/StaticGallery";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactSection } from "@/components/home/ContactSection";
import { LocationSection } from "@/components/home/LocationSection";
import { getServices, getGallery } from "@/lib/appsScriptApi-server";
import { GalleryImage } from "@/types/gallery";

function proxyDriveUrl(url: string, size = "w1000"): string {
  return url.replace(
    /https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)&sz=w\d+/,
    `/api/apps-script/image?id=$1&sz=${size}`
  );
}

export default async function Home() {
  let featuredImages: Record<string, string> | null = null;
  let galleryImages: GalleryImage[] | null = null;

  try {
    const response = await getServices();
    if (response.status === "success" && Array.isArray(response.data)) {
      const categoryImages: Record<string, string> = {};
      const categoryMap: Record<string, string> = {
        cortes: "cortes",
        barba: "barba",
        facial: "facial",
        cabello: "cabello",
      };
      for (const category of response.data) {
        const featId = categoryMap[category.id];
        if (!featId) continue;
        for (const s of category.services) {
          if (s.image) {
            categoryImages[featId] = proxyDriveUrl(s.image, "w1200");
            break;
          }
        }
      }
      featuredImages = categoryImages;
    }
  } catch {}

  try {
    const galleryResponse = await getGallery();
    if (galleryResponse.status === "success" && galleryResponse.data?.images) {
      galleryImages = galleryResponse.data.images.map(
        (img: { id: string; name: string; url: string }) => ({
          id: img.id,
          url: proxyDriveUrl(img.url, "w1000"),
          thumbnailUrl: proxyDriveUrl(img.url, "w400"),
          alt: img.name.replace(/\.[^.]+$/, ""),
        })
      );
    }
  } catch {}

  return (
    <>
      <Hero />
      <About />
      <FeaturedServicesSlider featuredImages={featuredImages} />
      <StaticGallery images={galleryImages} />
      <InstagramFeed />
      <LocationSection />
      <ContactSection />
    </>
  );
}
