import { useTranslations } from 'next-intl';
import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? 'Post' };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <a
        href="../blog"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" /> Tilbake
      </a>

      <p className="text-xs text-[var(--color-text-muted)] mb-2">{post.date}</p>
      <h1 className="font-display text-4xl text-[var(--color-text)] mb-10">{post.title}</h1>

      <article
        className="prose-blog"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
