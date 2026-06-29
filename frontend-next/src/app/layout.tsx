import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import icon2 from "./icon2.png";
import "@/styles/animations.css";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: 'https://esencity.com',
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: "ESENCITY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <a
          href="https://prigma.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff' }}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-black/90 px-3 py-2 text-xs font-semibold shadow-xl shadow-black/30 transition hover:bg-black"
        >
          <Image src={icon2} alt="Prigma" width={20} height={20} className="h-5 w-5 rounded-full" />
          Made by Prigma
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "Esencity",
              description: "Barbería y salón de belleza en Sogamoso, Boyacá, Colombia",
              url: "https://esencity.com",
              telephone: "+573204761569",
              email: "esencitybarber@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cra. 12 #11-43",
                addressLocality: "Sogamoso",
                addressRegion: "Boyacá",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 5.7155527,
                longitude: -72.9291762,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              sameAs: [
                "https://www.instagram.com/esenc.ity",
                "https://www.facebook.com/share/18zJVW1cvv/",
                "https://www.tiktok.com/@esencity_barberia",
              ],
              image: "https://esencity.com/og-image.jpg",
            }),
          }}
        />
      </body>
    </html>
  );
}
