import { ServicesHero } from "@/components/servicios/ServicesHero";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/service";
import { Metadata } from "next";
import { getServices } from "@/lib/appsScriptServer";

export const metadata: Metadata = {
  title: 'Servicios de Barbería en Sogamoso | Esencity',
  description: 'Cortes, barba, coloración, tratamientos faciales y capilares en Esencity, tu barbería en Sogamoso, Boyacá. Precios desde $2.000 COP. Ver todos los servicios.',
  alternates: { canonical: 'https://esencity.com/servicios' },
};

export default async function ServiciosPage() {
  let services: ServiceCategory[] = servicesData;

  try {
    const response = await getServices();
    if (response.status === "success" && Array.isArray(response.data)) {
      services = response.data;
    }
  } catch (err) {
    console.error('[Servicios] Error fetching services, using fallback:', err);
  }

  return (
    <>
      <h1 className="sr-only">Servicios de Barbería en Sogamoso | Esencity</h1>
      <ServicesHero />
      <ServicesGrid initialServices={services} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://esencity.com" },
              { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://esencity.com/servicios" }
            ]
          })
        }}
      />
    </>
  );
}
