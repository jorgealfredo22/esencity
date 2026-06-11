'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EmptyState } from '@/components/shared/EmptyState';
import { Loader } from '@/components/shared/Loader';
import { ErrorState } from '@/components/shared/ErrorState';
import { InstagramIcon } from '@/components/shared/SocialIcons';
import { InstagramPost } from '@/types/instagram';
import { mapInstagramResponse, getInstagramProfileUrl } from '@/lib/instagramMapper';
import { getAppsScriptUrl } from '@/lib/appsScriptConfig';
import { Camera } from 'lucide-react';

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'esencity';

  useEffect(() => {
    const appsScriptUrl = getAppsScriptUrl();
    if (!appsScriptUrl) {
      setError('No se pudo cargar el feed de Instagram');
      setLoading(false);
      return;
    }

    fetch(`${appsScriptUrl}?action=getInstagramFeed`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && data.data) {
          const mappedPosts = mapInstagramResponse(data);
          setPosts(mappedPosts.slice(0, 8));
        } else {
          setError('No se pudo cargar el feed de Instagram');
        }
      })
      .catch(() => {
        setError('No se pudo cargar el feed de Instagram');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-custom">
        <SectionHeading
          subtitle={`@${username}`}
          title="Conoce nuestros Resultados"
          description="Seguí nuestras últimas transformaciones y descubrí por qué somos la mejor opción para tu look."
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        {loading ? (
          <Loader size="lg" />
        ) : error ? (
          <ErrorState
            title="No se pudo cargar el feed"
            message={error}
            action={
              <Button
                variant="primary"
                href={getInstagramProfileUrl(username)}
                target="_blank"
              >
                Ver en Instagram
              </Button>
            }
          />
        ) : posts.length === 0 ? (
          <EmptyState
            icon={<Camera className="w-12 h-12" />}
            title="Sin publicaciones"
            description="No hay publicaciones para mostrar"
            action={
              <Button
                variant="primary"
                href={getInstagramProfileUrl(username)}
                target="_blank"
              >
                Seguir en Instagram
              </Button>
            }
          />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <img
                    src={post.mediaUrl}
                    alt={post.caption ? post.caption.substring(0, 50) : 'Instagram post'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6 text-text-inverse opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="lg"
                href={getInstagramProfileUrl(username)}
                target="_blank"
              >
                Cargar más
              </Button>
              <Button
                variant="primary"
                size="lg"
                href={getInstagramProfileUrl(username)}
                target="_blank"
                icon={<InstagramIcon />}
              >
                Seguir en Instagram
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
