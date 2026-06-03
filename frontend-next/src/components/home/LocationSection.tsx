'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

const address = 'Cra 12 # 11-43, Sogamoso, Boyacá';
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function LocationSection() {
  return (
    <section id="ubicacion" className="section-padding bg-surface-alt">
      <div className="container-custom">
        <SectionHeading
          title="Encuéntranos"
          
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-text mb-3">Dirección</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                {address}
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Ven, y vive tu mejor cambio de look con profesionales expertos y un ambiente pensado para tu comodidad.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-6 rounded-full border border-secondary px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-text-inverse"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <iframe
              title="Mapa de Esencity en Sogamoso"
              src={mapSrc}
              width="100%"
              height="420"
              loading="lazy"
              className="h-full min-h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
