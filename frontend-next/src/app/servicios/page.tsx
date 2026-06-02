import { ServicesHero } from "@/components/servicios/ServicesHero";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubrí nuestra amplia gama de servicios profesionales de peluquería. Cortes, coloración, tratamientos y más.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}
