import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de ESENCITY. Condiciones generales para el uso de nuestros servicios y sitio web.",
  alternates: { canonical: 'https://esencity.com/terminos' },
};

export default function TerminosPage() {
  return (
    <Container size="md" className="section-padding">
      <SectionHeading
        title="Términos y Condiciones"
        subtitle="ESENCITY"
        description="Última actualización: Junio 2026"
      />

      <div className="prose prose-lg max-w-none text-text-secondary space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar el sitio web de ESENCITY (en adelante, &quot;el Sitio&quot;) y/o contratar
            cualquiera de nuestros servicios, aceptás estar legalmente vinculado por estos Términos y Condiciones.
            Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestro Sitio ni
            nuestros servicios.
          </p>
          <p className="mt-3">
            ESENCITY se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento.
            Las modificaciones entrarán en vigor desde el momento de su publicación en el Sitio. El uso
            continuado del Sitio después de dichas modificaciones constituye tu aceptación de los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            2. Descripción de los Servicios
          </h2>
          <p>
            ESENCITY es una barbería y salón de belleza ubicado en Sogamoso, Boyacá, Colombia, que ofrece servicios
            profesionales de peluquería, barbería, tratamientos capilares, coloración, maquillaje y servicios
            relacionados. Todos nuestros servicios son prestados por profesionales capacitados y con experiencia
            en el rubro.
          </p>
          <p className="mt-3">
            Las descripciones, imágenes y precios de los servicios publicados en el Sitio son de carácter
            orientativo. ESENCITY se reserva el derecho de modificar, suspender o discontinuar cualquier
            servicio sin previo aviso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            3. Turnos y Cancelaciones
          </h2>
          <p>
            Para garantizar una atención de calidad, trabajamos con un sistema de turnos programados.
            Al reservar un turno, te comprometés a:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Asistir puntualmente en la fecha y hora acordadas</li>
            <li>
              Notificar cualquier cancelación o modificación con al menos{" "}
              <strong>24 horas de anticipación</strong>
            </li>
            <li>Proporcionar información veraz y actualizada al momento de la reserva</li>
          </ul>
          <p className="mt-3">
            Las cancelaciones realizadas con menos de 24 horas de anticipación o la inasistencia sin aviso
            previo podrán estar sujetas a restricciones para futuras reservas. ESENCITY se reserva el derecho
            de solicitar una seña para confirmar determinados turnos.
          </p>
          <p className="mt-3">
            En caso de que ESENCITY deba cancelar o reprogramar un turno por razones de fuerza mayor,
            te notificaremos con la mayor anticipación posible y coordinaremos una nueva fecha conveniente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            4. Precios y Pagos
          </h2>
          <p>
            Todos los precios de nuestros servicios están expresados en pesos colombianos (COP) e incluyen
            los impuestos aplicables, salvo indicación en contrario. Los precios publicados en el Sitio son
            de referencia y pueden variar según las características específicas del servicio solicitado.
          </p>
          <p className="mt-3">
            ESENCITY se reserva el derecho de modificar los precios en cualquier momento. El precio vigente
            al momento de la prestación del servicio será el aplicable, independientemente del precio que se
            hubiera informado al momento de la reserva del turno, salvo que se hubiera acordado expresamente
            un precio fijo para un servicio específico.
          </p>
          <p className="mt-3">Aceptamos los siguientes medios de pago:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Efectivo</li>
            <li>Tarjetas de débito y crédito</li>
            <li>Transferencia bancaria</li>
            <li>Billeteras virtuales (Mercado Pago, entre otras)</li>
          </ul>
          <p className="mt-3">
            El pago se realiza al finalizar el servicio, salvo que se acuerde lo contrario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            5. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido del Sitio, incluyendo pero no limitado a textos, gráficos, logotipos, iconos,
            imágenes, clips de audio y video, descargas digitales, compilaciones de datos y software, es
            propiedad exclusiva de ESENCITY o de sus proveedores de contenido y está protegido por las leyes
            colombianas e internacionales de propiedad intelectual.
          </p>
          <p className="mt-3">
            Queda estrictamente prohibida la reproducción total o parcial del contenido del Sitio sin la
            autorización previa y por escrito de ESENCITY. Las marcas ESENCITY y su logotipo son marcas
            registradas y no pueden ser utilizadas sin nuestro consentimiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            6. Uso del Sitio Web
          </h2>
          <p>Al utilizar el Sitio, te comprometés a:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>No utilizar el Sitio para fines ilegales o no autorizados</li>
            <li>No interferir con el funcionamiento normal del Sitio</li>
            <li>No intentar acceder a áreas restringidas del Sitio sin autorización</li>
            <li>No transmitir virus, malware o cualquier código de naturaleza dañina</li>
            <li>No recopilar información de otros usuarios sin su consentimiento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            7. Enlaces a Terceros
          </h2>
          <p>
            El Sitio puede contener enlaces a sitios web de terceros, como nuestras redes sociales. Estos
            enlaces se proporcionan únicamente para tu conveniencia. ESENCITY no tiene control sobre el
            contenido, las políticas de privacidad o las prácticas de dichos sitios y no asume responsabilidad
            alguna por ellos. Te recomendamos leer los términos y condiciones y las políticas de privacidad de
            cualquier sitio web de terceros que visites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            8. Limitación de Responsabilidad
          </h2>
          <p>
            ESENCITY no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes
            que resulten del uso o la imposibilidad de uso del Sitio o de nuestros servicios. Esto incluye,
            pero no se limita a, daños por pérdida de datos, interrupción de negocios o cualquier otro daño
            similar.
          </p>
          <p className="mt-3">
            Si bien nos esforzamos por mantener la precisión de la información publicada en el Sitio, no
            garantizamos que el contenido esté libre de errores u omisiones. La información se proporciona
            &quot;tal cual&quot; y sin garantías de ningún tipo.
          </p>
          <p className="mt-3">
            Nuestra responsabilidad total frente a cualquier reclamo derivado del uso del Sitio o de nuestros
            servicios no excederá el valor del servicio específico que dio origen al reclamo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            9. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier
            controversia derivada de la interpretación o ejecución de estos términos será sometida a la
            jurisdicción de los Tribunales Ordinarios con competencia en la ciudad de Sogamoso, Boyacá,
            renunciando a cualquier otro fuero o jurisdicción que pudiera corresponder.
          </p>
          <p className="mt-3">
            De acuerdo con lo dispuesto por la Ley 1480 de 2011 —Estatuto del Consumidor—, los consumidores
            y usuarios tienen derecho a presentar reclamos ante la Superintendencia de Industria y Comercio (SIC)
            o la autoridad de aplicación correspondiente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            10. Contacto
          </h2>
          <p>
            Para cualquier consulta, reclamo o sugerencia relacionada con estos Términos y Condiciones, podés
            contactarnos a través de los siguientes medios:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Correo electrónico:{" "}
              <a href="mailto:esencitybarber@gmail.com" className="text-secondary hover:text-secondary-dark underline">
                esencitybarber@gmail.com
              </a>
            </li>
            <li>Teléfono: 320 4761569</li>
            <li>Dirección: Cra. 12 #11-43, Sogamoso, Boyacá, Colombia</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <Link
          href="/"
          className="text-secondary hover:text-secondary-dark underline text-sm transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
}
