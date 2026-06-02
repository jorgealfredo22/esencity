'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/shared/Loader';
import { ErrorState } from '@/components/shared/ErrorState';
import { InstagramPost } from '@/types/instagram';
import { getInstagramFeed } from '@/lib/appsScriptApi';
import { mapInstagramResponse, getInstagramProfileUrl } from '@/lib/instagramMapper';
import { Camera } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'esencity';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getInstagramFeed();
        const mappedPosts = mapInstagramResponse(data);
        setPosts(mappedPosts.slice(0, 8));
      } catch (err) {
        setError('No se pudo cargar el feed de Instagram');
        console.error('Error fetching Instagram feed:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
            @{username}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display mb-4">
            Conoce nuestros Resultados
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Seguí nuestras últimas transformaciones y descubrí por qué somos la mejor opción para tu look.
          </p>
        </div>

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
          <div className="text-center py-12">
            <Camera className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-secondary mb-6">
              No hay publicaciones para mostrar
            </p>
            <Button
              variant="primary"
              href={getInstagramProfileUrl(username)}
              target="_blank"
            >
              Seguir en Instagram
            </Button>
          </div>
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
                  <InstagramIcon />
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
