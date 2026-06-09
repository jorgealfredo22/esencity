import { ServicesHero } from "@/components/servicios/ServicesHero";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Servicios de Barbería en Sogamoso | Esencity',
  description: 'Cortes, barba, coloración, tratamientos faciales y capilares en Esencity, tu barbería en Sogamoso, Boyacá. Precios desde $2.000 COP. Ver todos los servicios.',
  alternates: { canonical: 'https://esencity.com/servicios' },
};

async function fetchServices(): Promise<ServiceCategory[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_APPS_SCRIPT_URL}?action=getServices`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      return data.data.map((cat: ServiceCategory) => ({
        ...cat,
        services: cat.services.map((s) => ({
          ...s,
        })),
      }));
    }
  } catch {}
  return servicesData;
}

export default async function ServiciosPage() {
  const services = await fetchServices();

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
