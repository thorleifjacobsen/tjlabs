import { useTranslations } from 'next-intl';
import { getAllPosts } from '@/lib/posts';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blogg' };

export default function BlogPage() {
  const t = useTranslations('blog');
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-[var(--color-text)] mb-3">{t('title')}</h1>
      <p className="text-[var(--color-text-secondary)] mb-12" style={{ fontWeight: 300 }}>{t('subtitle')}</p>

      {posts.length === 0 ? (
        <p className="text-[var(--color-text-muted)]">{t('no_posts')}</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <a
                href={`blog/${post.slug}`}
                className="group block p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1.5">{post.date}</p>
                    <h2 className="font-display text-xl text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                      {post.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] flex-shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
