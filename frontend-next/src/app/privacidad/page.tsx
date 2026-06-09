import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de ESENCITY. Conocé cómo tratamos y protegemos tus datos personales.",
  alternates: { canonical: 'https://esencity.com/privacidad' },
};

export default function PrivacidadPage() {
  return (
    <Container size="md" className="section-padding">
      <SectionHeading
        title="Política de Privacidad"
        subtitle="ESENCITY"
        description="Última actualización: Junio 2026"
      />

      <div className="prose prose-lg max-w-none text-text-secondary space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            1. Responsable del Tratamiento
          </h2>
          <p>
            ESENCITY, con domicilio en Cra. 12 #11-43, Sogamoso, Boyacá, Colombia, es el responsable del
            tratamiento de los datos personales que se recopilan a través de este sitio web y de nuestras
            plataformas de contacto.
          </p>
          <p className="mt-3">
            Para cualquier consulta relacionada con la protección de tus datos personales, podés contactarnos
            a través del correo electrónico{" "}
            <a href="mailto:esencitybarber@gmail.com" className="text-secondary hover:text-secondary-dark underline">
              esencitybarber@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            2. Datos Personales que Recopilamos
          </h2>
          <p>Podemos recopilar las siguientes categorías de datos personales:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Nombre y apellido</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Mensajes y consultas enviadas a través de nuestros formularios de contacto</li>
            <li>Información de navegación (cookies, dirección IP, tipo de dispositivo)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            3. Finalidad del Tratamiento
          </h2>
          <p>
            Los datos personales que recopilamos son utilizados exclusivamente para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Gestionar y responder tus consultas, solicitudes de turnos y mensajes de contacto</li>
            <li>Enviar confirmaciones y recordatorios de turnos</li>
            <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
            <li>Enviar comunicaciones promocionales, únicamente si nos diste tu consentimiento expreso</li>
            <li>Cumplir con obligaciones legales aplicables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            4. Base Legal del Tratamiento
          </h2>
          <p>
            El tratamiento de tus datos personales se realiza conforme a la Ley Estatutaria 1581 de 2012
            de Protección de Datos Personales (Habeas Data) de la República de Colombia y su Decreto
            Reglamentario 1377 de 2013. Las bases legales incluyen tu consentimiento, la ejecución de una
            relación contractual y el interés legítimo de ESENCITY.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            5. Derechos del Titular de los Datos
          </h2>
          <p>
            De acuerdo con la legislación vigente, tenés los siguientes derechos sobre tus datos personales:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Acceso:</strong> solicitar información sobre los datos que tenemos sobre vos</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para fines de marketing</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado</li>
          </ul>
          <p className="mt-3">
            Para ejercer cualquiera de estos derechos, envianos un correo a{" "}
            <a href="mailto:esencitybarber@gmail.com" className="text-secondary hover:text-secondary-dark underline">
              esencitybarber@gmail.com
            </a>{" "}
            con el asunto &quot;Protección de Datos&quot;. Responderemos tu solicitud en un plazo máximo de 10 días hábiles.
          </p>
          <p className="mt-3">
            También tenés derecho a presentar una denuncia ante la{" "}
            <a
              href="https://www.sic.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary-dark underline"
            >
              Superintendencia de Industria y Comercio (SIC)
            </a>, en su carácter de Autoridad de Protección de Datos Personales conforme a la Ley 1581 de 2012.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            6. Transferencia de Datos
          </h2>
          <p>
            ESENCITY no cede, vende ni comparte tus datos personales con terceros, salvo en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Proveedores de servicios tecnológicos que actúan como encargados del tratamiento</li>
            <li>Cuando sea requerido por una autoridad judicial o administrativa competente</li>
            <li>Cuando nos hayas dado tu consentimiento explícito para una transferencia específica</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            7. Cookies y Tecnologías Similares
          </h2>
          <p>
            Nuestro sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación
            y analizar el tráfico. Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando visitás nuestro sitio.
          </p>
          <p className="mt-3">Tipos de cookies que utilizamos:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio</li>
            <li><strong>Cookies analíticas:</strong> para entender cómo interactuás con el sitio (Google Analytics)</li>
            <li><strong>Cookies de preferencias:</strong> para recordar tus elecciones de navegación</li>
          </ul>
          <p className="mt-3">
            Podés configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía
            una cookie. Sin embargo, algunas funciones del sitio podrían no estar disponibles si deshabilitás
            las cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            8. Seguridad de los Datos
          </h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos
            personales contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo,
            ningún sistema de transmisión o almacenamiento electrónico es completamente seguro, por lo que no
            podemos garantizar una seguridad absoluta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            9. Plazo de Conservación
          </h2>
          <p>
            Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con las
            finalidades para las que fueron recopilados, o según lo requerido por la legislación aplicable.
            Una vez cumplido dicho plazo, los datos serán eliminados o anonimizados de forma segura.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            10. Menores de Edad
          </h2>
          <p>
            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionadamente
            datos personales de menores. Si sos padre, madre o tutor y tenés conocimiento de que un menor
            nos ha proporcionado datos personales, contactanos para proceder a su eliminación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-4 font-display">
            11. Modificaciones
          </h2>
          <p>
            Esta Política de Privacidad puede ser actualizada periódicamente para reflejar cambios en nuestras
            prácticas o en la legislación aplicable. La versión más reciente estará siempre disponible en esta
            página. Te recomendamos revisarla periódicamente.
          </p>
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
