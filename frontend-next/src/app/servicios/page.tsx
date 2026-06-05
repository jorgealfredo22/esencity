import { ServicesHero } from "@/components/servicios/ServicesHero";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre nuestra amplia gama de servicios profesionales de peluquería. Cortes, coloración, tratamientos y más.",
};

async function fetchServices(): Promise<ServiceCategory[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_APPS_SCRIPT_URL}?action=getServices`;
    const res = await fetch(url, {
      cache: "no-store",
    });

    const data = await res.json();

    if (data.status === "success" && Array.isArray(data.data)) {
      return data.data.map((cat: ServiceCategory) => ({
        ...cat,
        services: Array.isArray(cat.services)
          ? cat.services.map((s) => ({
              ...s,
              image: s.image || null,
            }))
          : [],
      }));
    }
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  return servicesData;
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