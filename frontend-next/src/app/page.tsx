import type { Metadata } from 'next'
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { FeaturedServicesSlider } from "@/components/home/FeaturedServicesSlider";
import { StaticGallery } from "@/components/home/StaticGallery";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactSection } from "@/components/home/ContactSection";
import { getServices, getGallery } from "@/lib/appsScriptServer";
import { GalleryImage } from "@/types/gallery";

export const metadata: Metadata = {
  title: 'Esencity — Barbería en Sogamoso | Cortes, Barba y Color',
  description: 'Barbería y salón de belleza en Sogamoso, Boyacá. Cortes, diseño de barba, coloración y tratamientos capilares en Esencity. Más de 10 años de experiencia. Agenda tu cita.',
  alternates: { canonical: 'https://esencity.com' },
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
            categoryImages[featId] = s.image;
            break;
          }
        }
      }
      featuredImages = categoryImages;
    }
  } catch (err) {
    console.error('[Home] Error fetching services:', err);
  }

  try {
    const galleryResponse = await getGallery();
    if (galleryResponse.status === "success" && galleryResponse.data?.images) {
      galleryImages = galleryResponse.data.images.map(
        (img: { id: string; name: string; url: string; thumbnailUrl?: string }) => ({
          id: img.id,
          url: img.url,
          thumbnailUrl: img.thumbnailUrl || img.url,
          alt: img.name.replace(/\.[^.]+$/, ""),
        })
      );
    }
  } catch (err) {
    console.error('[Home] Error fetching gallery:', err);
  }

  return (
    <>
      <Hero />
      <About />
      <FeaturedServicesSlider featuredImages={featuredImages} />
      <StaticGallery images={galleryImages} />
      <InstagramFeed />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Dónde queda la barbería Esencity en Sogamoso?",
                "acceptedAnswer": { "@type": "Answer", "text": "Esencity está ubicada en Cra. 12 #11-43, Sogamoso, Boyacá, Colombia." }
              },
              {
                "@type": "Question",
                "name": "¿Cuáles son los horarios de Esencity?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lunes a viernes de 10:00 a 20:00 y sábados de 9:00 a 18:00." }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta un corte en Esencity?",
                "acceptedAnswer": { "@type": "Answer", "text": "Los cortes en Esencity tienen precios desde $2.000 COP. Consulta todos nuestros servicios y precios en nuestra página de servicios." }
              },
              {
                "@type": "Question",
                "name": "¿Es necesario agendar cita en Esencity?",
                "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos agendar cita para garantizar tu espacio. Puedes reservar a través de nuestra página web o contactarnos directamente." }
              }
            ]
          })
        }}
      />
    </>
  );
}
