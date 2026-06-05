import { ServicesHero } from "@/components/servicios/ServicesHero";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre nuestra amplia gama de servicios profesionales de peluquería. Cortes, coloración, tratamientos y más.",
};

function proxyDriveUrl(url: string): string {
  return url.replace(
    /https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)&sz=w\d+/,
    '/api/apps-script/image?id=$1&sz=w1200'
  );
}

async function fetchServices(): Promise<ServiceCategory[]> {
  let apiImages: Record<string, string> = {};

  try {
    const url = `${process.env.NEXT_PUBLIC_APPS_SCRIPT_URL}?action=getServices`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      for (const cat of data.data) {
        for (const s of cat.services) {
          if (s.image) {
            apiImages[s.id] = proxyDriveUrl(s.image);
          }
        }
      }
    }
  } catch {}

  return servicesData.map((cat) => ({
    ...cat,
    services: cat.services.map((s) => ({
      ...s,
      image: apiImages[s.id] || s.image || null,
    })),
  }));
}

export default async function ServiciosPage() {
  const services = await fetchServices();

  return (
    <>
      <ServicesHero />
      <ServicesGrid initialServices={services} />
    </>
  );
}
