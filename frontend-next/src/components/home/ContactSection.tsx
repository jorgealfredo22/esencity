'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { submitContactForm } from '@/lib/appsScriptApi';
import { isValidEmail } from '@/lib/utils';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor completá todos los campos obligatorios');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Por favor ingresá un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Intentá de nuevo.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[var(--color-gray-50)]">
      <Container size="lg">
        <SectionHeading
          subtitle="Contacto"
          title="Hablemos"
          description="¿Tenés alguna consulta o querés reservar un turno? Estamos acá para ayudarte."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              Información de contacto
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">Dirección</h4>
                  <p className="text-[var(--color-gray-600)]">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl">
                  <Phone className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">Teléfono</h4>
                  <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-secondary)] hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl">
                  <Mail className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-secondary)] hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl">
                  <Clock className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1">Horarios</h4>
                  <div className="text-[var(--color-gray-600)]">
                    <div>Lun - Vie: {siteConfig.hours.monday}</div>
                    <div>Sáb: {siteConfig.hours.saturday}</div>
                    <div>Dom: {siteConfig.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              href={siteConfig.social.whatsapp}
              className="w-full sm:w-auto"
            >
              Reservar por WhatsApp
            </Button>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-lg text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[var(--color-gray-600)] mb-6">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-white)] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Envianos un mensaje
                </h3>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-gray-700)] mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-gray-200)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-gray-700)] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-gray-200)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-gray-700)] mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-gray-200)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-gray-700)] mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-[var(--color-gray-200)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
