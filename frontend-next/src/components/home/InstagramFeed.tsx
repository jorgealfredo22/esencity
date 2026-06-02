'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/shared/Loader';
import { ErrorState } from '@/components/shared/ErrorState';
import { InstagramPost } from '@/types/instagram';
import { getInstagramFeed } from '@/lib/appsScriptApi';
import { mapInstagramResponse, getInstagramProfileUrl } from '@/lib/instagramMapper';
import { Camera, Heart, MessageCircle } from 'lucide-react';

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
        setPosts(mappedPosts.slice(0, 9));
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
    <section className="py-20 md:py-32 bg-[var(--color-white)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <p className="text-[var(--color-secondary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Instagram
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-primary mb-6">
            Síguenos en Instagram
          </h2>
        </div>

        {loading ? (
          <Loader size="lg" />
        ) : error ? (
          <ErrorState
            title="No se pudo cargar el feed"
            message={error}
            action={
              <Button
                variant="outline"
                href={getInstagramProfileUrl(username)}
                target="_blank"
              >
                Ver en Instagram
              </Button>
            }
          />
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-[var(--color-gray-300)] mx-auto mb-4" />
            <p className="text-[var(--color-gray-500)] mb-6">
              No hay publicaciones para mostrar
            </p>
            <Button
              variant="outline"
              href={getInstagramProfileUrl(username)}
              target="_blank"
            >
              Seguir en Instagram
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square bg-[var(--color-gray-100)] rounded-xl overflow-hidden group"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20" />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/60 transition-colors flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-[var(--color-white)]">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">0</span>
                    </span>
                    <span className="flex items-center gap-2 text-[var(--color-white)]">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">0</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                href={getInstagramProfileUrl(username)}
                target="_blank"
                icon={<Camera className="w-5 h-5" />}
              >
                Seguir en Instagram
              </Button>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
