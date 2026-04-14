import { useTranslations } from 'next-intl';
import { Globe, Code2, MessageSquare } from 'lucide-react';

export function Services() {
  const t = useTranslations('services');

  const items = [
    { icon: Globe, title: t('web_title'), desc: t('web_desc') },
    { icon: Code2, title: t('software_title'), desc: t('software_desc') },
    { icon: MessageSquare, title: t('consulting_title'), desc: t('consulting_desc') },
  ];

  return (
    <section id="services" className="border-t border-[var(--color-border)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl text-[var(--color-text)] mb-12">{t('title')}</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-[var(--color-text)]">{title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
